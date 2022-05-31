import React, { Component } from 'react'
import "./footer.css"

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="footer-left">
                    <p>2022 &copy; m.fuad yerdelen</p>
                </div>
                <div>
                    <div className="call"></div>
                    <div className="write"></div>
                    <div className="follow"></div>
                </div>
            </footer>


        )
    }
}
