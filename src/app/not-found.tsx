import { cn } from '@/lib/cn'
import { buttonVariants } from 'fumadocs-ui/components/ui/button'

export default function NotFound() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center text-center'>
      <h1 className='text-9xl font-bold'>404</h1>
      <p className='text-fd-muted-foreground scroll-m-20'>
        Uh oh! We couldn't find what you were looking for!
      </p>
      <a
        href='/'
        className={cn(buttonVariants({ variant: 'primary' }), 'mt-6')}
      >
        Return Home
      </a>
    </div>
  )
}
