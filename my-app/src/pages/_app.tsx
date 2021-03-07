// React と AppProps を読み込む
import React from 'react'
import { AppProps } from 'next/app'
import '../styles/globals.css'

// 引数に型を追加する
function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />
}

export default MyApp
