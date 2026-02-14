import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Import images for each quote
import naina1 from '../assets/images/naina-1.jpeg'
import naina2 from '../assets/images/naina-2.jpeg'
import naina3 from '../assets/images/naina-3.jpeg'
import naina4 from '../assets/images/naina-4.jpeg'
import naina5 from '../assets/images/naina-5.jpeg'

const quoteImages = [naina1, naina2, naina3, naina4, naina5]

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
          {/* Photo Frame - Interactive with per-quote images */}
          <motion.div
            className="mb-6 flex justify-center"
            initial={{ rotateY: 90, scale: 0.8 }}
            animate={{ rotateY: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Outer glow ring */}
              <motion.div
                className="absolute -inset-2 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-pink-500 blur-md opacity-60"
                animate={{
                  opacity: [0.4, 0.7, 0.4],
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              {/* Photo container */}
              <motion.div
                className="relative w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-pink-400 p-1 bg-gradient-to-br from-pink-400 via-red-500 to-pink-600"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(255, 100, 150, 0.5)",
                    "0 0 40px rgba(255, 100, 150, 0.8)",
                    "0 0 20px rgba(255, 100, 150, 0.5)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.img
                  src={quoteImages[currentIndex]}
                  alt="My love Naina"
                  className="w-full h-full rounded-full object-cover"
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>

              {/* Decorative hearts around photo */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-xl md:text-2xl"
                  style={{
                    top: `${50 + 52 * Math.sin((i * Math.PI * 2) / 6)}%`,
                    left: `${50 + 52 * Math.cos((i * Math.PI * 2) / 6)}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.5, 1, 0.5],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.15
                  }}
                >
                  {['❤️', '💖', '💕', '💗', '💝', '💘'][i]}
                </motion.div>
              ))}

              {/* Sparkle effects */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={`sparkle-${i}`}
                  className="absolute text-lg"
                  style={{
                    top: `${20 + i * 20}%`,
                    left: i % 2 === 0 ? '-15%' : '95%',
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.4
                  }}
                >
                  ✨
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
