import '@/styles/globals.css'
import '@/styles/webfonts/uicons-regular-rounded.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient()
  return <QueryClientProvider client={queryClient}>
    <Component {...pageProps} />
  </QueryClientProvider>
}
