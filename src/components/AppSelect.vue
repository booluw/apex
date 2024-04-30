<script lang="ts" setup>
import { ref } from 'vue'

defineProps<{
  placeholder?: string
  options: any[]
}>()

const showMenu = ref(false)
const value = defineModel()

const changeValue = function (val: string) {
  value.value = val
  showMenu.value = false
}
</script>
<template>
  <div class="!z-[90] relative cursor-pointer">
    <div
      class="p-[16px] rounded-[12px] bg-grey border border-transparent flex justify-between items-center font-normal capitalize"
      :class="{ '!border-slate/40': showMenu }"
      @click="showMenu = !showMenu"
    >
      {{ placeholder || value || 'Select an option' }}
      <svg
        width="21"
        height="20"
        class="transition-all ease-in-out"
        :class="{ 'rotate-180 transition-all ease-in-out': showMenu }"
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.48169 7.5L10.4817 12.5L15.4817 7.5"
          stroke="#A0AEC0"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <div
      class="absolute bg-white right-0 left-0 mt-2 p-2 z-[90] rounded-[16px] shadow-md max-h-[150px] overflow-auto"
      v-if="showMenu"
    >
      <template v-if="typeof options[0] === 'object'">
        <div
          class="p-[16px] rounded-[16px] hover:bg-grey flex items-center gap-[6px]"
          :style="`color: ${item.status}`"
          v-for="(item, index) in options"
          :key="index"
          @click="changeValue(item.value)"
        >
          <div
            class="p-1 rounded-full"
            :style="`background-color: ${item.status}`"
            v-if="item.status"
          />
          {{ item.label || item.value }}
        </div>
      </template>
      <template v-else>
        <div
          class="p-[10px] rounded-[10px] hover:bg-grey flex items-center gap-[6px]"
          v-for="(item, index) in options"
          :key="index"
          @click="changeValue(item)"
        >
          {{ item }}
        </div>
      </template>
    </div>
  </div>
</template>
