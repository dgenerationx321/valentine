import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const quotes = [
  {
    text: "My dearest Naina, every moment with you feels like a beautiful dream I never want to wake up from.",
    subtitle: "The day I met you, my life changed forever..."
  },
  {
    text: "We've been through storms together, but our love only grew stronger. You are my anchor in every chaos.",
    subtitle: "Through every hardship, we held on..."
  },
  {
    text: "Sagrika, your smile is the reason my heart beats with joy. You make every ordinary day extraordinary.",
    subtitle: "Your presence lights up my world..."
  },
  {
    text: "In a world full of uncertainties, you are my only constant. My love for you grows deeper every single day.",
    subtitle: "Our love story is my favorite..."
  },
  {
    text: "Naina, you are not just my love, you are my best friend, my soulmate, and my everything.",
    subtitle: "Forever grateful for us..."
  }
]

const QuotesSection = ({ onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    if (currentIndex < quotes.length - 1) {
      setCurrentIndex(currentIndex + 1)
    } else {
      onComplete()
    }
  }

  const currentQuote = quotes[currentIndex]

  return (
    <motion.div
      className="h-screen flex flex-col items-center justify-center px-4 py-6 relative z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6 }}
    >
      {/* Progress indicator */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 flex gap-3">
        {quotes.map((_, i) => (
          <motion.div
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${i <= currentIndex ? 'bg-pink-400' : 'bg-red-900'}`}
            animate={{
              scale: i === currentIndex ? 1.4 : 1,
              boxShadow: i === currentIndex ? '0 0 15px rgba(255, 100, 150, 0.8)' : 'none'
            }}
            whileHover={{ scale: 1.5 }}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, x: 100, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -100, scale: 0.8 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Photo Frame - Interactive */}
          <motion.div
            className="mb-6 flex justify-center"
            initial={{ rotateY: 90 }}
            animate={{ rotateY: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden photo-glow border-4 border-pink-400 p-1 bg-linear-to-br from-pink-400 via-red-500 to-pink-600">
                <div className="w-full h-full rounded-full bg-linear-to-br from-red-200 to-pink-200 flex items-center justify-center">
                  <motion.span
                    className="text-5xl md:text-6xl"
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    💕
                  </motion.span>
                </div>
              </div>

              {/* Decorative hearts around photo */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-xl md:text-2xl"
                  style={{
                    top: `${50 + 48 * Math.sin((i * Math.PI * 2) / 6)}%`,
                    left: `${50 + 48 * Math.cos((i * Math.PI * 2) / 6)}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                >
                  ❤️
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Quote Text - Premium font */}
          <motion.p
            className="text-xl md:text-3xl text-white font-dancing mb-4 leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            "{currentQuote.text}"
          </motion.p>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl text-pink-300 font-romantic italic mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            ~ {currentQuote.subtitle} ~
          </motion.p>

          {/* Next Button - Enhanced */}
          <motion.button
            onClick={handleNext}
            className="btn-romantic px-8 py-4 rounded-full text-white text-xl md:text-2xl font-dancing shadow-lg border-2 border-pink-400/50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {currentIndex < quotes.length - 1 ? (
              <span className="flex items-center gap-3">
                Next <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1, repeat: Infinity }}>💝</motion.span>
              </span>
            ) : (
              <span className="flex items-center gap-3">
                Something Special <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 0.8, repeat: Infinity }}>💖</motion.span>
              </span>
            )}
          </motion.button>
        </motion.div>
      </AnimatePresence>

      {/* Quote number */}
      <motion.p
        className="absolute bottom-6 text-pink-400 font-dancing text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {currentIndex + 1} / {quotes.length}
      </motion.p>
    </motion.div>
  )
}

export default QuotesSection
