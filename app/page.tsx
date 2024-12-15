"use client";

import { useEffect } from "react";
import { useTheme } from "@/context";
import Link from "next/link";
import Image from "next/image";
import { ThemeSwitcher } from "@/components/index";

export default function Home() {
  const { theme } = useTheme();

  // Apply theme class to the body element
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <div className="flex flex-wrap items-center justify-center sm:justify-between sm:space-y-0 gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-4 select-none">
            <Image
              className="dark:invert"
              src="/next.svg"
              alt="Next.js logo"
              width={130}
              height={30}
              priority
            />
            <Image
              className="dark:invert w-9 h-9"
              src="/plus.svg"
              alt="plus icon"
              width={0}
              height={0}
              priority
            />
            <div className="flex items-center gap-4">
              <Image
                className="dark:invert"
                src="/shadcnui.svg"
                alt="ShadCN UI logo"
                width={24}
                height={24}
                priority
              />
              <span className="light:invert font-bold text-2xl">shadcn/ui</span>
            </div>
          </div>
        </div>

        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <ThemeSwitcher />
      </main>
      <footer className="row-start-3 flex flex-col gap-6 flex-wrap items-center justify-center select-none">
        <h4>
          Made with ❤️ by{" "}
          <Link
            className="hover:text-gray-400"
            href="https://www.facebook.com/rjargumido/"
            target="_blank"
          >
            @royjosephargumido
          </Link>
        </h4>
        {/* <div className="flex sm:flex-row sm:gap-10 flex-col gap-3">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <div className="flex gap-2">
                  <Image
                    className="dark:invert mr-0"
                    src="https://cdn.simpleicons.org/next.js?viewbox=auto"
                    alt="Vercel logomark"
                    width={20}
                    height={20}
                  />{" "}
                  v15.1.0
                </div>
              </TooltipTrigger>
              <TooltipContent sideOffset={8}>NextJs v15.1.0</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <div className="flex gap-2">
                  <Image
                    className="mr-0"
                    src="https://cdn.simpleicons.org/react?viewbox=auto"
                    alt="React logo"
                    width={20}
                    height={20}
                  />{" "}
                  v19.0.0
                </div>
              </TooltipTrigger>
              <TooltipContent sideOffset={8}>React v19.0.0</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <div className="flex gap-2">
                  <Image
                    className="dark:invert mr-0"
                    src="https://cdn.simpleicons.org/shadcnui?viewbox=auto"
                    alt="ShadCN UI logo"
                    width={15}
                    height={15}
                  />{" "}
                  shadcn/ui
                </div>
              </TooltipTrigger>
              <TooltipContent sideOffset={8}>shadcn/ui</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <div className="flex gap-2">
                  <Image
                    className="mr-0"
                    src="https://cdn.simpleicons.org/tailwindcss?viewbox=auto"
                    alt="Tailwind CSS logo"
                    width={20}
                    height={20}
                  />{" "}
                  v3.4.16
                </div>
              </TooltipTrigger>
              <TooltipContent sideOffset={8}>
                Tailwind CSS v3.4.16
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div> */}
      </footer>
    </div>
  );
}
