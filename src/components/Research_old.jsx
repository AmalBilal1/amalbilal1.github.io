import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import './Research.css';

const researchData = [
  {
    id: 1,
    title: "Deep Learning for Protein Folding Prediction",
    type: "Current Research",
    description: "Developing novel neural network architectures to improve protein structure prediction accuracy using attention mechanisms and graph neural networks.",
    details: "Working on implementing advanced attention mechanisms to capture long-range dependencies in protein sequences. Collaborating with the Computational Biology Lab to validate predictions against experimental data.",
    achievements: ["Improved prediction accuracy by 12%", "Presented at Regional AI Conference"],
    tools: ["PyTorch", "AlphaFold", "BioPython", "CUDA"],
    status: "In Progress",
    date: "2024 - Present"
  },
  {
    id: 2,
    title: "Machine Learning in Cancer Genomics",
    type: "Research Assistant",
    description: "Analyzing genomic data to identify biomarkers for early cancer detection using ensemble learning methods and feature selection techniques.",
    details: "Processed and analyzed over 10,000 genomic samples. Developed feature selection pipeline that reduced dimensionality while maintaining 95% predictive accuracy.",
    achievements: ["Published in Journal of Computational Biology", "Identified 3 novel biomarkers"],
    tools: ["Python", "Scikit-learn", "Pandas", "R"],
    status: "Published",
    date: "2023 - 2024"
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
          {researchData.map((research, index) => (
            <motion.div
              key={research.id}
              className="research-item"
              variants={itemVariants}
            >
              <div className="research-marker">
                <div className="marker-dot"></div>
                <div className="marker-line"></div>
              </div>

              <div className="research-content">
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

                <div className="research-tools">
                  {research.tools.map((tool, i) => (
                    <span key={i} className="tool-tag">{tool}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Research;
