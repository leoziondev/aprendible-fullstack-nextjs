import Link from "next/link"
import Logo from "../components/Logo"

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900">
      <Logo sizeIcon={72} className="text-4xl mb-16" />
      <Link
        href="/livros"
        className="text-white text-sm tracking-wide bg-indigo-500 rounded-md py-2 px-4"
      >
        Acessar livros
      </Link>
    </div>
  )
}

export default Home
