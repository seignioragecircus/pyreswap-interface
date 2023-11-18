import { Currency, CurrencyAmount } from 'sushi-sdk-ftm/packages/core-sdk'

export interface Assets {
  asset: CurrencyAmount<Currency>
  strategy?: { token: string; apy: number; targetPercentage: number; utilization: number }
}
