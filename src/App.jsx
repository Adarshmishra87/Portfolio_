import "./App.css";

// function App() {
//   return (
//     <div className="app">
function App() {
  return (
    <div style={{ color: "white", background: "black", minHeight: "100vh", padding: "40px" }}>
<nav className="navbar">
        <a href="#home" className="logo">
          Adarsh<span>.dev</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <p className="eyebrow">PYTHON FULL STACK DEVELOPER</p>

            <h1>
              Python Developer
              <br />
              building <em>real systems.</em>
            </h1>

            <p className="description">
              I'm Adarsh Mishra, a Python Developer from Mumbai, India.
              I build REST APIs, WebSocket services, database-driven
              applications and backend systems using modern full-stack
              technologies.
            </p>

            <div className="buttons">
              <a href="#projects" className="button primary">
                View Projects →
              </a>

              <a
                href="https://github.com/Adarshmishra87"
                target="_blank"
                rel="noreferrer"
                className="button secondary"
              >
                GitHub ↗
              </a>
            </div>

            <div className="primary-stack">
              <span>PRIMARY LANGUAGE</span>
              <strong>Python</strong>

              <span>BACKEND</span>
              <strong>FastAPI</strong>

              <span>FRONTEND</span>
              <strong>React</strong>
            </div>
          </div>

          <div className="hero-card">
            <div className="avatar">AM</div>

            <h2>Python</h2>
            <p>Full Stack Developer</p>

            <div className="tech-list">
              <span>Python</span>
              <span>Django</span>
              <span>FastAPI</span>
              <span>Flask</span>
              <span>Redis</span>
              <span>React</span>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <p className="section-label">ABOUT ME</p>

          <h2>
            Python first.
            <br />
            <em>Full stack when needed.</em>
          </h2>

          <div className="text">
            <p>
              I'm a Python Backend Developer with hands-on experience
              building REST APIs, WebSocket services, real-time systems
              and Windows monitoring tools.
            </p>

            <p>
              <strong>Python is my primary programming language.</strong>
              I also know Java, C, SQL and Bash.
            </p>

            <p>
              I'm currently working on and learning Django, Flask, Redis,
              SQLAlchemy and Shell Scripting.
            </p>

            <p>
              For frontend development, I work with JavaScript, React,
              HTML, CSS and Bootstrap.
            </p>
          </div>
        </section>

        <section id="skills" className="section">
          <p className="section-label">TECHNICAL SKILLS</p>

          <h2>
            My development
            <br />
            <em>stack.</em>
          </h2>

          <div className="skills">
            <Skill title="Python" status="PRIMARY LANGUAGE" />
            <Skill title="Java" status="PROGRAMMING" />
            <Skill title="C" status="PROGRAMMING" />
            <Skill title="SQL" status="DATABASE" />
            <Skill title="Bash" status="SCRIPTING" />
            <Skill title="Shell Scripting" status="LEARNING" />

            <Skill title="FastAPI" status="BACKEND" />
            <Skill title="Django" status="WORKING ON" />
            <Skill title="Flask" status="WORKING ON" />
            <Skill title="REST APIs" status="BACKEND" />
            <Skill title="WebSockets" status="REAL-TIME" />
            <Skill title="Pydantic" status="VALIDATION" />
            <Skill title="SQLAlchemy" status="WORKING ON" />
            <Skill title="Redis" status="WORKING ON" />

            <Skill title="PostgreSQL" status="DATABASE" />
            <Skill title="MySQL" status="DATABASE" />
            <Skill title="MongoDB" status="DATABASE" />

            <Skill title="JavaScript" status="WEB" />
            <Skill title="React" status="FRONTEND" />
            <Skill title="HTML" status="WEB" />
            <Skill title="CSS" status="WEB" />
            <Skill title="Bootstrap" status="UI" />

            <Skill title="Git" status="VERSION CONTROL" />
            <Skill title="GitHub" status="CODE HOSTING" />
            <Skill title="Docker" status="CONTAINERS" />
            <Skill title="Linux" status="OPERATING SYSTEM" />
            <Skill title="VS Code" status="EDITOR" />
            <Skill title="psutil" status="PYTHON TOOL" />
          </div>
        </section>

        <section id="projects" className="section">
          <p className="section-label">SELECTED PROJECTS</p>

          <h2>
            Things I've
            <br />
            <em>built.</em>
          </h2>

          <div className="projects">
            <Project
              code="TME"
              title="Real-Time Trading Matching Engine"
              date="June 2025"
              description="Real-time trading matching engine built with Python, FastAPI and WebSockets. Implements deterministic price-time priority with FIFO queues for Market, Limit, IOC and FOK orders."
              skills="Python · FastAPI · WebSockets · REST API"
              link="https://github.com/Adarshmishra87/Mini-Matching-Engine"
            />

            <Project
              code="CAW"
              title="Camera Access Watchdog"
              date="April 2026"
              description="Python-based Windows monitoring tool that identifies applications responsible for camera access using psutil and Windows Registry information."
              skills="Python · psutil · Windows Registry"
              link="https://github.com/Adarshmishra87/Camera-Access-Watchdog"
            />

            <Project
              code="MLD"
              title="Machine Learning Malware Detection"
              date="May 2025"
              description="Malware classification system using Python and Scikit-learn with static PE-header features. Compared KNN, SVM, CNN and Random Forest."
              skills="Python · Scikit-learn · Random Forest"
              link="https://github.com/Adarshmishra87/Fast-Reliable-Malware-Detection-Using-KNN-Algorithm"
            />

            <Project
              code="WC"
              title="Wallpaper Changer"
              date="July 2026"
              description="Windows wallpaper manager for automatic or manual desktop and lock-screen background changes."
              skills="Python · Windows API · JSON · System Tray"
              link="https://github.com/Adarshmishra87/Wallpaper-Changer"
            />
            <Project
              code="EFWM"
              title="EmailFetcher with instant Message"
              date="May 2026"
              description="TempShield is a lightweight Java desktop application for creating and monitoring disposable email inboxes. Built with Java Swing and the Guerrilla Mail API, it provides real-time inbox updates, OTP detection, one-click copying, and a modern dark-themed interface."
              skills="Java · Swing · REST API · JSON · Multithreading"
              link="https://github.com/Adarshmishra87/Email-Fetcher-with-instant-Message.git"
            />
          </div>
        </section>

        <section className="section">
          <p className="section-label">COMPUTER SCIENCE FOUNDATION</p>

          <h2>
            Beyond <em>frameworks.</em>
          </h2>

          <div className="foundation">
            <span>Data Structures & Algorithms</span>
            <span>Object-Oriented Programming</span>
            <span>DBMS</span>
            <span>Operating Systems</span>
            <span>Computer Networks</span>
            <span>Debugging & Problem Solving</span>
          </div>
        </section>

        <section className="section">
          <p className="section-label">EXPERIENCE & EDUCATION</p>

          <div className="timeline">
            <article>
              <small>NOV 2025 — FEB 2026</small>
              <p className="type">EXPERIENCE</p>
              <h3>Talent Acquisition Specialist</h3>
              <h4>Teamware Solutions</h4>
              <p>
                Managed talent acquisition for TCS and US-based technology
                requirements. Sourced and screened candidates for software
                engineering, backend, IT and technology positions.
              </p>
            </article>

            <article>
              <small>AUG 2022 — JUL 2025</small>
              <p className="type">EDUCATION</p>
              <h3>B.Tech in Computer Science</h3>
              <h4>United Institute of Technology</h4>
              <p>Prayagraj, Uttar Pradesh</p>
              <strong>CGPA: 7.38</strong>
            </article>

            <article>
              <small>SEP 2017 — NOV 2020</small>
              <p className="type">EDUCATION</p>
              <h3>Diploma in Mechanical Engineering</h3>
              <h4>Hanswahini Institute of Science & Technology</h4>
              <p>Prayagraj, Uttar Pradesh</p>
              <strong>Percentage: 65%</strong>
            </article>
          </div>
        </section>
      </main>

      <footer id="contact">
        <p className="section-label">GET IN TOUCH</p>

        <h2>
          Let's build
          <br />
          <em>something useful.</em>
        </h2>

        <p>
          Open to Python Developer, Backend Developer, Python Full Stack
          Developer and Software Engineer opportunities.
        </p>

        <div className="footer-links">
          <a href="mailto:adarshmishra19711@gmail.com">Email ↗</a>
          <a
            href="https://github.com/Adarshmishra87"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
          <a
            href="https://linkedin.com/in/adarsh-mishra-4b5792319"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
          <a href="tel:+919559358604">+91 95593 58604</a>
        </div>
      </footer>
    </div>
  );
}

function Skill({ title, status }) {
  return (
    <div className="skill">
      <strong>{title}</strong>
      <small>{status}</small>
    </div>
  );
}

function Project({ code, title, date, description, skills, link }) {
  return (
    <article className="project">
      <div className="project-header">
        <strong>{code}</strong>
        <span>{date}</span>
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

      <div className="tags">{skills}</div>

      <a href={link} target="_blank" rel="noreferrer">
        View on GitHub ↗
      </a>
    </article>
  );
}

export default App;
