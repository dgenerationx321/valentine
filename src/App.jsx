import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import HeartLoader from './components/HeartLoader'
import QuotesSection from './components/QuotesSection'
import ProposalPopup from './components/ProposalPopup'
import CelebrationCard from './components/CelebrationCard'
import FloatingHearts from './components/FloatingHearts'
import SparkleCursor from './components/SparkleCursor'

function App() {
  const [stage, setStage] = useState('loading') // loading, quotes, proposal, celebration

  useEffect(() => {
    // Show loader for 3 seconds
    const timer = setTimeout(() => {
      setStage('quotes')
    }, 3500)
    return () => clearTimeout(timer)
  }, [])

  const handleQuotesComplete = () => {
    setStage('proposal')
  }

  const handleYesClick = () => {
    setStage('celebration')
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <SparkleCursor />
      <FloatingHearts />

      <AnimatePresence mode="wait">
        {stage === 'loading' && (
          <HeartLoader key="loader" />
        )}

        {stage === 'quotes' && (
          <QuotesSection key="quotes" onComplete={handleQuotesComplete} />
        )}

        {stage === 'proposal' && (
          <ProposalPopup key="proposal" onYesClick={handleYesClick} />
        )}

        {stage === 'celebration' && (
          <CelebrationCard key="celebration" />
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
