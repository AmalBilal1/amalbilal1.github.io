import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import './Projects.css';

const projectsData = [
  {
    id: 1,
    title: "CareCompanion: Healthcare Scheduler Agent",
    description: "AI healthcare scheduling and monitoring agent to support patients after hospital discharge by organizing medications, follow-up appointments, and symptom tracking into a structured, personalized care timeline.",
    details: "",
    features: [""],
    tech: "In Progress",
    github: "https://github.com/BasirS/care-companion",
    image: "project1"
  },
  {
    id: 2,
    title: "Academic Bulletin Website",
    description: "Academic bulletin website for Stony Brook University courses.",
    details: "",
    features: [""],
    tech: "In Progress",
    github: "https://github.com/eduardoloz/bulletin-website",
    image: "project2"
  },
  {
    id: 3,
    title: "COVID-19 Mortality Anomaly Detection",
    description: "Developed a time-series anomaly detection and visualization pipeline to study COVID-19 mortality in Brazil and examine how mortality spikes aligned with major pandemic waves and population-level factors.",
    details: "Aggregated large-scale daily COVID-19 mortality data from city- and state-level sources into weekly time-series to reduce noise and enable population-level analysis. Implemented and tuned anomaly detection methods to identify weeks with rapid or unusually high mortality. Iteratively adjusted detection thresholds to improve alignment between detected anomalies and known pandemic wave periods. Analyzed how contextual factors such as vaccination rollout and seasonality related to observed mortality anomalies. Designed visualizations overlaying detected anomalies on pandemic wave timelines to support epidemiological interpretation",
    features: ["Weekly aggregation and smoothing of large-scale mortality time-series data", "Quantile-based anomaly detection with threshold tuning", "Visualization of mortality anomalies across major pandemic waves", "Sensitivity and precision analysis to support interpretability", "Population-level contextual analysis (e.g., vaccination status, seasonality)"],
    tech: "Python, Pandas, NumPy, Matplotlib, Seaborn, scikit-learn",
    github: "https://github.com/AmalBilal1/covid19-anomaly-detection",
    image: "project3"
  },
  {
    id: 4,
    title: "Entrepreneur Grit Score Prediction",
    description: "Built and evaluated machine learning models to predict individual grit levels from Big Five personality traits and demographic features, with the goal of supporting scalable, bias-aware candidate screening for leadership and founder assessment.",
    details: "Cleaned and filtered a large survey dataset (reduced from ~4,270 to ~2,200 valid respondents) by removing unrealistic entries using VCL scores, extreme ages, implausible family sizes, and time-spent thresholds. Performed exploratory data analysis including correlation heatmaps between grit and Big Five traits (showing strongest association with conscientiousness), demographic box plots, and grit vs. age trends. Engineered interaction features and one-hot encoded categorical variables while removing sensitive attributes (race, gender, religion, sexual orientation) to reduce bias. Trained baseline regression and classification models (Linear, Ridge, Lasso, Logistic), then developed advanced models (XGBoost, LightGBM, and an ensemble) with hyperparameter tuning via GridSearchCV, RandomizedSearchCV, and Optuna. Achieved ~73.6% accuracy and ~72.5% F1-score on 3-class grit classification (Low/Medium/High), with SHAP used to interpret key predictors (e.g., duty neglect, schedule adherence, preparedness).",
    features: ["XGBoost", "LightGBM", "Ensemble Models", "Feature Selection (Lasso, RFE, Correlation)", "SHAP Interpretability"],
    tech: "Python, scikit-learn, XGBoost, LightGBM, Optuna, Pandas, NumPy, Matplotlib, Seaborn, Streamlit",
    github: "https://github.com/Rishik15/BTT_GM2",
    image: "project4"
  },
  {
    id: 5,
    title: "Heart Disease Detection from Clinical Data",
    description: "Built and compared machine learning models to predict the presence of heart disease using structured clinical features from patient records. Performed exploratory data analysis to uncover key risk factors and relationships across demographic and physiological variables.",
    details: "Preprocessed the heart.csv dataset (age, chest pain type, resting blood pressure, cholesterol, fasting blood sugar, ECG results, max heart rate, etc.). Conducted EDA including age distributions, correlation heatmaps, cholesterol vs. disease boxplots, and feature relationship visualizations (e.g., age vs. max heart rate). Trained and evaluated a Decision Tree classifier with stratified train/test splits and hyperparameter tuning using cross-validation, achieving ~0.82 accuracy with strong recall for positive heart disease cases.",
    features: ["Decision Tree Classifier", "Exploratory Data Analysis (EDA)", "Stratified Cross-Validation"],
    tech: "Python, scikit-learn, Pandas, NumPy, Matplotlib, Seaborn",
    slides: [
      '/assets/images/heart_disease_slides/Datathon 2025 - Amal and Eimaan Bilal.png',
      ...Array.from({ length: 21 }, (_, i) => `/assets/images/heart_disease_slides/Datathon 2025 - Amal and Eimaan Bilal (${i + 1}).png`)
    ],
    image: "project5"
  },
  {
    id: 6,
    title: "Pneumonia Detection from Chest X-Rays",
    description: "Build and compared machine learning models to predict whether chest X-ray images indicate having pneumonia. Applied targeted data augmentation techniques to address enhance model generalization.",
    details: "Preprocessed a dataset of chest X-ray images labeled for pneumonia presence. Implemented and trained multiple machine learning models. Employed data augmentation strategies such as flipping, rotating, scaling, and shifting to increase dataset diversity and reduce overfitting.",
    features: ["Decision Tree", "K-Nearest Neighbors (KNN)", "Convolutional Neural Network (CNN)"],
    tech: "Python, Keras, TensorFlow, scikit-learn, NumPy, Pandas, Matplotlib",
    slides: Array.from({ length: 8 }, (_, i) => `/assets/images/pneumonAI/slide_${i + 1}.png`),
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
  const [presentationOpen, setPresentationOpen] = useState(false);
  const [currentPresentation, setCurrentPresentation] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!presentationOpen || !currentPresentation) return;

    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') {
        setCurrentSlide(prev => Math.max(0, prev - 1));
      } else if (e.key === 'ArrowRight') {
        setCurrentSlide(prev => Math.min(currentPresentation.length - 1, prev + 1));
      } else if (e.key === 'Escape') {
        setPresentationOpen(false);
        setCurrentSlide(0);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [presentationOpen, currentPresentation]);

  const handleOpenPresentation = (slides) => {
    setCurrentPresentation(slides);
    setCurrentSlide(0);
    setPresentationOpen(true);
  };

  const handleClosePresentation = () => {
    setPresentationOpen(false);
    setCurrentSlide(0);
    setCurrentPresentation(null);
  };

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
                  {project.slides ? (
                    <button
                      className="presentation-button"
                      onClick={(e) => { e.stopPropagation(); handleOpenPresentation(project.slides); }}
                    >
                      View Presentation
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                        <line x1="8" y1="21" x2="16" y2="21"></line>
                        <line x1="12" y1="17" x2="12" y2="21"></line>
                      </svg>
                    </button>
                  ) : project.github ? (
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
                  ) : null}

                  {project.details && (
                    <button
                      className="expand-button"
                      onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
                    >
                      {expandedId === project.id ? 'Show Less' : 'Learn More'}
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" style={{ transform: expandedId === project.id ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>
                        <path d="M2 4L6 8L10 4"/>
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Presentation Modal */}
      <AnimatePresence>
        {presentationOpen && currentPresentation && (
          <motion.div
            className="presentation-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClosePresentation}
          >
            <motion.div
              className="presentation-modal"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={handleClosePresentation}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              <div className="presentation-carousel">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentSlide}
                    src={currentPresentation[currentSlide]}
                    alt={`Slide ${currentSlide + 1}`}
                    className="carousel-slide"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3 }}
                  />
                </AnimatePresence>

                <button
                  className="carousel-button carousel-button-prev"
                  onClick={() => setCurrentSlide(prev => Math.max(0, prev - 1))}
                  disabled={currentSlide === 0}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>

                <button
                  className="carousel-button carousel-button-next"
                  onClick={() => setCurrentSlide(prev => Math.min(currentPresentation.length - 1, prev + 1))}
                  disabled={currentSlide === currentPresentation.length - 1}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>

                <div className="slide-counter">
                  {currentSlide + 1} / {currentPresentation.length}
                </div>

                <div className="slide-indicators">
                  {currentPresentation.map((_, index) => (
                    <button
                      key={index}
                      className={`slide-indicator ${index === currentSlide ? 'active' : ''}`}
                      onClick={() => setCurrentSlide(index)}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
