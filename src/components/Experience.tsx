import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Applied Research Scientist in Computational Mathematics",
    company: "Kalkitech",
    location: "Kochi, India",
    period: "January 2022 - December 2024",
    highlights: [
      "Engineered advanced control systems for Once-Through Boiler Turbines using Python and Julia with Neural ODEs and Physics-Informed Neural Networks",
      "Developed and optimized Model Predictive Control (MPC) framework improving operational efficiency by 30%",
      "Built Bayesian Network-based probabilistic models for real-time anomaly detection and data visualization dashboards",
      "Developed forecasting models for energy load prediction with cross-functional team collaboration"
    ]
  },
  {
    title: "Intern in Computational Mathematics",
    company: "Kalkitech",
    location: "Kochi, India",
    period: "August 2021 - December 2021",
    highlights: [
      "Developed scientific computing and data analytics solutions using Python and Julia",
      "Engineered machine learning models with PyTorch and Scikit-Learn for predictive accuracy",
      "Implemented end-to-end data pipelines leveraging robust data visualization and statistical analysis"
    ]
  }
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding" ref={ref}>
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Building data-driven solutions in the energy and industrial sectors
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative pl-8 md:pl-0 pb-12 last:pb-0 ${
                index % 2 === 0 ? "md:pr-[calc(50%+2rem)]" : "md:pl-[calc(50%+2rem)]"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-gradient-primary border-4 border-background md:-translate-x-1/2 glow-primary" />

              <div className="glass p-6 rounded-2xl hover:border-primary/30 transition-all duration-300">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <Briefcase className="w-4 h-4" />
                  <span className="font-medium">{exp.company}</span>
                </div>
                
                <h3 className="font-heading font-semibold text-xl mb-3">
                  {exp.title}
                </h3>

                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-2">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;