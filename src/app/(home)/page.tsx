'use client'
import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRightCircleIcon,
  ArrowRightIcon,
  Axis3dIcon,
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
import { cn } from '../../lib/cn'

import './homepage.css'

interface StepProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: {
    className?: string
    children?: React.ReactNode
  }
}

function Step({ icon, children, className, ...rest }: StepProps) {
  return (
    <div className={className} {...rest}>
      <div
        className={cn(
          'absolute top-0 left-0 rounded-full font-bold text-white',
          'inline-flex flex-col items-center justify-center',
          '-ml-14 h-12 w-12 text-xl shadow-2xl',
          'sm:-ml-18 sm:h-16 sm:w-16 sm:text-3xl',
          icon?.className,
        )}
      >
        {icon?.children}
      </div>
      {children}
    </div>
  )
}

function HeroSection() {
  return (
    <div
      className={clsx(
        'relative z-2 mt-24 flex w-full flex-col items-center gap-10 text-center sm:mt-32 xl:mt-40',
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
      <div className='grid w-full max-w-125 grid-cols-1 gap-3 sm:w-fit sm:grid-cols-2'>
        <Link href='/docs/api'>
          <div className='h-10.5 rounded-[10px] justify-center items-center flex group'>
            <div className="grow shrink basis-0 h-10.5 px-4 py-2 rounded-[10px] border border-gray-200 dark:border-[#ffffff1a] shadow-sm justify-center items-center gap-2 flex transition-all duration-300 hover:scale-105 hover:shadow-md hover:bg-accent hover:text-gray-900 dark:hover:text-white hover:border-[#8A9DE4] bg-white dark:bg-[#10111a] font-['Inter']">
              <div className="text-center text-foreground text-base font-medium font-['Inter'] leading-relaxed">
                Get Started
              </div>
              <ArrowRightIcon className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
            </div>
          </div>
        </Link>
        <Link href='https://topstats.gg/' target='_blank'>
          <div className='h-10.5 rounded-[10px] justify-center items-center flex group'>
            <div className="grow shrink basis-0 h-10.5 px-4 py-2 rounded-[10px] border border-gray-200 dark:border-[#ffffff1a] shadow-sm justify-center items-center gap-2 flex transition-all duration-300 hover:scale-105 hover:shadow-md hover:bg-accent hover:text-gray-900 dark:hover:text-white hover:border-[#8A9DE4] bg-white dark:bg-[#10111a] font-['Inter']">
              <div className="text-center text-foreground text-base font-medium font-['Inter'] leading-relaxed">
                Our Site
              </div>
              <ArrowRightIcon className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

function Widgets() {
  const featureImages = [
    {
      label: 'Servers',
      icon: <ServerIcon />,
      url: '/homepage/servers-chart.svg',
    },
    {
      label: 'Custom',
      icon: <Settings2Icon />,
      url: '/homepage/custom-chart.svg',
    },
    {
      label: 'Compare',
      icon: <SparklesIcon />,
      url: '/homepage/compare-chart.svg',
    },
  ]

  const [currentImage, setCurrentImage] = useState(featureImages[0].url)
  const [loadedImages, setLoadedImages] = useState(
    new Set([featureImages[0].url]),
  )
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleImageSwitch = (url: string) => {
    setCurrentImage(url)
    setLoadedImages((prev) => new Set([...prev, url]))
  }

  return (
    <>
      <div className='mt-24 flex flex-col gap-10 text-center sm:mt-48'></div>
      <div
        className='z-2 ml-[1.3rem] w-full border-l pr-4 pb-10 pl-1 min-h-[110vh] sm:ml-1 sm:min-h-[125vh] sm:pl-10 lg:pr-8 lg:min-h-[140vh] xl:min-h-[150vh] max-sm:ml-0 max-sm:border-none max-sm:pl-0 max-sm:pr-0'
        style={{
          borderImage:
            'linear-gradient(to bottom, #a78bfa 60%, #fb923c) 1 100%',
        }}
        ref={containerRef}
      >
        <motion.div
          className='md:sticky top-[20vh] flex flex-col gap-5'
          initial='hidden'
          whileInView='show'
          transition={{
            duration: 0.5,
            delayChildren: 0.2,
          }}
          variants={{
            show: { y: 0, opacity: 1 },
            hidden: { y: -20, opacity: 0 },
          }}
        >
          <Step
            icon={{
              className:
                'bg-secondary text-secondary-foreground shadow-none sm:bg-gradient-to-br sm:from-purple-400 sm:to-purple-600 sm:shadow-purple-400',
              children: <Axis3dIcon className='inline sm:h-8 sm:w-8' />,
            }}
            className='relative z-10'
          >
            <h2 className='mb-2 font-bold text-2xl sm:text-3xl'>Widgets</h2>
            <p className='text-lg text-muted-foreground sm:text-xl'>
              Visualize your statistics
            </p>
            <div className='relative mt-8 w-full max-w-180 aspect-6/3 rounded-lg shadow-xl overflow-hidden'>
              {loadedImages.has(currentImage) && (
                <img
                  src={currentImage}
                  alt='Server Statistic Widget'
                  className='w-full h-full'
                />
              )}
            </div>
            <div
              className={clsx(
                '-ml-4 -mt-56 sm:-mt-60 xl:-mt-100 relative w-fit xl:mr-[14%] xl:ml-auto max-sm:static max-sm:mt-6 max-sm:ml-0 max-sm:w-full',
              )}
            >
              {featureImages.map((feature) => (
                <motion.button
                  key={feature.label}
                  className={clsx(
                    'mt-4 flex flex-row items-center gap-3 rounded-xl p-4 text-secondary-foreground shadow-2xl shadow-blue-800/30 xl:pr-16 dark:shadow-black/60',
                    'cursor-pointer bg-secondary hover:bg-secondary/80 transition-colors border-2',
                    currentImage === feature.url &&
                      'border-blue-500 ring-2 ring-blue-400',
                  )}
                  style={{ height: '100%', width: '100%' }}
                  variants={{
                    show: { y: 0, opacity: 1 },
                    hidden: { opacity: 0, y: '5rem' },
                  }}
                  transition={{ duration: 0.5 }}
                  onClick={() => handleImageSwitch(feature.url)}
                  type='button'
                  tabIndex={0}
                >
                  <div className='rounded-full bg-purple-500 p-2 text-white text-xl sm:text-2xl dark:bg-purple-500'>
                    {feature.icon}
                  </div>
                  <p className='font-medium text-lg w-full text-left'>
                    {feature.label}
                  </p>
                </motion.button>
              ))}
            </div>
          </Step>
          <div className='purple-gradient' />
        </motion.div>
      </div>
    </>
  )
}

function Statistics() {
  const items = [
    { icon: <ServerIcon className='h-8 w-8' />, label: 'Servers' },
    { icon: <BotIcon className='h-8 w-8' />, label: 'Bots' },
    { icon: <BookIcon className='h-8 w-8' />, label: 'API', active: true },
  ]

  return (
    <div
      className='z-2 ml-[1.3rem] min-h-[120vh] w-full border-l pt-24 pr-4 pb-10 pl-1 sm:ml-1 sm:min-h-[130vh] sm:pl-10 md:min-h-[140vh] lg:min-h-[136vh] lg:pr-8 max-sm:ml-0 max-sm:border-none max-sm:pl-0 max-sm:pr-0'
      style={{
        borderImage: 'linear-gradient(to bottom, #fb923c, transparent) 1 100%',
      }}
    >
      <motion.div
        className='md:sticky top-[20vh] gap-5'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Step
          icon={{
            className:
              'bg-gradient-to-br from-orange-400 to-pink-600 shadow-purple-400',
            children: <BarChartIcon className='inline h-8 w-8' />,
          }}
          className='flex flex-col-reverse gap-5 rounded-2xl w-full lg:flex-row lg:justify-between'
        >
          <div className='flex-1'>
            <h2 className='mb-2 font-bold text-2xl sm:text-3xl'>
              All statistics in one place
            </h2>
            <p className='text-lg text-muted-foreground sm:text-xl'>
              Whether it's bot statistics or server statistics, you'll find
              everything in one place.
            </p>
            <Link
              className='mt-6 inline-block rounded-full bg-linear-to-br from-orange-400 to-pink-500 px-6 py-3 font-bold text-lg text-white'
              href='/docs/bots'
            >
              Learn more
            </Link>
            <motion.div
              className='mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3'
              initial='hidden'
              whileInView='show'
              variants={{
                show: {
                  transition: { staggerChildren: 0.05, staggerDirection: -1 },
                },
              }}
            >
              {items.map(({ icon, label, active }) => (
                <motion.div
                  key={label}
                  variants={{
                    hidden: { y: 100, opacity: 0 },
                    show: { y: 0, opacity: 1, transition: { duration: 0.2 } },
                  }}
                  className={cn(
                    'flex flex-col gap-4 rounded-3xl border bg-linear-to-b from-secondary p-5 text-center transition-colors duration-500',
                    active &&
                      'border-2 border-blue-400 from-black to-blue-800 text-cyan-200 shadow-blue-600/50 shadow-xl max-sm:col-span-full max-sm:row-start-1',
                  )}
                  style={{
                    background:
                      'linear-gradient(91.94deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.01) 100%)',
                  }}
                >
                  <div className='flex flex-col items-center justify-center text-3xl sm:text-6xl lg:text-7xl'>
                    {icon}
                  </div>
                  <p className='font-semibold text-lg sm:text-xl'>{label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <div className='aspect-square w-37.5 rounded-md fill-black max-[430px]:hidden dark:fill-white mt-auto mb-4 max-w-[20rem] border-black lg:mb-0 lg:ml-4 lg:w-full dark:border-white'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 42 42'
              fill='none'
            >
              <g filter='url(#filter0_d_1213_4138)'>
                <path
                  d='M14.6367 17.0054C14.8192 16.8259 15.1195 16.9434 15.1426 17.189V18.4517L15.1416 18.6987C15.1416 18.7019 15.1425 18.7053 15.1426 18.7085V32.0005C15.1424 33.1049 14.2451 34.0005 13.1406 34.0005H8.00391C6.89944 34.0005 6.00015 33.1049 6 32.0005V25.6255C6.00012 25.5452 6.03261 25.4679 6.08984 25.4116L14.6367 17.0054ZM26.0479 16.9976C26.236 16.8115 26.5552 16.942 26.5586 17.2065L26.5713 18.2876V32.0005C26.5711 33.1049 25.6758 34.0005 24.5713 34.0005H19.4287C18.3242 34.0005 17.4289 33.1049 17.4287 32.0005V18.7271C17.4295 18.7186 17.4316 18.7103 17.4316 18.7017L17.4375 17.2134C17.4388 16.9479 17.7592 16.8149 17.9482 17.0015L21.7891 20.7925C21.906 20.9076 22.0942 20.9069 22.2109 20.7915L26.0479 16.9976ZM36 11.0005C37.1046 11.0005 38 11.8959 38 13.0005V32.0005C37.9998 33.1049 37.0966 34.0004 35.9922 34.0005H30.8604C29.756 34.0003 28.8576 33.1048 28.8574 32.0005V14.2778C28.8693 14.2239 28.8955 14.1736 28.9346 14.1333L31 12.0005L32 11.0005H36Z'
                  fill='url(#paint0_linear_1213_4138)'
                ></path>
                <path
                  d='M15.5932 11.5796L6.20382 20.8824C5.57253 21.5079 4.5 21.0607 4.5 20.1721V19.9882C4.5 19.721 4.60698 19.4648 4.79707 19.2769L15.0996 9.09504C15.4893 8.70997 16.1162 8.71007 16.5057 9.09528L21.5953 14.1286C21.7115 14.2435 21.8981 14.2443 22.0153 14.1306L29.152 7.20293L35.1717 1.33184C35.2889 1.21757 35.476 1.21829 35.5923 1.33345L36.133 1.86893L36.6669 2.40773C36.7855 2.5274 36.7823 2.72126 36.6599 2.83698L29.6814 9.43181L22.5031 16.5408C22.1153 16.9249 21.4912 16.9271 21.1008 16.5458L16.0139 11.5781C15.8968 11.4637 15.7095 11.4644 15.5932 11.5796Z'
                  fill='white'
                  stroke='white'
                  strokeWidth='0.75'
                ></path>
                <path
                  d='M37.7 -1.31134e-08L30.7243 -3.18032e-07C30.457 -3.29715e-07 30.3231 0.323142 30.5121 0.512132L37.4879 7.48787C37.6769 7.67686 38 7.54301 38 7.27574L38 0.3C38 0.134315 37.8657 -5.87108e-09 37.7 -1.31134e-08Z'
                  fill='white'
                ></path>
              </g>
              <defs>
                <filter
                  id='filter0_d_1213_4138'
                  x='0.125'
                  y='0'
                  width='41.875'
                  height='42.0005'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'
                >
                  <feFlood
                    floodOpacity='0'
                    result='BackgroundImageFix'
                  ></feFlood>
                  <feColorMatrix
                    in='SourceAlpha'
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                    result='hardAlpha'
                  ></feColorMatrix>
                  <feOffset dy='4'></feOffset>
                  <feGaussianBlur stdDeviation='2'></feGaussianBlur>
                  <feComposite in2='hardAlpha' operator='out'></feComposite>
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
                  ></feColorMatrix>
                  <feBlend
                    mode='normal'
                    in2='BackgroundImageFix'
                    result='effect1_dropShadow_1213_4138'
                  ></feBlend>
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect1_dropShadow_1213_4138'
                    result='shape'
                  ></feBlend>
                </filter>
                <linearGradient
                  id='paint0_linear_1213_4138'
                  x1='22'
                  y1='11.1431'
                  x2='22'
                  y2='34.0002'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='white'></stop>
                  <stop
                    offset='0.75'
                    stopColor='white'
                    stopOpacity='0.5'
                  ></stop>
                  <stop offset='1' stopColor='white' stopOpacity='0.15'></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </Step>
      </motion.div>
    </div>
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
        background:
          'linear-gradient(91.94deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.01) 100%)',
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
        <motion.div
          className={clsx(
            'row-span-2',
            'text-secondary-foreground bg-linear-to-b from-secondary border rounded-2xl p-5 shadow-xl flex flex-col',
          )}
          style={{
            background:
              'linear-gradient(91.94deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.01) 100%)',
          }}
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: '8rem', opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
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
        </motion.div>
        <motion.div
          className='text-secondary-foreground bg-linear-to-b from-secondary border rounded-2xl p-5 shadow-xl flex flex-col gap-3'
          style={{
            background:
              'linear-gradient(91.94deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.01) 100%)',
          }}
          whileInView={{ y: 0 }}
          initial={{ y: '10rem' }}
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
        </motion.div>
        <motion.div
          className='text-secondary-foreground bg-linear-to-b from-secondary border rounded-2xl p-5 shadow-xl flex flex-col gap-3'
          style={{
            background:
              'linear-gradient(91.94deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.01) 100%)',
          }}
          whileInView={{ y: 0 }}
          initial={{ y: '10rem' }}
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
        </motion.div>
      </div>
    </div>
  )
}

export default function Page() {
  return (
    <main className='mx-auto w-full max-w-360 px-4 sm:px-6 lg:px-8'>
      <HeroSection />
      <Widgets />
      <Statistics />
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
                background:
                  'linear-gradient(91.94deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.01) 100%)',
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
                background:
                  'linear-gradient(91.94deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.01) 100%)',
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
                background:
                  'linear-gradient(91.94deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.01) 100%)',
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
