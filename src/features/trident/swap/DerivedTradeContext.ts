import { createContext, useContext } from 'react'
import { Currency, CurrencyAmount, Percent, TradeType } from 'sushi-sdk-ftm/packages/core-sdk'
import { Trade as LegacyTrade } from 'sushi-sdk-ftm/packages/core-sdk'
import { Trade } from 'sushi-sdk-ftm/packages/trident-sdk'

interface DerivedTradeContext {
  formattedAmounts?: string[]
  trade?:
    | Trade<Currency, Currency, TradeType.EXACT_INPUT | TradeType.EXACT_OUTPUT>
    | LegacyTrade<Currency, Currency, TradeType.EXACT_INPUT | TradeType.EXACT_OUTPUT>
  priceImpact?: Percent
  error?: string
  isWrap?: boolean
  parsedAmounts?: (CurrencyAmount<Currency> | undefined)[]
}

export const DerivedTradeContext = createContext<DerivedTradeContext>({
  formattedAmounts: undefined,
  trade: undefined,
  priceImpact: undefined,
  error: undefined,
  isWrap: undefined,
  parsedAmounts: undefined,
})

export const useDerivedTridentSwapContext = () => useContext(DerivedTradeContext)
