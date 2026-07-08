import { JSX } from 'react'
import dynamic from 'next/dynamic'

import Stack from '@mui/material/Stack'

const HomeHero = dynamic(() => import('./_components/home-hero'))

const HomeAbout = dynamic(() => import('./_components/home-about'))

const HomeVision = dynamic(() => import('./_components/Homevision'))

const HomeMethodSection = dynamic(
  () => import('./_components/ Homemethod')
)

const HomeFaq = dynamic(() => import('./_components/Homefaq'))

const HomeMotivation = dynamic(
  () => import('./_components/home-our-motivation')
)

const HomeServices = dynamic(
  () => import('./_components/home-services')
)

const HomeCTA = dynamic(() => import('./_components/home-cta'))

const HomePage = (): JSX.Element => {
  return (
    <Stack direction="column">
      <HomeHero />

      <HomeAbout />

      <HomeServices />

      <HomeMethodSection />

      <HomeVision />

      <HomeMotivation />

      <HomeFaq />

      <HomeCTA />
    </Stack>
  )
}

export default HomePage