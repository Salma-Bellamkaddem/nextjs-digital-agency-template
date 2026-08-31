import dynamic from 'next/dynamic'
import Stack from '@mui/material/Stack'
import HomeTeam from '@/app/_components/home-our-motivation'
import HomeBlogSection from '../_components/home-hero/home-blog'

const HomeHero = dynamic(() => import('@/app/_components/home-hero'))

const HomeAbout = dynamic(() => import('@/app/_components/home-about'))

const HomeServices = dynamic(
  () => import('@/app/_components/home-services')
)

const HomeMethodSection = dynamic(
  () => import('../_components/ Homemethod')
)

const HomeVision = dynamic(
  () => import('@/app/_components/Homevision')
)

const HomeOurMotivation = dynamic(
  () => import('@/app/_components/recrutement')
)

const HomeFaq = dynamic(
  () => import('@/app/_components/Homefaq')
)

const HomeCta = dynamic(
  () => import('@/app/_components/home-cta')
)
const Homerecrutement = dynamic(
  () => import('@/app/_components/recrutement')
)
const HomeContact = dynamic(
  () => import('@/app/_components/home-contact')
)

export default function HomePage() {
  return (
    <Stack direction="column">
      <HomeHero />
      <HomeAbout />
      <HomeServices />
      <HomeMethodSection />
      <HomeVision />
      <HomeBlogSection />
      <HomeOurMotivation />
    
      <HomeTeam />
      <HomeFaq />
      <HomeCta />
    
    </Stack>
  )
}