import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function WidgetURLBuilder() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
      <WidgetCard />
      <PreviewCard />
    </div>
  )
}

function WidgetCard() {
  return (
    <Card className='bg-accent/25'>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
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

function PreviewCard() {
  return (
    <Card className='bg-fd-accent/50'>
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
