import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

const Animate = ({ children }) => {

  const router = useRouter();

  return (
    <motion.div
        key={router.route}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
    </motion.div>
  )
}

export default Animate