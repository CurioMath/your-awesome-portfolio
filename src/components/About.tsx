import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, BarChart3, Database, Code, Zap, LineChart } from "lucide-react";

const highlights = [
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Neural Networks, PyTorch, TensorFlow, Deep Learning"
  },
  {
    icon: BarChart3,
    title: "Data Visualization",
    description: "Power BI, Tableau, Dashboard Design & Storytelling"
  },
  {
    icon: Database,
    title: "Data Analytics",
    description: "SQL, Python, Statistical & Bayesian Analysis"
  },
  {
    icon: Code,
    title: "Programming",
    description: "Python, Julia, R, C++"
  },
  {
    icon: Zap,
    title: "Energy & IoT",
    description: "Grid Forecasting, Predictive Maintenance, Industrial Systems"
  },
  {
    icon: LineChart,
    title: "Scientific Computing",
    description: "Mathematical Modeling, Simulation & Optimization"
  }
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Data Analyst and Applied Research Scientist with over 3 years of experience 
            specializing in data analytics, statistical modelling, and computational analysis 
            within industrial and energy systems. I leverage cutting-edge machine learning, 
            Physics-Informed Neural Networks, and advanced visualization tools to transform 
            complex data into actionable insights that drive operational efficiency and 
            data-informed decision-making.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-6 glass rounded-2xl hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <item.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;