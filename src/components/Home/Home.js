import React, { useState } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { I18nPropvider, LOCALES } from '../../i18nProvider';
import translate from '../../i18nProvider/translate';

import '../../App.css';
import ProfilePictuire from '../../images/Talha.jpg';
import thumbnail from '../../images/coming_soon.jpg';
import './home.scss';

const Home = () => {
  const [locale, setLocale] = useState(LOCALES.ENGLISH);

  return (
    <I18nPropvider locale={locale}>
      <div className="App">
        <section className="s1">
          <div className="language-buttons">
            <Button color="info" onClick={() => setLocale(LOCALES.ENGLISH)}>English</Button>
            <Button color="info" onClick={() => setLocale(LOCALES.FRENCH)}>French</Button>
            <Button color="info" onClick={() => setLocale(LOCALES.GERMAN)}>German</Button>
          </div>
          <div className="mainContainer">
            <div className="greeting-wrapper">
              <div>Test Test Test</div>
              <h1>{translate('hi')}</h1>
            </div>

            <div className="intro-wrapper">
              <div className="nav-wrapper">
                <a href="index.html">
                  <div className="dots-wrapper">
                    <div id="dot-1" className="browser-dot" />
                    <div id="dot-2" className="browser-dot" />
                    <div id="dot-3" className="browser-dot" />
                  </div>
                </a>

                <ul id="navigation">
                  <li>
                    <a href="#contact-form">{translate('contact')}</a>
                  </li>
                </ul>
              </div>

              <div className="left-column">
                <img id="profile_pic" src={ProfilePictuire} alt="" />
              </div>

              <div className="right-column">
                <div id="preview-shadow">
                  <div id="preview">
                    <div id="corner-tl" className="corner" />
                    <div id="corner-tr" className="corner" />
                    <h3>{translate('whatIDo')}</h3>
                    <p>{translate('iBuild')}</p>
                    <div id="corner-br" className="corner" />
                    <div id="corner-bl" className="corner" />
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
                <h4>{translate('moreAboutMe')}</h4>

                <p>{translate('description')}</p>

                <hr />

                <h4>{translate('TOPEXPERTISE')}</h4>
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
                <h3>{translate('findMe')}</h3>

                <a
                  style={{
                    width: '164px',
                    margin: '0 auto',
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/talhabintariq"
                >
                  GitHub: @talhabintariq
                </a>
                <br />
                <a
                  style={{
                    width: '130px',
                    margin: '0 auto',
                  }}
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
            <h3 style={{ textAlign: 'center', paddingTop: 30 }}>{translate('sampleWork')}</h3>

            <div className="post-wrapper">
              <div>
                <div className="post">
                  <img className="thumbnail" src={thumbnail} alt="" />
                  <div className="post-preview">
                    <h6 className="post-title">{translate('projectTile-1')}</h6>
                    <p className="post-intro">
                      {translate('projectDescription-1')}
                    </p>
                    <Link to="/MoviesSearch">{translate('readMore')}</Link>
                  </div>
                </div>
              </div>

              <div>
                <div className="post">
                  <img className="thumbnail" src={thumbnail} alt="" />
                  <div className="post-preview">
                    <h6 className="post-title">{translate('projectTitle-2')}</h6>
                    <p className="post-intro">
                      {translate('projectDescription-2')}
                    </p>
                    <Link to="/ImageSearch">{translate('readMore')}</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="s2">
          <div className="mainContainer">
            <h3 style={{ textAlign: 'center', paddingTop: '25px' }}>{translate('getInTouch')}</h3>

            <Form id="contact-form">
              <FormGroup>
                <Label>{translate('name')}</Label>
                <Input className="input-field" type="text" name="name" />

                <Label>{translate('subject')}</Label>
                <Input className="input-field" type="text" name="subject" />

                <Label>{translate('email')}</Label>
                <Input className="input-field" type="text" name="email" />

                <Label>{translate('message')}</Label>
                <Input type="textarea" className="input-field" name="message" />
              </FormGroup>
              <Input id="submit-btn" type="submit" value="Send" />
            </Form>
          </div>
        </section>
      </div>
    </I18nPropvider>
  );
};

export default Home;
