import React from 'react';
import ProfilePictuire from './images/Talha.jpg';
import thumbnail from './images/coming_soon.jpg';
import './default.css';

function App() {
  


  return (
    <div className="App">
    <section className="s1">
		<div className="main-container">
			<div className="greeting-wrapper">
				<h1>Hi, I'm Talha B. Tariq</h1>
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
						<li><a href="#contact-form">Contact</a></li>

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
							<h3>What I Do</h3>
							<p>I build things for the web.</p>
							<div id="corner-br" className="corner"></div>
							<div id="corner-bl" className="corner"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section className="s2">
		<div className="main-container">

			<div className="about-wrapper">
				<div className="about-me">
					<h4>More about me</h4>

					<p>I'm a software engineer based in Ann Arbor, Michigan specializing in building (and occasionally designing) exceptional, high-quality websites and applications.</p>


					<hr/>

					<h4>TOP EXPERTISE</h4>
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
					<h3>Find me on GitHub and LinkedIn</h3>

					<a target="_blank" rel="noopener noreferrer" href="https://github.com/talhabintariq">GitHub: @talhabintariq</a>
					<br/>
					<a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ttariq1">LinkedIn: @ttariq1</a>
				</div>
			</div>

		</div>
	</section>

	<section className="s1">
		<div className="main-container">
          <h3 style={{ textAlign: 'center' }}>Some of my past projects</h3>

			<div className="post-wrapper">

				<div>
					<div className="post">
						<img className="thumbnail" src={thumbnail} alt="" />
						<div className="post-preview">
							<h6 className="post-title">Project Title</h6>
							<p className="post-intro">Project Description</p>
							<a href="post.html">Read More</a>
						</div>
					</div>
				</div>

				<div>
					<div className="post">
                <img className="thumbnail" src={thumbnail} alt="" />
						<div className="post-preview">
							<h6 className="post-title">Project Title</h6>
							<p className="post-intro">Project Description</p>
							<a href="post.html">Read More</a>
						</div>
					</div>
				</div>

				<div>
					<div className="post">
						<img className="thumbnail" src={thumbnail} alt="" />
						<div className="post-preview">
							<h6 className="post-title">Project Title</h6>
							<p className="post-intro">Project Description</p>
							<a href="post.html">Read More</a>
						</div>
					</div>
				</div>

			</div>
		</div>
	</section>

	<section className="s2">
		<div className="main-container">
			<h3 style={{ textAlign: 'center' }}>Get In Touch</h3>

			<form id="contact-form">
				

				<label>Name</label>
				<input className="input-field" type="text" name="name" />

				<label>Subject</label>
				<input className="input-field" type="text" name="subject" />

				<label>Email</label>
				<input className="input-field" type="text" name="email" />

				<label>Message</label>
				<textarea className="input-field" name="message"></textarea>

				<input id="submit-btn" type="submit" value="Send" />
			</form>
		</div>
	</section> 

	<script type="text/javascript" src="script.js"></script>
    </div>
  );
}

export default App;
