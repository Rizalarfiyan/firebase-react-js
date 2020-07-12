import React, { Component } from 'react'
import MainNav from '../all_component/mainNav'
import NavTop from '../all_component/navtop'
import logo from '../../assets/img/logo.png'

class Content extends Component {
    render() {
        return (
            <section className="hero">
                <NavTop />
                <MainNav />
                <div className="mainhero">
                    <div className="heroku">
                        <div className="img-group">
                            <img src={logo} alt="Arfiyan Design" />
                        </div>
                        <h1 className="name">React JS App</h1>
                        <h3><i className="fa fa-copyright"></i> Arfiyan Design</h3>
                        <span className="desc">I always think like coding because life is like programming.</span>
                    </div>
                </div>
            </section>
        )
    }
}

export default Content