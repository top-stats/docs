'use client'
import Link from 'next/link'
import Image from 'next/image'
import LogoSvg from '@/app/logo.svg'
import BannerSvg from '@/app/banner.svg'
import BannerLightSvg from '@/app/banner-light.svg'
import { ArrowRight, BookOpen, Image as LucideImage } from 'lucide-react'
import { DiscordIcon } from '@/components/icons'

export default function HomePage() {
  return (
    <div className='min-h-screen flex flex-col items-center'>
      {/* Title */}
      <section className='container px-4 pt-12.5 md:pt-25 pb-12 md:pb-24 lg:pb-32'>
        <div className='mx-auto max-w-3xl text-center'>
          <h1 className="mb-6 flex items-center justify-center gap-2 md:gap-4 text-4xl md:text-[80px] font-semibold tracking-[-1px] md:tracking-[-2.4px] leading-[110%] font-['Inter']">
            <Image
              src={LogoSvg}
              alt='TopStats Logo'
              className='size-11 md:size-22'
            />
            <span className='text-foreground'>TopStats.gg</span>
          </h1>
          <p className='mb-8 text-lg md:text-xl text-muted-foreground pt-4'>
            Get started using TopStats API and power your service with
            analytics.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className='container px-4 pb-16'>
        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {/* Bots */}
          <div className='p-6 bg-fd-accent/15 shadow-lg rounded-xl border-2 flex-col justify-start items-start gap-4 inline-flex transition-transform duration-300 hover:scale-105 hover:border-fd-primary group'>
            <div className='w-8 h-8 relative'>
              <DiscordIcon />
            </div>
            <div className="self-stretch text-foreground text-2xl font-semibold font-['Inter'] leading-[28.80px]">
              Discord bot analytics
            </div>
            <div className="self-stretch text-muted-foreground text-base font-medium font-['Inter'] leading-relaxed">
              Get analytical data straight from your favourite bots using our
              API!
            </div>
            <div className='justify-start items-center inline-flex'>
              <Link href='/docs/api'>
                <div className='rounded-[10px] justify-center items-center flex group bg-fd-accent/20'>
                  <div className='grow shrink basis-0 h-10.5 px-4 py-2 rounded-[10px] border dajustify-center items-center gap-2 flex'>
                    <div className="text-center text-foreground text-base font-medium font-['Inter'] leading-relaxed">
                      Get Started Here
                    </div>
                    <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Analytics */}
          <div className='p-6 bg-fd-accent/15 shadow-lg rounded-xl border-2 flex-col justify-start items-start gap-4 inline-flex transition-transform duration-300 hover:scale-105 hover:border-fd-primary group'>
            <div className='w-8 h-8 relative'>
              <BookOpen className='w-full h-full' />
            </div>
            <div className="self-stretch text-foreground text-2xl font-semibold font-['Inter'] leading-[28.80px]">
              TopStats Analytics Platform
            </div>
            <div className="self-stretch text-muted-foreground text-base font-medium font-['Inter'] leading-relaxed">
              Live dashboards, funnels and alerts for any app, service, game or
              bot.
            </div>
            <div className='justify-start items-center inline-flex'>
              <Link href='docs/analytics'>
                <div className='rounded-[10px] justify-center items-center flex group bg-fd-accent/20'>
                  <div className='grow shrink basis-0 h-10.5 px-4 py-2 rounded-[10px] border dajustify-center items-center gap-2 flex'>
                    <div className="text-center text-foreground text-base font-medium font-['Inter'] leading-relaxed">
                      Learn More
                    </div>
                    <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Widgets */}
          <div className='p-6 bg-fd-accent/15 shadow-lg rounded-xl border-2 flex-col justify-start items-start gap-4 inline-flex transition-transform duration-300 hover:scale-105 hover:border-fd-primary group'>
            <div className='w-8 h-8 relative'>
              <LucideImage className='w-full h-full' />
            </div>
            <div className="self-stretch text-foreground text-2xl font-semibold font-['Inter'] leading-[28.80px]">
              Use Widgets
            </div>
            <div className="self-stretch text-muted-foreground text-base font-medium font-['Inter'] leading-relaxed">
              Get graphs as an image, to display them directly in Discord.
            </div>
            <div className='justify-start items-center inline-flex'>
              <Link href='/docs/api/reference/widgets'>
                <div className='rounded-[10px] justify-center items-center flex group bg-fd-accent/20'>
                  <div className='grow shrink basis-0 h-10.5 px-4 py-2 rounded-[10px] border dajustify-center items-center gap-2 flex'>
                    <div className="text-center text-foreground text-base font-medium font-['Inter'] leading-relaxed">
                      Discover widgets
                    </div>
                    <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
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
    </div>
  )
}
