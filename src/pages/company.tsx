/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';

import section from 'src/styles/Section.module.css';
import Header from "src/components/header";
import Head from "next/head";

import Footer from "src/components/Footer";
 
function Company() {

  return (
    <>
        <Head>
            <title>Allmatech Imobiliária - Quem somos</title>
            <meta name="description" content="Venha nos conhecer. Lorem hendrerit suscipit, amet." />
        </Head>
        <Header />
        <div className={section.bannerCompany}>
            <div className={section.bannerOverlay}>
                <div className={section.bannerText}>
                    <h1>Quem somos</h1>
                </div>
            </div>
        </div>

        <section className={section.containerStaticPage}>
            <div className={section.companyContent}> 
                <div className={section.imageCompany}>
                    <img
                        src="https://www.roberthalf.com/sites/default/files/2017-08/company-pride-team-happier-rh-08-04-2017.jpg"
                        title="Equipe"
                        alt="Equipe"
                    />
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet enim ornare tortor consectetur bibendum non vitae elit. 
                    Vestibulum mi nisi, elementum eu porta sit amet, pulvinar id lacus. Fusce eget convallis nulla. 
                    Ut aliquam, nunc a eleifend porttitor, nunc augue tincidunt lacus, eu tempor elit risus ut nibh. 
                    Vivamus blandit ex at metus imperdiet consectetur. Morbi egestas tellus sapien, ac semper diam condimentum ut. 
                    Nunc id tincidunt nulla. Aenean hendrerit felis at sem varius, pulvinar hendrerit velit molestie. 
                    Ut viverra sapien a nulla luctus, id ornare risus porttitor. Vestibulum euismod ante id eros convallis, 
                    a varius urna euismod. Fusce a mattis purus.
                </p>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet enim ornare tortor consectetur bibendum non vitae elit. 
                    Vestibulum mi nisi, elementum eu porta sit amet, pulvinar id lacus. Fusce eget convallis nulla. 
                    Ut aliquam, nunc a eleifend porttitor, nunc augue tincidunt lacus, eu tempor elit risus ut nibh. 
                    Vivamus blandit ex at metus imperdiet consectetur. Morbi egestas tellus sapien, ac semper diam condimentum ut. 
                    Nunc id tincidunt nulla. Aenean hendrerit felis at sem varius, pulvinar hendrerit velit molestie. 
                    Ut viverra sapien a nulla luctus, id ornare risus porttitor. Vestibulum euismod ante id eros convallis, 
                    a varius urna euismod. Fusce a mattis purus.
                </p>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet enim ornare tortor consectetur bibendum non vitae elit. 
                    Vestibulum mi nisi, elementum eu porta sit amet, pulvinar id lacus. Fusce eget convallis nulla. 
                    Ut aliquam, nunc a eleifend porttitor, nunc augue tincidunt lacus, eu tempor elit risus ut nibh. 
                    Vivamus blandit ex at metus imperdiet consectetur. Morbi egestas tellus sapien, ac semper diam condimentum ut. 
                    Nunc id tincidunt nulla. Aenean hendrerit felis at sem varius, pulvinar hendrerit velit molestie. 
                    Ut viverra sapien a nulla luctus, id ornare risus porttitor. Vestibulum euismod ante id eros convallis, 
                    a varius urna euismod. Fusce a mattis purus.
                </p>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet enim ornare tortor consectetur bibendum non vitae elit. 
                    Vestibulum mi nisi, elementum eu porta sit amet, pulvinar id lacus. Fusce eget convallis nulla. 
                    Ut aliquam, nunc a eleifend porttitor, nunc augue tincidunt lacus, eu tempor elit risus ut nibh. 
                    Vivamus blandit ex at metus imperdiet consectetur. Morbi egestas tellus sapien, ac semper diam condimentum ut. 
                    Nunc id tincidunt nulla. Aenean hendrerit felis at sem varius, pulvinar hendrerit velit molestie. 
                    Ut viverra sapien a nulla luctus, id ornare risus porttitor. Vestibulum euismod ante id eros convallis, 
                    a varius urna euismod. Fusce a mattis purus.
                </p>   
            </div>            
        </section>      
        <Footer />
    </>    
  )
}

export default Company;