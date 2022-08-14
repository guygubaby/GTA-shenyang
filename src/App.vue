<template>
  <router-view />
</template>

<script lang="ts" setup>
import { defineScrollbar } from '@bryce-loskie/scrollbar'

defineScrollbar({
  width: '6px',
})
</script>
