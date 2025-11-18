import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Experience.css';

const experienceData = [
  {
    id: 1,
    role: "Undergraduate Research Assistant",
    organization: "Computational Biology Lab",
    date: "Sep 2023 - Present",
    description: "Developing machine learning models for protein structure prediction and analyzing genomic datasets.",
    type: "research"
  },
  {
    id: 2,
    role: "AI/ML Research Fellow",
    organization: "University Research Initiative",
    date: "Jun 2024 - Aug 2024",
    description: "Received competitive fellowship to conduct independent research on neural network interpretability.",
    type: "fellowship"
  },
  {
    id: 3,
    role: "Tech Lead",
    organization: "AI & Machine Learning Club",
    date: "Jan 2024 - Present",
    description: "Leading a team of 15 students in organizing workshops and building ML projects for social good.",
    type: "leadership"
  },
  {
    id: 4,
    role: "Software Engineering Intern",
    organization: "BioTech Startup",
    date: "Jun 2023 - Aug 2023",
    description: "Built data processing pipelines for clinical trial analysis using Python and cloud technologies.",
    type: "internship"
  },
  {
    id: 5,
    role: "Hackathon Winner - Best ML Solution",
    organization: "National Health Hackathon",
    date: "Mar 2024",
    description: "Developed an AI-powered diagnostic tool for early disease detection using medical imaging.",
    type: "achievement"
  },
  {
    id: 6,
    role: "Teaching Assistant",
    organization: "Introduction to Data Science",
    date: "Jan 2024 - May 2024",
    description: "Assisted in teaching Python, statistics, and machine learning fundamentals to 100+ students.",
    type: "teaching"
  }
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const getTypeIcon = (type) => {
    const icons = {
      research: "🔬",
      fellowship: "🏆",
      leadership: "👥",
      internship: "💼",
      achievement: "⭐",
      teaching: "📚"
    };
    return icons[type] || "•";
  };

  return (
    <section className="experience" id="experience" ref={ref}>
      <motion.div
        className="experience-container"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="section-title shimmer-text">Experience</h2>
        <p className="section-subtitle">
          A journey of learning, leading, and making an impact
        </p>

        <motion.div
          className="experience-timeline"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {experienceData.map((exp) => (
            <motion.div
              key={exp.id}
              className="experience-item"
              variants={itemVariants}
            >
              <div className="experience-marker">
                <div className="marker-icon">{getTypeIcon(exp.type)}</div>
                <div className="marker-connector"></div>
              </div>

              <div className="experience-content">
                <div className="experience-header">
                  <div>
                    <h3 className="experience-role">{exp.role}</h3>
                    <p className="experience-org">{exp.organization}</p>
                  </div>
                  <span className="experience-date">{exp.date}</span>
                </div>
                <p className="experience-description">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience;
