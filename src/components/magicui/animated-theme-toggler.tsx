'use client'

import { Moon, Sun } from '@/icons/icons-theme'
import { useState, useRef, useEffect } from 'react'
import { flushSync } from 'react-dom'
import { cn } from '@/lib/utils'

interface AnimatedThemeTogglerProps {
  className?: string
}

export const AnimatedThemeToggler = ({ className }: AnimatedThemeTogglerProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [mounted, setMounted] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Inicializar tema
  useEffect(() => {
    setMounted(true)
    const isDark = document.documentElement.classList.contains('dark')
    setIsDarkMode(isDark)
  }, [])

  // Cambiar tema con animación
  const handleClick = async () => {
    if (!buttonRef.current) return

    const performThemeToggle = () => {
      flushSync(() => {
        const newTheme = isDarkMode ? 'light' : 'dark'
        localStorage.setItem('theme', newTheme)
        document.documentElement.classList.toggle('dark', newTheme === 'dark')
        setIsDarkMode(newTheme === 'dark')
      })
    }

    if (document.startViewTransition) {
      await document.startViewTransition(performThemeToggle).ready

      // Animación circular
      const { top, left, width, height } = buttonRef.current.getBoundingClientRect()
      const x = left + width / 2
      const y = top + height / 2
      const maxRadius = Math.hypot(
        Math.max(left, window.innerWidth - left),
        Math.max(top, window.innerHeight - top)
      )

      document.documentElement.animate(
        {
          clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${maxRadius}px at ${x}px ${y}px)`]
        },
        {
          duration: 700,
          easing: 'ease-in-out',
          pseudoElement: '::view-transition-new(root)'
        }
      )
    } else {
      // Fallback sin animación en navegadores no compatibles
      performThemeToggle()
    }
  }

  if (!mounted) {
    return (
      <button className={cn('px-2', className)} disabled>
        <Moon />
      </button>
    )
  }

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      className={cn('px-2', className)}
      aria-label={`Cambiar a tema ${isDarkMode ? 'claro' : 'oscuro'}`}
    >
      {isDarkMode ? <Sun /> : <Moon />}
    </button>
  )
}
