import { useState } from "react"
import Link from "next/link"
import { api } from "../../lib/api"
import { toast } from "react-toastify"

import Layout from "../../components/Layout"
import Container from "../../components/ui/Container"
import Title from "../../components/Title"

import { Book, NotePencil, Trash } from 'phosphor-react'

import 'react-toastify/dist/ReactToastify.css';

const Books = ({ books }) => {
  const [allBooks, setAllBooks] = useState(books)

  const handleDelete = async (e, bookId) => {
    e.preventDefault()

    try {

      const res = await api.delete(`/api/books/${bookId}`)
      const newAllBooks = allBooks.filter((book) => book.id !== bookId)

      setAllBooks(newAllBooks)

      toast.success("Livro deletado com sucesso")

    } catch (error) {
      console.log(error)
    }
  }

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
          {allBooks.map((book) => {
            return (
              <li key={book.id} className="flex items-center justify-between bg-slate-800 rounded-md py-2 px-4 mb-2">
                <Link href={`/livros/${book.id}`} className="text-slate-500 hover:text-indigo-500">
                  <h2>{book.title}</h2>
                </Link>
                <div className="flex gap-3">
                  <Link href={`/livros/${book.id}/editar`} className="cursor-pointer text-slate-500 hover:text-indigo-400" title="Editar">
                    <NotePencil size={22} weight="duotone" />
                  </Link>
                  <form onSubmit={(e) => handleDelete(e, book.id)}>
                    <button type="submit" className="cursor-pointer text-slate-500 hover:text-red-500">
                      <Trash size={22} weight="duotone" />
                    </button>
                  </form>
                </div>
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