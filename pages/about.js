import Head from 'next/head'
import Container from '../components/container'
import Layout from '../components/layout'
import { CMS_NAME } from '../lib/constants'

export default function About() {
  return (
    <>
      <Layout preview={false} >
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">About.</h1>
        </Container>
      </Layout>
    </>
  )
}
