import { HtmlProps } from "next/dist/shared/lib/html-context";
import Head from "next/head";
import Footer from "./general/Footer";
import Header from "./general/Header";

export default function Layout({ children, title, description }: {children: any, title: string, description: string}, ) {
  return (
    <>
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
        </Head>
        <Header />

            <main>
                {children}
            </main>

        <Footer />
    </>
  )
}

Layout.defaultProps = {
    title: 'PC?|Home',
    description: 'Inicio de la página Para Cuando?',
    children: 'Home'
}