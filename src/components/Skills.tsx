import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "Julia", "R", "C++"]
  },
  {
    title: "BI & ML Tools",
    skills: ["Power BI", "Tableau", "scikit-learn", "TensorFlow", "PyTorch", "XGBoost"]
  },
  {
    title: "Data Skills",
    skills: ["Data Analysis", "Data Visualization", "Data Mining", "Dashboard Design", "Data Storytelling"]
  },
  {
    title: "Statistical Skills",
    skills: ["Statistical Analysis", "Bayesian Inference", "Predictive Analysis", "Forecasting", "Optimization"]
  },
  {
    title: "Core Competencies",
    skills: ["Machine Learning", "Neural Networks", "Regression", "Clustering", "Decision Trees"]
  },
  {
    title: "Development Tools",
    skills: ["SQL", "Git", "GitHub", "Jira", "Advanced Excel", "VBA"]
  }
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for transforming data into insights
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="p-6 glass rounded-2xl"
            >
              <h3 className="font-heading font-semibold text-lg mb-4 text-primary">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    className="px-3 py-1.5 text-sm rounded-full bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;