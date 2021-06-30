/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';

import section from 'src/styles/Section.module.css';
import Header from "src/components/header";
import Head from "next/head";

import Footer from "src/components/Footer";
 
function Custom404() {

  return (
    <>
        <Head>
            <title>Allmatech Imobiliária - 404</title>
            <meta name="description" content="404 - Página não encontrada. Lorem hendrerit suscipit, amet." />
        </Head>
        <Header />
        <div className={section.bannerCompany}>
            <div className={section.bannerOverlay}>
                <div className={section.bannerText}>
                    <h1>404</h1>
                </div>
            </div>
        </div>

        <section className={section.containerStaticPage}>
            <h1 className={section.pageError}>
                404 - Página não encontrada.
            </h1>
        </section>
        <Footer />
    </>
  )
}

export default Custom404;