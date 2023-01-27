import Sidebar from "@/components/Sidebar"
import "./globals.css"

const links = [
  {
    id: "general",
    name: "General",
    links: [{ id: "about", name: "About", href: "/" }],
  },
  {
    id: "tests",
    name: "Test Status",
    links: [
      {
        id: "test-supabase-client",
        name: "Supabase Client",
        href: "/test/supabase-client",
      },
      {
        id: "test-functions-client",
        name: "Functions Client",
        href: "/test/functions-client",
      },
      {
        id: "test-gotrue-client",
        name: "GoTrue Client",
        href: "/test/gotrue-client",
      },
      {
        id: "test-postgrest-client",
        name: "PostgREST Client",
        href: "/test/postgrest-client",
      },
      {
        id: "test-realtime-client",
        name: "Realtime Client",
        href: "/test/realtime-client",
      },
      {
        id: "test-storage-client",
        name: "Storage Client",
        href: "/test/storage-client",
      },
    ],
  },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Sidebar links={links} />
        <div className=" md:pl-64 flex min-h-0 flex-1 flex-col flex-grow h-full">
          {children}
        </div>
      </body>
    </html>
  )
}
