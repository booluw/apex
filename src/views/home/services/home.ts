import http from "@/config/axios";

type Tab = 'all' | 'paid' | 'unpaid' | 'overdue'

export async function getTransactions(page: number, per_page: number, state: Tab | string) {
  return await http.get(`/transactions?page=${page}&per_page=${per_page}&state=${state}`)
}

export async function makePayment(payload: { payments: number[] }) {
  return await http.post(`/pay-dues`, { ...payload })
}