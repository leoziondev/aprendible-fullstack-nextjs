import Link from "next/link"
import Logo from "./Logo"

const Layout = ({ children }) => {
  return (
    <div className="bg-slate-900 flex flex-col min-h-screen">
      <header>
        <Link href="/" className="flex flex-col items-center justify-center pt-4 mb-8">
          <Logo sizeIcon={32} className="text-2xl"/>
        </Link>
      </header>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout