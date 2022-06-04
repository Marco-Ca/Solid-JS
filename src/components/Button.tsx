type ButtonType = {
  onClick: () => void
}

const Button = ({ onClick }: ButtonType) => {
  return (
    <button onClick={onClick}>
      X
    </button>
  )
}

export default Button;