'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Mail, Copy, Check } from 'lucide-react'

interface EmailPopupProps {
  isOpen: boolean
  onClose: () => void
}

const EmailPopup = ({ isOpen, onClose }: EmailPopupProps) => {
  const [copied, setCopied] = useState(false)
  const email = 'sagradhkr48@gmail.com'

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy email:', err)
    }
  }

  const openGmail = () => {
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Hello%20Sagar&body=Hi%20Sagar,%0D%0A%0D%0AI%20would%20like%20to%20discuss%20a%20project%20with%20you.`, '_blank')
  }

  const openOutlook = () => {
    window.open(`https://outlook.live.com/mail/0/deeplink/compose?to=${email}&subject=Hello%20Sagar&body=Hi%20Sagar,%0D%0A%0D%0AI%20would%20like%20to%20discuss%20a%20project%20with%20you.`, '_blank')
  }

  const openYahoo = () => {
    window.open(`https://compose.mail.yahoo.com/?to=${email}&subject=Hello%20Sagar&body=Hi%20Sagar,%0D%0A%0D%0AI%20would%20like%20to%20discuss%20a%20project%20with%20you.`, '_blank')
  }

  const tryDefaultMailto = () => {
    window.location.href = `mailto:${email}?subject=Hello%20Sagar&body=Hi%20Sagar,%0D%0A%0D%0AI%20would%20like%20to%20discuss%20a%20project%20with%20you.`
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={onClose}
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
              >
                <X size={20} />
              </button>

              {/* Header */}
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail size={24} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Contact Sagar Adhikari</h3>
                <p className="text-slate-600">Choose how you'd like to send an email</p>
              </div>

              {/* Email address */}
              <div className="bg-slate-50 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-slate-900 font-medium">{email}</span>
                  <button
                    onClick={copyToClipboard}
                    className="flex items-center gap-2 px-3 py-1 text-sm bg-white border border-slate-200 rounded-md hover:bg-slate-50 transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check size={14} className="text-green-600" />
                        <span className="text-green-600">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Email options */}
              <div className="space-y-3">
                <button
                  onClick={openGmail}
                  className="w-full flex items-center gap-3 p-3 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors text-left"
                >
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-red-600 font-semibold text-sm">G</span>
                  </div>
                  <div>
                    <div className="font-medium text-slate-900">Open in Gmail</div>
                    <div className="text-sm text-slate-600">Compose email in Gmail</div>
                  </div>
                </button>

                <button
                  onClick={openOutlook}
                  className="w-full flex items-center gap-3 p-3 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors text-left"
                >
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold text-sm">O</span>
                  </div>
                  <div>
                    <div className="font-medium text-slate-900">Open in Outlook</div>
                    <div className="text-sm text-slate-600">Compose email in Outlook</div>
                  </div>
                </button>

                <button
                  onClick={openYahoo}
                  className="w-full flex items-center gap-3 p-3 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors text-left"
                >
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-semibold text-sm">Y</span>
                  </div>
                  <div>
                    <div className="font-medium text-slate-900">Open in Yahoo Mail</div>
                    <div className="text-sm text-slate-600">Compose email in Yahoo</div>
                  </div>
                </button>

                <button
                  onClick={tryDefaultMailto}
                  className="w-full flex items-center gap-3 p-3 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors text-left"
                >
                  <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center">
                    <Mail size={16} className="text-slate-600" />
                  </div>
                  <div>
                    <div className="font-medium text-slate-900">Open in Default Email App</div>
                    <div className="text-sm text-slate-600">Use your system's default email client</div>
                  </div>
                </button>
              </div>

              {/* Footer */}
              <div className="mt-6 pt-4 border-t border-slate-100 text-center">
                <p className="text-sm text-slate-500">
                  Or use the contact form below to send a message directly
                </p>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default EmailPopup