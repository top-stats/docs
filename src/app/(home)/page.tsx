"use client";
import Link from 'next/link';
import Image from 'next/image';
import LogoSvg from '@/app/logo.svg';
import { BookOpen, Image as LucideImage, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function HomePage() {
  // Animation States
  const [showTitle, setShowTitle] = useState(false);
  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowTitle(true), 100);
    setTimeout(() => setShowCards(true), 400);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Title */}
      <section className="container px-4 pt-[50px] md:pt-[100px] pb-12 md:pb-24 lg:pb-32">
        <div
          className={`mx-auto max-w-3xl text-center transition-all duration-700 ease-out
            ${showTitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          <h1 className="mb-6 flex items-center justify-center gap-2 md:gap-4 text-4xl md:text-[80px] font-semibold tracking-[-1px] md:tracking-[-2.4px] leading-[110%] font-['Inter']">
            <Image
              src={LogoSvg}
              alt="TopStats Logo"
              className="h-[44px] w-[44px] md:h-[88px] md:w-[88px]"
              width={88}
              height={88}
            />
            <span className="text-foreground">TopStats.gg</span>
          </h1>
          <p className="mb-8 text-lg md:text-xl text-muted-foreground pt-4 md:pt-[42px]">
              Get started using TopStats API and power your service with analytics.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="container px-4 pb-16 flex-grow">
        <div
          className={`grid gap-6 md:grid-cols-2 lg:grid-cols-3 transition-all duration-700
            ${showCards ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          {/* Get Building */}
          <div className="h-[251px] p-6 bg-card rounded-xl border border-border flex-col justify-start items-start gap-4 inline-flex transition-transform duration-300 hover:scale-105 hover:border-[#8A9DE4] group">
            <div className="w-8 h-8 relative flex items-center justify-center">
              <BookOpen className="w-full h-full transition-transform duration-300 group-hover:rotate-12" />
            </div>
            <div className="self-stretch text-foreground text-2xl font-semibold font-['Inter'] leading-[28.80px]">
            Get Building
            </div>
            <div className="self-stretch text-muted-foreground text-base font-medium font-['Inter'] leading-relaxed">
                Get analytical data straight from your favourite bots using our API!
            </div>
            <div className="home-card-button justify-start items-center inline-flex">
              <Link href="/docs/">
                <div className="h-[42px] rounded-[10px] justify-center items-center flex group">
                  <div className="grow shrink basis-0 h-[42px] px-4 py-2 rounded-[10px] border border-border dark:border-white justify-center items-center gap-2 flex transition-colors duration-300 hover:bg-accent hover:text-white">
                    <div className="text-center text-foreground text-base font-medium font-['Inter'] leading-relaxed">
                        Get Started Here
                    </div>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Support Server */}
          <div className="h-[251px] p-6 bg-card rounded-xl border border-border flex-col justify-start items-start gap-4 inline-flex transition-transform duration-300 hover:scale-105 hover:border-[#8A9DE4] group">
            <div className="w-8 h-8 relative flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-full h-full transition-transform duration-300 group-hover:rotate-12"
                viewBox="0 0 16 16"
              >
                <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" />
              </svg>
            </div>
            <div className="self-stretch text-foreground text-2xl font-semibold font-['Inter'] leading-[28.80px]">
            Join Our Support Server
            </div>
            <div className="self-stretch text-muted-foreground text-base font-medium font-['Inter'] leading-relaxed">
                Need some help getting started, wanna stay up to date, or join our awesome community!
            </div>
            <div className="home-card-button justify-start items-center inline-flex">
              <Link href="https://discord.gg/x48WXcTFVD" target="_blank" rel="noopener noreferrer">
                <div className="h-[42px] rounded-[10px] justify-center items-center flex group">
                  <div className="grow shrink basis-0 h-[42px] px-4 py-2 rounded-[10px] border border-border dark:border-white justify-center items-center gap-2 flex transition-colors duration-300 hover:bg-accent hover:text-white">
                    <div className="text-center text-foreground text-base font-medium font-['Inter'] leading-relaxed">
                        Join our Discord
                    </div>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Widgets */}
          <div className="h-[251px] p-6 bg-card rounded-xl border border-border flex-col justify-start items-start gap-4 inline-flex transition-transform duration-300 hover:scale-105 hover:border-[#8A9DE4] group">
            <div className="w-8 h-8 relative flex items-center justify-center">
              <LucideImage className="w-full h-full transition-transform duration-300 group-hover:rotate-12" />
            </div>
            <div className="self-stretch text-foreground text-2xl font-semibold font-['Inter'] leading-[28.80px]">
            Use Widgets
            </div>
            <div className="self-stretch text-muted-foreground text-base font-medium font-['Inter'] leading-relaxed">
                Get graphs as an image, to display them directly in Discord.
            </div>
            <div className="home-card-button justify-start items-center inline-flex">
              <Link href="/docs/reference/widgets/bots">
                <div className="h-[42px] rounded-[10px] justify-center items-center flex group">
                <div className="grow shrink basis-0 h-[42px] px-4 py-2 rounded-[10px] border border-border dark:border-white justify-center items-center gap-2 flex transition-colors duration-300 hover:bg-accent hover:text-white">
                    <div className="text-center text-foreground text-base font-medium font-['Inter'] leading-relaxed">
                      Discover widgets
                    </div>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"/>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-auto">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 py-6 md:flex-row">
          <div className="text-sm text-gray-400">
              TopStats is also not affiliated in any way with Discord, its services, or its API.
          </div>
          <div className="flex gap-3">
            <Link
              href="https://topstats.gg/policies"
              className="text-sm text-gray-400 hover:text-white"
            >
              Terms & Conditions
            </Link>
            <Link
              href="https://discord.gg/x48WXcTFVD"
              className="text-sm text-gray-400 hover:text-white"
            >
              Support
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
