import { Books } from 'phosphor-react'

const Logo = ({ sizeIcon, className = "" }) => {
  return (
    <>
      <Books size={sizeIcon} weight="duotone" className="text-white" />
      <h1 className={`${className} text-white font-bold`}>Livros <span className="text-indigo-500">App</span></h1>
    </>
  )
}

export default Logo