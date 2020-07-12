import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="copyright">
                    <div className="wrapper">
                        <span><i className="fa fa-copyright"></i> 2020 | <a href="https://gihub.com/rizalarfiyan" target="_blank" rel="noopener noreferrer">Arfiyan Design React JS App</a> - Created by <i className="fa fa-heart"></i></span>
                        <span>Thanks to <a href="https://sanbercode.com/" target="_blank" rel="noopener noreferrer">Sanbercode</a> - Powered by <a href="https://firebase.com/" target="_blank" rel="noopener noreferrer">Firebase</a></span>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer