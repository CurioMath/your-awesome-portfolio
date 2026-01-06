import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-12">
            I'm always open to discussing data science projects, 
            research collaborations, or career opportunities.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <motion.a
              href="mailto:jisnajohnson27@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-6 py-4 glass rounded-xl hover:border-primary/50 transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="font-medium">jisnajohnson27@gmail.com</p>
              </div>
            </motion.a>

            <motion.a
              href="tel:+14379675227"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-6 py-4 glass rounded-xl hover:border-primary/50 transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground">Phone</p>
                <p className="font-medium">+1 (437) 967 5227</p>
              </div>
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/jisna-johnson"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-6 py-4 glass rounded-xl hover:border-primary/50 transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Linkedin className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground">LinkedIn</p>
                <p className="font-medium">jisna-johnson</p>
              </div>
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center gap-2 text-muted-foreground"
          >
            <MapPin className="w-4 h-4" />
            <span>Scarborough, Toronto, Canada</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;