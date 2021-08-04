// Document コンポーネント を使うと、
// 初期状態だと自動で追加される <html> や <body> に
// 変更を加えることができます。

import NextDocument, { Html, Head, Main, NextScript } from "next/document";

type Props = {};

class Document extends NextDocument<Props> {
  render() {
    return (
      <Html lang="ja">
        <Head />
        <body>
            {/* Mainタグを削除するとindex.jsファイルに記述して内容は表示されなくなります。 */}
          <Main />
          {/* NextScriptタグは必須なので削除したらエラー */}
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
