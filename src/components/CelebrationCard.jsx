import { useEffect, useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

const CelebrationCard = () => {
  const [confetti, setConfetti] = useState([])
  const [burstHearts, setBurstHearts] = useState([])

  const sendEmailNotification = useCallback(async () => {
    const serviceId = 'service_bo2f6yy'
    const templateId = 'template_ufy5az8'
    const publicKey = 'sV6f3Mb8h0B8pLN8s'

    if (serviceId !== 'YOUR_SERVICE_ID') {
      try {
        await emailjs.send(
          serviceId,
          templateId,
          {
            to_name: 'Deepak',
            message: '🎉 Sagrika said YES! She accepted your Valentine proposal! 💖',
            date: new Date().toLocaleString(),
          },
          publicKey
        )
        console.log('Email sent successfully!')
      } catch (error) {
        console.log('Email sending failed:', error)
      }
    }
  }, [])

  useEffect(() => {
    // Generate confetti
    const newConfetti = [...Array(80)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 2 + Math.random() * 3,
      color: ['#ff6b6b', '#ff0000', '#ff69b4', '#ff1493', '#ffb6c1', '#ffd700', '#ffffff'][Math.floor(Math.random() * 7)],
      size: 6 + Math.random() * 10,
      rotation: Math.random() * 360
    }))
    setConfetti(newConfetti)

    // Generate burst hearts
    const newBurstHearts = [...Array(20)].map((_, i) => ({
      id: i,
      x: (Math.random() - 0.5) * window.innerWidth,
      y: (Math.random() - 0.5) * window.innerHeight,
      rotate: Math.random() * 360,
      emoji: ['❤️', '💖', '💕', '💗', '💝', '✨', '🌟'][i % 7]
    }))
    setBurstHearts(newBurstHearts)

    sendEmailNotification()
  }, [sendEmailNotification])

  return (
    <motion.div
      className="h-screen flex items-center justify-center p-4 relative z-10 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Confetti */}
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="confetti"
          style={{
            left: `${piece.left}%`,
            backgroundColor: piece.color,
            width: piece.size,
            height: piece.size,
            borderRadius: piece.size > 10 ? '50%' : '2px',
            animationDuration: `${piece.duration}s`,
            animationDelay: `${piece.delay}s`,
            transform: `rotate(${piece.rotation}deg)`
          }}
        />
      ))}

      {/* Celebration Card - Compact */}
      <motion.div
        className="bg-linear-to-br from-red-900/95 via-pink-900/95 to-red-900/95 backdrop-blur-lg rounded-3xl p-5 md:p-8 max-w-xl mx-auto text-center shadow-2xl border-4 border-pink-400 max-h-[90vh] overflow-hidden card-romantic"
        initial={{ scale: 0, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
        whileHover={{ scale: 1.02 }}
      >
        {/* Success hearts - smaller */}
        <motion.div
          className="mb-3"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          <span className="text-4xl md:text-5xl">🎉💖🎉</span>
        </motion.div>

        {/* Photo - smaller */}
        <motion.div
          className="mb-4 flex justify-center"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="relative">
            <motion.div
              className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden photo-glow border-3 border-yellow-400 p-1 bg-linear-to-br from-yellow-400 via-pink-500 to-red-500"
              animate={{
                boxShadow: [
                  "0 0 15px rgba(255, 215, 0, 0.5)",
                  "0 0 30px rgba(255, 215, 0, 0.8)",
                  "0 0 15px rgba(255, 215, 0, 0.5)"
                ]
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <div className="w-full h-full rounded-full bg-linear-to-br from-pink-200 to-red-200 flex items-center justify-center">
                <motion.span
                  className="text-4xl md:text-5xl"
                  animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  👩‍❤️‍👨
                </motion.span>
              </div>
            </motion.div>

            {/* Orbiting hearts */}
            {[...Array(6)].map((_, i) => (
              <motion.span
                key={i}
                className="absolute text-lg md:text-xl"
                style={{
                  top: `${50 + 52 * Math.sin((i * Math.PI * 2) / 6)}%`,
                  left: `${50 + 52 * Math.cos((i * Math.PI * 2) / 6)}%`,
                  transform: 'translate(-50%, -50%)'
                }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.1 }}
              >
                {['💖', '💕', '❤️', '💗', '💝', '💘'][i]}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Text - compact */}
        <motion.h1
          className="text-3xl md:text-5xl font-romantic text-white glow mb-2"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          Yaaay! 🎊
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-4xl font-dancing text-pink-200 mb-4 shimmer"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          She Said Yes!
        </motion.h2>

        <motion.div
          className="space-y-2 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          <p className="text-xl md:text-2xl text-white font-dancing">
            Thank you, my dearest Naina! 💕
          </p>
          <p className="text-base md:text-lg text-pink-300 font-dancing">
            For being my Valentine!
          </p>
        </motion.div>

        {/* Love message box - interactive */}
        <motion.div
          className="bg-linear-to-r from-pink-600/50 to-red-600/50 rounded-xl p-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.3 }}
          whileHover={{ scale: 1.03, boxShadow: "0 0 25px rgba(255, 100, 150, 0.5)" }}
        >
          <p className="text-base md:text-lg text-white font-dancing leading-relaxed">
            I promise to love you forever.
            <span className="text-pink-300 text-xl md:text-2xl font-romantic block mt-2">
              Forever & Always ❤️
            </span>
          </p>
        </motion.div>

        {/* Bottom icons */}
        <motion.div
          className="mt-4 text-2xl md:text-3xl"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          💑 💍 💒
        </motion.div>

        <motion.p
          className="mt-2 text-pink-400 font-dancing text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          Valentine's Day {new Date().getFullYear()} 💝
        </motion.p>
      </motion.div>

      {/* Burst hearts */}
      {burstHearts.map((heart) => (
        <motion.div
          key={`burst-${heart.id}`}
          className="fixed text-2xl md:text-3xl pointer-events-none"
          style={{ left: '50%', top: '50%' }}
          initial={{ x: 0, y: 0, opacity: 1, scale: 0 }}
          animate={{
            x: heart.x,
            y: heart.y,
            opacity: [1, 1, 0],
            scale: [0, 1.5, 1],
            rotate: heart.rotate
          }}
          transition={{ duration: 3, delay: heart.id * 0.1, ease: "easeOut" }}
        >
          {heart.emoji}
        </motion.div>
      ))}
    </motion.div>
  )
}

export default CelebrationCard
