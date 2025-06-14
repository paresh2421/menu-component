
const Title = ({ text }) => {
  return (
    <div className="title">
        <h1>{ text || 'Our Menu' }</h1>
        <div className="title-underline"></div>
    </div>
  )
}

export default Title