export type Format = {
  label: string
  value: string
}

export const formats: Format[] = [
  { label: 'PNG', value: 'png' },
  { label: 'SVG', value: 'svg' },
]

export type Timeframe = {
  label: string
  value: string
}

export const timeframes: Timeframe[] = [
  { label: 'All time', value: 'alltime' },
  { label: '5 years', value: '5y' },
  { label: '3 years', value: '3y' },
  { label: '1 year', value: '1y' },
  { label: '270 days', value: '270d' },
  { label: '180 days', value: '180d' },
  { label: '90 days', value: '90d' },
  { label: '30 days', value: '30d' },
  { label: '7 days', value: '7d' },
  { label: '3 days', value: '3d' },
  { label: '1 day', value: '1d' },
  { label: '12 hours', value: '12h' },
  { label: '6 hours', value: '6h' },
]

export type Type = {
  label: string
  value: string
}

export const types: Type[] = [
  { label: 'Servers', value: 'servers' },
  { label: 'Monthly Votes', value: 'monthlyvotes' },
  { label: 'Total Votes', value: 'totalvotes' },
]
