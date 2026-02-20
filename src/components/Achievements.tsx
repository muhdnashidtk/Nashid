import { Award, Calendar, Users, TrendingUp, Briefcase, GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const Achievements = () => {
  const experiences = [
    {
      company: 'High School',
      position: 'Graduate',
      period: '2024',
      description: 'Completed high school education while developing passion for cybersecurity and taking online courses to build foundation knowledge.',
      technologies: ['Academic Excellence', 'Self-Directed Learning', 'Research Skills'],
      type: 'Education',
    },
    {
      company: 'Corvinus University of Budapest',
      position: 'Foundation Year Student',
      period: '2024',
      description: 'Completed foundation year program to prepare for university-level studies, developing academic and research skills.',
      technologies: ['Academic Writing', 'Research Methods', 'Critical Thinking'],
      type: 'Education',
    },
    {
      company: 'Online Learning Platforms',
      position: 'Student',
      period: '2023 - 2024',
      description: 'Completed multiple courses in cybersecurity, data science, AI, and programming from Code Academy, IBM, Google, and University of Pennsylvania.',
      technologies: ['Python', 'Cybersecurity', 'Data Science', 'AI'],
      type: 'Personal',
    },
  ];

  const achievements = [
    {
      title: 'Cybersecurity Foundation Courses',
      organization: 'Code Academy',
      year: '2024',
      description: 'Completed Fundamental of Cyber Security and Ethical Hacking courses, building strong foundation in security principles.',
      icon: GraduationCap,
    },
    {
      title: 'Data Science & AI Specialization',
      organization: 'IBM & University of Pennsylvania',
      year: '2024',
      description: 'Completed multiple courses in data science fundamentals, AI applications in finance/marketing, and exploratory data analysis for ML.',
      icon: Award,
    },
    {
      title: 'Programming Proficiency',
      organization: 'Code Academy',
      year: '2024',
      description: 'Gained proficiency in Python programming through comprehensive coursework and practical applications.',
      icon: TrendingUp,
    },
    {
      title: 'Digital Marketing Certification',
      organization: 'Google',
      year: '2024',
      description: 'Completed Google Digital Marketing course, expanding knowledge in digital business and marketing strategies.',
      icon: Users,
    },
  ];

  const stats = [
    { label: 'Age', value: '21', icon: Briefcase },
    { label: 'Completed Courses', value: '7', icon: TrendingUp },
    { label: 'Years of Interest', value: '8+', icon: Users },
    { label: 'Study Hours', value: '500+', icon: Award },
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

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Education':
        return 'bg-red-500/10 text-red-500 border-red-500/20';
      case 'Personal':
        return 'bg-red-600/10 text-red-600 border-red-600/20';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section id="experience" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-card/10 to-background"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center space-x-2 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full px-6 py-3 mb-8">
            <Briefcase className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground">Academic Journey</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            My Educational Path
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At 21, I've completed my high school education and foundation year at Corvinus University, 
            while pursuing specialized courses in cybersecurity, data science, and AI to build my expertise.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <Card className="p-6 bg-card/30 backdrop-blur-sm border-border/50 hover:border-primary/20 transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex justify-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="text-3xl mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl mb-12 text-center text-foreground">Educational Background</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <Card className="bg-card/30 backdrop-blur-sm border-border/50 hover:border-primary/20 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h4 className="text-xl text-foreground mb-1">{exp.position}</h4>
                        <div className="flex items-center space-x-3">
                          <span className="text-primary">{exp.company}</span>
                          <Badge className={`${getTypeColor(exp.type)} border text-xs`}>
                            {exp.type}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex items-center text-muted-foreground mt-2 lg:mt-0">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-background/50 border border-border/50 rounded-full text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-3xl mb-12 text-center text-foreground">Key Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full bg-card/30 backdrop-blur-sm border-border/50 hover:border-primary/20 transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-lg text-foreground">{achievement.title}</h4>
                            <span className="text-sm text-primary">{achievement.year}</span>
                          </div>
                          <p className="text-muted-foreground text-sm mb-3">{achievement.organization}</p>
                          <p className="text-muted-foreground leading-relaxed">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;