const Container = ({ className = "", children }) => {
  return (
    <div className={`${className} max-w-2xl mx-4 sm:mx-auto`}>
      {children}
    </div>
  )
}

export default Container