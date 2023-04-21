import { WalletContextProvider } from "@/contexts/WalletContextProvider";
import { ThirdwebProvider } from "@thirdweb-dev/react/solana";
import "@/styles/globals.css";

const desiredNetwork = "devnet";

export default function App({ Component, pageProps }) {
  return (
    <ThirdwebProvider network={desiredNetwork}>
      <WalletContextProvider>
        <Component {...pageProps} />
      </WalletContextProvider>
    </ThirdwebProvider>
  );
}
