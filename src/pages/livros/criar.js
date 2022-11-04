import { useState } from "react"

import { api } from "../../lib/api"
import { toast } from "react-toastify"

import Layout from "../../components/Layout"
import Title from "../../components/Title"
import Container from "../../components/ui/Container"

import { CircleNotch } from "phosphor-react"
import 'react-toastify/dist/ReactToastify.css';

const CreateBook = () => {
  const [bookName, setBookName] = useState('')
  const [error, setError] = useState('')
  const [isSubmiting, setIsSubmiting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmiting(true)
    
    try {

      const res = await api.post('/api/books', {
        title: bookName
      })
      
      setBookName('')
      setError('')
      setIsSubmiting(false)

      toast.success("Livro cadastrado com sucesso")
    } catch (error) {
      setIsSubmiting(false)
      setError(error.response.data.message)
    }
  }

  return (
    <Layout>
      <Container>
        <Title text="Novo Livro" />
        <form onSubmit={handleSubmit} className="mt-8 flex gap-4">
          <input
            type="text"
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
            data-cy="input-book-title"
            placeholder="Título do livro"
            className="flex-1 bg-slate-800 text-slate-200 placeholder:text-slate-500 rounded-md py-2 px-4"
          />
          <button
            type="submit"
            data-cy="btn-create-book"
            className="flex items-center gap-2 bg-indigo-500 rounded-md text-indigo-100 tracking-wide text-base disabled:opacity-60 py-2 px-4"
            disabled={isSubmiting}
          >
            {isSubmiting
              ? (
                <>
                  <CircleNotch size={18} className="animate-spin" />
                  Processando
                </>
              ) : (
                <>Cadastrar</>
              )
            }
            
          </button>
        </form>
        {error && <span className="text-red-500">{error}</span>}
      </Container>
    </Layout>
  )
}

export default CreateBook