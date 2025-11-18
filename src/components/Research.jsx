import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import './Research.css';

const researchData = [
  {
    id: 1,
    title: "Optimizing Anomaly Detection in COVID-19 Mortality Time Series",
    type: "Current Research",
    description: "Optimized time-series anomaly detection models to validate and monitor the alignment of statistical mortality spikes with four major COVID-19 epidemic waves in Brazil.",
    details: "Aggregated daily city-level and state-level COVID-19 mortality data into a weekly time series to reduce noise and simplify analysis. Applied specific anomaly detection algorithms and iteratively tuned hyperparameters to improve the model's ability to precisely identify true epidemic surges. This framework validates anoamly detection as a robust, real-time tool for monitoring public health trends.",
    achievements: ["Achieved 94% precision in correlating statistical anomalies with known, variant-driven epidemic waves (improving from a baseline detection rate of 87%).", "Developed a scalable quantitative framework for real-time mortality surveillance, enabling public health officials to reliably monitor trends and support timely interventions."],
    tools: ["Python", "NumPy","Pandas", "Matplotlib", "Seaborn"],
    status: "In Progress",
    date: "September 2025 - Present"
  },
  {
    id: 2,
    title: "Systems Mapping and Resource Allocation on an Exoplanet",
    type: "Summer Research",
    description: "Developed a 10-year phased plan and integrated resource systems (Food, Healthcare, Energy) to sustain a colony of 10,000 humans on an exoplanet using systems thinking and modeling techniques as a part of CERN's IdeaSquare Planet educational initiative.",
    details: "Utilized systems thinking to map and allocate resources, prioritizing sustainability and resilience. Created dynamic models to simulate resource consumption and regeneration over time, ensuring the colony's long-term viability. Presented findings to a group of experts at CERN, receiving commendation for innovative approaches to extraterrestrial colonization challenges.",
    achievements: ["Created three interconnected, phased systems (Food, Health, Energy) for long-term survival in a resource-limited environment.", "Validated a model where exoplanet-developed technologies (e.g., compact food production, green energy) can be adapted to support the United Nations Sustainable Development Goals (SDGs 2, 3, 6, 7, 11, 13) on Earth.", "Presented research findings at Stony Brook University's Undergraduate Research and Creative Activities (URECA) Symposium."],
    tools: ["Systems Thinking", "Resource Allocation Modeling", "Data Visualization", "Interdisciplinary Collaboration"],
    status: "Presented",
    date: "June 2025 - August 2025"
  },
  {
    id: 3,
    title: "Natural Language Processing for Medical Records",
    type: "Independent Study",
    description: "Building NLP models to extract and structure clinical information from unstructured medical text using transformer-based architectures.",
    details: "Fine-tuning BERT models on clinical text to extract medications, diagnoses, and treatment plans with high accuracy.",
    achievements: ["Achieved 87% F1 score on entity extraction", "Built custom annotation pipeline"],
    tools: ["BERT", "SpaCy", "Hugging Face", "TensorFlow"],
    status: "In Progress",
    date: "2024"
  },
  {
    id: 4,
    title: "Computational Analysis of Drug Interactions",
    type: "Summer Research",
    description: "Creating predictive models to identify potential adverse drug-drug interactions using graph-based learning approaches.",
    details: "Constructed knowledge graph of drug interactions from FDA databases. Implemented graph neural networks for link prediction.",
    achievements: ["Presented at Summer Research Symposium", "Won Best Poster Award"],
    tools: ["NetworkX", "PyTorch Geometric", "RDKit", "Matplotlib"],
    status: "Presented",
    date: "Summer 2023"
  }
];

const Research = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedId, setExpandedId] = useState(null);

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

  return (
    <section className="research" id="research" ref={ref}>
      <motion.div
        className="research-container"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="section-title shimmer-text">Research</h2>
        <p className="section-subtitle">
          Exploring the frontiers of AI and computational biology through interdisciplinary research
        </p>

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
                    <span className={`research-status ${research.status.toLowerCase().replace(' ', '-')}`}>
                      {research.status}
                    </span>
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
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Research;
