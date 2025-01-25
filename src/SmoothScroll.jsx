export default function SmoothScroll(props) {
  const {to, children, ...restProps} = props
  function handleClick(e) {
     e.preventDefault()
     const element = document.querySelector(to)
     if ( element ) {
       element.scrollIntoView({ behavior: "smooth", block: "start" })
     }
  }
  return (
    <a href={to} className="cursor-pointer" onClick={handleClick} {...restProps}>
      {children}
    </a>
  )
}