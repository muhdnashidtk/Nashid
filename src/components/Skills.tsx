import { Code, Palette, Smartphone, Database, Globe, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Cybersecurity Courses',
      icon: Code,
      skills: ['Fundamental of Cyber Security (Code Academy)', 'Ethical Hacking (Code Academy)'],
      color: 'from-red-600 to-red-500',
    },
    {
      title: 'Data Science & AI',
      icon: Zap,
      skills: ['Fundamental of Data Science (IBM)', 'AI Applications in Marketing and Finance (University of Pennsylvania)', 'Exploratory Data Analysis for ML (IBM)'],
      color: 'from-red-500 to-red-400',
    },
    {
      title: 'Programming Languages',
      icon: Database,
      skills: ['Python (Code Academy)', 'JavaScript', 'C/C++', 'Go', 'PowerShell', 'SQL', 'R'],
      color: 'from-red-700 to-red-600',
    },
    {
      title: 'Systems & Tools',
      icon: Globe,
      skills: ['Linux', 'Digital Marketing (Google Course)'],
      color: 'from-red-800 to-red-700',
    },
    {
      title: 'Education',
      icon: Smartphone,
      skills: ['High School Graduate', 'Foundation Year - Corvinus University Budapest'],
      color: 'from-red-600 to-red-500',
    },
    {
      title: 'Languages',
      icon: Palette,
      skills: ['English (C1 Level)', 'Turkish (C2 Level)', 'Azerbaijani (C2 Level)'],
      color: 'from-red-500 to-red-400',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-card/20 to-background"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center space-x-2 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full px-6 py-3 mb-8">
            <Code className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground">Cybersecurity Arsenal</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            Education & Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My educational journey and completed courses in cybersecurity, 
            data science, and programming from leading institutions and platforms.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="group h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/20 transition-all duration-500 overflow-hidden">
                  <CardContent className="p-8">
                    <div className="relative mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <div className={`absolute -inset-2 bg-gradient-to-br ${category.color} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                    </div>
                    
                    <h3 className="text-xl mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                      {category.title}
                    </h3>
                    
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                          className="px-3 py-1 bg-background/50 border border-border/50 rounded-full text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all duration-300 cursor-default"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-32"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: 'Completed Courses', value: '7' },
              { label: 'Years of Interest', value: '8+' },
              { label: 'Age', value: '21' },
              { label: 'Study Hours', value: '500+' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;