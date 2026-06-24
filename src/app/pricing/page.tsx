import { JSX } from 'react'
import dynamic from 'next/dynamic'
import PageLoader from '@/components/section-loader'

const PricingPage = dynamic(() => import('../_components/PricingPage'), {
  loading: () => <PageLoader />,
})

export default function PricingRoute(): JSX.Element {
  return <PricingPage />
}