<script lang="ts" setup>
import { computed } from 'vue';

const emit = defineEmits(['next'])
const props = defineProps<{
  page: number, // current page
  total: number, // total items
  count: number, // items in a particular page
}>()

const pages = computed(() => {
  if (props.page < Math.ceil(props.total / props.count)) {
    return [props.page + 1]
  } else {
    return [props.page - 1]
  }
})
</script>
<template>
  <div class="flex justify-start gap-[16px]">
    <button class="btn btn-ghost disabled:!bg-transparent" @click="emit('next', page - 1)" :disabled="page == 1">
      <svg
        width="21"
        height="20"
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.9634 5.00098L7.96338 10.001L12.9634 15.001"
          stroke="#A0AEC0"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
    <button
      class="btn btn-ghost !w-[50px] text-slate"
      :class="{ '!bg-primary/10 !text-primary': page == 1 }"
      @click="emit('next', 1)"
    >
      1
    </button>
    <div class="flex items-end pb-3 text-slate" v-if="page === Math.ceil(total / count)">...</div>
    <button
      v-if="page !== 1 && page !== Math.ceil(total/count)"
      class="btn btn-ghost !w-[50px] !bg-primary/10 text-primary" @click="emit('next', page)"
    >
      {{ page }}
    </button>
    <button
      class="btn btn-ghost !w-[50px] text-slate hidden md:flex" @click="emit('next', numb)"
      :class="{ '!bg-primary/10 !text-primary': page == numb }"
      v-for="(numb, index) in pages"
      :key="index"
    >
      {{ numb }}
    </button>
    <div class="flex items-end pb-3 text-slate" v-if="page != Math.ceil(total / count)">...</div>
    <button
      class="btn btn-ghost !w-[50px] text-slate" @click="emit('next', Math.ceil(total / count))"
      :class="{ '!bg-primary/10 !text-primary': page === Math.ceil(total / count) }"
    >
      {{ Math.ceil(total / count) }}
    </button>
    <button class="btn btn-ghost disabled:!bg-transparent" @click="emit('next', page + 1)" :disabled="page == total / count">
      <svg
        class="rotate-180"
        width="21"
        height="20"
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.9634 5.00098L7.96338 10.001L12.9634 15.001"
          stroke="#A0AEC0"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  </div>
</template>
