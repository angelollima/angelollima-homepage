import Head from 'next/head'
import NavBar from './navbar'

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Angelollima - HomePage</title>
        <meta name="description" content="Portfolio about Angelo Lima, a junior developer always looking for development. This site was generated with Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@900&display=swap" rel="stylesheet" />
      </Head>

    <div className='min-h-screen'>
      <NavBar />
        <main className='flex-grow pt-32'>
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout