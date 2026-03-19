import { motion } from 'motion/react';
import { Target, CheckCircle2, Mic, Send, Star, ArrowRight, Clock, Users, DollarSign } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { CTA } from '../components/CTA';
import { Link } from 'react-router-dom';

const packages = [
  {
    name: 'Class 11 & 12 Boards',
    price: '₹2,500/mo',
    duration: 'Year-long Batches',
    desc: 'Perfect for building a strong foundation and scoring 95%+ in school or board examinations.',
    features: [
      'NCERT focused curriculum',
      'Chapter-wise mock test series',
      'Detailed study material',
      'Weekly doubt clearing',
    ],
    highlight: false,
  },
  {
    name: 'NEET Preparatory',
    price: '₹4,000/mo',
    duration: '1 & 2 Year Programs',
    desc: 'The most popular package. Complete end-to-end physics strategy for medical aspirants.',
    features: [
      'Boards + NEET syllabus integration',
      'Short-cut techniques for numericals',
      'Extensive MCQ practice modules',
      'Previous year question analysis',
      'All India Test Series inclusion',
      'Personalized performance tracking',
    ],
    highlight: true,
  },
  {
    name: 'JEE Mains & Advanced',
    price: '₹5,000/mo',
    duration: 'Intensive Coaching',
    desc: 'For highly driven engineering aspirants aiming for top IITs and NITs.',
    features: [
      'Advanced problem solving strategies',
      'HC Verma & Irodov discussions',
      'Speed and accuracy enhancement',
      'Targeted mock exams (CBT format)',
      '1-on-1 mentorship sessions',
      'Priority doubt resolution',
    ],
    highlight: false,
  },
];

const services = [
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Concept Clarity',
    desc: 'Physics is all about understanding the core. We focus heavily on visualization and logical derivation to ensure you never have to blindly memorize a formula.',
    highlight: 'Perfect for: students struggling with basics or abstract concepts.',
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop',
  },
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    title: 'Board Exam Preparation',
    desc: 'Step-by-step guidance on how to write subjective answers perfectly. We review your mock papers to ensure you score 95%+ in Class 12 Boards.',
    highlight: 'Great for: maximizing school and board percentages.',
    img: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=800&auto=format&fit=crop',
  },
  {
    icon: <Mic className="w-6 h-6" />,
    title: 'Competitive Exam Strategy',
    desc: 'Live practice sessions targeting NEET and JEE. We work through shortcut techniques, time-management frameworks, and how to handle tricky numericals.',
    highlight: 'Ideal for: aspirants needing a competitive edge in physics calculation speed.',
    img: 'https://images.unsplash.com/photo-1573497491765-dccce02b29df?q=80&w=800&auto=format&fit=crop',
  },
  {
    icon: <Send className="w-6 h-6" />,
    title: 'Doubt Resolution',
    desc: 'Stop struggling with the same problems. We offer dedicated doubt-clearing sessions to ensure no conceptual gap is left behind before the exam day.',
    highlight: 'For: those who hate being stuck on a numerical.',
    img: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=800&auto=format&fit=crop',
  },
];

const outcomes = [
  { icon: <Clock className="w-5 h-5 text-[#4D718D]" />, stat: '90+', label: 'Students scoring 95%+' },
  { icon: <Users className="w-5 h-5 text-[#4D718D]" />, stat: '10,000+', label: 'Students taught' },
  { icon: <DollarSign className="w-5 h-5 text-[#4D718D]" />, stat: '99.9', label: 'Top JEE Percentile' },
  { icon: <Star className="w-5 h-5 text-[#4D718D]" />, stat: '4.9/5', label: 'Average student rating' },
];

export const Services = () => {
  return (
    <>
      {/* Hero */}
      <div className="bg-[#14293E] text-white relative overflow-hidden">
        <Navbar theme="dark" />
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <div className="inline-block px-4 py-1.5 rounded-full border border-white/20 text-sm font-medium mb-8">
                Services & Pricing
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] mb-6 tracking-tight">
                Coaching That <br /><span className="italic font-serif font-light text-white/80">Gets Results</span>
              </h1>
              <p className="text-lg opacity-80 max-w-lg leading-relaxed mb-10">
                Every service is built around one goal: getting you to your dream engineering or medical college with an elite score in Physics.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-white text-[#14293E] hover:bg-stone-100 px-7 py-3.5 rounded-full font-semibold transition-colors group"
              >
                Book a Free Demo Class
                <div className="w-5 h-5 bg-[#14293E] text-white rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden aspect-square"
            >
              <img
                src="/hero-master.jpg"
                alt="Coaching Session"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Outcomes */}
      <section className="py-12 px-6 bg-[#4D718D] text-white">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {outcomes.map((o, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="flex justify-center mb-3 opacity-80">{o.icon}</div>
              <p className="text-3xl font-bold mb-1">{o.stat}</p>
              <p className="text-white/70 text-sm">{o.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto space-y-20">
        {services.map((svc, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? 'md:[&>*:first-child]:order-2' : ''}`}
          >
            <div className="rounded-3xl overflow-hidden aspect-[4/3]">
              <img src={svc.img} alt={svc.title} className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="w-12 h-12 bg-stone-100 rounded-2xl flex items-center justify-center mb-6 text-stone-800">
                {svc.icon}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4 tracking-tight">{svc.title}</h2>
              <p className="text-stone-600 text-lg leading-relaxed mb-6">{svc.desc}</p>
              <p className="text-sm text-stone-500 flex items-start gap-2">
                <Star className="w-4 h-4 mt-0.5 shrink-0 text-[#4D718D]" /> {svc.highlight}
              </p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-24 px-6 bg-[#EBE0D2]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4 tracking-tight">Transparent Pricing</h2>
            <p className="text-stone-500 text-lg max-w-2xl mx-auto">Choose the batch that matches where you are in your educational journey. All packages include a free 20-min doubt-clearing or trial class.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {packages.map((pkg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-3xl p-8 md:p-10 flex flex-col ${pkg.highlight ? 'bg-[#14293E] text-white shadow-2xl scale-105' : 'bg-white text-stone-900 shadow-sm border border-stone-100'}`}
              >
                {pkg.highlight && (
                  <div className="inline-block px-3 py-1 rounded-full bg-[#4D718D] text-white text-xs font-bold mb-6 self-start">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-1">{pkg.name}</h3>
                <p className={`text-sm mb-4 ${pkg.highlight ? 'text-white/60' : 'text-stone-500'}`}>{pkg.duration}</p>
                <p className="text-5xl font-bold mb-6">{pkg.price}</p>
                <p className={`text-sm leading-relaxed mb-8 ${pkg.highlight ? 'text-white/70' : 'text-stone-500'}`}>{pkg.desc}</p>
                <ul className="space-y-3 mb-10 flex-grow">
                  {pkg.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${pkg.highlight ? 'text-[#4D718D]' : 'text-stone-400'}`} />
                      <span className={pkg.highlight ? 'text-white/80' : 'text-stone-600'}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`mt-auto text-center py-3.5 px-6 rounded-full font-semibold transition-colors ${pkg.highlight ? 'bg-white text-[#14293E] hover:bg-stone-100' : 'border border-stone-300 hover:bg-stone-100 text-stone-900'}`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
};
