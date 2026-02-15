'use client'
import { Button } from '@/components/ui/button'
import { Field, FieldLabel } from '@/components/ui/field'
import {
  Card,
  CardAction,
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

export function WidgetURLBuilder() {
  return (
    <div className='flex flex-col md:flex-row gap-4'>
      <div className='w-full md:w-auto'>
        <WidgetCard />
      </div>
      <div className='w-full md:flex-1'>
        <PreviewCard />
      </div>
    </div>
  )
}

type Format = {
  label: string
  value: string
}

const formats: Format[] = [
  { label: 'PNG', value: 'png' },
  { label: 'SVG', value: 'svg' },
]

type Timeframe = {
  label: string
  value: string
}

const timeframes: Timeframe[] = [
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

type Type = {
  label: string
  value: string
}

const types: Type[] = [
  { label: 'Servers', value: 'servers' },
  { label: 'Monthly Votes', value: 'monthlyvotes' },
  { label: 'Total Votes', value: 'totalvotes' },
]

function WidgetCard() {
  return (
    <Card className='bg-fd-accent/20 border h-full'>
      <CardHeader>
        <CardTitle>Create your widget</CardTitle>
        <CardDescription>
          Select the bot and widget type to generate your widget URL
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className='flex flex-col gap-6'>
            <Field className='w-full max-w-xs'>
              <FieldLabel>
                Bot-ID<span className='text-destructive'>*</span>
              </FieldLabel>
              <Input
                id='bot_id'
                type='text'
                inputMode='numeric'
                placeholder='Enter the Bot ID here'
                required
              />
            </Field>

            <Field className='w-full max-w-xs'>
              <FieldLabel>Widget type</FieldLabel>
              <Combobox
                items={types}
                itemToStringValue={(type: Type) => type.label}
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
        </form>
      </CardContent>
      <CardFooter className='gap-2'>
        <Button variant='default'>start</Button>
        <Button variant='destructive'>Reset</Button>
      </CardFooter>
    </Card>
  )
}

function PreviewCard() {
  return (
    <Card className='bg-fd-accent/20 border h-full'>
      <CardHeader>
        <CardTitle>Card Titdle</CardTitle>
        <CardDescription>Card Description</CardDescription>
        <CardAction>Card Action</CardAction>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  )
}
