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
import { ChevronRight } from 'lucide-react'
import {
  formats,
  timeframes,
  types,
  type Format,
  type Timeframe,
  type Type,
} from './options'

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
      <CardFooter className='gap-2 max-w-xs'>
        <Button variant='default' className='flex-1'>
          Create widget <ChevronRight />
        </Button>
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
