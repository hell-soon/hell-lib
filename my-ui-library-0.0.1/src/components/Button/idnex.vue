<script setup lang="ts">
interface Props {
  disabled?: boolean
}

defineProps<Props>()

defineEmits<{
  (e: 'click'): void
}>()
</script>

<template>
  <button
    class="ui-button" :class="[{ 'ui-button--disabled': disabled }]"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<style>
.ui-button {
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.ui-button--disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
