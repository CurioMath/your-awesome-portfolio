import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Shield, Activity, Layers } from "lucide-react";

const projects = [
  {
    icon: Zap,
    title: "Advanced Predictive Control System",
    company: "Kalkitech",
    description: "Led energy optimization project developing advanced mathematical models and control systems for industrial processes.",
    technologies: ["Python", "Julia", "Power BI", "SQL", "Advanced Excel"],
    result: "Delivered automated decision support tools with 30% better actionable energy efficiency insights"
  },
  {
    icon: Shield,
    title: "Predictive Maintenance & Risk Analytics Framework",
    company: "Kalkitech",
    description: "Developed analytical framework to identify safety risks proactively using data-driven techniques.",
    technologies: ["Python", "Bayesian Inference", "Data Visualization", "Excel VBA"],
    result: "Enhanced operational safety by reducing incident response times through actionable insights"
  },
  {
    icon: Activity,
    title: "Data-Driven Grid Forecasting System",
    company: "Kalkitech",
    description: "Led initiative to enhance forecasting accuracy for unpredictable grid load fluctuations.",
    technologies: ["Python", "SQL", "Power BI", "Bayesian Networks"],
    result: "Improved grid load prediction accuracy and optimized resource allocation efficiency"
  },
  {
    icon: Layers,
    title: "SVD's Role in PCA for Dimensionality Reduction",
    company: "Central University of Kerala",
    description: "Designed comprehensive analysis of SVD's role in PCA for high-dimensional data reduction.",
    technologies: ["Mathematical Methods", "Machine Learning", "Feature Extraction"],
    result: "Enhanced computational efficiency in machine learning applications"
  }
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real-world applications of data science and machine learning
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-6 glass rounded-2xl hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <project.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-primary">{project.company}</p>
                </div>
              </div>

              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-sm text-foreground/80">
                  <span className="text-primary font-medium">Result: </span>
                  {project.result}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;