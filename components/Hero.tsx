"use client"

import Link from "next/link"

export default function Hero() {
  return (
    <div className="p-4">
      <h1 className="text-4xl font-extrabold dark:text-white">
        Supabase Contributor Portal
      </h1>
      <p className="my-4 text-lg font-normal text-gray-800 dark:text-gray-400">
        Do you want help build Supabase? We've built all the tools you need to
        become an open source contributor.
      </p>
      <h2 className="text-3xl font-extrabold dark:text-white">
        Getting started
      </h2>
      <p className="my-4 font-normal text-gray-800 dark:text-gray-400">
        We recommend reading through the{" "}
        <Link href="https://supabase.com/docs" className="text-blue-500">
          product documentation
        </Link>{" "}
        to familiarise yourself with Supabase.
      </p>
    </div>
  )
}
