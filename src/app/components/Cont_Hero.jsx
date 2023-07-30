import Image from "next/image";
import React, { useState } from "react";
// import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
// import { FaHandSparkles, BsFillCalendarCheckFill } from 'react-icons'
const Cont_Hero = () => {
  const [searchInput, setSearchInput] = useState("");
  return (
    <div className="relative isolate overflow-hidden bg-[#005792] bg-opacity-90 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Enter the required part number then click Search{" "}
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              You can get genuine part numbers from online parts catalogs of our
              partners
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="search"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                autoComplete="search"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white/40 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="15400-RTA-003"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-[#C61D36] px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-[#C61D36] hover:bg-opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-  "
              >
                Search
              </button>
            </div>
          </div>
          <div className="text-white font-normal text-base my-auto mx-8 ">
            <h1 className="text-2xl font-semibold my-4">Search For Parts Here</h1>
            <Image src="/uncle_handshake.png" alt="handshake" width={180} height={160} className="object-contain mx-auto"/>
            <span>
              Having trouble with your used Japanese import? Tired of waiting
              weeks for parts to arrive from Japan? — Amayama can supply the
              parts you need with proven reliable service to anywhere in the
              world.
            </span>
          </div>
          
        </div>
      </div>
      <div
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
        aria-hidden="true"
      >
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
};

export default Cont_Hero;
