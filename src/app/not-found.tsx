import { ArrowRightIcon } from 'lucide-react'

export default function NotFound() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center text-center'>
      <h1 className='text-9xl font-bold'>404</h1>
      <p className='text-muted-foreground/80 scroll-m-20'>
        Uh oh! We couldn't find what you were looking for!
      </p>

      <a
        href='/'
        className='mt-6 inline-flex h-10.5 items-center justify-center gap-2 rounded-[10px] border border-gray-200 bg-white px-4 py-2 shadow-sm transition-all duration-300 hover:scale-105 hover:border-[#8A9DE4] hover:bg-accent hover:text-gray-900 hover:shadow-md dark:border-[#ffffff1a] dark:bg-[#10111a] dark:hover:text-white group'
      >
        <span className='text-base font-medium'>Return Home</span>
        <ArrowRightIcon className='h-4 w-4 transition-transform group-hover:translate-x-1' />
      </a>
    </div>
  )
}
