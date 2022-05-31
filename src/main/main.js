import React, { Component } from 'react'
import "./main.css"
import profil from "./images/profil.jpg"
import linkedin from "./images/linkedin.png"
import twitter from "./images/twitter.png"
import reddit from "./images/reddit.png"

export default class Main extends Component {
    render() {
        return (
            <main>
                <div className='card'>

                    <div id="me">
                        <img id="image" src={profil} alt="profil" />
                        <h1>M.Fuad Yerdelen</h1>
                        <p id="job" class="job">Frontend Developer</p>
                        <div class="social">
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

                        <article id="about_me">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus assumenda odio
                            veniam quos saepe a
                            iusto quo sint laborum quam, officia pariatur aspernatur libero aperiam neque consectetur dolor
                            aliquam ipsam.</article>

                        <button id="contact">
                            write me
                        </button>
                    </div>

                </div>


                <div id="works">
                    <h2>My Works</h2>
                    <div>
                        <div class="work"></div>
                        <div class="work"></div>
                        <div class="work"></div>
                        <div class="work"></div>
                    </div>

                </div>



            </main>


        )
    }

}










