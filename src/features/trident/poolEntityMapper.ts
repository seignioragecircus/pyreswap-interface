import { ConstantProductPool, HybridPool, Pool, PoolType } from 'sushi-sdk-ftm/packages/trident-sdk'

export const poolEntityMapper = (poolClass: Pool): PoolType => {
  if (poolClass instanceof ConstantProductPool) return PoolType.ConstantProduct
  if (poolClass instanceof HybridPool) return PoolType.Hybrid
  throw new Error(`Pool class: ${poolClass} not mapped`)
}
