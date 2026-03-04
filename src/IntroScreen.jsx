import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ─── SVG Tree Component ───────────────────────────────────────────────────────
function NatureTree({ phase }) {
  // phase: 'small' | 'growing' | 'full'
  return (
    <svg
      viewBox="0 0 300 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: '100%' }}
    >
      {/* ── Trunk ── */}
      <motion.path
        d="M148 390 C148 390 145 350 143 320 C141 290 138 270 140 250 C142 230 145 220 150 210"
        stroke="#5D4037"
        strokeWidth={phase === 'full' ? 14 : 8}
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      />

      {/* ── Root left ── */}
      <motion.path
        d="M145 385 C130 390 110 392 95 388"
        stroke="#6D4C41"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.7 }}
        transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
      />

      {/* ── Root right ── */}
      <motion.path
        d="M152 385 C167 390 187 392 202 388"
        stroke="#6D4C41"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.7 }}
        transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
      />

      {phase !== 'small' && (
        <>
          {/* ── Branch left 1 ── */}
          <motion.path
            d="M143 300 C120 285 95 278 70 282"
            stroke="#6D4C41"
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          />

          {/* ── Branch right 1 ── */}
          <motion.path
            d="M146 285 C168 268 192 262 218 268"
            stroke="#6D4C41"
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          />

          {/* ── Branch left 2 ── */}
          <motion.path
            d="M141 260 C118 245 95 240 72 248"
            stroke="#795548"
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
          />

          {/* ── Branch right 2 ── */}
          <motion.path
            d="M145 248 C165 232 188 228 210 236"
            stroke="#795548"
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.55, ease: 'easeOut' }}
          />

          {/* ── Top branch ── */}
          <motion.path
            d="M150 210 C148 185 145 165 148 145"
            stroke="#8D6E63"
            strokeWidth="7"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
          />
        </>
      )}

      {/* ── Foliage clusters — only in full phase ── */}
      {phase === 'full' && (
        <>
          {/* Center top canopy */}
          {[
            { cx: 148, cy: 115, r: 58, color: '#2E7D32', delay: 0.7 },
            { cx: 148, cy: 108, r: 48, color: '#388E3C', delay: 0.75 },
            { cx: 148, cy: 100, r: 38, color: '#43A047', delay: 0.8 },

            // Left cluster
            { cx: 80, cy: 158, r: 52, color: '#2E7D32', delay: 0.72 },
            { cx: 75, cy: 150, r: 42, color: '#388E3C', delay: 0.78 },
            { cx: 72, cy: 144, r: 32, color: '#66BB6A', delay: 0.84 },

            // Right cluster
            { cx: 218, cy: 155, r: 52, color: '#2E7D32', delay: 0.73 },
            { cx: 222, cy: 147, r: 42, color: '#388E3C', delay: 0.79 },
            { cx: 224, cy: 141, r: 32, color: '#66BB6A', delay: 0.85 },

            // Far left small
            { cx: 55, cy: 190, r: 36, color: '#388E3C', delay: 0.85 },
            { cx: 50, cy: 185, r: 26, color: '#66BB6A', delay: 0.9 },

            // Far right small
            { cx: 242, cy: 188, r: 36, color: '#388E3C', delay: 0.86 },
            { cx: 247, cy: 183, r: 26, color: '#66BB6A', delay: 0.91 },

            // Lower left fill
            { cx: 95, cy: 210, r: 38, color: '#2E7D32', delay: 0.88 },
            // Lower right fill
            { cx: 202, cy: 208, r: 38, color: '#2E7D32', delay: 0.89 },

            // Extra depth
            { cx: 148, cy: 145, r: 44, color: '#1B5E20', delay: 0.65 },
          ].map((leaf, i) => (
            <motion.circle
              key={i}
              cx={leaf.cx}
              cy={leaf.cy}
              r={leaf.r}
              fill={leaf.color}
              initial={{ scale: 0, opacity: 0, transformOrigin: `${leaf.cx}px ${leaf.cy}px` }}
              animate={{ scale: 1, opacity: 0.95 }}
              transition={{
                duration: 0.6,
                delay: leaf.delay,
                type: 'spring',
                stiffness: 160,
                damping: 12,
              }}
              style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
            />
          ))}

          {/* Highlight leaves */}
          {[
            { cx: 120, cy: 96, r: 14, color: '#A5D6A7' },
            { cx: 172, cy: 92, r: 12, color: '#C8E6C9' },
            { cx: 85, cy: 140, r: 12, color: '#A5D6A7' },
            { cx: 210, cy: 138, r: 11, color: '#A5D6A7' },
          ].map((h, i) => (
            <motion.circle
              key={`h-${i}`}
              cx={h.cx}
              cy={h.cy}
              r={h.r}
              fill={h.color}
              opacity={0.5}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 1.1 + i * 0.06 }}
              style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
            />
          ))}
        </>
      )}

      {/* ── Small sapling leaves ── */}
      {phase === 'small' && (
        <>
          <motion.circle cx="150" cy="195" r="28" fill="#388E3C"
            initial={{ scale: 0 }} animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6, type: 'spring' }}
            style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
          />
          <motion.circle cx="150" cy="190" r="20" fill="#43A047"
            initial={{ scale: 0 }} animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 0.7, type: 'spring' }}
            style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
          />
          <motion.circle cx="150" cy="185" r="14" fill="#66BB6A"
            initial={{ scale: 0 }} animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 0.8, type: 'spring' }}
            style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
          />
        </>
      )}
    </svg>
  )
}

// ─── Floating Leaf Particle ───────────────────────────────────────────────────
function FloatingLeaf({ delay, x, y, rotation, emoji }) {
  return (
    <motion.div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        fontSize: '22px',
        pointerEvents: 'none',
        zIndex: 10,
      }}
      initial={{ opacity: 0, scale: 0, rotate: 0 }}
      animate={{
        opacity: [0, 1, 0.8, 0],
        scale: [0, 1.2, 1, 0.8],
        rotate: [0, rotation, rotation * 1.5],
        x: [0, (Math.random() - 0.5) * 120],
        y: [0, -80 - Math.random() * 60],
      }}
      transition={{ duration: 2.2, delay, ease: 'easeOut' }}
    >
      {emoji}
    </motion.div>
  )
}

// ─── Main Intro Screen ────────────────────────────────────────────────────────
export default function IntroScreen({ onEnter }) {
  const [phase, setPhase] = useState('small')     // small | growing | full
  const [showLeaves, setShowLeaves] = useState(false)
  const [showTitle, setShowTitle] = useState(false)
  const [showButton, setShowButton] = useState(false)
  const [clicked, setClicked] = useState(false)
  const [hint, setHint] = useState(false)

  // Show tap hint after 1.5s
  useEffect(() => {
    const t = setTimeout(() => setHint(true), 1500)
    return () => clearTimeout(t)
  }, [])

  const handleTreeClick = () => {
    if (clicked) return
    setClicked(true)
    setHint(false)
    setPhase('growing')

    // Grow tree
    setTimeout(() => setPhase('full'), 400)
    // Burst leaves
    setTimeout(() => setShowLeaves(true), 800)
    // Show title letters
    setTimeout(() => setShowTitle(true), 1200)
    // Show enter button
    setTimeout(() => setShowButton(true), 2400)
  }

  const leafParticles = [
    { x: '42%', y: '38%', rotation: -45, emoji: '🍃', delay: 0 },
    { x: '55%', y: '35%', rotation: 60, emoji: '🌿', delay: 0.1 },
    { x: '35%', y: '42%', rotation: -30, emoji: '🍀', delay: 0.15 },
    { x: '62%', y: '40%', rotation: 80, emoji: '🍃', delay: 0.08 },
    { x: '30%', y: '35%', rotation: -60, emoji: '🌱', delay: 0.2 },
    { x: '68%', y: '36%', rotation: 40, emoji: '🍃', delay: 0.05 },
    { x: '48%', y: '30%', rotation: -20, emoji: '🌿', delay: 0.25 },
    { x: '38%', y: '48%', rotation: 70, emoji: '🍀', delay: 0.18 },
    { x: '60%', y: '46%', rotation: -50, emoji: '🍃', delay: 0.12 },
    { x: '25%', y: '45%', rotation: 30, emoji: '🌱', delay: 0.22 },
    { x: '72%', y: '44%', rotation: -40, emoji: '🍃', delay: 0.16 },
    { x: '50%', y: '52%', rotation: 55, emoji: '🌿', delay: 0.3 },
  ]

  const titleLetters = ['M', 'e', 'd', 'i']

  return (
    <motion.div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'linear-gradient(180deg, #E8F5E9 0%, #F1F8E9 40%, #DCEDC8 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        zIndex: 1000,
        overflow: 'hidden',
        cursor: clicked ? 'default' : 'pointer',
      }}
      onClick={!clicked ? handleTreeClick : undefined}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8 }}
    >
      {/* ── Sky ambiance ── */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 50% 0%, rgba(165,214,167,0.4) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />

      {/* ── Ground ── */}
      <div style={{
        position: 'absolute',
        bottom: 0, left: 0, right: 0,
        height: '120px',
        background: 'linear-gradient(180deg, transparent, rgba(139,195,74,0.15) 50%, rgba(104,159,56,0.25) 100%)',
        borderRadius: '50% 50% 0 0 / 30px 30px 0 0',
      }} />

      {/* ── Grass blades ── */}
      {Array.from({ length: 18 }).map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            bottom: '10px',
            left: `${5 + i * 5.2}%`,
            width: '3px',
            height: `${16 + Math.random() * 14}px`,
            background: 'linear-gradient(180deg, #66BB6A, #388E3C)',
            borderRadius: '4px 4px 0 0',
            transformOrigin: 'bottom center',
          }}
          animate={{ rotate: [0, 4, -4, 0] }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* ── Leaf particles burst ── */}
      {showLeaves && leafParticles.map((leaf, i) => (
        <FloatingLeaf key={i} {...leaf} />
      ))}

      {/* ── Title ── */}
      <AnimatePresence>
        {showTitle && (
          <motion.div
            style={{
              position: 'absolute',
              top: '10%',
              left: '50%',
              transform: 'translateX(-50%)',
              textAlign: 'center',
              zIndex: 20,
              whiteSpace: 'nowrap',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {/* Welcome text */}
            <motion.p
              style={{
                fontFamily: "'Instrument Sans', sans-serif",
                fontSize: '1rem',
                color: '#558B2F',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                fontWeight: 600,
                marginBottom: '12px',
              }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Welcome to
            </motion.p>

            {/* MEDI letters */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '4px' }}>
              {titleLetters.map((letter, i) => (
                <motion.span
                  key={i}
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: 'clamp(4rem, 12vw, 7rem)',
                    fontWeight: 900,
                    color: i < 1 ? '#1B5E20' : '#2E7D32',
                    fontStyle: i > 0 ? 'italic' : 'normal',
                    lineHeight: 1,
                    display: 'inline-block',
                    textShadow: '0 4px 24px rgba(46,125,50,0.15)',
                  }}
                  initial={{ opacity: 0, y: 30, scale: 0.6 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.12,
                    type: 'spring',
                    stiffness: 180,
                    damping: 14,
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* Tagline */}
            <motion.p
              style={{
                fontFamily: "'Instrument Sans', sans-serif",
                fontSize: '1rem',
                color: '#558B2F',
                letterSpacing: '0.12em',
                fontWeight: 400,
                marginTop: '10px',
                fontStyle: 'italic',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Medicinal Plant Intelligence
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Tree ── */}
      <motion.div
        style={{
          width: phase === 'full' ? '320px' : '120px',
          height: phase === 'full' ? '420px' : '200px',
          position: 'relative',
          zIndex: 15,
          marginBottom: '40px',
          cursor: clicked ? 'default' : 'pointer',
          filter: 'drop-shadow(0 8px 24px rgba(46,125,50,0.2))',
        }}
        animate={{
          width: phase === 'full' ? 320 : 120,
          height: phase === 'full' ? 420 : 200,
        }}
        transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
        whileHover={!clicked ? { scale: 1.04 } : {}}
        whileTap={!clicked ? { scale: 0.97 } : {}}
      >
        <NatureTree phase={phase} />
      </motion.div>

      {/* ── Tap hint ── */}
      <AnimatePresence>
        {hint && !clicked && (
          <motion.div
            style={{
              position: 'absolute',
              bottom: '160px',
              textAlign: 'center',
              zIndex: 20,
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: [0, 1, 0.6, 1], y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <p style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.1rem',
              color: '#388E3C',
              fontStyle: 'italic',
              letterSpacing: '0.04em',
            }}>
              tap the tree 🌳
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Enter button ── */}
      <AnimatePresence>
        {showButton && (
          <motion.div
            style={{
              position: 'absolute',
              bottom: '48px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '12px',
              zIndex: 30,
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 160 }}
          >
            <motion.button
              onClick={(e) => { e.stopPropagation(); onEnter(); }}
              style={{
                padding: '16px 48px',
                background: 'linear-gradient(135deg, #2E7D32, #66BB6A)',
                color: 'white',
                border: 'none',
                borderRadius: '999px',
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.15rem',
                fontWeight: 700,
                fontStyle: 'italic',
                cursor: 'pointer',
                boxShadow: '0 8px 28px rgba(46,125,50,0.35)',
                letterSpacing: '0.03em',
              }}
              whileHover={{ scale: 1.05, boxShadow: '0 12px 36px rgba(46,125,50,0.45)' }}
              whileTap={{ scale: 0.97 }}
            >
              Enter Medi 🌿
            </motion.button>
            <motion.p
              style={{
                fontFamily: "'Instrument Sans', sans-serif",
                fontSize: '0.78rem',
                color: '#7CB342',
                letterSpacing: '0.08em',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Identify · Explore · Discover
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
