import Link from "next/link"

import Layout from "../../components/Layout"
import Container from "../../components/ui/Container"
import Title from "../../components/Title"

import { Book } from 'phosphor-react'
import { api } from "../../lib/api"

const Books = ({ books }) => {
  return (
    <Layout>
      <Container className="flex items-center justify-between mb-4">
        <Title text="Livros" />
        <Link
          href="/livros/criar"
          className="flex items-center gap-2 bg-indigo-500 rounded-md text-indigo-100 tracking-wide text-sm py-2 px-4"
        >
          <Book size={16} weight="duotone" />
          Criar livro
        </Link>
      </Container>
      <Container>
        <ul>
          {books.map((book) => {
            return (
              <li key={book.id} className="bg-slate-800 rounded-md py-2 px-4 mb-2 text-slate-500 hover:bg-indigo-500 hover:text-indigo-100">
                <Link href={`/livros/${book.id}`}>
                  <h2>{book.title}</h2>
                </Link>
              </li>
            )
          })}
        </ul>
      </Container>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const res = await api.get('/api/books')

  return {
    props: {
      books: res.data
    }
  }
}

export default Books