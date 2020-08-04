import React, { useState } from "react";
import { I18nPropvider, LOCALES } from "./i18nProvider";
import translate from "./i18nProvider/translate";

import "./App.css";
import ProfilePictuire from "./images/Talha.jpg";
import thumbnail from "./images/coming_soon.jpg";
import "./default.css";

function App() {
  const [locale, setLocale] = useState(LOCALES.ENGLISH);

  return (
    <I18nPropvider locale={locale}>
      <div className="App">
        <section className="s1">
          <div className="language-buttons">
            <button className="english-language" onClick={() => setLocale(LOCALES.ENGLISH)}>English</button>
            <button className="french-language" onClick={() => setLocale(LOCALES.FRENCH)}>French</button>
            <button className="german-language" onClick={() => setLocale(LOCALES.GERMAN)}>German</button>
          </div>
          <div className="mainContainer">
            <div className="greeting-wrapper">
              <h1>{translate("hi")}</h1>
            </div>

            <div className="intro-wrapper">
              <div className="nav-wrapper">
                <a href="index.html">
                  <div className="dots-wrapper">
                    <div id="dot-1" className="browser-dot"></div>
                    <div id="dot-2" className="browser-dot"></div>
                    <div id="dot-3" className="browser-dot"></div>
                  </div>
                </a>

                <ul id="navigation">
                  <li>
                    <a href="#contact-form">{translate("contact")}</a>
                  </li>
                </ul>
              </div>

              <div className="left-column">
                <img id="profile_pic" src={ProfilePictuire} alt="" />
              </div>

              <div className="right-column">
                <div id="preview-shadow">
                  <div id="preview">
                    <div id="corner-tl" className="corner"></div>
                    <div id="corner-tr" className="corner"></div>
                    <h3>{translate("whatIDo")}</h3>
                    <p>{translate("iBuild")}</p>
                    <div id="corner-br" className="corner"></div>
                    <div id="corner-bl" className="corner"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="s2">
          <div className="mainContainer">
            <div className="about-wrapper">
              <div className="about-me">
                <h4>{translate("moreAboutMe")}</h4>

                <p>{translate("description")}</p>

                <hr />

                <h4>{translate("TOPEXPERTISE")}</h4>
                <div id="skills">
                  <ul>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>Jest/Enzyme</li>
                    <li>React Testing Library</li>
                  </ul>
                  <ul>
                    <li>HTML/CSS</li>
                    <li>TypeScript</li>
                    <li>SCSS/Sass</li>
                    <li>SQL</li>
                    <li>StoryBook</li>
                  </ul>
                </div>
              </div>

              <div className="social-links">
                <img id="social_img" src="images/follow.jpg" alt="" />
                <h3>{translate("findMe")}</h3>

                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/talhabintariq"
                >
                  GitHub: @talhabintariq
                </a>
                <br />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/ttariq1"
                >
                  LinkedIn: @ttariq1
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="s1">
          <div className="mainContainer">
            <h3 style={{ textAlign: "center" }}>{translate("sampleWork")}</h3>

            <div className="post-wrapper">
              <div>
                <div className="post">
                  <img className="thumbnail" src={thumbnail} alt="" />
                  <div className="post-preview">
                    <h6 className="post-title">{translate("projectTile")}</h6>
                    <p className="post-intro">
                      {translate("projectDescription")}
                    </p>
                    <a href="post.html">{translate("readMore")}</a>
                  </div>
                </div>
              </div>

              <div>
                <div className="post">
                  <img className="thumbnail" src={thumbnail} alt="" />
                  <div className="post-preview">
                    <h6 className="post-title">{translate("projectTile")}</h6>
                    <p className="post-intro">
                      {translate("projectDescription")}
                    </p>
                    <a href="post.html">{translate("readMore")}</a>
                  </div>
                </div>
              </div>

              <div>
                <div className="post">
                  <img className="thumbnail" src={thumbnail} alt="" />
                  <div className="post-preview">
                    <h6 className="post-title">{translate("projectTile")}</h6>
                    <p className="post-intro">
                      {translate("projectDescription")}
                    </p>
                    <a href="post.html">{translate("readMore")}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="s2">
          <div className="mainContainer">
            <h3 style={{ textAlign: "center" }}>{translate("getInTouch")}</h3>

            <form id="contact-form">
              <label>{translate("name")}</label>
              <input className="input-field" type="text" name="name" />

              <label>{translate("subject")}</label>
              <input className="input-field" type="text" name="subject" />

              <label>{translate("email")}</label>
              <input className="input-field" type="text" name="email" />

              <label>{translate("message")}</label>
              <textarea className="input-field" name="message"></textarea>

              <input id="submit-btn" type="submit" value="Send" />
            </form>
          </div>
        </section>
      </div>
    </I18nPropvider>
  );
}

export default App;
