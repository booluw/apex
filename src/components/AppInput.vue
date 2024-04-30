<script lang="ts" setup>
const props = defineProps<{
  placeholder?: string
  type: 'text' | 'search' | 'number' | any
}>()

const value = defineModel()

</script>
<template>
  <div
    class="p-[16px] rounded-[12px] bg-grey border border-transparent flex justify-between items-center font-normal capitalize focus-within:!border-slate/40"
  >
    <input
      v-model="value"
      :type="type"
      :placeholder="placeholder ?? 'Input a text'"
      class="bg-transparent w-full h-full focus:outline-none"
    />
  </div>
</template>
