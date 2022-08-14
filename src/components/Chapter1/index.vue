<template>
  <li w-full h-full bg-slate-800 snap-center overflow-hidden flex items-center>
    <img
      ref="rStarRef" :class="[isRStarAnimationFinished ? 'hidden' : '']"
      :src="getIcon('r-star')"
      alt="r-star"
    >

    <div ref="presentsRef" flex="~ col" items-center justify-center w-full op0 :class="[isRStarAnimationFinished ? '' : '!hidden']">
      <img :src="getIcon('presents')" alt="presents">
      <span text="#A1B273" mt--8 text-xl>Presents</span>
    </div>
  </li>
</template>

<script lang="ts" setup>
const emit = defineEmits<{
  (event: 'onEnd'): void
}>()

const rStarRef = ref<HTMLImageElement>()
const presentsRef = ref<HTMLDivElement>()

const { width } = useWindowSize()

const isRStarAnimationFinished = ref(false)

useInView(rStarRef, (info) => {
  const w = width.value
  const delta = w * 0.1

  const rStarTimeline = timeline([
    [info.target, { x: [w, w / 2 + delta], opacity: [0, 1] }, { duration: 0.8, delay: 0.5 }],
    [info.target, { x: [w / 2 + delta, w / 2 - delta] }, { duration: 1 }],
    [info.target, { x: [w / 2 - delta, 0], opacity: [1, 0] }, { duration: 0.2 }],
  ])

  rStarTimeline.finished.then(() => {
    isRStarAnimationFinished.value = true
    timeline([
      [presentsRef.value!, { opacity: [0, 1], y: [200, 100] }, { duration: 0.2 }],
      [presentsRef.value!, { opacity: [0, 1], y: [100, 0] }, { duration: 0.6 }],
    ]).finished.then(() => {
      emit('onEnd')
    })
  })
})
</script>
