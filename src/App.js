import React from 'react';

import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.generateQuote = this.generateQuote.bind(this)
        this.state = {
            quote: "",
            author: ""
        }
    }
    async generateQuote() {
        const response = await fetch("https://quoteslate.vercel.app/api/quotes/random");
        const data = await response.json();
        if (response.ok) {
            console.log(data);
            this.setState({
                quote: data.quote,
                author: data.author
            })
        } else {
            this.setState({
                quote: "An error occured!",
                author: ""
            })
            console.log(data);
        }
    }
    componentDidMount() {
        this.generateQuote()
    }
    render() {
        return (
            <div className="App">
                <header>

                </header>
                <div id="quote-box">
                    <p id="text-box"><FontAwesomeIcon id="quote-icon" icon={faQuoteLeft} /><span id="text">{this.state.quote}</span></p>
                    <p id="author">- {this.state.author}</p>
                    <div id="buttons">
                        <div id="socials">
                            <a target="_blank" rel="noreferrer" href="https://twitter.com/intent/tweet"><FontAwesomeIcon icon={faSquareTwitter} /></a>
                            <a target="_blank" rel="noreferrer" href="https://noah-kleinert.de"><FontAwesomeIcon icon={faLinkedin} /></a>
                        </div>
                        <button id="new-quote" onClick={this.generateQuote}>New quote</button>
                    </div>
                    <span className="credits">by <a target="_blank" rel="noreferrer" href="https://noah-kleinert.de">Noah Kleinert</a> <br/>
                    Quotes powered by <a target="_blank" rel="noreferrer" href="https://quoteslate.vercel.app/">the QuoteSlate API</a></span>
                </div>
            </div>
        );
    }
}

export default App;
