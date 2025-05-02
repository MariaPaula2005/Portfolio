import React, { useState, useEffect } from 'react';
import './Home.css';
import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; 
import resume from '../assets/MariaPaulaMora_Resume.pdf';
import profilePic from '../assets/MariaPaulaMora.jpeg';
import project1 from "../assets/AdvocateFundraising.png";
import project2 from "../assets/CourseRegistration.png";
import project3 from "../assets/DebuggingDucks.png";
import project4 from "../assets/WorkWise.png";
import projectVideo from "../assets/TimeCast.mp4";

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('https://mariapaulamora-portfolio.onrender.com/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Your message has been sent!');
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } else {
      alert('There was an error sending your message.');
    }
  };

  return (
    <div className="home">
        <Header />
        <div className="main-wrapper">
  <div className="main-section" id="main-section">
    <h1>HEY, I'M MARIA PAULA MORA</h1>
    <p>
      I'm a software developer based in Calgary who enjoys building websites and applications that are responsive, accessible, and easy to use. 
      I have experience working on both the frontend and backend, and I really enjoy solving problems and turning ideas into clean, functional code.
    </p>
  </div>

  <div className="social-media">
  <a href="https://www.linkedin.com/in/maria-paula-mora" target="_blank" rel="noopener noreferrer" className="social-link">
    <FaLinkedin style={{ marginRight: '8px' }} /> LinkedIn
  </a>
  <a href="https://github.com/MariaPaula2005" target="_blank" rel="noopener noreferrer" className="social-link">
    <FaGithub style={{ marginRight: '8px' }} /> GitHub
  </a>
  <a
    href={resume}
    className="social-link"
    target="_blank"
    rel="noopener noreferrer"
  >
    View My Resume
  </a>
</div>
</div>

      
<div className="about" id="about">
  <div className="about-text">
    <h2>ABOUT ME</h2>
    <p>
      As a recent graduate in Software Development from Bow Valley College, I specialize in building and managing the front-end of websites and web applications, creating seamless user experiences that contribute to the overall success of the product.
    </p>
    <p>
      By focusing on responsive design, intuitive interfaces, and efficient performance, I ensure that the front-end not only looks great but also enhances user engagement and accessibility. You can explore some of my projects in the Projects section.
    </p>
    <p>
      I'm always excited to learn new techniques and tools to improve my development skills. I'm open to job opportunities where I can apply my skills, continue learning, and contribute to impactful projects. 
    </p>
    <p>
      If you think my experience aligns with your needs, I'd love to hear from you!
    </p>
  </div>
  <div className="about-image">
    <img src={profilePic} alt="Maria Paula Mora" />
  </div>
</div>

<div className="skills" id="skills">
  <h2>SKILLS</h2>
  
  <div className="skills-container">
    <details>
      <summary><strong>Programming Languages</strong></summary>
      <div className="skills-list">
        <span>JavaScript</span>
        <span>HTML5</span>
        <span>CSS3</span>
        <span>SQL</span>
        <span>C#</span>
        <span>Java</span>
      </div>
    </details>

    <details>
      <summary><strong>Frameworks & Libraries</strong></summary>
      <div className="skills-list">
        <span>React</span>
        <span>Node.js</span>
        <span>Express.js</span>
        <span>Bootstrap</span>
      </div>
    </details>

    <details>
      <summary><strong>Cloud & Tools</strong></summary>
      <div className="skills-list">
        <span>AWS</span>
        <span>Git</span>
        <span>Docker</span>
        <span>Jenkins</span>
        <span>WordPress</span>
        <span>Figma</span>
        <span>Postman</span>
        <span>Android Studio</span>
        <span>Visual Studio</span>
      </div>
    </details>

    <details>
      <summary><strong>Databases</strong></summary>
      <div className="skills-list">
        <span>Microsoft SQL Server</span>
        <span>MongoDB</span>
      </div>
    </details>

    <details>
      <summary><strong>Other</strong></summary>
      <div className="skills-list">
        <span>API Integration</span>
        <span>UI/UX Design</span>
        <span>Agile Development</span>
        <span>Responsive Design</span>
        <span>SEO Optimization</span>
        <span>Technical Documentation</span>
      </div>
    </details>
  </div>
</div>

<div className="projects" id="projects">
  <h1>PROJECTS</h1>
  
  <div className="projects-grid">
    {/* Project 1 */}
    <a href="https://www.advocatefundraising.ca/" target="_blank" rel="noopener noreferrer" className="project-card">
      <img src={project1} alt="Advocate Fundraising Website" className="project-image" />
      <div className="project-info">
        <h3>Advocate Fundraising Website Redesign</h3>
        <p>Advocate Fundraising is a third-party fundraiser located in Edmonton, Alberta. I led the redesign of a responsive, accessible website using Squarespace, JavaScript, and CSS.</p>
      </div>
    </a>

    {/* Project 2 */}
    <a href="https://bvc-registration.netlify.app/" target="_blank" rel="noopener noreferrer" className="project-card">
      <img src={project2} alt="Course Registration Website" className="project-image" />
      <div className="project-info">
        <h3>Course Registration Website</h3>
        <p>Developed a full-stack role-based system with React, Node.js, Express.js, and MongoDB for students/admins. Implemented JWT authentication and utilized HTTP methods to handle data retrieval, creation, and deletion within the MongoDB database.</p>
      </div>
    </a>

    {/* Project 3 */}
    <a href="https://debugging-ducks.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-card">
      <img src={project3} alt="Debugging Ducks" className="project-image" />
      <div className="project-info">
        <h3>Debugging Ducks: Bow Valley College Coding Club</h3>
        <p>Contributed to a collaborative hackathon, designing and developing the club's website.</p>
      </div>
    </a>

    {/* Project 4 */}
    <a href="https://workwise-room-booking.netlify.app/" target="_blank" rel="noopener noreferrer" className="project-card">
      <img src={project4} alt="WorkWise" className="project-image" />
      <div className="project-info">
        <h3>WorkWise: Room Booking Website</h3>
        <p>Developed a full-stack application where users can book office spaces, with account creation functionality to view their bookings.</p>
      </div>
    </a>

    {/* Project 5 - Video */}
    <div className="project-card">
      <div className="video-container">
        <video controls className="project-image">
          <source src={projectVideo} type="video/mp4" />
        </video>
      </div>
      <div className="project-info">
        <h3>TimeCast</h3>
        <p>This app helps users organize their schedules via day, week, and month views. Features include task tracking, reminders, conflict notifications, weather forecasts, and automated reminders.</p>
      </div>
    </div>
  </div>
</div>

      
<div className="contact" id="contact">
  <h1>CONTACT</h1>
  <form onSubmit={handleSubmit} className="contact-form">
    <div className="form-field">
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
    </div>
    <div className="form-field">
      <label>Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
    </div>
    <div className="form-field">
      <label>Message</label>
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
      />
    </div>
    <button type="submit">Send Message</button>
  </form>
</div>
      <Footer />
    </div>
  );
}

export default Home;
