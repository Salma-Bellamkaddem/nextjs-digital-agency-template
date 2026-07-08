export type Point2D = [number, number]
export type Polygon = Point2D[]

/**
 * Parse un attribut `d` de type "M x,y L x,y L x,y Z M ... Z"
 * (facettes low-poly = lignes droites uniquement).
 * Pour des tracés avec courbes de Bézier (sortie Figma/Illustrator complexe),
 * remplacer par `svg-path-properties` ou `path-data-parser`.
 */
export function parseSubpaths(d: string): Polygon[] {
  const subpaths: Polygon[] = []
  let current: Point2D[] = []
  const re = /([MLZ])\s*([^MLZ]*)/gi
  let match: RegExpExecArray | null

  while ((match = re.exec(d))) {
    const cmd = match[1].toUpperCase()
    if (cmd === 'Z') {
      if (current.length) subpaths.push(current)
      current = []
      continue
    }
    const nums = match[2]
      .trim()
      .split(/[\s,]+/)
      .filter(Boolean)
      .map(Number)
    for (let i = 0; i < nums.length; i += 2) {
      current.push([nums[i], nums[i + 1]])
    }
  }
  if (current.length) subpaths.push(current)
  return subpaths
}

function triangleArea(a: Point2D, b: Point2D, c: Point2D): number {
  return Math.abs((b[0] - a[0]) * (c[1] - a[1]) - (c[0] - a[0]) * (b[1] - a[1])) / 2
}

function randomPointInTriangle(a: Point2D, b: Point2D, c: Point2D): Point2D {
  let r1 = Math.random()
  const r2 = Math.random()
  r1 = Math.sqrt(r1)
  const x = (1 - r1) * a[0] + r1 * (1 - r2) * b[0] + r1 * r2 * c[0]
  const y = (1 - r1) * a[1] + r1 * (1 - r2) * b[1] + r1 * r2 * c[1]
  return [x, y]
}

function fanTriangulate(polygon: Polygon): [Point2D, Point2D, Point2D][] {
  const triangles: [Point2D, Point2D, Point2D][] = []
  for (let i = 1; i < polygon.length - 1; i++) {
    triangles.push([polygon[0], polygon[i], polygon[i + 1]])
  }
  return triangles
}

/**
 * Échantillonne `count` points à l'INTÉRIEUR d'un ensemble de facettes
 * (polygones), pondéré par l'aire de chaque triangle → répartition uniforme
 * réelle sur toute la surface, pas juste sur le contour.
 */
export function samplePolygons(subpaths: Polygon[], count: number): Point2D[] {
  const triangles = subpaths.flatMap(fanTriangulate)
  if (triangles.length === 0) return []

  const areas = triangles.map(([a, b, c]) => triangleArea(a, b, c))
  const totalArea = areas.reduce((s, a) => s + a, 0)
  const cumulative: number[] = []
  areas.reduce((acc, a, i) => {
    const next = acc + a
    cumulative[i] = next
    return next
  }, 0)

  const points: Point2D[] = []
  for (let i = 0; i < count; i++) {
    const r = Math.random() * totalArea
    const idx = cumulative.findIndex((c) => r <= c)
    const [a, b, c] = triangles[idx === -1 ? triangles.length - 1 : idx]
    points.push(randomPointInTriangle(a, b, c))
  }
  return points
}