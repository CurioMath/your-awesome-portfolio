import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, BookOpen, ExternalLink } from "lucide-react";

const education = [
  {
    degree: "Master of Science - Mathematics",
    institution: "Central University of Kerala",
    location: "Kerala, India",
    period: "July 2019 - May 2021",
    achievement: "University 4th Rank, CGPA 9.4/10.0"
  },
  {
    degree: "Bachelor of Science - Mathematics",
    institution: "University of Calicut",
    location: "Kerala, India",
    period: "July 2016 - May 2019",
    achievement: "CGPA 9.2/10.0"
  }
];

const certifications = [
  {
    title: "Machine Learning",
    issuer: "National Programme on Technology Enhanced Learning",
    period: "Jan 2022 - May 2022",
    description: "Applied supervised and unsupervised learning using Python, Advanced Excel, and SQL"
  }
];

const publications = [
  {
    title: "Design of Multi-Input Multi-Output Non-linear Model Predictive Control for Main Steam Temperature of Super Critical Boiler",
    publisher: "Science Publishing Group",
    date: "Feb 2024",
    link: "https://www.sciencepublishinggroup.com/article/10.11648/j.ijmea.20241201.13"
  }
];

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding" ref={ref}>
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Education & <span className="text-gradient">Achievements</span>
          </h2>
        </motion.div>

        {/* Education */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 glass rounded-2xl hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-1">{edu.degree}</h3>
              <p className="text-primary mb-2">{edu.institution}</p>
              <p className="text-sm text-muted-foreground mb-3">
                {edu.location} • {edu.period}
              </p>
              <div className="flex items-center gap-2 text-sm">
                <Award className="w-4 h-4 text-primary" />
                <span className="text-foreground/90">{edu.achievement}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications & Publications */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-6 glass rounded-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl">Certifications</h3>
            </div>
            {certifications.map((cert) => (
              <div key={cert.title}>
                <h4 className="font-medium mb-1">{cert.title}</h4>
                <p className="text-sm text-primary mb-1">{cert.issuer}</p>
                <p className="text-xs text-muted-foreground mb-2">{cert.period}</p>
                <p className="text-sm text-muted-foreground">{cert.description}</p>
              </div>
            ))}
          </motion.div>

          {/* Publications */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-6 glass rounded-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl">Publications</h3>
            </div>
            {publications.map((pub) => (
              <div key={pub.title}>
                <h4 className="font-medium mb-1 leading-snug">{pub.title}</h4>
                <p className="text-sm text-primary mb-1">{pub.publisher}</p>
                <p className="text-xs text-muted-foreground mb-3">{pub.date}</p>
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                >
                  View Publication
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;