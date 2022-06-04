type ButtonType = {
  onClick: () => void
}

const Button = ({ onClick }: ButtonType) => {
  return (
    <button onClick={onClick}>
      x
    </button>
  )
}

export default Button;