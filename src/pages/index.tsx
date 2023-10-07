import { useEffect, FC } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Home: FC = (props: any) => {
  const router = useRouter()

  useEffect(() => {
    console.log('router.isReady', router.isReady)
    console.log('router.query', router.query)
  }, [router.isReady, router.query])

  return (
    <>
      <h1>Hello World</h1>
      
      <p>
        <strong>foo:</strong>
        {router.query.foo || props.foo}
      </p>
      
      <Link href={'/?foo=bar'}>
        <u>Follow me</u>
      </Link>
    </>
  )
}

export const getStaticProps = async() => {
  return {
    props: {
      foo: 'default'
    },
  }
}

export default Home