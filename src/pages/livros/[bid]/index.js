import { api } from "../../../lib/api"

import Layout from "../../../components/Layout"
import Title from "../../../components/Title"
import Container from "../../../components/ui/Container"



const BookDetails = ({ book }) => {
  return (
    <Layout>      
      <Container>
        <Title text={book.title} />
      </Container>
    </Layout>
  )
}

export const getStaticPaths = async () => {
  const res = await api.get('/api/books')

  return {
    paths: res.data.map((book) => ({
      params: { bid: String(book.id) }
    })),
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  const bid = params.bid
  const res = await api.get(`/api/books/${bid}`)

  return {
    props: {
      book: res.data
    }
  }
}

export default BookDetails