'use client'

export const Changelog = (props: React.ComponentProps<'div'>) => {
  return <div className='flex flex-col mt-4' {...props} />
}

type ChangelogItemProps = React.ComponentProps<'div'> & {
  date: string
}

export const ChangelogItem = ({
  children,
  date,
  ...props
}: ChangelogItemProps) => {
  return (
    <div className='flex sm:flex-row flex-col gap-x-6' {...props}>
      <div className='relative w-28 shrink-0 h-auto max-sm:mb-2'>
        <p className='mt-0 top-20 left-0 sm:sticky text-sm text-neutral-400'>
          {date}
        </p>
      </div>
      <div className='relative w-2.5 shrink-0 h-auto pt-1.25 hidden sm:flex flex-col items-center'>
        <div className='relative size-2.5 shrink-0 rounded-full bg-fd-primary'>
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-4.5 shrink-0 rounded-full border border-primary' />
        </div>
        <div className='absolute w-px rounded-full top-4.5 left-1/2 -translate-x-1/2 -bottom-0.5 bg-fd-primary' />
      </div>
      <div className='flex-1 h-auto pb-24'>{children}</div>
    </div>
  )
}

export const ChangelogTitle = ({
  children,
  ...props
}: React.ComponentProps<'div'>) => {
  return (
    <div className='-mt-0.75 [&>h2]:mt-0 [&>h2]:mb-6 [&>h2]:w-fit' {...props}>
      {children}
    </div>
  )
}

export const ChangelogItemTitle = ({
  children,
  ...props
}: React.ComponentProps<'h3'>) => {
  return (
    <h3 className='mt-0 mb-2.5 text-lg' {...props}>
      {children}
    </h3>
  )
}

export const ChangelogItemDescription = ({
  children,
  ...props
}: React.ComponentProps<'div'>) => {
  return (
    <div className='mt-0 text-sm text-muted-foreground' {...props}>
      {children}
    </div>
  )
}
