import Layout from '../components/layout'
import { NextPage } from 'next'

// 型の追加
const Page: NextPage = () => {
  return (
    <Layout>
      <h1>NextAuth.js Example</h1>
      <p>
        This is an example site to demonstrate how to use{' '}
        <a href={`https://next-auth.js.org`}>NextAuth.js</a> for authentication.
      </p>
    </Layout>
  )
}

export default Page
