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
                Hi, I'm Amal! I'm a passionate undergraduate student pursuing a dual degree in Computer Science and Applied Mathematics and Statistics. My journey in tech is driven by curiosity and a desire to create meaningful impact through innovation.
              </p>

              <p className="about-paragraph">
                My research interests lie at the intersection of artificial intelligence, machine learning, data science, and computational biology. I'm particularly drawn to how these fields can work together to solve complex real-world problems and advance our
                understanding of biological systems.
              </p>

              <p className="about-paragraph">
                I believe in the power of technology to transform lives and I am deeply committed to developing solutions that are not only technically sound but also ethically responsible and accessible to all.
              </p>
            </div>

            <motion.div
              className="about-image"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            >
              <div className="image-placeholder">
                <span className="image-text">Your Portrait</span>
              </div>
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
                  <strong>Relevant Coursework:</strong><p></p>Machine Learning<p></p>Introduction to Data Science<p></p>Data Structures and Algorithms<p></p>Survey of Probability and Statistics
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
                      href="/path/to/aws-certificate.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cert-link"
                    >
                      <span className="cert-name">Machine Learning Foundations</span>
                      <span className="cert-date">Cornell<p></p>Jul 2025</span>
                      <svg className="cert-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/path/to/deep-learning-certificate.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cert-link"
                    >
                      <span className="cert-name">CS50: Introduction to Artificial Intelligence with Python</span>
                      <span className="cert-date">Harvard<p></p>Mar 2025</span>
                      <svg className="cert-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/path/to/tensorflow-certificate.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cert-link"
                    >
                      <span className="cert-name">CS50: Introduction to Computer Science</span>
                      <span className="cert-date">Harvard<p></p>Dec 2024</span>
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
