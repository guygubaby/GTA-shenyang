<template>
  <ul class="snap-y snap-mandatory overflow-y-auto w-screen h-screen">
    <li w-full h-full bg-slate-800 snap-center center flex-col>
      <img ref="logoRef" :src="getIcon('logo')" alt="logo">

      <span ref="titleRef" mb-8 text-xl>GTA:血战沈阳</span>

      <button ref="startButtonRef" px-6 py-1 mt-20 bg-light text-slate-800 text-lg rounded-lg @click="startGame">
        Start
      </button>
    </li>

    <Chapter1 ref="chapter1Ref" @on-end="handleChapter1End" />

    <li ref="chapter2Ref" w-full h-full bg-slate-800 snap-center center>
      <p text-2xl>
        Coming soon ~
      </p>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { sleep } from '@bryce-loskie/utils'

const chapter1Ref = ref<HTMLLIElement>()
const chapter2Ref = ref<HTMLLIElement>()

const scrollIntoView = (elRef: any) => {
  unrefElement(elRef)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
}

const startGame = () => {
  scrollIntoView(chapter1Ref)
}

const logoRef = ref()
const titleRef = ref()
const startButtonRef = ref()

useTimeline([
  [logoRef, { y: [100, 0], opacity: [0, 1] }, { duration: 0.6 }],
  [titleRef, { y: [100, 0], opacity: [0, 1] }, { duration: 0.8, at: '-0.3' }],
  [startButtonRef, { y: [100, 0], opacity: [0, 1] }, { duration: 0.6, at: '-0.5' }],
])

const handleChapter1End = async () => {
  await sleep(0.3 * 1000)
  scrollIntoView(chapter2Ref)
}
</script>
