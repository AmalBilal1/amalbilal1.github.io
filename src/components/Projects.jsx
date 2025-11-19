import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import './Projects.css';

const projectsData = [
  {
    id: 1,
    title: "Break Through Tech - Entrpreneur Grit Score Analysis",
    description: "Description",
    details: "Details",
    features: ["Feature 1", "Feature 2"],
    tech: "Tech 1, Tech 2, Tech 3",
    github: "https://github.com",
    image: "project1"
  },
  {
    id: 2,
    title: "AIC Datathon - Detecting Heart Disease",
    description: "Description",
    details: "Details",
    features: ["Feature 1", "Feature 2"],
    tech: "Tech 1, Tech 2, Tech 3",
    github: "https://github.com",
    image: "project2"
  },
  {
    id: 3,
    title: "HopperHacks X - ReRelief",
    description: "Description",
    details: "Details",
    features: ["Feature 1", "Feature 2"],
    tech: "Tech 1, Tech 2, Tech 3",
    github: "https://github.com",
    image: "project3"
  },
  {
    id: 4,
    title: "SBUHacks 2025 - Kitty Care",
    description: "Description",
    details: "Details",
    features: ["Feature 1", "Feature 2"],
    tech: "Tech 1, Tech 2, Tech 3",
    github: "https://github.com",
    image: "project4"
  },
  {
    id: 5,
    title: "The Graph Lab - COVID-19 Anomaly Detection and Visualization",
    description: "Description",
    details: "Details",
    features: ["Feature 1", "Feature 2"],
    tech: "Tech 1, Tech 2, Tech 3",
    github: "https://github.com",
    image: "project5"
  },
  {
    id: 6,
    title: "Inspirit AI Scholars Program - Pneumonia Detection from Chest X-Rays",
    description: "Description",
    details: "Details",
    features: ["Feature 1", "Feature 2"],
    tech: "Tech 1, Tech 2, Tech 3",
    github: "https://github.com",
    image: "project6"
  }
  /*,
  {
    id: 2,
    title: "Genomic Data Analysis Pipeline",
    description: "Automated pipeline for processing and analyzing large-scale genomic datasets",
    details: "Developed a scalable pipeline for processing genomic sequencing data. Handles quality control, alignment, variant calling, and annotation with parallel processing capabilities.",
    features: ["Automated QC and preprocessing", "Variant calling and filtering", "Parallel processing support", "Comprehensive reporting"],
    tech: "Python, BioPython, Pandas, NumPy",
    github: "https://github.com",
    image: "project2"
  },
  {
    id: 3,
    title: "Sentiment Analysis API",
    description: "RESTful API for real-time sentiment analysis using transformer-based models",
    details: "Created a production-ready API for sentiment analysis with fine-tuned BERT models. Supports batch processing and handles 1000+ requests per minute with low latency.",
    features: ["Multi-language support", "Batch processing", "Real-time analysis", "Confidence scoring"],
    tech: "PyTorch, FastAPI, Docker, BERT",
    github: "https://github.com",
    image: "project3"
  },
  {
    id: 4,
    title: "Clinical Trial Predictor",
    description: "Machine learning model to predict clinical trial outcomes using historical data",
    details: "Built ensemble learning models to predict clinical trial success rates based on trial design, patient demographics, and historical outcomes. Achieved 78% accuracy on test set.",
    features: ["Ensemble ML models", "Feature importance analysis", "Interactive dashboard", "Risk assessment"],
    tech: "Scikit-learn, XGBoost, Flask, PostgreSQL",
    github: "https://github.com",
    image: "project4"
  },
  {
    id: 5,
    title: "Research Paper Summarizer",
    description: "NLP tool that generates concise summaries of academic research papers",
    details: "Developed an abstractive summarization tool using transformer models. Extracts key findings, methods, and conclusions from scientific papers while maintaining technical accuracy.",
    features: ["Abstractive summarization", "Key finding extraction", "Citation preservation", "PDF parsing"],
    tech: "Transformers, Hugging Face, React, Node.js",
    github: "https://github.com",
    image: "project5"
  },
  {
    id: 6,
    title: "Protein Structure Prediction",
    description: "Deep learning approach to predict 3D protein structures from amino acid sequences",
    details: "Implemented attention-based neural networks for protein folding prediction. Trained on protein structure databases with data augmentation techniques for improved generalization.",
    features: ["3D structure prediction", "Confidence estimation", "Visualization tools", "Batch processing"],
    tech: "PyTorch, AlphaFold, CUDA, Python",
    github: "https://github.com",
    image: "project6"
  }*/
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedId, setExpandedId] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="projects" id="projects" ref={ref}>
      <motion.div
        className="projects-container"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="section-title shimmer-text">Projects</h2>
        <p className="section-subtitle">
          A collection of work that showcases my passion for solving problems through code
        </p>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              className={`project-card ${expandedId === project.id ? 'expanded' : ''}`}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="project-image">
                <div className={`project-placeholder ${project.image}`}>
                  <span className="project-number">0{project.id}</span>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <AnimatePresence>
                  {expandedId === project.id && (
                    <motion.div
                      className="project-expanded"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="expanded-content">
                        <p className="expanded-details">{project.details}</p>
                        {project.features && project.features.length > 0 && (
                          <div className="features">
                            <h4 className="features-title">Key Features</h4>
                            <ul className="features-list">
                              {project.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <p className="project-tech">{project.tech}</p>

                <div className="project-actions">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View on GitHub
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </a>

                  <button
                    className="expand-button"
                    onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
                  >
                    {expandedId === project.id ? 'Show Less' : 'Learn More'}
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" style={{ transform: expandedId === project.id ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>
                      <path d="M2 4L6 8L10 4"/>
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
