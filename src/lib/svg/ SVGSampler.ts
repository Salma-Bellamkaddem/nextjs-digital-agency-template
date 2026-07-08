'use client'

import { Point2D } from "framer-motion";
import { parseSubpaths, samplePolygons } from "./PolygonSampler";




export interface SvgSamplingConfig {
  url: string
  viewBox: { w: number; h: number }
  groups: Record<string, { ids: string[]; count: number }>
}

export type SampledGroups = Record<string, Point2D[]>

const cachedSvgText: Record<string, string> = {} // const, pas let (eslint prefer-const)

async function fetchSvgText(url: string): Promise<string> {
  if (cachedSvgText[url]) return cachedSvgText[url]
  const res = await fetch(url)
  const text = await res.text()
  cachedSvgText[url] = text
  return text
}

export async function sampleSvgGroups(config: SvgSamplingConfig): Promise<SampledGroups> {
  const svgText = await fetchSvgText(config.url)
  const doc = new DOMParser().parseFromString(svgText, 'image/svg+xml')

  const result: SampledGroups = {}

  for (const [groupName, { ids, count }] of Object.entries(config.groups)) {
    const subpaths = ids.flatMap((id) => {
      const el = doc.getElementById(id) as SVGPathElement | null
      const d = el?.getAttribute('d')
      return d ? parseSubpaths(d) : []
    })

    const rawPoints: [number, number][] = samplePolygons(subpaths, count)

    result[groupName] = rawPoints.map(([x, y]) => ({
      x: (x / config.viewBox.w) * 100,
      y: (y / config.viewBox.h) * 100,
    }))
  }

  return result
}