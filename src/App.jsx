// import { useEffect } from "react";
// import anime from "animejs/lib/anime.es.js";
// import "./style.css";

// const skills = [
//   {
//     title: "Languages",
//     items: [
//       ["🐍", "Python", "PRIMARY"],
//       ["☕", "Java", "PROGRAMMING"],
//       ["C", "C", "PROGRAMMING"],
//       ["SQL", "SQL", "DATABASE"],
//       ["⌘", "Bash", "SCRIPTING"],
//       [">$", "Shell Scripting", "LEARNING"],
//     ],
//   },
//   {
//     title: "Python Backend",
//     items: [
//       ["⚡", "FastAPI", "BACKEND"],
//       ["D", "Django", "WORKING ON"],
//       ["Fl", "Flask", "WORKING ON"],
//       ["API", "REST APIs", "BACKEND"],
//       ["WS", "WebSockets", "REAL-TIME"],
//       ["✓", "Pydantic", "VALIDATION"],
//       ["SA", "SQLAlchemy", "WORKING ON"],
//       ["R", "Redis", "WORKING ON"],
//     ],
//   },
//   {
//     title: "Databases",
//     items: [
//       ["PG", "PostgreSQL", "DATABASE"],
//       ["MY", "MySQL", "DATABASE"],
//       ["MG", "MongoDB", "DATABASE"],
//     ],
//   },
//   {
//     title: "Frontend",
//     items: [
//       ["JS", "JavaScript", "WEB"],
//       ["⚛", "React", "FRONTEND"],
//       ["<>", "HTML", "WEB"],
//       ["#", "CSS", "WEB"],
//       ["B", "Bootstrap", "UI"],
//     ],
//   },
//   {
//     title: "Tools & DevOps",
//     items: [
//       ["⎇", "Git", "VERSION CONTROL"],
//       ["GH", "GitHub", "CODE HOSTING"],
//       ["🐳", "Docker", "CONTAINERS"],
//       ["🐧", "Linux", "OPERATING SYSTEM"],
//       ["VS", "VS Code", "EDITOR"],
//       ["PS", "psutil", "PYTHON TOOL"],
//     ],
//   },
// ];

// const projects = [
//   {
//     code: "TME",
//     title: "Real-Time Trading Matching Engine",
//     date: "June 2025",
//     color: "blue",
//     stats: [
//       ["4", "Order types"],
//       ["FIFO", "Priority"],
//       ["LIVE", "Market data"],
//     ],
//     description:
//       "Real-time trading matching engine built with Python, FastAPI and WebSockets.",
//     details:
//       "Implemented deterministic price-time priority with FIFO queues for Market, Limit, IOC and FOK orders, including full and partial execution.",
//     tags: ["Python", "FastAPI", "WebSockets", "REST API"],
//     github:
//       "https://github.com/Adarshmishra87/Mini-Matching-Engine",
//   },
//   {
//     code: "CAW",
//     title: "Camera Access Watchdog",
//     date: "April 2026",
//     color: "orange",
//     stats: [
//       ["2s", "Poll rate"],
//       ["2", "Actions"],
//       ["CSV", "Audit log"],
//     ],
//     description:
//       "Python-based Windows monitoring tool that identifies applications responsible for camera access.",
//     details:
//       "Uses psutil and Windows Registry information with trusted-app allowlisting, real-time alerts and Allow / Block & Kill actions.",
//     tags: ["Python", "psutil", "Windows Registry"],
//     github:
//       "https://github.com/Adarshmishra87/Camera-Access-Watchdog",
//   },
//   {
//     code: "MLD",
//     title: "Machine Learning Malware Detection",
//     date: "May 2025",
//     color: "purple",
//     stats: [
//       ["54 → 38", "Features"],
//       ["5-FOLD", "CV"],
//       ["99.44%", "Accuracy"],
//     ],
//     description:
//       "Malware classification system using Python and Scikit-learn with static PE-header features.",
//     details:
//       "Compared KNN, SVM, CNN and Random Forest using grid search and 5-fold cross-validation.",
//     tags: ["Python", "Scikit-learn", "Random Forest"],
//     github:
//       "https://github.com/Adarshmishra87/Fast-Reliable-Malware-Detection-Using-KNN-Algorithm",
//   },
// ];

// function App() {
//   useEffect(() => {
//     anime({
//       targets: ".hero-item",
//       opacity: [0, 1],
//       translateY: [30, 0],
//       delay: anime.stagger(120),
//       duration: 800,
//       easing: "easeOutExpo",
//     });

//     anime({
//       targets: ".skill-card",
//       opacity: [0, 1],
//       translateY: [20, 0],
//       delay: anime.stagger(50),
//       duration: 600,
//       easing: "easeOutQuad",
//     });

//     anime({
//       targets: ".project-card",
//       opacity: [0, 1],
//       translateY: [30, 0],
//       delay: anime.stagger(100),
//       duration: 700,
//       easing: "easeOutExpo",
//     });

//     anime({
//       targets: ".orbit",
//       rotate: 360,
//       duration: 18000,
//       loop: true,
//       easing: "linear",
//     });
//   }, []);

//   return (
//     <div className="portfolio">
//       <nav className="navbar">
//         <a href="#" className="logo">
//           Adarsh<span>.dev</span>
//         </a>

//         <div className="nav-links">
//           <a href="#about">About</a>
//           <a href="#skills">Skills</a>
//           <a href="#work">Projects</a>
//           <a href="#contact">Contact</a>
//         </div>

//         <a href="#contact" className="nav-button">
//           Get in touch
//         </a>
//       </nav>

//       <main>
//         <section className="hero">
//           <div className="hero-background">
//             <div className="grid"></div>
//             <div className="orbit orbit-one"></div>
//             <div className="orbit orbit-two"></div>
//           </div>

//           <div className="hero-content">
//             <span className="status hero-item">
//               <i></i>
//               Available for opportunities
//             </span>

//             <span className="role hero-item">
//               PYTHON FULL STACK DEVELOPER
//             </span>

//             <h1 className="hero-item">
//               Python developer
//               <br />
//               building <span>real systems.</span>
//             </h1>

//             <p className="hero-description hero-item">
//               I'm <strong>Adarsh Mishra</strong>, a Python Developer
//               from Mumbai, India. I build REST APIs, real-time
//               WebSocket services, database-driven applications and
//               backend systems using Python and modern full-stack
//               technologies.
//             </p>

//             <div className="hero-buttons hero-item">
//               <a href="#work" className="button primary">
//                 View projects →
//               </a>

//               <a
//                 href="https://github.com/Adarshmishra87"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="button secondary"
//               >
//                 GitHub ↗
//               </a>
//             </div>

//             <div className="primary-stack hero-item">
//               <span>PRIMARY LANGUAGE</span>
//               <strong>Python</strong>
//               <b>•</b>
//               <span>BACKEND</span>
//               <strong>FastAPI</strong>
//               <b>•</b>
//               <span>FRONTEND</span>
//               <strong>React</strong>
//             </div>
//           </div>

//           <div className="tech-hub">
//             <div className="hub-core">
//               <strong>AM</strong>
//               <span>PYTHON</span>
//             </div>

//             <div className="tech-node node-1">
//               <b>Py</b>
//               <span>Python</span>
//             </div>

//             <div className="tech-node node-2">
//               <b>D</b>
//               <span>Django</span>
//             </div>

//             <div className="tech-node node-3">
//               <b>Fa</b>
//               <span>FastAPI</span>
//             </div>

//             <div className="tech-node node-4">
//               <b>Fl</b>
//               <span>Flask</span>
//             </div>

//             <div className="tech-node node-5">
//               <b>R</b>
//               <span>Redis</span>
//             </div>

//             <div className="tech-node node-6">
//               <b>⚛</b>
//               <span>React</span>
//             </div>
//           </div>
//         </section>

//         <section className="facts">
//           <div>
//             <small>01</small>
//             <strong>Python</strong>
//             <span>Primary language</span>
//           </div>

//           <div>
//             <small>02</small>
//             <strong>REST APIs</strong>
//             <span>Backend development</span>
//           </div>

//           <div>
//             <small>03</small>
//             <strong>WebSockets</strong>
//             <span>Real-time systems</span>
//           </div>

//           <div>
//             <small>04</small>
//             <strong>React</strong>
//             <span>Frontend development</span>
//           </div>
//         </section>

//         <section className="statement" id="about">
//           <span className="eyebrow">ABOUT ME</span>

//           <h2>
//             Python first.
//             <br />
//             Full stack when needed.
//           </h2>

//           <p>
//             I'm a <strong>Python Backend Developer</strong> with
//             hands-on experience building REST APIs, WebSocket
//             services, real-time systems and Windows monitoring
//             tools.
//           </p>

//           <p>
//             Python is my primary programming language. I also know
//             <strong> Java, C, SQL and Bash</strong>.
//           </p>

//           <p>
//             I am currently expanding my Python full-stack
//             development skills with <strong>Django, Flask, Redis,
//             SQLAlchemy and Shell Scripting</strong>.
//           </p>

//           <p>
//             For frontend development, I work with
//             <strong> JavaScript, React, HTML, CSS and Bootstrap</strong>.
//           </p>
//         </section>

//         <section className="skills-section" id="skills">
//           <div className="section-title">
//             <span className="eyebrow">TECHNICAL SKILLS</span>

//             <h2>
//               My development
//               <br />
//               stack.
//             </h2>

//             <p>
//               A growing full-stack toolkit centered around Python
//               backend development.
//             </p>
//           </div>

//           {skills.map((group, index) => (
//             <div className="skill-group" key={group.title}>
//               <div className="group-heading">
//                 <span>
//                   {String(index + 1).padStart(2, "0")}
//                 </span>

//                 <div>
//                   <h3>{group.title}</h3>
//                   <em>
//                     {group.title === "Languages"
//                       ? "Programming & scripting"
//                       : group.title === "Python Backend"
//                       ? "Backend & API development"
//                       : group.title === "Databases"
//                       ? "Data & persistence"
//                       : group.title === "Frontend"
//                       ? "Web interfaces"
//                       : "Development workflow"}
//                   </em>
//                 </div>
//               </div>

//               <div className="skills-grid">
//                 {group.items.map(([icon, name, label]) => (
//                   <div className="skill-card" key={name}>
//                     <div className="skill-icon">{icon}</div>

//                     <div>
//                       <strong>{name}</strong>
//                       <span>{label}</span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}

//           <div className="learning">
//             <div className="learning-symbol">+</div>

//             <div>
//               <strong>Currently learning & working on</strong>
//               <p>
//                 Django · Flask · Redis · SQLAlchemy · Shell
//                 Scripting
//               </p>
//             </div>

//             <span>CONTINUE TO LEARN</span>
//           </div>
//         </section>

//         <section className="work-section" id="work">
//           <div className="section-title">
//             <span className="eyebrow">SELECTED PROJECTS</span>

//             <h2>
//               Things I've
//               <br />
//               built.
//             </h2>

//             <p>
//               Practical projects demonstrating backend
//               engineering and problem solving.
//             </p>
//           </div>

//           <div className="projects">
//             {projects.map((project) => (
//               <article
//                 className={`project-card ${project.color}`}
//                 key={project.code}
//               >
//                 <div className="project-top">
//                   <span>{project.code}</span>
//                   <small>{project.date}</small>
//                 </div>

//                 <h3>{project.title}</h3>

//                 <div className="project-stats">
//                   {project.stats.map(([value, label]) => (
//                     <div key={label}>
//                       <strong>{value}</strong>
//                       <span>{label}</span>
//                     </div>
//                   ))}
//                 </div>

//                 <p>{project.description}</p>

//                 <p className="details">
//                   {project.details}
//                 </p>

//                 <div className="tags">
//                   {project.tags.map((tag) => (
//                     <span key={tag}>{tag}</span>
//                   ))}
//                 </div>

//                 <a
//                   href={project.github}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   View on GitHub ↗
//                 </a>
//               </article>
//             ))}
//           </div>
//         </section>

//         <section className="foundation">
//           <span className="eyebrow">
//             COMPUTER SCIENCE FOUNDATION
//           </span>

//           <h2>Beyond frameworks.</h2>

//           <div className="foundation-grid">
//             <span>Data Structures & Algorithms</span>
//             <span>Object-Oriented Programming</span>
//             <span>DBMS</span>
//             <span>Operating Systems</span>
//             <span>Computer Networks</span>
//             <span>Debugging & Problem Solving</span>
//           </div>
//         </section>

//         <section className="experience">
//           <span className="eyebrow">
//             EXPERIENCE & EDUCATION
//           </span>

//           <div className="timeline">
//             <article>
//               <small>NOV 2025 — FEB 2026</small>

//               <div>
//                 <span>EXPERIENCE</span>

//                 <h3>Talent Acquisition Specialist</h3>

//                 <h4>Teamware Solutions</h4>

//                 <p>
//                   Managed talent acquisition for TCS and
//                   US-based technology requirements. Sourced and
//                   screened candidates for software engineering,
//                   backend, IT and technology positions.
//                 </p>

//                 <p>
//                   Reviewed technical resumes against programming,
//                   backend development, databases, cloud, DevOps
//                   and software engineering requirements.
//                 </p>
//               </div>
//             </article>

//             <article>
//               <small>AUG 2022 — JUL 2025</small>

//               <div>
//                 <span>EDUCATION</span>

//                 <h3>B.Tech in Computer Science</h3>

//                 <h4>United Institute of Technology</h4>

//                 <p>Prayagraj, Uttar Pradesh</p>

//                 <strong>CGPA: 7.38</strong>
//               </div>
//             </article>

//             <article>
//               <small>SEP 2017 — NOV 2020</small>

//               <div>
//                 <span>EDUCATION</span>

//                 <h3>Diploma in Mechanical Engineering</h3>

//                 <h4>
//                   Hanswahini Institute of Science & Technology
//                 </h4>

//                 <p>Prayagraj, Uttar Pradesh</p>

//                 <strong>Percentage: 65%</strong>
//               </div>
//             </article>
//           </div>
//         </section>
//       </main>

//       <footer id="contact">
//         <div className="footer-card">
//           <span className="eyebrow">GET IN TOUCH</span>

//           <h2>
//             Let's build
//             <br />
//             something useful.
//           </h2>

//           <p>
//             Open to Python Developer, Backend Developer, Python
//             Full Stack Developer and Software Engineer
//             opportunities.
//           </p>

//           <div className="footer-links">
//             <a href="mailto:adarshmishra19711@gmail.com">
//               Email ↗
//             </a>

//             <a
//               href="https://github.com/Adarshmishra87"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               GitHub ↗
//             </a>

//             <a
//               href="https://linkedin.com/in/adarsh-mishra-4b5792319"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               LinkedIn ↗
//             </a>

//             <a href="tel:+919559358604">
//               +91 95593 58604
//             </a>
//           </div>
//         </div>

//         <div className="footer-bottom">
//           <span>Adarsh.dev</span>
//           <span>Python Developer | REST API Developer</span>
//           <span>Mumbai, Maharashtra, India</span>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default App;


// import { useEffect, useRef } from "react";
// import { animate, stagger, createTimeline, spring } from "animejs";
// import "./App.css";

// const skills = {
//   languages: [
//     ["🐍", "Python", "PRIMARY"],
//     ["☕", "Java", "PROGRAMMING"],
//     ["C", "C", "PROGRAMMING"],
//     ["SQL", "SQL", "DATABASE"],
//     ["⌘", "Bash", "SCRIPTING"],
//     [">$", "Shell Scripting", "LEARNING"],
//   ],
//   backend: [
//     ["⚡", "FastAPI", "BACKEND"],
//     ["D", "Django", "WORKING ON"],
//     ["Fl", "Flask", "WORKING ON"],
//     ["API", "REST APIs", "BACKEND"],
//     ["WS", "WebSockets", "REAL-TIME"],
//     ["✓", "Pydantic", "VALIDATION"],
//     ["SA", "SQLAlchemy", "WORKING ON"],
//     ["R", "Redis", "WORKING ON"],
//   ],
//   databases: [
//     ["PG", "PostgreSQL", "DATABASE"],
//     ["MY", "MySQL", "DATABASE"],
//     ["MG", "MongoDB", "DATABASE"],
//   ],
//   frontend: [
//     ["JS", "JavaScript", "WEB"],
//     ["⚛", "React", "FRONTEND"],
//     ["<>", "HTML", "WEB"],
//     ["#", "CSS", "WEB"],
//     ["B", "Bootstrap", "UI"],
//   ],
//   tools: [
//     ["⎇", "Git", "VERSION CONTROL"],
//     ["GH", "GitHub", "CODE HOSTING"],
//     ["🐳", "Docker", "CONTAINERS"],
//     ["🐧", "Linux", "OPERATING SYSTEM"],
//     ["VS", "VS Code", "EDITOR"],
//     ["PS", "psutil", "PYTHON TOOL"],
//   ],
// };

// const projects = [
//   {
//     code: "TME",
//     date: "June 2025",
//     title: "Real-Time Trading Matching Engine",
//     stats: [
//       ["4", "Order types"],
//       ["FIFO", "Priority"],
//       ["LIVE", "Market data"],
//     ],
//     description:
//       "Real-time trading matching engine built with Python, FastAPI and WebSockets.",
//     details:
//       "Implemented deterministic price-time priority with FIFO queues for Market, Limit, IOC and FOK orders, including full and partial execution.",
//     tags: ["Python", "FastAPI", "WebSockets", "REST API"],
//     link: "https://github.com/Adarshmishra87/Mini-Matching-Engine",
//   },
//   {
//     code: "CAW",
//     date: "April 2026",
//     title: "Camera Access Watchdog",
//     stats: [
//       ["2s", "Poll rate"],
//       ["2", "Actions"],
//       ["CSV", "Audit log"],
//     ],
//     description:
//       "Python-based Windows monitoring tool that identifies applications responsible for camera access.",
//     details:
//       "Uses psutil and Windows Registry information with trusted-app allowlisting, real-time alerts and Allow / Block & Kill actions.",
//     tags: ["Python", "psutil", "Windows Registry"],
//     link: "https://github.com/Adarshmishra87/Camera-Access-Watchdog",
//   },
//   {
//     code: "MLD",
//     date: "May 2025",
//     title: "Machine Learning Malware Detection",
//     stats: [
//       ["54 → 38", "Features"],
//       ["5-FOLD", "CV"],
//       ["99.44%", "Accuracy"],
//     ],
//     description:
//       "Malware classification system using Python and Scikit-learn with static PE-header features.",
//     details:
//       "Compared KNN, SVM, CNN and Random Forest using grid search and 5-fold cross-validation.",
//     tags: ["Python", "Scikit-learn", "Random Forest"],
//     link: "https://github.com/Adarshmishra87/Fast-Reliable-Malware-Detection-Using-KNN-Algorithm",
//   },
// ];

// function App() {
//   const cursorDot = useRef(null);
//   const cursorRing = useRef(null);
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     // -----------------------------
//     // Fast reveal animations
//     // -----------------------------
//     const revealElements = document.querySelectorAll(".reveal");

//     animate(revealElements, {
//       opacity: [0, 1],
//       translateY: [25, 0],
//       duration: 650,
//       delay: stagger(70),
//       ease: "out(4)",
//     });

//     // -----------------------------
//     // Skill cards
//     // -----------------------------
//     animate(".skill-card", {
//       opacity: [0, 1],
//       scale: [0.96, 1],
//       duration: 500,
//       delay: stagger(45),
//       ease: "out(3)",
//     });

//     // -----------------------------
//     // Project cards
//     // -----------------------------
//     animate(".project-card", {
//       opacity: [0, 1],
//       translateY: [35, 0],
//       duration: 700,
//       delay: stagger(100),
//       ease: "out(4)",
//     });

//     // -----------------------------
//     // Magnetic buttons
//     // -----------------------------
//     const magneticItems = document.querySelectorAll(".magnetic");

//     const magneticHandlers = [];

//     magneticItems.forEach((element) => {
//       const move = (event) => {
//         const rect = element.getBoundingClientRect();

//         const x = event.clientX - (rect.left + rect.width / 2);
//         const y = event.clientY - (rect.top + rect.height / 2);

//         animate(element, {
//           translateX: x * 0.12,
//           translateY: y * 0.12,
//           duration: 220,
//           ease: "out(3)",
//         });
//       };

//       const leave = () => {
//         animate(element, {
//           translateX: 0,
//           translateY: 0,
//           duration: 350,
//           ease: "out(4)",
//         });
//       };

//       element.addEventListener("mousemove", move);
//       element.addEventListener("mouseleave", leave);

//       magneticHandlers.push({ element, move, leave });
//     });

//     // -----------------------------
//     // Custom cursor
//     // -----------------------------
//     const moveCursor = (event) => {
//       if (!cursorDot.current || !cursorRing.current) return;

//       animate(cursorDot.current, {
//         left: event.clientX,
//         top: event.clientY,
//         duration: 90,
//         ease: "out(2)",
//       });

//       animate(cursorRing.current, {
//         left: event.clientX,
//         top: event.clientY,
//         duration: 180,
//         ease: "out(3)",
//       });
//     };

//     window.addEventListener("mousemove", moveCursor);

//     // -----------------------------
//     // Interactive hover cursor
//     // -----------------------------
//     const interactiveElements = document.querySelectorAll(
//       "a, button, .skill-card, .project-card"
//     );

//     const hoverHandlers = [];

//     interactiveElements.forEach((element) => {
//       const enter = () => {
//         if (!cursorRing.current) return;

//         animate(cursorRing.current, {
//           width: 58,
//           height: 58,
//           duration: 180,
//           ease: "out(3)",
//         });

//         cursorRing.current.classList.add("active");
//       };

//       const leave = () => {
//         if (!cursorRing.current) return;

//         animate(cursorRing.current, {
//           width: 34,
//           height: 34,
//           duration: 220,
//           ease: "out(3)",
//         });

//         cursorRing.current.classList.remove("active");
//       };

//       element.addEventListener("mouseenter", enter);
//       element.addEventListener("mouseleave", leave);

//       hoverHandlers.push({ element, enter, leave });
//     });

//     // -----------------------------
//     // Floating background particles
//     // -----------------------------
//     const canvas = canvasRef.current;

//     if (canvas) {
//       const ctx = canvas.getContext("2d");

//       let width = 0;
//       let height = 0;
//       let animationFrame;

//       const particles = Array.from({ length: 45 }, () => ({
//         x: Math.random(),
//         y: Math.random(),
//         size: Math.random() * 2 + 0.5,
//         speedX: (Math.random() - 0.5) * 0.00035,
//         speedY: (Math.random() - 0.5) * 0.00035,
//         alpha: Math.random() * 0.35 + 0.1,
//       }));

//       const resize = () => {
//         const rect = canvas.getBoundingClientRect();

//         width = canvas.width = rect.width * window.devicePixelRatio;
//         height = canvas.height = rect.height * window.devicePixelRatio;

//         ctx.setTransform(
//           window.devicePixelRatio,
//           0,
//           0,
//           window.devicePixelRatio,
//           0,
//           0
//         );
//       };

//       const draw = () => {
//         const displayWidth = width / window.devicePixelRatio;
//         const displayHeight = height / window.devicePixelRatio;

//         ctx.clearRect(0, 0, displayWidth, displayHeight);

//         particles.forEach((particle) => {
//           particle.x += particle.speedX;
//           particle.y += particle.speedY;

//           if (particle.x < 0) particle.x = 1;
//           if (particle.x > 1) particle.x = 0;

//           if (particle.y < 0) particle.y = 1;
//           if (particle.y > 1) particle.y = 0;

//           ctx.beginPath();
//           ctx.arc(
//             particle.x * displayWidth,
//             particle.y * displayHeight,
//             particle.size,
//             0,
//             Math.PI * 2
//           );

//           ctx.fillStyle = `rgba(96, 165, 250, ${particle.alpha})`;
//           ctx.fill();
//         });

//         animationFrame = requestAnimationFrame(draw);
//       };

//       resize();
//       window.addEventListener("resize", resize);
//       draw();

//       return () => {
//         window.removeEventListener("resize", resize);
//         cancelAnimationFrame(animationFrame);

//         window.removeEventListener("mousemove", moveCursor);

//         magneticHandlers.forEach(({ element, move, leave }) => {
//           element.removeEventListener("mousemove", move);
//           element.removeEventListener("mouseleave", leave);
//         });

//         hoverHandlers.forEach(({ element, enter, leave }) => {
//           element.removeEventListener("mouseenter", enter);
//           element.removeEventListener("mouseleave", leave);
//         });
//       };
//     }

//     return () => {
//       window.removeEventListener("mousemove", moveCursor);

//       magneticHandlers.forEach(({ element, move, leave }) => {
//         element.removeEventListener("mousemove", move);
//         element.removeEventListener("mouseleave", leave);
//       });

//       hoverHandlers.forEach(({ element, enter, leave }) => {
//         element.removeEventListener("mouseenter", enter);
//         element.removeEventListener("mouseleave", leave);
//       });
//     };
//   }, []);

//   const renderSkills = (items) => (
//     <div className="skills-grid">
//       {items.map(([icon, name, type]) => (
//         <div className="skill-card" key={name}>
//           <div className="skill-icon">{icon}</div>
//           <div>
//             <strong>{name}</strong>
//             <span>{type}</span>
//           </div>
//         </div>
//       ))}
//     </div>
//   );

//   return (
//     <div className="app">
//       <div ref={cursorDot} className="cursor-dot" />
//       <div ref={cursorRing} className="cursor-ring" />

//       <nav className="navbar">
//         <a href="#" className="logo magnetic">
//           Adarsh<span>.dev</span>
//         </a>

//         <div className="nav-links">
//           <a className="magnetic" href="#about">
//             About
//           </a>
//           <a className="magnetic" href="#skills">
//             Skills
//           </a>
//           <a className="magnetic" href="#projects">
//             Projects
//           </a>
//           <a className="magnetic" href="#contact">
//             Contact
//           </a>
//         </div>

//         <a href="#contact" className="button primary magnetic">
//           Get in touch
//         </a>
//       </nav>

//       <main>
//         {/* HERO */}
//         <section className="hero">
//           <canvas ref={canvasRef} className="hero-canvas" />

//           <div className="hero-content reveal">
//             <div className="status">
//               <span className="status-dot" />
//               Available for opportunities
//             </div>

//             <div className="eyebrow">PYTHON FULL STACK DEVELOPER</div>

//             <h1>
//               Python developer
//               <br />
//               <span>building real systems.</span>
//             </h1>

//             <p className="hero-description">
//               I'm Adarsh Mishra, a Python Developer from Mumbai, India. I
//               build REST APIs, real-time WebSocket services, database-driven
//               applications and backend systems using Python and modern
//               full-stack technologies.
//             </p>

//             <div className="hero-buttons">
//               <a href="#projects" className="button primary magnetic">
//                 View projects →
//               </a>

//               <a
//                 href="https://github.com/Adarshmishra87"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="button secondary magnetic"
//               >
//                 GitHub ↗
//               </a>
//             </div>
//           </div>

//           <div className="hero-stack reveal">
//             <div className="stack-label">
//               PRIMARY LANGUAGE
//               <strong>Python</strong>
//             </div>

//             <div className="stack-row">
//               <span>Python</span>
//               <span>Java</span>
//               <span>C</span>
//               <span>Bash</span>
//             </div>

//             <div className="stack-row">
//               <span>Django</span>
//               <span>FastAPI</span>
//               <span>Flask</span>
//               <span>Redis</span>
//             </div>

//             <div className="stack-row">
//               <span>React</span>
//               <span>PostgreSQL</span>
//               <span>MySQL</span>
//               <span>MongoDB</span>
//             </div>
//           </div>
//         </section>

//         {/* QUICK STATS */}
//         <section className="quick-stats reveal">
//           <div>
//             <span>01</span>
//             <strong>Python</strong>
//             <small>Primary language</small>
//           </div>

//           <div>
//             <span>02</span>
//             <strong>REST APIs</strong>
//             <small>Backend development</small>
//           </div>

//           <div>
//             <span>03</span>
//             <strong>WebSockets</strong>
//             <small>Real-time systems</small>
//           </div>

//           <div>
//             <span>04</span>
//             <strong>React</strong>
//             <small>Frontend development</small>
//           </div>
//         </section>

//         {/* ABOUT */}
//         <section id="about" className="section about reveal">
//           <div className="section-label">ABOUT ME</div>

//           <div className="about-grid">
//             <div>
//               <h2>
//                 Python first.
//                 <br />
//                 <span>Full stack when needed.</span>
//               </h2>
//             </div>

//             <div className="about-text">
//               <p>
//                 I'm a Python Backend Developer with hands-on experience
//                 building REST APIs, WebSocket services, real-time systems and
//                 Windows monitoring tools.
//               </p>

//               <p>
//                 Python is my primary programming language. I also know
//                 <strong> Java, C, SQL and Bash</strong>.
//               </p>

//               <p>
//                 I am currently expanding my Python full-stack development
//                 skills with <strong>Django, Flask, Redis, SQLAlchemy</strong>{" "}
//                 and <strong>Shell Scripting</strong>.
//               </p>

//               <p>
//                 For frontend development, I work with{" "}
//                 <strong>JavaScript, React, HTML, CSS and Bootstrap</strong>.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* SKILLS */}
//         <section id="skills" className="section reveal">
//           <div className="section-label">TECHNICAL SKILLS</div>

//           <div className="section-heading">
//             <h2>
//               My development
//               <br />
//               <span>stack.</span>
//             </h2>

//             <p>
//               A growing full-stack toolkit centered around Python backend
//               development.
//             </p>
//           </div>

//           <div className="skill-section">
//             <div className="skill-title">
//               <span>01</span>
//               <div>
//                 <h3>Languages</h3>
//                 <p>Programming & scripting</p>
//               </div>
//             </div>

//             {renderSkills(skills.languages)}
//           </div>

//           <div className="skill-section">
//             <div className="skill-title">
//               <span>02</span>
//               <div>
//                 <h3>Python Backend</h3>
//                 <p>Backend & API development</p>
//               </div>
//             </div>

//             {renderSkills(skills.backend)}
//           </div>

//           <div className="skill-section">
//             <div className="skill-title">
//               <span>03</span>
//               <div>
//                 <h3>Databases</h3>
//                 <p>Data & persistence</p>
//               </div>
//             </div>

//             {renderSkills(skills.databases)}
//           </div>

//           <div className="skill-section">
//             <div className="skill-title">
//               <span>04</span>
//               <div>
//                 <h3>Frontend</h3>
//                 <p>Web interfaces</p>
//               </div>
//             </div>

//             {renderSkills(skills.frontend)}
//           </div>

//           <div className="skill-section">
//             <div className="skill-title">
//               <span>05</span>
//               <div>
//                 <h3>Tools & DevOps</h3>
//                 <p>Development workflow</p>
//               </div>
//             </div>

//             {renderSkills(skills.tools)}
//           </div>

//           <div className="learning-box">
//             <span>+</span>
//             <div>
//               <strong>Currently learning & working on</strong>
//               <p>
//                 Django · Flask · Redis · SQLAlchemy · Shell Scripting
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* PROJECTS */}
//         <section id="projects" className="section projects-section">
//           <div className="section-label">SELECTED PROJECTS</div>

//           <div className="section-heading reveal">
//             <h2>
//               Things I've
//               <br />
//               <span>built.</span>
//             </h2>

//             <p>
//               Practical projects demonstrating backend engineering and
//               problem solving.
//             </p>
//           </div>

//           <div className="projects">
//             {projects.map((project) => (
//               <article className="project-card reveal" key={project.code}>
//                 <div className="project-top">
//                   <div className="project-code">{project.code}</div>
//                   <span>{project.date}</span>
//                 </div>

//                 <h3>{project.title}</h3>

//                 <div className="project-stats">
//                   {project.stats.map(([value, label]) => (
//                     <div key={label}>
//                       <strong>{value}</strong>
//                       <span>{label}</span>
//                     </div>
//                   ))}
//                 </div>

//                 <p className="project-description">
//                   {project.description}
//                 </p>

//                 <p className="project-details">{project.details}</p>

//                 <div className="tags">
//                   {project.tags.map((tag) => (
//                     <span key={tag}>{tag}</span>
//                   ))}
//                 </div>

//                 <a
//                   href={project.link}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="project-link magnetic"
//                 >
//                   View on GitHub ↗
//                 </a>
//               </article>
//             ))}
//           </div>
//         </section>

//         {/* FOUNDATION */}
//         <section className="section foundation reveal">
//           <div className="section-label">COMPUTER SCIENCE FOUNDATION</div>

//           <h2>
//             Beyond
//             <br />
//             <span>frameworks.</span>
//           </h2>

//           <div className="foundation-grid">
//             <span>Data Structures & Algorithms</span>
//             <span>Object-Oriented Programming</span>
//             <span>DBMS</span>
//             <span>Operating Systems</span>
//             <span>Computer Networks</span>
//             <span>Debugging & Problem Solving</span>
//           </div>
//         </section>

//         {/* EXPERIENCE */}
//         <section className="section experience reveal">
//           <div className="section-label">EXPERIENCE & EDUCATION</div>

//           <div className="timeline">
//             <div className="timeline-item">
//               <div className="timeline-date">
//                 NOV 2025 — FEB 2026
//               </div>

//               <div>
//                 <span className="timeline-type">EXPERIENCE</span>

//                 <h3>Talent Acquisition Specialist</h3>

//                 <strong>Teamware Solutions</strong>

//                 <p>
//                   Managed talent acquisition for TCS and US-based technology
//                   requirements. Sourced and screened candidates for software
//                   engineering, backend, IT and technology positions.
//                 </p>

//                 <p>
//                   Reviewed technical resumes against programming, backend
//                   development, databases, cloud, DevOps and software
//                   engineering requirements.
//                 </p>
//               </div>
//             </div>

//             <div className="timeline-item">
//               <div className="timeline-date">
//                 AUG 2022 — JUL 2025
//               </div>

//               <div>
//                 <span className="timeline-type">EDUCATION</span>

//                 <h3>B.Tech in Computer Science</h3>

//                 <strong>United Institute of Technology</strong>

//                 <p>Prayagraj, Uttar Pradesh</p>

//                 <div className="grade">CGPA: 7.38</div>
//               </div>
//             </div>

//             <div className="timeline-item">
//               <div className="timeline-date">
//                 SEP 2017 — NOV 2020
//               </div>

//               <div>
//                 <span className="timeline-type">EDUCATION</span>

//                 <h3>Diploma in Mechanical Engineering</h3>

//                 <strong>Hanswahini Institute of Science & Technology</strong>

//                 <p>Prayagraj, Uttar Pradesh</p>

//                 <div className="grade">Percentage: 65%</div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* CONTACT */}
//         <section id="contact" className="contact reveal">
//           <div className="contact-card">
//             <div className="section-label">GET IN TOUCH</div>

//             <h2>
//               Let's build
//               <br />
//               <span>something useful.</span>
//             </h2>

//             <p>
//               Open to Python Developer, Backend Developer, Python Full Stack
//               Developer and Software Engineer opportunities.
//             </p>

//             <div className="contact-links">
//               <a
//                 className="button primary magnetic"
//                 href="mailto:adarshmishra19711@gmail.com"
//               >
//                 Email ↗
//               </a>

//               <a
//                 className="button secondary magnetic"
//                 href="https://github.com/Adarshmishra87"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 GitHub ↗
//               </a>

//               <a
//                 className="button secondary magnetic"
//                 href="https://linkedin.com/in/adarsh-mishra-4b5792319"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 LinkedIn ↗
//               </a>

//               <a
//                 className="button secondary magnetic"
//                 href="tel:+919559358604"
//               >
//                 +91 95593 58604
//               </a>
//             </div>
//           </div>
//         </section>
//       </main>

//       <footer>
//         <div>
//           <strong>Adarsh<span>.dev</span></strong>
//           <p>Python Developer | REST API Developer</p>
//         </div>

//         <div>
//           Mumbai, Maharashtra, India
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default App;


import "./App.css";

function App() {
  return (
    <div className="app">
// function App() {
//   return (
//     <div style={{ color: "white", background: "black", minHeight: "100vh", padding: "40px" }}>
//       <h1>Portfolio is working!</h1>
//       <p>React + GitHub Pages is successfully running.</p>

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
