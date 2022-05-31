import React, { Component } from 'react'
import "./header.css"


export default class Header extends Component {
    render() {
        return (
            <header>
                <nav>
                    <div className="left">
                        <div>
                            <div className="kare"></div>
                            <p className="name">
                                <a href="/">M.Fuad Yerdelen </a>
                            </p>
                            <svg preserveAspectRatio="xMidYMid meet" data-bbox="63.5 20 73 160" viewBox="63.5 20 73 160"
                                height="16" width="16" xmlns="http://www.w3.org/2000/svg" data-type="color" aria-hidden="true"
                                aria-labelledby="svgcid-zi6xsq-mwg3z">
                                <title id="svgcid-zi6xsq-mwg3z"></title>
                                <g>
                                    <path d="M125.8 20l10.7 3.7L74.4 180l-10.9-3.7L125.8 20z" fill="#000001" data-color="1">
                                    </path>
                                </g>
                            </svg>
                            <p className="job">
                                <a href="/">frontend developer</a>
                            </p>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}
