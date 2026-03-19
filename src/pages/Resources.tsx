import { useState } from 'react';
import { motion } from 'motion/react';
import { Navbar } from '../components/Navbar';
import { CTA } from '../components/CTA';
import { Send, Target, CheckCircle2, BookOpen, Download, Play, ChevronRight, Mail } from 'lucide-react';

const freeResources = [
  {
    icon: <Send className="w-6 h-6 text-stone-700" />,
    title: 'The Ultimate Formula Sheet',
    desc: 'A complete compilation of all Class 11 and 12 physics formulas spanning Mechanics to Modern Physics.',
    badge: 'PDF Sheet',
    tag: 'Most Downloaded',
  },
  {
    icon: <Target className="w-6 h-6 text-stone-700" />,
    title: 'JEE Mains Mock Test',
    desc: 'A full-length CBT format mock test with detailed video solutions for every numerical.',
    badge: 'Mock Test',
    tag: 'Fan Favourite',
  },
  {
    icon: <CheckCircle2 className="w-6 h-6 text-stone-700" />,
    title: 'Kinematics Mastery Guide',
    desc: 'Step-by-step instructions to visualize and solve complex 2D motion and projectile problems.',
    badge: 'Guide',
    tag: null,
  },
  {
    icon: <BookOpen className="w-6 h-6 text-stone-700" />,
    title: 'Top 50 Conceptual Questions',
    desc: 'The complete list of tricky theoretical statements frequently asked in NEET and JEE Advanced.',
    badge: 'Question Bank',
    tag: null,
  },
  {
    icon: <Mail className="w-6 h-6 text-stone-700" />,
    title: 'Board Exam Revision Notes',
    desc: 'Concise, NCERT-aligned revision notes to help you quickly review chapters before your board exams.',
    badge: 'PDF Notes',
    tag: 'New',
  },
  {
    icon: <Target className="w-6 h-6 text-stone-700" />,
    title: 'Time Management Strategy',
    desc: 'Proven frameworks to balance your school curriculum while preparing for competitive exams.',
    badge: 'Strategy PDF',
    tag: null,
  },
];

const blogPosts = [
  {
    title: '7 Silly Mistakes That Are Costing You Marks in Physics',
    category: 'Exam Strategy',
    time: '5 min read',
    img: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=600&auto=format&fit=crop',
    desc: 'These common errors in signs, units, and assumptions are dropping your score. Here\'s how to fix them.',
  },
  {
    title: 'How to Master Rotational Mechanics for JEE Advanced',
    category: 'Concepts',
    time: '8 min read',
    img: 'https://images.unsplash.com/photo-1573497491765-dccce02b29df?q=80&w=600&auto=format&fit=crop',
    desc: 'Learn the exact framework top rankers use to structure their approach to complex torque and moment of inertia problems.',
  },
  {
    title: 'Balancing Boards and Competitive Coaching Effectively',
    category: 'Productivity',
    time: '6 min read',
    img: 'https://images.unsplash.com/photo-1611944212129-29977ae1398c?q=80&w=600&auto=format&fit=crop',
    desc: 'A genuine, realistic approach to managing your time across schools, tuitions, and self-study.',
  },
];

const videos = [
  { title: 'How to Learn Ray Optics in 30 Minutes', duration: '28:14', thumbnail: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=600&auto=format&fit=crop' },
  { title: 'Ace Your Next Physics Mock: The Complete Framework', duration: '42:07', thumbnail: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=600&auto=format&fit=crop' },
  { title: 'Solving HC Verma: Live Doubt Session', duration: '35:50', thumbnail: 'https://images.unsplash.com/photo-1611944212129-29977ae1398c?q=80&w=600&auto=format&fit=crop' },
];

export const Resources = () => {
  const [email, setEmail] = useState('');

  return (
    <>
      {/* Hero */}
      <div className="bg-[#4D718D] text-white relative overflow-hidden">
        <Navbar theme="dark" />
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-block px-4 py-1.5 rounded-full border border-white/30 text-sm font-medium mb-8">
              Free Physics Resources
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] mb-6 tracking-tight">
              Level Up Your <br /><span className="italic font-serif font-light text-white/85">Physics Prep — For Free</span>
            </h1>
            <p className="text-lg sm:text-xl opacity-85 max-w-2xl mx-auto leading-relaxed">
              Download guides, formula sheets, and mock tests used by thousands of students to learn concepts faster, solve quicker, and score higher.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#F4ECE1] to-transparent pointer-events-none" />
      </div>

      {/* Free Downloads Grid */}
      <section className="py-16 md:py-24 px-6 bg-[#F4ECE1]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4 tracking-tight">Free Downloads</h2>
            <p className="text-stone-500 text-lg">No email required. Just click and download.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {freeResources.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 flex flex-col group hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 bg-stone-100 rounded-2xl flex items-center justify-center group-hover:bg-[#4D718D]/10 transition-colors">
                    {item.icon}
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className="text-xs font-bold bg-stone-100 text-stone-600 px-3 py-1 rounded-full">{item.badge}</span>
                    {item.tag && (
                      <span className="text-xs font-bold bg-[#4D718D]/15 text-[#4D718D] px-3 py-1 rounded-full">{item.tag}</span>
                    )}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-stone-900">{item.title}</h3>
                <p className="text-stone-500 mb-8 flex-grow text-sm leading-relaxed">{item.desc}</p>
                <button className="w-full flex items-center justify-center gap-2 py-3 rounded-full border border-stone-200 hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all font-medium text-stone-900 text-sm">
                  <Download className="w-4 h-4" />
                  Download Free
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-20 px-6 bg-[#14293E] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Get Weekly Study Tips</h2>
            <p className="text-white/70 text-lg mb-10">
              Join 14,000+ students. Every Tuesday, I send one actionable physics concept or trick you can use this week. No fluff.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-grow px-5 py-3.5 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#4D718D] text-sm"
              />
              <button className="px-6 py-3.5 rounded-full bg-[#4D718D] hover:bg-[#3C5C75] text-white font-semibold transition-colors flex items-center justify-center gap-2 whitespace-nowrap text-sm">
                Subscribe Free <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <p className="text-white/30 text-xs mt-4">No spam. Unsubscribe anytime. 14,000+ subscribers.</p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 md:py-24 px-6 bg-[#EBE0D2]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-end justify-between flex-wrap gap-6 mb-16"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4 tracking-tight">Latest Articles</h2>
              <p className="text-stone-500 text-lg">In-depth physics concepts and strategies you can master today.</p>
            </div>
            <button className="text-stone-900 font-medium border border-stone-300 px-6 py-2.5 rounded-full hover:bg-stone-100 transition-colors text-sm">
              View All Articles
            </button>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-100 group cursor-pointer hover:shadow-md transition-shadow"
              >
                <div className="aspect-video overflow-hidden">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-bold bg-stone-100 text-stone-700 px-3 py-1 rounded-full">{post.category}</span>
                    <span className="text-xs text-stone-400">{post.time}</span>
                  </div>
                  <h3 className="text-lg font-bold text-stone-900 mb-3 leading-snug">{post.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{post.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Video Masterclasses */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4 tracking-tight">Free Video Masterclasses</h2>
          <p className="text-stone-500 text-lg">In-depth training sessions, completely free.</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {videos.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative rounded-3xl overflow-hidden aspect-video mb-5 bg-stone-200">
                <img src={v.thumbnail} alt={v.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <Play className="w-5 h-5 text-stone-900 ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded-md font-mono">
                  {v.duration}
                </div>
              </div>
              <h3 className="font-bold text-stone-900 group-hover:text-[#4D718D] transition-colors leading-snug">{v.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
};
