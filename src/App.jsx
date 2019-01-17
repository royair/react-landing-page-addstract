import React, { Component } from 'react';
import Icon from './components/Icon';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App center">

        <header>
          <div className="logo">
            <Icon name="Logo"/>
          </div>
          <nav>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Advantages</li>
              <li>Preview</li>
              <li>Video</li>
              <li>Contact us</li>
            </ul>
          </nav>
        </header>

        <section className="impress">
          <h1>
            Do you want to
            <br/>
            <span className="bold">impress</span> your clients?</h1>

          <div className="button">Get early access</div>
        </section>

        <section className="trusted">
          <h3>Trusted by the world’s best</h3>
        </section>

        <section className="a1">
          <h2>The simplest way to have <br/> a professional website.</h2>
          <p>Get all the benefits of an in-wall or in-ceiling speaker system
            without any of the hassle. Just replace a few lights around your
            house, and start streaming crisp, clear audio, everywhere.
          </p>
        </section>

        <section className="a2">
          <div className="container">
            <h2>Display your product
              as never before</h2>
            <p>Get all the benefits of an in-wall or in-ceiling speaker system
              without any of the hassle. Just replace a few lights around your
              house, and start streaming crisp, clear audio, everywhere.
            </p>
          </div>
        </section>

        <section className="a3">
          <h2>The simplest way to have<br/> a professional website.</h2>
          <p>Get all the benefits of an in-wall or in-ceiling speaker system
            without any of the hassle. Just replace a few lights around your
            house, and start streaming crisp, clear audio, everywhere.
          </p>
        </section>

        <section className="a4">
          <h2>Layered Video Player</h2>
          <p>Video player like never before</p>
          <div className="button">Get early access</div>
        </section>

        <section className="a5">
          <h2>Statistics & Information</h2>
          <p>Numbers speak louder than words</p>
          <div className="button-hollow"><span>View all data</span></div>
        </section>

        <section className="a6">
          <h3>Build your own future. <br/>
            Download now free and get 100% boost!</h3>
          <div className="button">Get early access</div>
          <div className="button-hollow"><span>Newsletter</span></div>
        </section>

        <footer>
          <nav>
            <div></div>

            <div>
              <ul>
                <li><a href="# ">Home</a></li>
                <li><a href="# ">About us</a></li>
                <li><a href="# ">Advantages</a></li>
                <li><a href="# ">Preview</a></li>
                <li><a href="# ">Video</a></li>
              </ul>
            </div>

            <div>
              <ul>
                <li><a href="# ">Terms & Conditions</a></li>
                <li><a href="# ">Privacy policy</a></li>
                <li><a href="# ">Support</a></li>
                <li><a href="# ">Chrome extension</a></li>
              </ul>
            </div>

            <div
              className="text-right flex flex-direction-column justify-content-space-between align-items-end">

              <div className="flex align-items-start">
                <div className="address">231 North Star 34th Street, Suite #100
                  <br/>
                  Cupertino, 98103
                </div>
                <Icon name="Location" className="pin"/>
              </div>

              <div className="social-icons">

                <a href="# "><Icon name="Dribble"/></a>
                <a href="# "><Icon name="Instagram"/></a>
                <a href="# "><Icon name="Behance"/></a>
                <a href="# "><Icon name="Facebook"/></a>
                <a href="# "><Icon name="Medium"/></a>

              </div>
            </div>

          </nav>
          <div className="credits">
            <div className="logo">

              <Icon name="Logo"
                    fillText="#677897"
                    fillShape="#677897"
                    height="18"/>
            </div>

            <span className="copyright">
              © 2017  Copyrights are Creative Commons
            </span>
            <span className="credits-link">
              Graphics by gifted <a href="https://dribbble.com/danielmitevbg"
                                    target="_blank"
                                    rel="noopener noreferrer" >Daniel Mitev</a>
            </span>
          </div>
        </footer>

      </div>
    );
  }
}

export default App;
