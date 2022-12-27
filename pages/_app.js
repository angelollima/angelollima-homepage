import { ThemeProvider } from 'next-themes'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import '../styles/globals.css'
import Layout from '../components/layout'

export default function App({ Component, pageProps }) {

  const router = useRouter();

  const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: '-100vw', y: 20, transition: { duration: 0.5 }}
  }

  return (
    <ThemeProvider attribute='class'>
      <Layout>
        <AnimatePresence mode='wait'>
          <motion.div
            key={router.route}
            variants={variants}
            initial='hidden'
            animate='enter'
            exit='exit'
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </ThemeProvider>
  )
}