import { ChainId } from 'sushi-sdk-ftm/packages/core-sdk'

import { Oracle } from './Oracle'

// https://docs.chain.link/docs/ethereum-addresses
export class ChainlinkOracle extends Oracle {
  constructor(chainId: ChainId, address: string, data: string) {
    super(chainId, address, 'Chainlink', data)
  }
}
