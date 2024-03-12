import './App.css';
import { Route, Routes } from 'react-router-dom';
import ClaimReward from './pages/claim';
import LandingPage from './pages/landing';
import Navbar from './components/navbar';
import Footer from './components/footer';
import CreateLink from './pages/create-link';
import RedeemLanding from './pages/redeem-input';
import TopNFT from './pages/topnfts';
import '@rainbow-me/rainbowkit/styles.css';
import Teamer from './pages/team';
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { avalancheFuji } from 'wagmi/chains';
import { shardeumSphinx } from 'wagmi/chains'; 
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import MyNft from './pages/my-nft';

// Configure chains with shardeumSphinx
const { chains, publicClient } = configureChains(
  [avalancheFuji, shardeumSphinx], // Add shardeumSphinx to the array
  [
    alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
    publicProvider()
  ]
);

// Get default wallets
const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  projectId: process.env.REACT_APP_PROJECT_ID,
  chains
});

// Create wagmiConfig
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
});

// Customize dark theme
const customDarkTheme = darkTheme({
  accentColor: '#ee8650',
  accentColorForeground: 'black',
  borderRadius: 'medium',
  fontStack: 'system',
  overlayBlur: 'small',
});

function App() {
  return (
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
            <Route path="/team" element={<Teamer />} />
            <Route path="/topnfts" element={<TopNFT />} />
          </Routes>
        </div>
      </RainbowKitProvider>
      <Footer />
    </WagmiConfig>
  );
}

export default App;
