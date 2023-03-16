import {
  DarkModeContext,
  DarkModeProvider,
} from "@/helper/context/DarkModeContext";
import useDarkMode from "@/helper/hooks/useDarkMode";
import "@/styles/globals.css";
import "@/styles/webfonts/uicons-regular-rounded.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState, useEffect, useContext } from "react";

export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient();

  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </DarkModeProvider>
  );
}
