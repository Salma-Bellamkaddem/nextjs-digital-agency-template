'use client'

import React from 'react'
import Box from '@mui/material/Box'

const BRAND_PINK = '#F5A6D0'

/**
 * Carte "papier" dessinée en CSS pur (pas d'image), avec un motif
 * de points façon demi-teinte formant un "N" stylisé, comme la maquette.
 */
const PaperCard = ({ width = 420 }: { width?: number }) => {
  const height = width * (1000 / 900) // même ratio que l'ancienne image

  return (
    <Box
      sx={{
        width,
        height,
        backgroundColor: '#fdfdfd',
        borderRadius: '4px 16px 4px 16px',
        boxShadow: '0 30px 60px -15px rgba(30,10,25,0.25)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Motif de points en SVG formant un "N" */}
      <Box
        component="svg"
        viewBox="0 0 300 340"
        sx={{
          position: 'absolute',
          top: '10%',
          left: '15%',
          width: '70%',
          height: 'auto',
          opacity: 0.55,
        }}
      >
        {/* Génère une grille de points, en ne gardant que ceux
            qui tombent le long des deux jambages + la diagonale du N */}
        {Array.from({ length: 20 }).map((_, row) =>
          Array.from({ length: 16 }).map((_, col) => {
            const x = col * 20
            const y = row * 18
            const colFrac = col / 15
            const rowFrac = row / 19

            // Jambage gauche : colonnes 0-2
            const onLeftLeg = col <= 2
            // Jambage droit : colonnes 13-15
            const onRightLeg = col >= 13
            // Diagonale : suit col ≈ row proportionnellement
            const onDiagonal = Math.abs(colFrac - rowFrac) < 0.09

            if (!onLeftLeg && !onRightLeg && !onDiagonal) return null

            // Points plus petits sur les bords pour un effet demi-teinte
            const edgeFade =
              Math.min(rowFrac, 1 - rowFrac) * 2 // 0 aux extrémités, 1 au centre
            const radius = 3 + edgeFade * 2.5

            return (
              <circle
                key={`${row}-${col}`}
                cx={x}
                cy={y}
                r={radius}
                fill={BRAND_PINK}
              />
            )
          })
        )}
      </Box>
    </Box>
  )
}

export default PaperCard