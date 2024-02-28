import './App.css';
import { Route, Routes } from 'react-router-dom';
import ClaimReward from './pages/claim';
import LandingPage from './pages/landing';
import Navbar from './components/navbar';
import CreateLink from './pages/create-link';
import RedeemLanding from './pages/redeem-input';
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { avalancheFuji} from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import MyNft from './pages/my-nft';

const { chains, publicClient } = configureChains(
  [avalancheFuji],
  [
    alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  projectId: process.env.REACT_APP_PROJECT_ID, // Use the project ID from .env
  chains
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})
const customDarkTheme = darkTheme({ // Define custom dark theme
  accentColor: '#7b3fe4',
  accentColorForeground: 'white',
  borderRadius: 'medium',
  fontStack: 'system',
  overlayBlur: 'small',
});
function App() {
  return (<>
    <WagmiConfig config={wagmiConfig}>
    <RainbowKitProvider chains={chains} theme={customDarkTheme}>
        <Navbar />
        <div className="my-8 md:mx-20 mx-8">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/redeem" element={<RedeemLanding />} />
            <Route path="/redeem/:id?" element={<ClaimReward />} />
            <Route path="/create-link" element={<CreateLink />} />
            <Route path="/my-nft" element={<MyNft />} />
          </Routes>
        </div>
      </RainbowKitProvider>
    </WagmiConfig>
  </>);
}

export default App;
