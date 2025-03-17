<script setup lang="ts">
interface Props {
  teleportTo: 'html' | 'body'
}

defineProps<Props>()
</script>

<template>
  <ClientOnly>
    <Teleport :to="teleportTo">
      <div class="">
        <p>Hello</p>
      </div>
    </Teleport>
  </ClientOnly>
</template>
