'use client'

import { useState } from 'react'

export const useEmailPopup = () => {
  const [isEmailPopupOpen, setIsEmailPopupOpen] = useState(false)

  const openEmailPopup = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault()
      e.stopPropagation()
    }
    setIsEmailPopupOpen(true)
  }

  const closeEmailPopup = () => {
    setIsEmailPopupOpen(false)
  }

  return {
    isEmailPopupOpen,
    openEmailPopup,
    closeEmailPopup
  }
}