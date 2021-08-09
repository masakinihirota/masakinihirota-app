import Link from 'next/link'
import Layout from '../components/layout'
import { NextPage } from 'next'

// 型の追加
const Page: NextPage = () => {
  return (
    <Layout>
      <h1>デプロイ：2021年8月9日</h1>
      <h1>真っ先に拾った（α版）</h1>
      <h2>github:public</h2>
      <h5>
        インターネットという情報の洪水から、真っ先に大切で価値ある情報を拾い上げ、宝物を共有しグループを作り上げていくサービス。
      </h5>
      <h6>VNS=value network service</h6>
      <h2>
        <Link href="/oasisDeclaration">
          <a>オアシス宣言</a>
        </Link>
      </h2>
      <h4>このサイトはオアシス宣言に従います。</h4>
      <p></p>
      <h3>ユーザー名:masakinihirota（固定）</h3>
      <h3>ユーザーの製作物（production）</h3>
      <p>
        <Link href="/">
          <a>真っ先に拾った（ウェブサービス）</a>
        </Link>
      </p>
      <p></p>
      <h3>プロフィール（個人の価値観）</h3>
      <div>
        <Link href={'/category/manga/'}>
          <a>漫画</a>
        </Link>
        <p>
          愛読書:
          ワンピース、進撃の巨人、龍と苺、りこさんブッチギリです、四月は君の嘘、新上がってなンボ！！
          太一よ泣くな、鈴木先生、ここは今から倫理です。、壬生義士伝、アスペル・カノジョ、ムーンランド、etc
        </p>
        <p>
          尊敬している作家:
          尾田栄一郎、諫山創、渡辺多恵子、ちばてつや、高橋留美子、大島弓子、遠藤淑子、新川直司、etc
        </p>
        <p></p>
        <br />
        <Link href={'/category/anime/'}>
          <a>アニメ</a>
        </Link>
        <p>
          2020年秋アニメ:未来少年コナン、メジャーセカンド2、ドラゴンクエスト
          ダイの大冒険、魔王城でおやすみ、兄に付ける薬はない！4
        </p>
        <p>
          2020年夏アニメ:バキ
          -大擂台賽編-、宇崎ちゃんは遊びたい！、とある科学の超電磁砲T、GREAT
          PRETENDER
        </p>
        <br />
        <Link href={'/category/music/'}>
          <a>音楽</a>
        </Link>
        <br />
        <Link href={'/category/movie/'}>
          <a>映画</a>
        </Link>
        <br />
        <Link href={'/category/etc/'}>
          <a>その他</a>
        </Link>
        <br />
        <p></p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
      <br />
      <p>
        This is an example site to demonstrate how to use{' '}
        <a href={`https://next-auth.js.org`}>NextAuth.js</a> for authentication.
      </p>
    </Layout>
  )
}

export default Page
