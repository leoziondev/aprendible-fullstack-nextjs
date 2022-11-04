import Link from "next/link"
import Logo from "./Logo"

import { ArrowLeft } from 'phosphor-react'
import Container from "./ui/Container"
import { useRouter } from "next/router"

const Layout = ({ children }) => {
  const router = useRouter()

  const handleBack = () => {
    router.back()
  }

  return (
    <div className="bg-slate-900 flex flex-col min-h-screen">
      <header>
        <Container className="relative">
          <button onClick={handleBack} className="absolute top-10" title="Voltar" data-cy="back-router">
            <ArrowLeft size={18} className="text-white" />
          </button>
          <Link href="/" className="flex flex-col items-center justify-center pt-4 mb-8">
            <Logo sizeIcon={32} className="text-2xl"/>
          </Link>
        </Container>
      </header>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout