<script setup lang="ts">
import { reactive, ref } from 'vue'

import AppSelect from '@/components/AppSelect.vue'
import AppInput from '@/components/AppInput.vue'

const showFilters = ref(false)
const tab = ref('all')
const tabs = ['all', 'paid', 'unpaid', 'overdue']
const filter = reactive({
  userStatus: '',
  paymentStatus: ''
})
const paymentStatus = [
  {
    value: 'all',
    label: 'All',
    status: ''
  },
  {
    value: 'paid',
    label: 'Paid',
    status: '#8C62FF'
  },
  {
    value: 'unpaid',
    label: 'Unpaid',
    status: '#D4A701'
  },
  {
    value: 'overdue',
    label: 'Overdue',
    status: '#FD6A6A'
  }
]
const status = [
  {
    value: 'all',
    label: 'All',
    status: ''
  },
  {
    value: 'active',
    label: 'Active',
    status: '#0CAF60'
  },
  {
    value: 'inactive',
    label: 'Inactive',
    status: '#D4A701'
  }
]
</script>

<template>
  <section class="text-black bg-grey min-h-[100vh] pb-32">
    <header
      class="sticky top-0 py-[33px] px-[48px] bg-white flex items-center justify-between z-[100] shadow-sm"
    >
      <h1 class="font-bold text-[24px]">Table Heading</h1>
      <div class="flex gap-[16px]">
        <div
          class="bg-[#FFD023] rounded-full h-[48px] w-[48px] flex items-end justify-center overflow-hidden"
        >
          <img src="@/assets/imgs/avatar.png" class="w-auto" />
        </div>
        <div class="">
          <h2 class="font-bold">Tynisha Obey</h2>
          <p class="text-slate text-sm">Makstore</p>
        </div>
      </div>
    </header>
    <div class="px-[48px] py-[40px] flex justify-between items-center">
      <div role="tablist" class="tabs tabs-bordered">
        <a
          role="tab"
          class="tab pb-10 !px-5 !w-auto capitalize"
          :class="{ '![--fallback-bc:#0CAF60]': tab === item }"
          @click="tab = item"
          v-for="(item, index) in tabs"
          :key="index"
        >
          {{ item }}
        </a>
        <b role="tab" class="tab w-[300px]"></b>
      </div>
      <button class="btn bg-primary text-white px-[20px] py-[8px] w-[254px] hover:bg-primary/75">
        Pay Dues
      </button>
    </div>
    <div class="bg-white rounded-[16px] mx-[48px] overflow-hidden">
      <div class="px-[30px] py-[24px] border-b flex justify-end items-center">
        <button
          class="btn bg-grey/50 border-grey rounded-[12px] p-[16px] h-auto flex items-center text-primary hover:bg-white"
          :class="{ '!bg-white': showFilters }"
          @click="showFilters = !showFilters"
        >
          <svg
            widdiv="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.7936 16.5929H4.49292"
              stroke="#0CAF60"
              stroke-widdiv="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.6038 6.90042H19.9045"
              stroke="#0CAF60"
              stroke-widdiv="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.18967 6.84625C9.18967 5.5506 8.13151 4.5 6.82652 4.5C5.52154 4.5 4.46338 5.5506 4.46338 6.84625C4.46338 8.14191 5.52154 9.19251 6.82652 9.19251C8.13151 9.19251 9.18967 8.14191 9.18967 6.84625Z"
              stroke="#0CAF60"
              stroke-widdiv="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20.4633 16.5538C20.4633 15.2581 19.406 14.2075 18.101 14.2075C16.7952 14.2075 15.7371 15.2581 15.7371 16.5538C15.7371 17.8494 16.7952 18.9 18.101 18.9C19.406 18.9 20.4633 17.8494 20.4633 16.5538Z"
              stroke="#0CAF60"
              stroke-widdiv="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Filters
        </button>
      </div>
      <div class="">
        <div class="">
          <template v-if="showFilters">
            <div class="w-full px-[30px] py-5 border-b flex items-center gap-[16px]">
              <div class="flex items-center gap-[20px] w-1/4">
                <h3 class="!font-bold !text-black text-[16px] ml-10">Name</h3>
              </div>
              <div class="w-1/4">
                <h3 class="!font-bold !text-black text-[16px]">Amount</h3>
              </div>
              <div class="w-1/4">
                <h3 class="!font-bold !text-black text-[16px]">User's Status</h3>
              </div>
              <div class="w-1/4">
                <h3 class="!font-bold !text-black text-[16px]">Payment Status</h3>
              </div>
            </div>
            <div class="w-full px-[30px] py-5 border-b flex items-center gap-[16px]">
              <div class="w-1/4 pl-10">
                <AppInput type="text" placeholder="Name" class="w-full" />
              </div>
              <div class="w-1/4">
                <AppInput type="number" placeholder="Amount" />
              </div>
              <div class="w-1/4">
                <AppSelect v-model="filter.userStatus" class="w-full" :options="status" />
              </div>
              <div class="w-1/4">
                <AppSelect v-model="filter.paymentStatus" class="w-full" :options="paymentStatus" />
              </div>
            </div>
          </template>
          <div class="px-[30px] py-5 border-b flex items-center gap-[16px] text-slate">
            <div class="w-1/4">
              <h3 class="ml-10">Name</h3>
            </div>
            <div class="w-1/4">
              <h3 class="">User Status</h3>
            </div>
            <div class="w-1/4">
              <h3 class="">Payment Status</h3>
            </div>
            <div class="w-1/4">
              <h3 class="">Amount</h3>
            </div>
          </div>
          <div class="px-[30px] py-5 border-b flex items-center gap-[16px]">
            <div class="w-1/4 flex items-center justify-start gap-[12px]">
              <label>
                <input type="checkbox" class="checkbox rounded-full [--chkbg:#0CAF60]" />
              </label>
              <div class="">
                <h3 class="font-[600] capitalize"></h3>
                <p class="font-[500]"></p>
              </div>
            </div>
            <div class="w-1/4"></div>
            <div class="w-1/4"></div>
            <div class="w-1/4"></div>
          </div>
        </div>
      </div>
      <div class="px-[30px] py-[24px] border-b"></div>
    </div>
  </section>
</template>
