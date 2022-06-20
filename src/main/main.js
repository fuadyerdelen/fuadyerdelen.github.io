import React, { Component } from 'react'
import "./main.css"
import profil from "./images/profil.jpg"
import linkedin from "./images/linkedin.png"
import twitter from "./images/twitter.png"
import reddit from "./images/reddit.png"
import write from './write me/write'



export default class Main extends Component {
    naber() {
        window.alert("naber la!")
    }
    render() {

        return (
            <main>
                <div className='card'>

                    <div id="me">
                        <img id="image" src={profil} alt="profil" />
                        <h1>M.Fuad Yerdelen</h1>
                        <p id="job" class="job">Frontend Developer</p>
                        <div className="social">
                            <ul>
                                <li><a href="https://twitter.com/fuadyerdelen"><img src={twitter} alt="twitter" /></a></li>
                                <li><a href="https://www.linkedin.com/in/muhammed-fuad-yerdelen"><img src={linkedin} alt="linkedin" /></a></li>
                                <li><a href="https://www.reddit.com/user/fuadyerdelen"><img src={reddit} alt="reddit" /></a></li>
                            </ul>
                        </div>
                    </div>

                    <div id="hello">
                        <p id="big_hello">Hello</p>
                        <p>Here's who I am  what I do</p>

                        <article id="about_me">My name is M. Fuad Yerdelen. I'm a front-end developer.
                            I create great and functional web pages using React.
                            You can check some of the examples I have created below. </article>

                        <div id="write_me">

                            <p>You can follow me on my social media accounts or write to me here.</p>

                            <button id="contact" onClick={() => { this.naber() }}>
                                write me
                            </button>

                        </div>

                    </div>

                </div>


            </main>


        )
    }

}












