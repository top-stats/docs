import type { Format, Timeframe, Type } from './options'

export type WidgetOptions = {
  botId: string
  type: Type | null
  format: Format | null
  timeframe: Timeframe | null
}

const WIDGET_BASE_URL = 'https://widgets.topstats.gg'

export function normalizeBotId(value: string) {
  return value.replace(/\D/g, '')
}

export function buildWidgetUrl({
  botId,
  type,
  format,
  timeframe,
}: WidgetOptions) {
  const normalizedBotId = normalizeBotId(botId)

  if (!normalizedBotId || !type || !format) {
    return null
  }

  const url = new URL(
    `${normalizedBotId}/${type.value}.${format.value}`,
    `${WIDGET_BASE_URL}/`,
  )

  if (timeframe?.value) {
    url.searchParams.set('timeframe', timeframe.value)
  }

  return url.toString()
}
