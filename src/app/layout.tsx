import './globals.css'

export const metadata = {
  title: 'Frontend Mentor Submissions',
  description: 'Frontend Mentor Submissions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
