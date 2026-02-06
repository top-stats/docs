'use client'
import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRightCircleIcon,
  ArrowRightIcon,
  BarChartIcon,
  BookIcon,
  BookOpenIcon,
  BotIcon,
  CirclePlusIcon,
  ImageIcon,
  SearchIcon,
  ServerIcon,
  Settings2Icon,
  SettingsIcon,
  SparklesIcon,
} from 'lucide-react'

import BannerLightSvg from '@/app/banner-light.svg'
import BannerSvg from '@/app/banner.svg'
import LogoSvg from '@/app/logo.svg'
import ChartServersSvg from 'public/homepage/servers-chart.svg'
import ChartCustomSvg from 'public/homepage/custom-chart.svg'
import ChartCompareSvg from 'public/homepage/compare-chart.svg'
import { cn } from '../../lib/cn'
import { buttonVariants } from 'fumadocs-ui/components/ui/button'
import { cva } from 'class-variance-authority'

import {
  type ComponentProps,
  Fragment,
  type HTMLAttributes,
  type ReactElement,
  type ReactNode,
  type RefObject,
} from 'react'

import './homepage.css'

function HeroSection() {
  return (
    <div
      className={clsx(
        'relative z-2 mt-24 flex w-full flex-col items-center gap-1 text-center sm:mt-32 xl:mt-40',
      )}
    >
      <h1 className='mb-6 flex font-bold gap-4 text-4xl min-[360px]:text-5xl sm:text-7xl xl:text-8xl'>
        <Image
          src={LogoSvg}
          alt='TopStats Logo'
          className='h-15 w-15 sm:h-22 sm:w-22 xl:h-30 xl:w-30'
          width={120}
          height={120}
        />
        TopStats.gg
      </h1>
      <p className='max-w-170 text-muted-foreground text-xl lg:text-2xl'>
        Get started using TopStats API and power your service with analytics.
      </p>
      <div className='grid w-auto gap-3 sm:w-fit sm:grid-cols-2'>
        <a
          href='/docs/api'
          className={cn(buttonVariants({ variant: 'primary' }), 'mt-6 sm:mt-6')}
        >
          Get Started
        </a>
        <a
          href='https://topstats.gg/'
          target='_blank'
          className={cn(buttonVariants({ variant: 'primary' }), 'mt-6 sm:mt-6')}
        >
          Our Site
        </a>
      </div>
    </div>
  )
}

const previewButtonVariants = cva(
  'w-20 h-8 text-sm font-medium transition-colors rounded-full',
  {
    variants: {
      active: {
        true: 'text-fd-primary-foreground',
        false: 'text-fd-muted-foreground',
      },
    },
  },
)
export function Widgets(props: ComponentProps<'div'>) {
  const [active, setActive] = useState(0)
  const previews = [
    {
      image: ChartServersSvg,
      name: 'Servers',
    },
    {
      image: ChartCustomSvg,
      name: 'Custom',
    },
    {
      image: ChartCompareSvg,
      name: 'Compare',
    },
  ]

  return (
    <>
      <div className='flex flex-col sm:mt-48'>
        <h2 className='mb-2 font-bold text-2xl sm:text-3xl'>Widgets</h2>
        <p className='text-lg text-muted-foreground sm:text-xl'>
          Visualize your statistics
        </p>
      </div>

      <div
        {...props}
        className={cn(
          'relative grid gap-3 rounded-xl border-2 bg-card p-5 text-card-foreground bg-fd-accent/25 mt-8',
          props.className,
        )}
      >
        <div className='absolute flex flex-row left-1/2 -translate-1/2 bottom-0 z-2 p-0.5 rounded-full bg-fd-card border shadow-xl'>
          <div
            role='none'
            className='absolute bg-fd-primary rounded-full w-20 h-8 transition-transform z-[-1]'
            style={{
              transform: `translateX(calc(var(--spacing) * 20 * ${active}))`,
            }}
          />
          {previews.map((item, i) => (
            <button
              key={i}
              className={cn(previewButtonVariants({ active: active === i }))}
              onClick={() => setActive(i)}
            >
              {item.name}
            </button>
          ))}
        </div>
        {previews.map((item, i) => (
          <Image
            key={i}
            src={item.image}
            alt='preview'
            className={cn(
              'col-start-1 row-start-1 select-none',
              active === i
                ? 'animate-in fade-in slide-in-from-bottom-12 duration-800'
                : 'invisible',
            )}
          />
        ))}
      </div>
    </>
  )
}

function Search() {
  function BotCard({
    img,
    duration,
    children,
  }: {
    img: any
    duration: string
    children: string
  }) {
    return (
      <div className='flex flex-row gap-3 rounded-xl border bg-card p-5 text-card-foreground bg-white dark:bg-zinc-900'>
        <div className='flex items-center'>
          <Image
            src={img}
            alt='Bot Image'
            className='h-12 w-12 rounded-lg'
            width={64}
            height={64}
          />
        </div>
        <div className='flex flex-col gap-2'>
          <p className='font-medium text-lg'>{children}</p>
          <p className='text-muted-foreground text-sm'>{duration}</p>
        </div>
      </div>
    )
  }

  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.4 }}
      className='relative z-10 mt-28 hidden gap-4 overflow-hidden rounded-3xl border bg-linear-to-br from-secondary p-5 pb-0 sm:grid sm:grid-cols-1 sm:max-lg:pr-10 lg:mt-48 lg:grid-cols-[1fr_0.8fr]'
      style={{
        background: 'var(--background-linear-gradient)',
      }}
    >
      <div className='green-gradient' />
      <div className='flex max-w-187.5 flex-col gap-3 sm:p-5 lg:max-w-none'>
        <h2 className='mb-2 font-bold text-3xl sm:text-4xl'>Search for bots</h2>
        <p className='text-lg text-muted-foreground'>
          Get statistics from any top.gg bot
        </p>
        <div className='mt-3 flex flex-row gap-2.5'>
          <Link
            className={clsx(
              'rounded-full bg-linear-to-r from-cyan-500 to-green-500 px-6 py-3 font-medium text-base text-white',
              'flex h-fit flex-row items-center gap-2',
            )}
            href='/docs/api/reference/discord/bots'
          >
            Learn more <ArrowRightCircleIcon className='inline' />
          </Link>
        </div>
      </div>
      <div className='absolute top-0 right-8 z-2 max-sm:hidden lg:right-16'>
        <div className='mx-auto h-36 w-0.5 bg-linear-to-b from-green-400 to-cyan-600' />
        <div className='rounded-full bg-linear-to-br from-green-400 to-cyan-600 p-4 text-white shadow-green-300/50 shadow-lg'>
          <SearchIcon className='h-8 w-8' />
        </div>
      </div>
      <motion.div
        whileInView={{ y: 0 }}
        initial={{ y: 100 }}
        transition={{ duration: 0.5 }}
        className={clsx(
          'mt-4 flex w-full flex-col max-md:ml-0 max-lg:ml-0',
          'lg:mt-12 lg:w-162.5 lg:-mr-32 lg:max-h-full',
        )}
      >
        <div className='stats-card mr-20 translate-y-1.25'>
          <div className='flex w-full max-w-100 flex-col gap-6 rounded-2xl bg-white p-5 dark:bg-zinc-900 h-full justify-center'>
            <div className='flex flex-row items-center w-full h-full min-h-30'>
              <div className='flex flex-col justify-center'>
                <span className='text-zinc-400 text-lg font-semibold mb-2 tracking-wide'>
                  Servers
                </span>
                <span className='text-5xl sm:text-6xl font-extrabold text-zinc-900 dark:text-white leading-tight drop-shadow-md'>
                  6.878
                </span>
              </div>
              <div className='ml-auto flex flex-col items-center justify-center'>
                <div className='rounded-2xl border-2 border-zinc-200 dark:border-zinc-700 bg-zinc-100/80 dark:bg-zinc-900/70 px-7 py-4 flex flex-col items-center min-w-22.5 shadow-md'>
                  <span className='text-xs text-zinc-500 font-bold tracking-widest mb-1'>
                    RANK
                  </span>
                  <span className='text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-zinc-100'>
                    910
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='search-results z-2'>
          <div className='-mt-15 ml-37.5 flex flex-col gap-5 max-md:mt-6 max-md:ml-0'>
            <BotCard
              img='https://cdn.discordapp.com/avatars/282859044593598464/156a0d2872579f1ffcaa5d2127239bfd.webp'
              duration='All-in-one bot: welcome, logs, social, moderation & more'
            >
              ProBot ✨
            </BotCard>
            <BotCard
              img='https://cdn.discordapp.com/avatars/155149108183695360/b4fdfc64edff74c37e1574d34fad66c2.webp'
              duration='Dyno is a fully customizable bot for your server with a web'
            >
              Dyno
            </BotCard>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function Growth() {
  return (
    <div className='z-10 mt-20'>
      <div className='flex flex-col items-center gap-5 text-center'>
        <div
          className={clsx(
            'h-36 w-1 bg-linear-to-b',
            'from-transparent via-purple-400 to-purple-600 dark:to-purple-100',
          )}
        />
        <h2 className='font-bold text-3xl sm:text-5xl'>Track your growth</h2>
        <p className='text-lg text-muted-foreground sm:text-xl'>
          Use TopStats API to get detailed analytics and track your bot's growth
          over time.
        </p>
      </div>
      <div className='mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2'>
        <div
          className={clsx(
            'row-span-2',
            'text-secondary-foreground bg-linear-to-b from-secondary border rounded-2xl p-5 shadow-xl flex flex-col',
          )}
          style={{
            background: 'var(--background-linear-gradient)',
          }}
        >
          <div className='flex flex-row gap-2.5'>
            <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white'>
              <BarChartIcon />
            </div>
            <div>
              <p className='font-bold text-lg sm:text-xl'>
                Server statistics at a glance
              </p>
              <p className='text-muted-foreground'>
                Always keep an eye on the most important metrics for your bot or
                server.
              </p>
            </div>
          </div>
          <Image
            src='/homepage/chart.svg'
            alt='chart'
            width={1000}
            height={500}
            className='mt-auto rounded-3xl w-full h-auto'
          />
        </div>
        <div
          className='text-secondary-foreground bg-linear-to-b from-secondary border rounded-2xl p-5 shadow-xl flex flex-col gap-3'
          style={{
            background: 'var(--background-linear-gradient)',
          }}
        >
          <div className='flex flex-row gap-2.5'>
            <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500 text-white'>
              <SettingsIcon />
            </div>
            <div>
              <p className='font-bold text-lg sm:text-xl'>Get an API token</p>
              <p className='text-muted-foreground'>
                Create an API key to use the API.
              </p>
            </div>
          </div>
          <Link
            href='/docs/api/faq#get-api-key'
            className='mt-auto rounded-xl bg-linear-to-b from-purple-400 to-purple-600 px-6 py-3 text-center font-medium text-sm text-white'
          >
            + Read the FAQ
          </Link>
        </div>
        <div
          className='text-secondary-foreground bg-linear-to-b from-secondary border rounded-2xl p-5 shadow-xl flex flex-col gap-3'
          style={{
            background: 'var(--background-linear-gradient)',
          }}
        >
          <div className='flex flex-row gap-2.5'>
            <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-600 text-white'>
              <CirclePlusIcon />
            </div>
            <div>
              <p className='font-bold text-lg sm:text-xl'>
                Add TopStats to your Server
              </p>
              <p className='text-muted-foreground'>
                Add the TopStats bot to your Discord server in just a few
                clicks!
              </p>
            </div>
          </div>
          <Link
            href='https://discord.com/oauth2/authorize?client_id=583807014896140293'
            target='_blank'
            className='mt-auto rounded-xl bg-linear-to-b from-teal-500 to-cyan-600 px-6 py-3 text-center font-medium text-sm text-white'
          >
            + Read the FAQ
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function Page() {
  return (
    <main className='mx-auto w-full max-w-360 px-4 sm:px-6 lg:px-8'>
      <HeroSection />
      <Widgets />
      <Search />
      <Growth />

      {/* end buttons */}
      <div
        className={clsx(
          'relative flex flex-col items-center gap-5 text-center',
          'z-10 mt-20',
        )}
      >
        <div
          className={clsx(
            'h-36 w-1 bg-linear-to-b',
            'from-transparent via-purple-400 to-purple-600 dark:to-purple-100',
          )}
        />
        <h2 className='font-bold text-3xl sm:text-5xl'>Easy to use API</h2>
        <p className='max-w-170 text-muted-foreground text-lg sm:text-xl'>
          Our API is designed to be simple and easy to use
        </p>

        <motion.div
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: '5rem', opacity: 0 }}
        >
          <div className='mt-10 grid grid-cols-1 gap-6 text-start lg:grid-cols-2 xl:grid-cols-3'>
            <div
              className='min-h-62.75 p-6 bg-gray-50 shadow-lg rounded-xl border border-gray-200 dark:bg-card dark:border-[#ffffff1a] flex-col justify-start items-start gap-4 inline-flex transition-transform duration-300 hover:scale-105 hover:border-[#8A9DE4] group'
              style={{
                background: 'var(--background-linear-gradient)',
              }}
            >
              <div className='w-8 h-8 relative flex items-center justify-center'>
                <BookOpenIcon className='w-full h-full transition-transform duration-300 group-hover:rotate-12' />
              </div>
              <div className="self-stretch text-foreground text-2xl font-semibold font-['Inter'] leading-[28.80px]">
                Get Building
              </div>
              <div className="self-stretch text-muted-foreground text-base font-medium font-['Inter'] leading-relaxed">
                Get analytical data straight from your favourite bots using our
                API!
              </div>
              <div className='home-card-button mt-4 justify-start items-center flex flex-wrap'>
                <Link href='/docs/'>
                  <div className='h-10.5 rounded-[10px] justify-center items-center flex group'>
                    <div className="grow shrink basis-0 h-10.5 px-4 py-2 rounded-[10px] border border-gray-300 shadow-sm justify-center items-center gap-2 flex transition-colors duration-300 hover:scale-105 hover:shadow-md hover:bg-accent hover:text-gray-900 dark:hover:text-white hover:border-accent bg-white dark:bg-[#10111a] dark:border-white font-['Inter']">
                      <div className="text-center text-foreground text-base font-medium font-['Inter'] leading-relaxed">
                        Get Started Here
                      </div>
                      <ArrowRightIcon className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div
              className='min-h-62.75 p-6 bg-gray-50 shadow-lg rounded-xl border border-gray-200 dark:bg-card dark:border-[#ffffff1a] flex-col justify-start items-start gap-4 inline-flex transition-transform duration-300 hover:scale-105 hover:border-[#8A9DE4] group'
              style={{
                background: 'var(--background-linear-gradient)',
              }}
            >
              <div className='w-8 h-8 relative flex items-center justify-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  className='w-full h-full transition-transform duration-300 group-hover:rotate-12'
                  viewBox='0 0 16 16'
                >
                  <path d='M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612' />
                </svg>
              </div>
              <div className="self-stretch text-foreground text-2xl font-semibold font-['Inter'] leading-[28.80px]">
                Join Our Support Server
              </div>
              <div className="self-stretch text-muted-foreground text-base font-medium font-['Inter'] leading-relaxed">
                Need some help getting started, wanna stay up to date, or join
                our awesome community!
              </div>
              <div className='home-card-button mt-4 justify-start items-center flex flex-wrap'>
                <Link
                  href='https://discord.gg/x48WXcTFVD'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <div className='h-10.5 rounded-[10px] justify-center items-center flex group'>
                    <div className="grow shrink basis-0 h-10.5 px-4 py-2 rounded-[10px] border border-gray-300 shadow-sm justify-center items-center gap-2 flex transition-colors duration-300 hover:scale-105 hover:shadow-md hover:bg-accent hover:text-gray-900 dark:hover:text-white hover:border-accent bg-white dark:bg-[#10111a] dark:border-white font-['Inter']">
                      <div className="text-center text-foreground text-base font-medium font-['Inter'] leading-relaxed">
                        Join our Discord
                      </div>
                      <ArrowRightIcon className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div
              className='min-h-62.75 p-6 bg-gray-50 shadow-lg rounded-xl border border-gray-200 dark:bg-card dark:border-[#ffffff1a] flex-col justify-start items-start gap-4 inline-flex transition-transform duration-300 hover:scale-105 hover:border-[#8A9DE4] group'
              style={{
                background: 'var(--background-linear-gradient)',
              }}
            >
              <div className='w-8 h-8 relative flex items-center justify-center'>
                <ImageIcon className='w-full h-full transition-transform duration-300 group-hover:rotate-12' />
              </div>
              <div className="self-stretch text-foreground text-2xl font-semibold font-['Inter'] leading-[28.80px]">
                Use Widgets
              </div>
              <div className="self-stretch text-muted-foreground text-base font-medium font-['Inter'] leading-relaxed">
                Get graphs as an image, to display them directly in Discord.
              </div>
              <div className='home-card-button mt-4 justify-start items-center flex flex-wrap'>
                <Link href='/docs/reference/widgets'>
                  <div className='h-10.5 rounded-[10px] justify-center items-center flex group'>
                    <div className="grow shrink basis-0 h-10.5 px-4 py-2 rounded-[10px] border border-gray-300 shadow-sm justify-center items-center gap-2 flex transition-colors duration-300 hover:scale-105 hover:shadow-md hover:bg-accent hover:text-gray-900 dark:hover:text-white hover:border-accent bg-white dark:bg-[#10111a] dark:border-white font-['Inter']">
                      <div className="text-center text-foreground text-base font-medium font-['Inter'] leading-relaxed">
                        Discover widgets
                      </div>
                      <ArrowRightIcon className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <section className='container px-4 pb-16 grow'>
        <div
          className={`grid gap-6 lg:grid-cols-2 xl:grid-cols-3 transition-all duration-700
          `}
        ></div>
      </section>

      {/* Footer */}
      <footer className='border-t border-gray-200 dark:border-white/10 mt-auto'>
        <div className='container flex flex-col items-center justify-between gap-4 px-4 py-6 md:flex-row'>
          <div className='flex flex-col items-center justify-center gap-4'>
            <ul className='flex flex-col items-start justify-center gap-3 text-sm'>
              <Image
                src={BannerLightSvg}
                alt='TopStats Banner Light'
                className='block dark:hidden'
              />
              <Image
                src={BannerSvg}
                alt='TopStats Banner'
                className='hidden dark:block'
              />
              <div className='text-sm text-gray-700 dark:text-gray-400'>
                TopStats is also not affiliated in any way with Discord, its
                services, or its API.
              </div>
            </ul>
          </div>

          <div className='flex flex-col md:flex-row items-start justify-end gap-8 md:gap-16 w-full md:w-auto'>
            <div className='flex flex-col items-start justify-center gap-1'>
              <p className='font-medium'>Other</p>
              <ul className='flex flex-col items-start justify-center gap-1 text-sm'>
                <li>
                  <Link
                    target='_blank'
                    href='https://discord.gg/x48WXcTFVD'
                    className='text-sm text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
                  >
                    Join our Community
                  </Link>
                </li>
                <li>
                  <Link
                    target='_blank'
                    href='https://discord.com/oauth2/authorize?client_id=583807014896140293&redirect_uri=https%3A%2F%2Fdblstatistics.com%2Fauthorize&auth&response_type=code&scope=bot+identify'
                    className='text-sm text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
                  >
                    Invite our Discord Bot
                  </Link>
                </li>
                <li>
                  <Link
                    target='_blank'
                    href='https://blog.topstats.gg/'
                    className='text-sm text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
                  >
                    Blog & Updates
                  </Link>
                </li>
              </ul>
            </div>

            <div className='flex flex-col items-start justify-center gap-1'>
              <p className='font-medium'>Terms & Conditions</p>
              <ul className='flex flex-col items-start justify-center gap-1 text-sm'>
                <li>
                  <Link
                    href='https://topstats.gg/policies/terms-of-service'
                    className='text-sm text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href='https://topstats.gg/policies/privacy-policy'
                    className='text-sm text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href='https://topstats.gg/policies/developers'
                    className='text-sm text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
                  >
                    Developer Guidelines
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
