import React from 'react'
import Hero from './hero'
import Content from './content'
import Author from './author'
import Footer from '../all_component/footer'
import '../../assets/css/landing.css'
import '../../assets/css/font-awesome.min.css'

function Beranda() {
    return (
        <React.Fragment>
            <Hero />
            <Content />
            <Author />
            <Footer />
        </React.Fragment>
    )
}

export default Beranda;