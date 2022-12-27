const Paragraph = ({ children, className }) => (
  <div className={`text-justify ${className}`}>
    {children}
  </div>
)

export default Paragraph