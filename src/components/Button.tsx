

type Props = {
  styles: string
  children: React.ReactNode
}

function Button({styles, children}: Props) {
  return (
    <button type="button" className={`${styles} py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px]`}>
      {children}
    </button>
  )
}

export default Button