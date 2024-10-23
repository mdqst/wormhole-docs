import WormholeConnect, {
  WormholeConnectConfig,
} from '@wormhole-foundation/wormhole-connect';
  
const config: WormholeConnectConfig = {
  networks: ['ethereum', 'polygon', 'solana'],
  tokens: ['ETH', 'WETH', 'MATIC', 'WMATIC'],
  rpcs: {
    ethereum: 'https://rpc.ankr.com/eth',
    solana: 'https://rpc.ankr.com/solana',
  }
}
  
<WormholeConnect config={config} />