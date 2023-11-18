import { getKashiPairs } from 'app/services/graph/fetchers'
import stringify from 'fast-json-stable-stringify'
import { ChainId } from 'sushi-sdk-ftm'
import useSWR from 'swr'

import { GraphProps } from '../interfaces'

export function useKashiPairs({
  chainId = ChainId.ETHEREUM,
  variables,
  shouldFetch = true,
  swrConfig = undefined,
}: GraphProps) {
  return useSWR(
    shouldFetch ? () => ['kashiPairs', chainId, stringify(variables)] : null,
    // @ts-ignore
    (_, chainId) => getKashiPairs(chainId, variables),
    swrConfig
  )
}
