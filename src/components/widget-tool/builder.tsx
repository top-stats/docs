'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Field, FieldLabel } from '@/components/ui/field'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from '@/components/ui/combobox'
import { Input } from '@/components/ui/input'
import { ChevronRight, Copy, Check } from 'lucide-react'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from '@/components/ui/input-group'
import {
  formats,
  timeframes,
  types,
  type Format,
  type Timeframe,
  type Type,
} from './options'
import { buildWidgetUrl, normalizeBotId } from './url-builder'
import { AspectRatio } from '@/components/ui/aspect-ratio'

export function WidgetURLBuilder() {
  const [botId, setBotId] = useState('')
  const [widgetType, setWidgetType] = useState<Type | null>(types[0] ?? null)
  const [widgetFormat, setWidgetFormat] = useState<Format | null>(
    formats[0] ?? null,
  )
  const [widgetTimeframe, setWidgetTimeframe] = useState<Timeframe | null>(
    timeframes[0] ?? null,
  )
  const [widgetUrl, setWidgetUrl] = useState('')

  const normalizedBotId = normalizeBotId(botId)
  const canCreateWidget = Boolean(normalizedBotId && widgetType && widgetFormat)

  const handleCreateWidget = () => {
    const nextUrl = buildWidgetUrl({
      botId,
      type: widgetType,
      format: widgetFormat,
      timeframe: widgetTimeframe,
    })
    setWidgetUrl(nextUrl ?? '')
  }

  const handleReset = () => {
    setBotId('')
    setWidgetType(types[0] ?? null)
    setWidgetFormat(formats[0] ?? null)
    setWidgetTimeframe(timeframes[0] ?? null)
    setWidgetUrl('')
  }

  return (
    <div className='flex flex-col md:flex-row gap-4'>
      <div className='w-full md:w-auto'>
        <WidgetCard
          botId={botId}
          onBotIdChange={setBotId}
          widgetType={widgetType}
          onWidgetTypeChange={setWidgetType}
          widgetFormat={widgetFormat}
          onWidgetFormatChange={setWidgetFormat}
          widgetTimeframe={widgetTimeframe}
          onWidgetTimeframeChange={setWidgetTimeframe}
          onCreateWidget={handleCreateWidget}
          onReset={handleReset}
          canCreate={canCreateWidget}
        />
      </div>
      <div className='w-full md:flex-1'>
        <PreviewCard
          widgetUrl={widgetUrl}
          onWidgetUrlChange={setWidgetUrl}
          hasPreview={Boolean(widgetUrl)}
        />
      </div>
    </div>
  )
}

type WidgetCardProps = {
  botId: string
  onBotIdChange: (value: string) => void
  widgetType: Type | null
  onWidgetTypeChange: (value: Type | null) => void
  widgetFormat: Format | null
  onWidgetFormatChange: (value: Format | null) => void
  widgetTimeframe: Timeframe | null
  onWidgetTimeframeChange: (value: Timeframe | null) => void
  onCreateWidget: () => void
  onReset: () => void
  canCreate: boolean
}

function WidgetCard({
  botId,
  onBotIdChange,
  widgetType,
  onWidgetTypeChange,
  widgetFormat,
  onWidgetFormatChange,
  widgetTimeframe,
  onWidgetTimeframeChange,
  onCreateWidget,
  onReset,
  canCreate,
}: WidgetCardProps) {
  return (
    <Card className='bg-fd-accent/20 border h-full'>
      <CardHeader>
        <CardTitle>Create your widget</CardTitle>
        <CardDescription>
          Select the bot and widget type to generate your widget URL
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className='flex flex-col gap-6'>
          <Field className='w-full max-w-xs'>
            <FieldLabel>
              Bot ID<span className='text-destructive'>*</span>
            </FieldLabel>
            <Input
              id='bot_id'
              type='text'
              inputMode='numeric'
              placeholder='Enter the Bot ID here'
              required
              value={botId}
              onChange={(event) =>
                onBotIdChange(normalizeBotId(event.target.value))
              }
            />
          </Field>

          <Field className='w-full max-w-xs'>
            <FieldLabel>Widget type</FieldLabel>
            <Combobox
              items={types}
              itemToStringValue={(type: Type) => type.label}
              value={widgetType}
              onValueChange={onWidgetTypeChange}
            >
              <ComboboxInput placeholder='Choose a widget type' showClear />
              <ComboboxContent className='bg-fd-card'>
                <ComboboxEmpty>No items found.</ComboboxEmpty>
                <ComboboxList>
                  {(type: Type) => (
                    <ComboboxItem key={type.value} value={type}>
                      {type.label}
                    </ComboboxItem>
                  )}
                </ComboboxList>
              </ComboboxContent>
            </Combobox>
          </Field>

          <Field className='w-full max-w-xs'>
            <FieldLabel>Widget format</FieldLabel>
            <Combobox
              items={formats}
              itemToStringValue={(format: Format) => format.label}
              value={widgetFormat}
              onValueChange={onWidgetFormatChange}
            >
              <ComboboxInput placeholder='Select a format' showClear />
              <ComboboxContent className='bg-fd-card'>
                <ComboboxEmpty>No items found.</ComboboxEmpty>
                <ComboboxList>
                  {(format: Format) => (
                    <ComboboxItem key={format.value} value={format}>
                      {format.label}
                    </ComboboxItem>
                  )}
                </ComboboxList>
              </ComboboxContent>
            </Combobox>
          </Field>
          <Field className='w-full max-w-xs'>
            <FieldLabel>Widget timeframe</FieldLabel>
            <Combobox
              items={timeframes}
              itemToStringValue={(timeframe: Timeframe) => timeframe.label}
              value={widgetTimeframe}
              onValueChange={onWidgetTimeframeChange}
            >
              <ComboboxInput placeholder='Select a timeframe' showClear />
              <ComboboxContent className='bg-fd-card'>
                <ComboboxEmpty>No items found.</ComboboxEmpty>
                <ComboboxList>
                  {(timeframe: Timeframe) => (
                    <ComboboxItem key={timeframe.value} value={timeframe}>
                      {timeframe.label}
                    </ComboboxItem>
                  )}
                </ComboboxList>
              </ComboboxContent>
            </Combobox>
          </Field>
        </div>
      </CardContent>
      <CardFooter className='gap-2 max-w-xs'>
        <Button
          variant='default'
          className='flex-1'
          type='button'
          onClick={onCreateWidget}
          disabled={!canCreate}
        >
          Create widget <ChevronRight />
        </Button>
        <Button variant='destructive' type='button' onClick={onReset}>
          Reset
        </Button>
      </CardFooter>
    </Card>
  )
}

type PreviewCardProps = {
  widgetUrl: string
  onWidgetUrlChange: (value: string) => void
  hasPreview: boolean
}

function PreviewCard({
  widgetUrl,
  onWidgetUrlChange,
  hasPreview,
}: PreviewCardProps) {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = async () => {
    try {
      if (!widgetUrl) {
        setIsCopied(false)
        return
      }
      await navigator.clipboard.writeText(widgetUrl)
      setIsCopied(true)
      window.setTimeout(() => setIsCopied(false), 1500)
    } catch {
      setIsCopied(false)
    }
  }

  return (
    <Card className='bg-fd-accent/20 border h-full'>
      <CardHeader>
        <CardTitle>
          <InputGroup>
            <InputGroupInput
              placeholder='https://widgets.topstats.gg/...'
              value={widgetUrl}
              onChange={(event) => onWidgetUrlChange(event.target.value)}
            />
            <InputGroupAddon align='inline-end'>
              <InputGroupButton
                aria-label='Copy'
                title='Copy'
                size='icon-xs'
                onClick={handleCopy}
              >
                {isCopied ? <Check /> : <Copy />}
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </CardTitle>
        <CardDescription>
          This is a preview of the generated widget URL. Click the copy button
        </CardDescription>
      </CardHeader>
      <CardContent>
        <AspectRatio ratio={55 / 27} className='rounded-[5px] bg-accent border'>
          <div className='relative flex h-full w-full items-center justify-center sm:p-0'>
            {widgetUrl ? (
              <img
                src={widgetUrl}
                alt='TopStats Widget'
                className='h-full w-full'
                loading='lazy'
              />
            ) : (
              <p className='w-full h-full flex items-center justify-center text-muted-foreground text-xs sm:text-base text-center'>
                Enter your Bot ID to preview your TopStats Widget
              </p>
            )}
          </div>
        </AspectRatio>
      </CardContent>
    </Card>
  )
}
