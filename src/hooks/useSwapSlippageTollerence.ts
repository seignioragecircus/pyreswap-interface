import { useAppSelector } from 'app/state/hooks'
import { selectSlippageWithDefault } from 'app/state/slippage/slippageSlice'
import { useMemo } from 'react'
import { Currency, Percent, Trade, TradeType } from 'sushi-sdk-ftm/packages/core-sdk'
import { Trade as TridentTrade } from 'sushi-sdk-ftm/packages/trident-sdk'

const V2_SWAP_DEFAULT_SLIPPAGE = new Percent(50, 10_000) // .50%
const ONE_TENTHS_PERCENT = new Percent(10, 10_000) // .10%

export default function useSwapSlippageTolerance(
  trade: Trade<Currency, Currency, TradeType> | TridentTrade<Currency, Currency, TradeType> | undefined
): Percent {
  const defaultSlippageTolerance = useMemo(() => {
    if (!trade) return ONE_TENTHS_PERCENT
    return V2_SWAP_DEFAULT_SLIPPAGE
  }, [trade])
  return useAppSelector(selectSlippageWithDefault(defaultSlippageTolerance))
}
