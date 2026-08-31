import { JSX } from 'react'
import dynamic from 'next/dynamic'

const PricingPage = dynamic(() => import('../_components/PricingPage'), {
  
})

export default function PricingRoute(): JSX.Element {
  return <PricingPage />
}