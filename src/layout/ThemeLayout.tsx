import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/ui/mode-toggle'
import { ThemeProvider } from '@/components/ui/theme-provider'


const ThemeLayout = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <ModeToggle></ModeToggle>

    </ThemeProvider>
  )
}

export default ThemeLayout