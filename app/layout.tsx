import Sidebar from "@/components/Sidebar"
import "./globals.css"

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
        <Sidebar links={[]} />
        <div className=" md:pl-64 flex min-h-0 flex-1 flex-col flex-grow h-full">
          {children}
        </div>
      </body>
    </html>
  )
}
