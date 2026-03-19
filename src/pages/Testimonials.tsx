import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { CTA } from '../components/CTA';

const testimonials = [
  {
    quote: "Such a great physics teacher! He doesn’t just teach formulas, but also teaches how to think logically",
    name: 'Shyanika Saha',
    role: 'Batch ramnagar-3',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop',
    company: 'Student',
    salaryIncrease: 'Board Exams',
  },
  {
    quote: "Because of him, I felt more confident in Physics! Thankyou so much sir",
    name: 'Agrajit Das',
    role: 'Batch Rmg 3',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop',
    company: 'Student',
    salaryIncrease: 'JEE Prep',
  },
  {
    quote: "Best physics teacher ever in agartala. Best option for neet and jee and boards exam With proper guidance and support of dipen sir everything is possible Thank you sir",
    name: 'Sreejeeb Dey S.K.M.S',
    role: 'Student',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop',
    company: 'Student',
    salaryIncrease: 'NEET Prep',
  },
];

const stats = [
  { value: '4.9', label: 'Average rating on Google Maps' },
  { value: '150+', label: '5-star student reviews' },
  { value: '100%', label: 'Commitment to student success' },
  { value: '10+', label: 'Years of excellence in coaching' },
];

const videoTestimonials = [
  {
    name: 'Rahul M.',
    role: 'JEE Advanced Ranker',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'Sneha P.',
    role: 'NEET Aspirant (Score: 680)',
    img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=300&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'Kabir L.',
    role: 'Class 12 Board Topper (98%)',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=600&auto=format&fit=crop',
  },
];

export const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <>
      {/* Hero */}
      <div className="bg-[#EBE0D2] relative overflow-hidden">
        <Navbar theme="light" />
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-stone-200 text-sm font-medium mb-8 text-stone-700 shadow-sm">
              <Star className="w-3 h-3 fill-stone-700 text-stone-700" /> Real Student Stories
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] mb-6 tracking-tight text-stone-900">
              Real Results from <br /><span className="italic font-serif font-light text-stone-500">Real Students</span>
            </h1>
            <p className="text-lg sm:text-xl text-stone-500 max-w-2xl mx-auto leading-relaxed">
              Students just like you have found clarity, confidence, and exam success through personalized physics coaching.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Featured Testimonial Carousel */}
      <section className="py-16 md:py-24 px-6 bg-[#14293E] text-white">
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              <Quote className="w-16 h-16 text-white/10 absolute -top-4 -left-2" />
              <div className="flex items-center gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#4D718D] text-[#4D718D]" />
                ))}
              </div>
              <p className="text-2xl sm:text-3xl md:text-4xl font-medium leading-relaxed mb-12 max-w-4xl">
                "{t.quote}"
              </p>
              <div className="flex items-center justify-between flex-wrap gap-6">
                <div className="flex items-center gap-4">
                  <img src={t.img} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-white/20" />
                  <div>
                    <p className="font-bold text-lg">{t.name}</p>
                    <p className="text-white/60 text-sm">{t.role}</p>
                  </div>
                </div>
                <div className="bg-white/10 border border-white/20 rounded-2xl px-6 py-3 text-center">
                  <p className="text-xl font-bold text-[#4D718D]">{t.salaryIncrease}</p>
                  <p className="text-white/60 text-xs mt-1">Focus</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center gap-4 mt-12">
            <button onClick={prev} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={next} className="w-12 h-12 rounded-full bg-[#4D718D] flex items-center justify-center hover:bg-[#3C5C75] transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
            <div className="flex gap-2 ml-4">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all ${i === current ? 'w-8 bg-white' : 'w-1.5 bg-white/30'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <p className="text-4xl font-bold text-stone-900 mb-2">{s.value}</p>
              <p className="text-stone-500 text-sm">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* All Testimonial Cards */}
      <section className="py-16 md:py-24 px-6 bg-[#EBE0D2]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4 tracking-tight">More Success Stories</h2>
            <p className="text-stone-500 text-lg">Every story is unique. Every transformation is real.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 flex flex-col"
              >
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-stone-800 text-stone-800" />
                  ))}
                </div>
                <p className="text-stone-700 leading-relaxed mb-8 flex-grow text-sm">"{item.quote}"</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src={item.img} alt={item.name} className="w-10 h-10 rounded-full object-cover" />
                    <div>
                      <p className="font-bold text-stone-900 text-sm">{item.name}</p>
                      <p className="text-stone-400 text-xs">{item.role.split('→')[0].trim()}</p>
                    </div>
                  </div>
                  <span className="text-[#4D718D] font-bold text-sm bg-[#4D718D]/10 px-3 py-1 rounded-full">{item.salaryIncrease}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Thumbnails Section */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4 tracking-tight">Watch Their Stories</h2>
          <p className="text-stone-500 text-lg">Hear directly from clients about their transformation.</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {videoTestimonials.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group rounded-3xl overflow-hidden aspect-video cursor-pointer bg-stone-800"
            >
              <img src={v.thumbnail} alt={v.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                  <div className="w-0 h-0 ml-1 border-t-[10px] border-b-[10px] border-l-[18px] border-t-transparent border-b-transparent border-l-stone-900" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex items-center gap-3">
                  <img src={v.img} alt={v.name} className="w-10 h-10 rounded-full object-cover border-2 border-white/30" />
                  <div>
                    <p className="text-white font-bold text-sm">{v.name}</p>
                    <p className="text-white/60 text-xs">{v.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
};
