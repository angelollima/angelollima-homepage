import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import DarkIcoon from './dark-theme-icon'
import LightIcoon from './light-theme-icon'

const ToggleTheme = () => {

  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true)
  }, [])

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
          <LightIcoon onClick={() => setTheme('light')} />
      )
    } else {
        return (
            <DarkIcoon onClick={() => setTheme('dark')} />
        )
    }
  }

  return (
    <div className='cursor-pointer'>
      {renderThemeChanger()}
    </div>
  )
}

export default ToggleTheme