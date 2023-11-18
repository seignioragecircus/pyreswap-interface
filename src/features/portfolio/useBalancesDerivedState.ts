import { selectBalancesCurrency } from 'app/features/portfolio/portfolioSlice'
import { useCurrency } from 'app/hooks/Tokens'
import { useSelector } from 'react-redux'
import { Currency } from 'sushi-sdk-ftm'

type UseBalancesSelectedCurrency = () => Currency | undefined
export const useBalancesSelectedCurrency: UseBalancesSelectedCurrency = () => {
  const currency = useSelector(selectBalancesCurrency)
  return useCurrency(currency) ?? undefined
}
