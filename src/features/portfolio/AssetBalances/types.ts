import { Currency, CurrencyAmount } from 'sushi-sdk-ftm'

export interface Assets {
  asset: CurrencyAmount<Currency>
  strategy?: { token: string; apy: number; targetPercentage: number; utilization: number }
}
