import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import nainaProposal from '../assets/images/naina-proposal.jpeg'

const ProposalPopup = ({ onYesClick }) => {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 })
  const [escapeCount, setEscapeCount] = useState(0)
  const [showMessage, setShowMessage] = useState(false)

  const funnyMessages = [
    "Nice try! 😏",
    "You can't escape love! 💘",
    "The heart wants what it wants! 💕",
    "Not so fast! 😄",
    "Love always wins! 💗",
    "Just say YES already! 🥰",
    "I won't give up! 💪❤️",
    "You know you want to! 😉"
  ]

  const moveNoButton = useCallback(() => {
    const maxX = window.innerWidth - 150
    const maxY = window.innerHeight - 100
    const newX = Math.random() * maxX - maxX / 2
    const newY = Math.random() * maxY - maxY / 2

    setNoButtonPosition({ x: newX, y: newY })
    setEscapeCount(prev => prev + 1)
    setShowMessage(true)
    setTimeout(() => setShowMessage(false), 1500)
  }, [])

  return (
    <motion.div
      className="h-screen flex items-center justify-center px-4 relative z-10"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.5 }}
      transition={{ duration: 0.6, ease: "backOut" }}
    >
      {/* Main Popup Card */}
      <motion.div
        className="bg-linear-to-br from-red-900/95 via-pink-900/95 to-red-900/95 backdrop-blur-lg rounded-3xl p-6 md:p-10 max-w-lg mx-auto text-center shadow-2xl border-4 border-pink-500/50 card-romantic"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        whileHover={{ boxShadow: "0 0 40px rgba(255, 100, 150, 0.4)" }}
      >
        {/* Photo */}
        <motion.div
          className="mb-5 flex justify-center"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
        >
          <motion.div
            className="relative"
            animate={{ rotate: [0, -2, 2, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            {/* Outer glow effect */}
            <motion.div
              className="absolute -inset-3 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-pink-500 blur-lg opacity-50"
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            <motion.div
              className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-pink-400 p-1 bg-gradient-to-br from-pink-400 via-red-500 to-pink-600"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              animate={{
                boxShadow: [
                  "0 0 20px rgba(255, 100, 150, 0.5)",
                  "0 0 40px rgba(255, 100, 150, 0.8)",
                  "0 0 20px rgba(255, 100, 150, 0.5)"
                ]
              }}
            >
              <motion.img
                src={nainaProposal}
                alt="My beautiful Sagrika"
                className="w-full h-full rounded-full object-cover"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>

            {/* Orbiting hearts */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-lg md:text-xl"
                style={{
                  top: `${50 + 55 * Math.sin((i * Math.PI * 2) / 8)}%`,
                  left: `${50 + 55 * Math.cos((i * Math.PI * 2) / 8)}%`,
                  transform: 'translate(-50%, -50%)'
                }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.1
                }}
              >
                {['💖', '💕', '❤️', '💗', '💝', '💘', '✨', '🌟'][i]}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Hearts decoration */}
        <motion.div
          className="text-3xl mb-3"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          💕💖💕
        </motion.div>

        {/* Main Question */}
        <motion.h1
          className="text-3xl md:text-5xl font-romantic text-white glow mb-3"
          animate={{
            textShadow: [
              "0 0 10px #ff6b6b, 0 0 20px #ff6b6b",
              "0 0 20px #ff0000, 0 0 40px #ff0000",
              "0 0 10px #ff6b6b, 0 0 20px #ff6b6b"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          My Dear Sagrika
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-4xl font-dancing text-pink-200 mb-6 shimmer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Will You Be My Valentine?
        </motion.h2>

        {/* Buttons Container */}
        <div className="flex flex-col md:flex-row gap-5 justify-center items-center relative min-h-[80px]">
          {/* YES Button */}
          <motion.button
            onClick={onYesClick}
            className="btn-romantic px-10 py-4 rounded-full text-white text-2xl md:text-3xl font-dancing shadow-lg z-10 border-2 border-pink-400/50"
            whileHover={{
              scale: 1.15,
              boxShadow: "0 0 40px rgba(255, 0, 0, 0.8)"
            }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 0 15px rgba(255, 0, 0, 0.5)",
                "0 0 35px rgba(255, 0, 0, 0.8)",
                "0 0 15px rgba(255, 0, 0, 0.5)"
              ]
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <span className="flex items-center gap-2">
              Yes! <motion.span animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 0.8, repeat: Infinity }}>💖</motion.span>
            </span>
          </motion.button>

          {/* NO Button - Escapes on hover */}
          <motion.button
            className="px-6 py-3 rounded-full bg-gray-700/80 text-gray-400 text-lg font-dancing shadow-lg border border-gray-600"
            animate={{
              x: noButtonPosition.x,
              y: noButtonPosition.y
            }}
            onMouseEnter={moveNoButton}
            onTouchStart={moveNoButton}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            whileHover={{ scale: 0.9 }}
          >
            No 💔
          </motion.button>
        </div>

        {/* Funny message when No button escapes */}
        <AnimatePresence>
          {showMessage && (
            <motion.p
              className="mt-5 text-xl text-pink-300 font-dancing"
              initial={{ opacity: 0, scale: 0.5, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5 }}
            >
              {funnyMessages[escapeCount % funnyMessages.length]}
            </motion.p>
          )}
        </AnimatePresence>

        {/* Escape counter */}
        {escapeCount > 0 && (
          <motion.p
            className="mt-3 text-sm text-pink-400 font-dancing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            The "No" button escaped {escapeCount} time{escapeCount > 1 ? 's' : ''}!
            <span className="ml-2">Maybe it's a sign? 😉</span>
          </motion.p>
        )}
      </motion.div>

      {/* Floating sparkles around the popup */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl pointer-events-none"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        >
          ✨
        </motion.div>
      ))}
    </motion.div>
  )
}

export default ProposalPopup
