import Box from '@mui/material/Box'

import HomeHeroContent from './home-hero/home-hero-content'
import HomeHeroDecoration from './home-hero/home-hero-decoration'

const HomeHero = () => {
  return (
    <Box
      id="home-hero"
      sx={{
        width: '100%',
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
        bgcolor: 'background.default',
      }}
    >
      <HomeHeroContent />
      <HomeHeroDecoration />
    </Box>
  )
}

export default HomeHero