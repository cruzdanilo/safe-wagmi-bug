import { modalConnectors, walletConnectProvider } from '@web3modal/ethereum'
import { configureChains, createClient } from 'wagmi'
import { goerli, mainnet } from 'wagmi/chains'

export const walletConnectProjectId = '11ddaa8aaede72cb5d6b0dae2fed7baa'

const { chains, provider, webSocketProvider } = configureChains(
  [mainnet, ...(process.env.NODE_ENV === 'development' ? [goerli] : [])],
  [walletConnectProvider({ projectId: walletConnectProjectId })],
)

export const client = createClient({
  autoConnect: true,
  connectors: modalConnectors({ appName: 'My wagmi + Web3Modal App', chains }),
  provider,
  webSocketProvider,
})

export { chains }
