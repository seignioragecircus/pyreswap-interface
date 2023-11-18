import { createAction } from '@reduxjs/toolkit'
import { PrivateTxStatus } from 'app/entities/SushiGuard'
import { ChainId } from 'sushi-sdk-ftm/packages/core-sdk'

export interface SerializableTransactionReceipt {
  to: string
  from: string
  contractAddress: string
  transactionIndex: number
  blockHash: string
  transactionHash: string
  blockNumber: number
  status?: number
}

export const addTransaction = createAction<{
  chainId: ChainId
  hash: string
  from: string
  approval?: { tokenAddress: string; spender: string }
  claim?: { recipient: string }
  summary?: string
  privateTx?: boolean
}>('transactions/addTransaction')
export const clearAllTransactions = createAction<{ chainId: number }>('transactions/clearAllTransactions')
export const finalizeTransaction = createAction<{
  chainId: number
  hash: string
  receipt: SerializableTransactionReceipt
}>('transactions/finalizeTransaction')
export const checkedTransaction = createAction<{
  chainId: number
  hash: string
  blockNumber: number
}>('transactions/checkedTransaction')
export const updatePrivateTxStatus = createAction<{
  chainId: ChainId
  hash: string
  blockNumber: number
  status: PrivateTxStatus
}>('transactions/updatePrivateTxStatus')
export const setRouteInfo = createAction<{
  info: any
}>('transactions/setRouteInfo')
