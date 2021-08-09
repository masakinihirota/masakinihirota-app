import Link from 'next/link'
import Layout from '../components/layout'
import { NextPage } from 'next'

// 型の追加
const Page: NextPage = () => {
  return (
    <Layout>
      <h1>2021年8月9日</h1>
      <h1>真っ先に拾った（α版）</h1>
      <h2>github:public</h2>
      <h5>
        インターネットという情報の洪水から、真っ先に大切で価値ある情報を拾い上げ、宝物を共有しグループを作り上げていくサービス。
      </h5>
      <h6>VNS=value network service</h6>
      <h2>
        <a href="/oasisDeclaration">オアシス宣言</a>
      </h2>
      <h4>このサイトはオアシス宣言に従います。</h4>
      <p></p>
      <h3>ユーザー名:masakinihirota（固定）</h3>
      <h3>ユーザーの製作物（production）</h3>
      <p>
        This is an example site to demonstrate how to use{' '}
        <a href={`https://next-auth.js.org`}>NextAuth.js</a> for authentication.
      </p>
    </Layout>
  )
}

export default Page
