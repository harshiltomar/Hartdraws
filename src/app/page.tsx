import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { WavyBackground } from "@/components/ui/wavy-background";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper classname="mb-12 flex flex-col items-center justify-center text-center">
        <WavyBackground>
          <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
            <p className="text-sm font-semibold text-gray-700">
              HARTdraws™ is now Public!
            </p>
          </div>
          <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
            Get the most from your <span className="text-white">Documents</span>
          </h1>
          <p className="mt-5 justify-center max-w-prose ml-40 text-zinc-700 sm:text-lg text-center">
            <span className="font-bold text-black">HART</span>draws allows you
            to have candid convo with any PDF Document. Simply upload your File
            and Start asking Your Questions !!
          </p>
          <Link
            className={buttonVariants({
              size: "lg",
              className: "mt-5",
            })}
            href="/dashboard"
            target="_blank"
          >
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </WavyBackground>
      </MaxWidthWrapper>

      {/*Value Proposition Section */}
      <div>
        <div className="relative isolate">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-4- -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/1 rotate-[3-deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-40 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
          <div>
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
              <div className="mt-16 flow-root sm:mt-24">
                <div className="z-10 -m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                  <Image
                    src="/dashboard-preview.jpg"
                    alt="product preview"
                    width={1364}
                    height={866}
                    quality={100}
                    className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

//56:49
