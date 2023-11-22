import Link from 'next/link'
import '../globals.css'
import { Inter } from 'next/font/google'
import VerticalNavigatorAdmin from '../components/VerticalNavigatorAdmin'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
 
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>

        <nav>
          <VerticalNavigatorAdmin />
        </nav>
        {children}
      </div>
    </>
  )
}