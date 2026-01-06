import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Sigma, 
  GitBranch, 
  Grid3X3, 
  TrendingUp, 
  Infinity, 
  Boxes 
} from "lucide-react";

const mathAreas = [
  {
    icon: Sigma,
    title: "Differential Calculus",
    description: "Derivatives, integrals, differential equations, and their applications in optimization and modeling dynamic systems."
  },
  {
    icon: Grid3X3,
    title: "Linear Algebra",
    description: "Matrix theory, eigenvalues, vector spaces, SVD, and applications in dimensionality reduction and machine learning."
  },
  {
    icon: GitBranch,
    title: "Graph Theory",
    description: "Network analysis, shortest path algorithms, connectivity, and applications in data structures and social networks."
  },
  {
    icon: TrendingUp,
    title: "Linear Programming",
    description: "Optimization techniques, simplex method, duality theory, and applications in operations research and resource allocation."
  },
  {
    icon: Infinity,
    title: "Numerical Analysis",
    description: "Computational methods, approximation theory, error analysis, and numerical solutions for differential equations."
  },
  {
    icon: Boxes,
    title: "Probability & Statistics",
    description: "Stochastic processes, Bayesian methods, hypothesis testing, and statistical inference for data-driven decisions."
  }
];

const Mathematics = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="mathematics" className="section-padding" ref={ref}>
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Mathematical <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Strong foundation in core mathematics enabling rigorous analytical thinking, 
            advanced modeling capabilities, and the ability to teach complex concepts effectively.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mathAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-6 glass rounded-2xl hover:border-primary/30 transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle math-inspired background pattern */}
              <div className="absolute top-0 right-0 w-24 h-24 opacity-5 text-6xl font-heading text-primary select-none pointer-events-none">
                ∫
              </div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <area.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{area.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{area.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Teaching & Industry callout */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 p-8 glass rounded-2xl text-center"
        >
          <p className="text-lg text-foreground/90 max-w-3xl mx-auto">
            <span className="text-primary font-semibold">Bridging Academia & Industry:</span> My deep mathematical 
            foundation enables me to both <span className="text-primary">teach complex concepts</span> with clarity 
            and <span className="text-primary">apply rigorous analytical methods</span> to solve real-world industrial challenges.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Mathematics;