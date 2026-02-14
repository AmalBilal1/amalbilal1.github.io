import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './About.css';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="about" id="about" ref={ref}>
      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="about-content">
          <h2 className="section-title shimmer-text">About Me</h2>

          <div className="about-grid">
            <div className="about-text">
              <p className="about-paragraph">
                Hi, I'm Amal! I'm a motivated undergraduate student pursuing a dual degree in Computer Science and Applied Mathematics & Statistics. My journey in tech is driven by curiosity and a desire to create meaningful impact through innovation.
              </p>

              <p className="about-paragraph">
                My interests lie at the intersection of artificial intelligence, machine learning, data science, and biomedical informatics. I'm particularly drawn to how these fields can work together to solve complex real-world problems and advance healthcare solutions.
              </p>
            </div>

            <motion.div
              className="about-image"
              style={{ overflow: 'hidden' }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            >
              <img
                className="portrait-image"
                src="/assets/images/self_portrait.png"
                alt="Amal Bilal"
              />
            </motion.div>
          </div>

          {/* Three sections below */}
          <div className="about-highlights">
            {/* Education */}
            <div className="highlight-card">
              <div className="card-header">
                <span className="highlight-icon">🎓</span>
                <h3 className="card-title">Education</h3>
              </div>
              <div className="card-content">
                <p className="education-school">Stony Brook University</p>
                <p className="education-degree">B.S. Computer Science<p></p>B.S. Applied Mathematics & Statistics</p>
                <p className="education-details">Expected Graduation: May 2028 <p></p>GPA: 4.0/4.0</p>
                <p className="education-coursework">
                  <strong>Relevant Coursework:</strong><p></p>Machine Learning<p></p>Data Science<p></p>Data Structures<p></p>Analysis of Algorithms<p></p>Probability and Statistics<p></p>Discrete Mathematics<p></p>Linear Algebra<p></p>Calculus I, II, III<p></p>Graph Theory
                </p>
              </div>
            </div>

            {/* Awards & Achievements */}
            <div className="highlight-card">
              <div className="card-header">
                <span className="highlight-icon">🏆</span>
                <h3 className="card-title">Awards</h3>
              </div>
              <div className="card-content">
                <ul className="achievements-list">
                  <li>Simons STEM Scholars Program:<p></p>Full Ride Scholarship</li>
                  <li>Presidential Scholarship:<p></p>Four Year Merit Scholarship</li>
                  <li>Academic Achievement Award:<p></p>Three-Time Recipient<p>4.0 Semester</p></li>
                  <li>Dean's List:<p></p>Fall 2024<p></p>Spring 2025<p></p>Fall 2025</li>
                </ul>
              </div>
            </div>

            {/* Certifications */}
            <div className="highlight-card">
              <div className="card-header">
                <span className="highlight-icon">📜</span>
                <h3 className="card-title">Certifications</h3>
              </div>
              <div className="card-content">
                <ul className="certifications-list">
                  <li>
                    <a
                      href="/assets/images/machine_learning_foundations.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cert-link"
                    >
                      <span className="cert-name">Machine Learning Foundations</span>
                      <span className="cert-date">Cornell University<p></p>July 2025</span>
                      <svg className="cert-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/assets/images/artificial_intelligence_with_python.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cert-link"
                    >
                      <span className="cert-name">Introduction to Artificial Intelligence with Python</span>
                      <span className="cert-date">Harvard University<p></p>March 2025</span>
                      <svg className="cert-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/assets/images/intro_to_computer_science.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cert-link"
                    >
                      <span className="cert-name">Introduction to Computer Science</span>
                      <span className="cert-date">Harvard University<p></p>December 2024</span>
                      <svg className="cert-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/assets/images/undp_data_science_intern.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cert-link"
                    >
                      <span className="cert-name">UNDP: Data Science Internship</span>
                      <span className="cert-date">United Nations<p></p>June 2024</span>
                      <svg className="cert-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
