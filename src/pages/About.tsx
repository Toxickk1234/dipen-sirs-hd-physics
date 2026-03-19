import { motion } from 'motion/react';
import { Star, ArrowRight, Award, Users, BookOpen, Heart } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { CTA } from '../components/CTA';
import { Link } from 'react-router-dom';

const stats = [
  { value: '10+', label: 'Years of Experience' },
  { value: '10K+', label: 'Students Taught' },
  { value: '150+', label: '5-Star Reviews' },
  { value: '10+', label: 'Target Exams' },
];

const milestones = [
  {
    year: '2014',
    title: 'Started Physics Teaching',
    desc: 'Began tutoring after seeing brilliant students lose out on top ranks simply because they feared physics.',
  },
  {
    year: '2016',
    title: 'Top Faculty Programs',
    desc: 'Recognized as a leading educator, developing curriculum and mock test patterns for premier coaching institutes.',
  },
  {
    year: '2020',
    title: 'Launched Hybrid Batches',
    desc: 'Expanded reach globally with structured online and offline hybrid classes serving students across the country.',
  },
  {
    year: '2023',
    title: 'Top AIR Ranks Produced',
    desc: 'Celebrated a landmark milestone: producing top All India Ranks in both NEET and JEE competitive exams.',
  },
];

const values = [
  {
    icon: <Heart className="w-6 h-6 text-[#4D718D]" />,
    title: 'Concepts First',
    desc: 'I meet every student where they are — focusing heavily on derivation and visual understanding, never blind memorization.',
  },
  {
    icon: <Award className="w-6 h-6 text-[#4D718D]" />,
    title: 'Result-Oriented',
    desc: 'Everything I do is tied to a tangible outcome: better clarity, faster numerical solving, and higher mock scores.',
  },
  {
    icon: <Users className="w-6 h-6 text-[#4D718D]" />,
    title: 'Individual Attention',
    desc: 'Every student gets a custom approach. I analyze your test mistakes to build a strategy around your unique weaknesses.',
  },
  {
    icon: <BookOpen className="w-6 h-6 text-[#4D718D]" />,
    title: 'Updated Syllabus Tracking',
    desc: 'The exam patterns evolve fast. I stay ahead of NTA changes so your preparation is always perfectly aligned.',
  },
];

export const About = () => {
  return (
    <>
      {/* Hero */}
      <div className="bg-[#4D718D] text-white relative overflow-hidden">
        <Navbar theme="dark" />
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white text-sm font-semibold mb-6 border border-white/20">
              <Star className="w-3 h-3" /> About HD Physics
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] mb-6 tracking-tight">
              I'm Your Physics <br /><span className="italic font-serif font-light text-white/85">Mentor</span>
            </h1>
            <p className="text-lg sm:text-xl opacity-85 max-w-2xl mx-auto leading-relaxed">
              With over 10 years helping students unlock their true potential, I specialize in simplifying complex concepts for Class 11/12 Boards, NEET, and JEE preparation.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#F4ECE1] to-transparent pointer-events-none" />
      </div>

      {/* Stats */}
      <section className="py-16 px-6 bg-[#F4ECE1]">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-4xl sm:text-5xl font-bold text-stone-900 mb-2">{s.value}</p>
              <p className="text-stone-500 text-sm font-medium">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-stone-900 tracking-tight">
              Why I Started Teaching Physics
            </h2>
            <p className="text-lg leading-relaxed text-stone-600 mb-6">
              After seeing hundreds of students struggle with rote memorization, I watched talented, hardworking kids get overwhelmed—not because they lacked intelligence, but because they didn't know how to visualize the concepts. That frustrated me deeply.
            </p>
            <p className="text-lg leading-relaxed text-stone-600 mb-6">
              I dedicated myself to teaching students exactly how to break down complex phenomena. I've since developed a proprietary framework — the <strong className="text-stone-900">HD Physics Methodology</strong> — used by thousands of students to score higher and build lasting confidence.
            </p>
            <p className="text-lg leading-relaxed text-stone-600 mb-10">
              My students have top ranks in the state and country. But what I'm most proud of is a simple message from a student saying "Physics finally makes sense!"
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-[#14293E] hover:bg-black text-white px-7 py-3.5 rounded-full font-medium transition-colors group"
            >
              Work With Me
              <div className="w-5 h-5 bg-white text-[#14293E] rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-3 h-3" />
              </div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden sticky top-24 shadow-2xl">
              <img
                src="/hero-master.jpg"
                alt="Er. Dipen Sir"
                className="w-full h-full object-cover grayscale-[20%]"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 px-6 bg-[#EBE0D2]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4 tracking-tight">My Journey</h2>
            <p className="text-stone-500 text-lg">Key milestones that shaped my coaching philosophy</p>
          </motion.div>
          <div className="relative pl-8 border-l-2 border-stone-200 space-y-12">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="absolute -left-[2.65rem] top-1 w-5 h-5 rounded-full bg-[#4D718D] border-4 border-[#EBE0D2]" />
                <span className="text-xs font-bold tracking-widest text-[#4D718D] uppercase mb-2 block">{m.year}</span>
                <h3 className="text-xl font-bold text-stone-900 mb-2">{m.title}</h3>
                <p className="text-stone-500 leading-relaxed">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4 tracking-tight">What I Stand For</h2>
          <p className="text-stone-500 text-lg max-w-2xl mx-auto">The principles that guide every session, every strategy, every client interaction.</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#EBE0D2] rounded-3xl p-8 hover:bg-stone-100 transition-colors"
            >
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                {v.icon}
              </div>
              <h3 className="font-bold text-stone-900 mb-3 text-lg">{v.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
};
