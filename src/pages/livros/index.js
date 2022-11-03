import Link from "next/link"

import Layout from "../../components/Layout"
import Container from "../../components/ui/Container"
import Title from "../../components/Title"

import { Book } from 'phosphor-react'

const Books = () => {
  return (
    <Layout>
      <Container className="flex items-center justify-between">
        <Title text="Livros" />
        <Link
          href="/livros/criar"
          className="flex items-center gap-2 bg-indigo-500 rounded-md text-indigo-100 tracking-wide text-sm py-2 px-4"
        >
          <Book size={16} weight="duotone" />
          Criar livro
        </Link>
      </Container>
    </Layout>
  )
}

export default Books