import { DarkModeProvider } from "@/helper/context/DarkModeContext";
import NavTogglerProvider from "@/helper/context/NavTogglerContext";
import "@/styles/globals.css";
import "@/styles/webfonts/uicons-regular-rounded.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient();

  return (
    <>
      <DarkModeProvider>
        <QueryClientProvider client={queryClient}>
          <NavTogglerProvider>
            <Component {...pageProps} />
          </NavTogglerProvider>
        </QueryClientProvider>
      </DarkModeProvider>
    </>
  );
}
