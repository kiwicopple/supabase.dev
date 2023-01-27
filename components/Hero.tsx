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
      <p className="my-4 font-normal text-gray-800 dark:text-gray-400">
        Contribute to supabase.dev:{" "}
        <a
          href="https://github.com/supabase/supabase.dev"
          className="text-blue-500"
          target={"_blank"}
        >
          github.com/supabase/supabase.dev
        </a>
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
      <h2 className="text-3xl font-extrabold dark:text-white">
        Code of Conduct
      </h2>
      <p className="my-4 font-normal text-gray-800 dark:text-gray-400">
        Read our{" "}
        <Link
          href="https://github.com/supabase/.github/blob/main/CODE_OF_CONDUCT.md"
          className="text-blue-500"
        >
          Code of Conduct
        </Link>
        .
      </p>
      <h2 className="text-3xl font-extrabold dark:text-white">
        How to Contribute
      </h2>
      <p className="my-4 font-normal text-gray-800 dark:text-gray-400">
        Supabase has many open source repos. Some of the more popular ones are:
      </p>
      <ul>
        <li> Supabase - Our Dashboard, Websites, and example apps</li>
        <li> Supabase-js - A clientside library written in Typescript</li>
        <li>Gotrue - Our auth server, written in Go</li>
        <li>
          {" "}
          Realtime - A server for streaming changes from Postgres, written in
          Elixir
        </li>
        <li> browse all</li>
      </ul>
      <p className="my-4 font-normal text-gray-800 dark:text-gray-400">
        Want to contribute? Why not jump into our GitHub repo and:
      </p>
      <ul>
        <li>Sponsor Supabase.</li>
        <li>Answer Discussions.</li>
        <li>Submit an issue to one of our repos</li>
        <li>
          {" "}
          Report a performance issue or a part of the documentation that you
          find confusing.
        </li>
        <li>Create a pull request in one of our repos</li>
        <li>Translate our Readme.</li>
        <li>Try our products and give feedback.</li>
        <li>Spread the word if you like what we are doing.</li>
      </ul>
    </div>
  )
}
