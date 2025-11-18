import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Experience.css';

const experienceData = [
  {
    id: 1,
    role: "Mentor",
    organization: "Women in Computer Science (WiCS)",
    date: "October 2025 - Present",
    description: "Mentor two undergraduate students, offering guidance on academic planning, research involvement, and navigating coursework. Provide personalized advice on internships, technical skill-building, and campus opportunities to help mentees grow confidence and direction in the tech field. Foster an inclusive, supportive environment by sharing experiences, answering questions, and connecting mentees with relevant resources.",
    type: "leadership"
  },
  {
    id: 2,
    role: "Undergraduate Research Assistant",
    organization: "The Graph Lab",
    date: "September 2025 - Present",
    description: "Developed and tuned a scalable time-series anomaly-detection framework that aligns Brazil's weekly COVID-19 mortality spikes with four variant-driven waves. Iterative hyperparameter optimization improved in-wave alignment from ~87% to ~94%, validating the framework for real-time public-health surveillance and decision support.",
    type: "research"
  },
  {
    id: 3,
    role: "Undergraduate Academic Assistant",
    organization: "Simons STEM Scholars Program",
    date: "September 2025 - Present",
    description: "Support Simons STEM Scholars in computer science and mathematics coursework through clear, adaptive explanations of  concepts. Foster academic confidence and growth among peers through consistent mentorship and 10+ hours of weekly individualized support. Deliver instruction in both in-person and virtual formats, tailoring sessions to various learning styles using whiteboard and online tools.",
    type: "teaching"
  },
  {
    id: 4,
    role: "Event Coordinator",
    organization: "Artificial Intelligence Community (AIC)",
    date: "May 2025 - Present",
    description: "Plan and execute AI-related events by designing templates, timelines, and logistics to ensure successful and engaging programming. Collaborate with executive board members to provide regular status updates and coordinate events from planning through execution. Attend AIC events and initiatives to explore career pathways, gain practical experience, and connect with peers passionate about AI and machine learning.",
    type: "leadership"
  },
  {
    id: 5,
    role: "Event Committee Member",
    organization: "Women in Computer Science (WiCS)",
    date: "April 2025 - Present",
    description: "Coordinate and host large-scale workshops, panels, and networking events that empower women in technology, including an AI/ML Workshop and Break Through Tech guest speaker session.Support a community of 850+ members by fostering collaboration, professional development, and awareness of technical opportunities. Serve as a liaison to campus organizations to enhance outreach, partnerships, and event visibility across Stony Brook University. Represent WiCS at meetings, hackathons, and campus initiatives, strengthening the club's presence in the tech community.",
    type: "leadership"
  },
  {
    id: 6,
    role: "AI/ML Fellow",
    organization: "Break Through Tech Program",
    date: "April 2025 - Present",
    description: "Selected from 3,500+ applicants for a 12-month program combining machine learning coursework, experiential learning, and mentorship from industry professionals. Conducted exploratory data analysis, feature engineering, model (XGBoost, Random Forest, and Support Vector Machine) development and optimization to identify predictors of entrepreneurial success.",
    type: "fellowship"
  },
  {
    id: 7,
    role: "Highlight Writer",
    organization: "Young Investigators Review (YIR)",
    date: "September 2024 - Present",
    description: "Authored 13 published highlight articles translating complex research in artificial intelligence, machine learning, and bioinformatics into accessible summaries for a public academic journal. Strengthened scientific literacy, research communication, and writing skills through regular analysis of peer-reviewed publications. Contributed to YIR’s mission of bridging the gap between cutting-edge research and accessibility.",
    type: "achievement"
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
