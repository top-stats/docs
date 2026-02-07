'use client'
import Link from 'next/link'
import Image from 'next/image'
import LogoSvg from '@/app/logo.svg'
import BannerSvg from '@/app/banner.svg'
import BannerLightSvg from '@/app/banner-light.svg'
import { ArrowRight, BookOpen, Image as LucideImage } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function HomePage() {
  return (
    <div className='min-h-screen flex flex-col items-center'>
      {/* Title */}
      <section className='container px-4 pt-[50px] md:pt-[100px] pb-12 md:pb-24 lg:pb-32'>
        <div className='mx-auto max-w-3xl text-center'>
          <h1 className="mb-6 flex items-center justify-center gap-2 md:gap-4 text-4xl md:text-[80px] font-semibold tracking-[-1px] md:tracking-[-2.4px] leading-[110%] font-['Inter']">
            <Image
              src={LogoSvg}
              alt='TopStats Logo'
              className='size-11 md:size-22'
            />
            <span className='text-foreground'>TopStats.gg</span>
          </h1>
          <p className='mb-8 text-lg md:text-xl text-muted-foreground pt-4 md:pt-[42px]'>
            Get started using TopStats API and power your service with
            analytics.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className='container px-4 pb-16 flex-grow'>
        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {/* Get Building */}
          <div
            className='min-h-[251px] p-6 bg-gray-50 shadow-lg rounded-xl border border-gray-200 dark:bg-card dark:border-[#ffffff1a] flex-col justify-start items-start gap-4 inline-flex transition-transform duration-300 hover:scale-105 hover:border-[#8A9DE4] group'
            style={{
              background:
                'linear-gradient(91.94deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.01) 100%)',
            }}
          >
            <div className='w-8 h-8 relative'>
              <BookOpen className='w-full h-full' />
            </div>
            <div className="self-stretch text-foreground text-2xl font-semibold font-['Inter'] leading-[28.80px]">
              Get Building
            </div>
            <div className="self-stretch text-muted-foreground text-base font-medium font-['Inter'] leading-relaxed">
              Get analytical data straight from your favourite bots using our
              API!
            </div>
            <div className='justify-start items-center inline-flex'>
              <Link href='/docs/api'>
                <div className='h-[42px] rounded-[10px] justify-center items-center flex group'>
                  <div className='grow shrink basis-0 h-[42px] px-4 py-2 rounded-[10px] border dajustify-center items-center gap-2 flex'>
                    <div className="text-center text-foreground text-base font-medium font-['Inter'] leading-relaxed">
                      Get Started Here
                    </div>
                    <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Support Server */}
          <div
            className='min-h-[251px] p-6 bg-gray-50 shadow-lg rounded-xl border border-gray-200 dark:bg-card dark:border-[#ffffff1a] flex-col justify-start items-start gap-4 inline-flex transition-transform duration-300 hover:scale-105 hover:border-[#8A9DE4] group'
            style={{
              background:
                'linear-gradient(91.94deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.01) 100%)',
            }}
          >
            <div className='w-8 h-8 relative'>
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
              Need some help getting started, wanna stay up to date, or join our
              awesome community!
            </div>
            <div className='justify-start items-center inline-flex'>
              <Link
                href='https://discord.gg/x48WXcTFVD'
                target='_blank'
                rel='noopener noreferrer'
              >
                <div className='h-[42px] rounded-[10px] justify-center items-center flex group'>
                  <div className='grow shrink basis-0 h-[42px] px-4 py-2 rounded-[10px] border dajustify-center items-center gap-2 flex'>
                    <div className="text-center text-foreground text-base font-medium font-['Inter'] leading-relaxed">
                      Join our Discord
                    </div>
                    <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Widgets */}
          <div
            className='min-h-[251px] p-6 bg-gray-50 shadow-lg rounded-xl border border-gray-200 dark:bg-card dark:border-[#ffffff1a] flex-col justify-start items-start gap-4 inline-flex transition-transform duration-300 hover:scale-105 hover:border-[#8A9DE4] group'
            style={{
              background:
                'linear-gradient(91.94deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.01) 100%)',
            }}
          >
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
                <div className='h-[42px] rounded-[10px] justify-center items-center flex group'>
                  <div className='grow shrink basis-0 h-[42px] px-4 py-2 rounded-[10px] border dajustify-center items-center gap-2 flex'>
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
