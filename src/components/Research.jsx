import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import './Research.css';

const researchData = [
  {
    id: 1,
    title: "Cancer and Lifestyle Medicine",
    type: "Integrating Population Health Informatics (VIP Team)",
    description: "Analyzed public health and biomedical datasets to explore how lifestyle, physical, and social determinants of health relate to cancer risk across populations.",
    details: "",
    achievements: [],
    tools: [],
    status: "In Progress",
    date: "February 2026 - Present"
  },
  {
    id: 2,
    title: "Optimizing Anomaly Detection in COVID-19 Mortality Time Series",
    type: "The Graph Lab",
    description: "Optimized time-series anomaly detection models to validate and monitor the alignment of statistical mortality spikes with four major COVID-19 epidemic waves in Brazil.",
    details: "Aggregated daily city-level and state-level COVID-19 mortality data into a weekly time series to reduce noise and simplify analysis. Applied specific anomaly detection algorithms and iteratively tuned hyperparameters to improve the model's ability to precisely identify true epidemic surges. This framework validates anoamly detection as a robust, real-time tool for monitoring public health trends.",
    achievements: ["Achieved 71.4% precision in correlating statistical anomalies with known, variant-driven epidemic waves (improving from a baseline detection rate of 56.5%).", "Developed a scalable quantitative framework for real-time mortality surveillance, enabling public health officials to reliably monitor trends and support timely interventions."],
    tools: ["Python", "NumPy","Pandas", "Matplotlib", "Seaborn"],
    status: ["In Progress", "Presented"],
    date: "September 2025 - Present",
    slides: Array.from({ length: 28 }, (_, i) => `/assets/images/slides/graph_lab_slide_${i + 1}.png`)
  },
  {
    id: 3,
    title: "Systems Mapping and Resource Allocation on an Exoplanet",
    type: "CERN IdeaSquare Planet",
    description: "Developed a 10-year phased plan and integrated resource systems (Food, Healthcare, Energy) to sustain a colony of 10,000 humans on an exoplanet using systems thinking and modeling techniques as a part of CERN's IdeaSquare Planet educational initiative.",
    details: "Utilized systems thinking to map and allocate resources, prioritizing sustainability and resilience. Created dynamic models to simulate resource consumption and regeneration over time, ensuring the colony's long-term viability. Presented findings to a group of experts at CERN, receiving commendation for innovative approaches to extraterrestrial colonization challenges.",
    achievements: ["Created three interconnected, phased systems (Food, Health, Energy) for long-term survival in a resource-limited environment.", "Validated a model where exoplanet-developed technologies (e.g., compact food production, green energy) can be adapted to support the United Nations Sustainable Development Goals (SDGs 2, 3, 6, 7, 11, 13) on Earth.", "Presented research findings at Stony Brook University's Undergraduate Research and Creative Activities (URECA) Symposium."],
    tools: ["Data Visualization", "Systems Thinking", "Resource Allocation Modeling", "Interdisciplinary Collaboration"],
    status: "Presented",
    date: "June 2025 - August 2025",
    poster: "/assets/images/cern_ideasquare_poster.png"
  }
];

const Research = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedId, setExpandedId] = useState(null);
  const [presentationOpen, setPresentationOpen] = useState(false);
  const [currentPresentation, setCurrentPresentation] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [posterOpen, setPosterOpen] = useState(false);
  const [currentPoster, setCurrentPoster] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // Keyboard navigation for slides
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

  const nextSlide = () => {
    if (currentPresentation && currentSlide < currentPresentation.length - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

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

  const handleOpenPoster = (posterUrl) => {
    setCurrentPoster(posterUrl);
    setPosterOpen(true);
  };

  const handleClosePoster = () => {
    setPosterOpen(false);
    setCurrentPoster(null);
  };

  return (
    <section className="research" id="research" ref={ref}>
      <motion.div
        className="research-container"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="section-title shimmer-text">Research</h2>

        <motion.div
          className="research-timeline"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {researchData.map((research) => (
            <motion.div
              key={research.id}
              className="research-item"
              variants={itemVariants}
            >
              <div className="research-marker">
                <div className="marker-dot"></div>
                <div className="marker-line"></div>
              </div>

              <div
                className={`research-content ${expandedId === research.id ? 'expanded' : ''}`}
              >
                <div className="research-header">
                  <div>
                    <span className="research-type">{research.type}</span>
                    <h3 className="research-title">{research.title}</h3>
                  </div>
                  <div className="research-meta">
                    <span className="research-date">{research.date}</span>
                    <div className="research-status-container">
                      {Array.isArray(research.status) ? (
                        research.status.map((stat, idx) => (
                          <span key={idx} className={`research-status ${stat.toLowerCase().replace(' ', '-')}`}>
                            {stat}
                          </span>
                        ))
                      ) : (
                        <span className={`research-status ${research.status.toLowerCase().replace(' ', '-')}`}>
                          {research.status}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <p className="research-description">{research.description}</p>

                <AnimatePresence>
                  {expandedId === research.id && (
                    <motion.div
                      className="research-expanded"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="expanded-content">
                        <p className="expanded-details">{research.details}</p>
                        {research.achievements && research.achievements.length > 0 && (
                          <div className="achievements">
                            <h4 className="achievements-title">Key Achievements</h4>
                            <ul className="achievements-list">
                              {research.achievements.map((achievement, i) => (
                                <li key={i}>{achievement}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="research-tools">
                  {research.tools.map((tool, i) => (
                    <span key={i} className="tool-tag">{tool}</span>
                  ))}
                </div>

                <div className="research-actions">
                  {research.slides && (
                    <button
                      className="presentation-button"
                      onClick={() => handleOpenPresentation(research.slides)}
                    >
                      View Presentation
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                        <line x1="8" y1="21" x2="16" y2="21"></line>
                        <line x1="12" y1="17" x2="12" y2="21"></line>
                      </svg>
                    </button>
                  )}
                  {research.poster && (
                    <button
                      className="poster-button"
                      onClick={() => handleOpenPoster(research.poster)}
                    >
                      View Poster
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <circle cx="8.5" cy="8.5" r="1.5"></circle>
                        <polyline points="21 15 16 10 5 21"></polyline>
                      </svg>
                    </button>
                  )}
                  <button
                    className="expand-button"
                    onClick={() => setExpandedId(expandedId === research.id ? null : research.id)}
                  >
                    {expandedId === research.id ? 'Show Less' : 'Learn More'}
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" style={{ transform: expandedId === research.id ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>
                      <path d="M2 4L6 8L10 4"/>
                    </svg>
                  </button>
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

              {/* Slide Carousel */}
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

                {/* Navigation Buttons */}
                <button
                  className="carousel-button carousel-button-prev"
                  onClick={prevSlide}
                  disabled={currentSlide === 0}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>

                <button
                  className="carousel-button carousel-button-next"
                  onClick={nextSlide}
                  disabled={currentSlide === currentPresentation.length - 1}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>

                {/* Slide Counter */}
                <div className="slide-counter">
                  {currentSlide + 1} / {currentPresentation.length}
                </div>

                {/* Slide Indicators */}
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

      {/* Poster Modal */}
      <AnimatePresence>
        {posterOpen && currentPoster && (
          <motion.div
            className="presentation-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClosePoster}
          >
            <motion.div
              className="presentation-modal poster-modal"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={handleClosePoster}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              <div className="poster-viewer">
                <img
                  src={currentPoster}
                  alt="Research Poster"
                  className="poster-image"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Research;
