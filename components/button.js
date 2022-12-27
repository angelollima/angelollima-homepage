const Button = ({ onClick, className, text, icon, href }) => {

  return (
    <a href={href} target='blank_'>
      <button
          className={`flex items-center gap-3 text-xs text_hover md:text-sm bg-transparent_screen shadow-r_b_shadow border-t border-l border-transparent_border py-2 px-3 rounded-lg ${className}`}
          onClick={onClick}
      >
          {text}
          {icon}
      </button>
    </a>
  )
}

export default Button