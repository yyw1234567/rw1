
//为什么要传入children
const Card = ({clasName, children}) => {
  return (
    <article className={`card ${clasName}`}>
        {children}
    </article>
  )
}

export default Card