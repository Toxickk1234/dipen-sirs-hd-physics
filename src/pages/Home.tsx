import { motion } from 'motion/react';
import { ArrowRight, Star, Send, RefreshCw, Mic, Target, CheckCircle2, Users, Award, Clock, Shield, Sparkles, Linkedin, Twitter, Mail, Trophy, Medal } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { CTA } from '../components/CTA';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <>
      <div className="bg-[#4D718D] text-white relative overflow-hidden">
        <Navbar theme="dark" />
        <div className="max-w-7xl mx-auto px-6 pt-8 md:pt-12 pb-24 md:pb-32 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-xl text-center md:text-left mx-auto md:mx-0"
            >
              <div className="inline-block px-4 py-1.5 rounded-full border border-white/30 text-sm mb-6 font-medium">
                Physics Coaching Institute
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] mb-6 tracking-tight">
                Turning Physics <span className="italic font-serif font-light text-white/90">Fear</span> into Physics <span className="italic font-serif font-light text-white/90">Fun!</span>
              </h1>
              <p className="text-base sm:text-lg opacity-90 mb-8 max-w-md mx-auto md:mx-0 leading-relaxed">
                Struggling with Physics? I help students master concepts, solve complex problems, and build confidence to easily crack board exams and competitive entrance tests.
              </p>
              <Link to="/about" className="inline-flex items-center gap-3 bg-[#14293E] hover:bg-[#0D1926] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium transition-colors group mx-auto md:mx-0">
                Read My Full Story
                <div className="w-6 h-6 bg-white text-[#14293E] rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>

              <div className="mt-16 md:mt-20">
                <p className="text-xs font-bold tracking-widest uppercase opacity-70 mb-6 text-center md:text-left">Preparing students for:</p>
                <div className="flex items-center justify-center md:justify-start gap-6 sm:gap-8 opacity-80 flex-wrap">
                  <span className="font-bold flex items-center gap-2 text-sm sm:text-base"><div className="w-3 h-3 sm:w-4 sm:h-4 bg-amber-400 rounded-sm"></div> JEE Mains & Advanced</span>
                  <span className="font-bold flex items-center gap-2 text-sm sm:text-base"><div className="w-3 h-3 sm:w-4 sm:h-4 bg-emerald-400 rounded-full"></div> NEET</span>
                  <span className="font-bold flex items-center gap-2 text-sm sm:text-base"><div className="w-3 h-3 sm:w-4 sm:h-4 bg-sky-400 rounded-sm"></div> Board Exams</span>
                  <span className="font-bold flex items-center gap-2 text-sm sm:text-base"><div className="w-3 h-3 sm:w-4 sm:h-4 bg-rose-400 rounded-full"></div> Physics Olympiad</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[400px] sm:h-[500px] md:h-[600px] w-full max-w-md mx-auto md:max-w-none mt-8 md:mt-0"
            >
              <div className="absolute bottom-0 right-0 w-[90%] md:w-[90%] h-full z-10 mx-auto left-0 md:left-auto" style={{ maskImage: 'linear-gradient(to top, transparent 0%, black 20%)', WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 20%)' }}>
                 <img 
                   src="/hero-master.jpg" 
                   alt="Er. Dipen Sir" 
                   className="w-full h-full object-cover object-top rounded-b-none rounded-t-[40px]" 
                 />
              </div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute bottom-1/3 right-0 md:-right-6 bg-white/10 backdrop-blur-md border border-white/20 p-3 sm:p-4 rounded-2xl z-20 flex items-center gap-3 sm:gap-4 shadow-xl scale-90 sm:scale-100 origin-right"
              >
                <div className="flex -space-x-2">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop" className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-[#4D718D] object-cover" />
                  <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop" className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-[#4D718D] object-cover" />
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&auto=format&fit=crop" className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-[#4D718D] object-cover" />
                </div>
                <p className="text-xs sm:text-sm font-medium leading-tight max-w-[100px] sm:max-w-[120px]">4.9/5 Rating on Google Maps</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute bottom-8 sm:bottom-12 left-0 md:-left-12 bg-white/10 backdrop-blur-md border border-white/20 p-3 sm:p-4 rounded-2xl z-20 shadow-xl max-w-[200px] sm:max-w-[240px] scale-90 sm:scale-100 origin-left"
              >
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-full flex items-center justify-center mb-2 sm:mb-3">
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 text-white fill-white" />
                </div>
                <p className="text-xs sm:text-sm font-medium leading-tight">151+ Reviews from satisfied and successful students.</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-gradient-to-b md:bg-gradient-to-l from-black/10 to-transparent pointer-events-none"></div>
      </div>

      <section className="py-16 md:py-24 px-6 bg-[#EBE0D2]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 mb-4 tracking-tight">Can you relate these?</h2>
            <p className="text-stone-500 text-base sm:text-lg">You're not alone. If any of these sound familiar, physics coaching can help.</p>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: <Send className="w-5 h-5 text-stone-800" />,
                title: "You're tired of solving problems and making silly mistakes",
                desc: "You've solved dozens of numericals, yet your test scores remain stagnant. You're beginning to wonder what you're doing wrong — or if you lack the aptitude."
              },
              {
                icon: <RefreshCw className="w-5 h-5 text-stone-800" />,
                title: "You feel lost with complex new concepts",
                desc: "Whether you're starting rotational mechanics or electrostatics, everything feels overwhelming. You're unsure how to visualize the formulas or where to even begin."
              },
              {
                icon: <Mic className="w-5 h-5 text-stone-800" />,
                title: "You freeze during interviews and forget what to say",
                desc: "You know you're capable — but interviews make you nervous. You stumble over words, forget key points, and walk away feeling frustrated."
              },
              {
                icon: <Target className="w-5 h-5 text-stone-800" />,
                title: "You know you deserve better — but don't know where to start",
                desc: "You're stuck in a job that drains you, or you're unemployed and feeling unsure. You crave direction, strategy, and someone to help you take the next step confidently."
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 sm:p-8 md:p-10 rounded-3xl text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  {item.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-stone-900 leading-snug">{item.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center mb-16 md:mb-20">
            {/* Left: Big statement */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#4D718D]/10 text-[#4D718D] text-sm font-semibold mb-6">
                <Sparkles className="w-3.5 h-3.5" /> Why Choose Us
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 mb-6 tracking-tight leading-[1.1]">
                Coaching That's Built Around <span className="italic font-serif font-light text-stone-500">Your Success</span>
              </h2>
              <p className="text-stone-500 text-lg leading-relaxed mb-10">
                Unlike generic coaching advice, every strategy I create is tailor-made for your unique goals, syllabus, and learning pace. Here's why thousands of students trust me with their prep.
              </p>
              <div className="flex flex-wrap gap-6 sm:gap-10">
                <div>
                  <p className="text-4xl sm:text-5xl font-bold text-stone-900">10+</p>
                  <p className="text-stone-500 text-sm font-medium mt-1">Years Experience</p>
                </div>
                <div>
                  <p className="text-4xl sm:text-5xl font-bold text-stone-900">151+</p>
                  <p className="text-stone-500 text-sm font-medium mt-1">5-Star Reviews</p>
                </div>
                <div>
                  <p className="text-4xl sm:text-5xl font-bold text-stone-900">4.9/5</p>
                  <p className="text-stone-500 text-sm font-medium mt-1">Google Maps Rating</p>
                </div>
              </div>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden aspect-[4/5] w-full shadow-xl">
                <img
                  src="/why-choose-us.jpg"
                  alt="Physics coaching session"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -left-6 bg-[#14293E] text-white p-5 rounded-2xl shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#4D718D] rounded-xl flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-sm">Forbes Featured</p>
                    <p className="text-white/60 text-xs">Top Physics Faculty 2024</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Feature cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: <CheckCircle2 className="w-6 h-6 text-[#4D718D]" />,
                title: 'Proven Framework',
                desc: 'My proprietary HD Physics Masterplan has helped 10,000+ students land top ranks in IIT JEE, NEET, and Boards.',
              },
              {
                icon: <Users className="w-6 h-6 text-[#4D718D]" />,
                title: '1-on-1 Personalized Coaching',
                desc: 'No massive group batches where you get ignored. Every session is tailored to your specific exam goals and weak areas.',
              },
              {
                icon: <Clock className="w-6 h-6 text-[#4D718D]" />,
                title: 'Fast Results',
                desc: 'Most clients land their first interview within 3 weeks. My strategies are battle-tested and designed for speed.',
              },
              {
                icon: <Shield className="w-6 h-6 text-[#4D718D]" />,
                title: 'Money-Back Guarantee',
                desc: 'Not satisfied after your first session? I\'ll refund 100% of your payment. No questions asked, no risk for you.',
              },
              {
                icon: <Star className="w-6 h-6 text-[#4D718D]" />,
                title: '4.9/5 Client Rating',
                desc: 'Across 10,000+ coaching hours, clients consistently rate their experience at 4.9 out of 5 stars.',
              },
              {
                icon: <Sparkles className="w-6 h-6 text-[#4D718D]" />,
                title: 'Ongoing Support',
                desc: 'Coaching doesn\'t end when the session does. Get unlimited email support so you never feel stuck between sessions.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-[#F4ECE1] rounded-3xl p-7 sm:p-8 hover:bg-stone-100 transition-colors group border border-stone-100"
              >
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-5 shadow-sm group-hover:shadow-md transition-shadow">
                  {item.icon}
                </div>
                <h3 className="font-bold text-stone-900 mb-2 text-lg">{item.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Bottom trust bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-[#14293E] rounded-3xl p-8 sm:p-10 md:p-12 grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center text-white"
          >
            {[
              { value: '4.9/5', label: 'Average rating' },
              { value: '150+', label: 'Happy students' },
              { value: '10+', label: 'Years coaching' },
              { value: '100%', label: 'Syllabus coverage' },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-3xl sm:text-4xl font-bold mb-1 text-[#4D718D]">{stat.value}</p>
                <p className="text-white/60 text-sm">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* Meet Our Toppers */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#4D718D]/10 text-[#4D718D] text-sm font-semibold mb-6">
              <Trophy className="w-3.5 h-3.5" /> Inspiring Success Stories
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 mb-6 tracking-tight leading-[1.1]">
              Meet Our <span className="italic font-serif font-light text-stone-500">Toppers</span>
            </h2>
            <p className="text-stone-500 text-lg max-w-2xl mx-auto leading-relaxed">
              These incredible professionals not only landed their dream roles but also set new benchmarks for success in their industries.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Priya Sharma",
                achievement: "Product Manager @ Google",
                prev: "From QA Engineer",
                quote: "The personalized coaching gave me the exact framework to tackle behavioral rounds. My dream came true!",
                img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
              },
              {
                name: "David Wright",
                achievement: "Senior VPE @ Stripe",
                prev: "From Engineering Manager",
                quote: "The executive positioning strategies were a game changer. Landed an offer with a 50% salary bump.",
                img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
              },
              {
                name: "Anita Bose",
                achievement: "UX Director @ Airbnb",
                prev: "From Senior Designer",
                quote: "My portfolio and interview narratives were completely transformed. I couldn't be happier.",
                img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
              },
              {
                name: "Carlos Mendez",
                achievement: "Data Scientist @ Meta",
                prev: "From Analyst Level",
                quote: "They broke down complex technical interview fears into actionable steps. Truly top tier coaching.",
                img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
              }
            ].map((topper, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#F4ECE1] rounded-3xl p-6 text-center border border-stone-200 relative group overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#4D718D]/30 to-transparent -mr-10 -mt-10 rounded-full transition-transform group-hover:scale-150 duration-500" />
                <div className="w-24 h-24 mx-auto mb-5 rounded-full p-1 bg-gradient-to-br from-yellow-400 to-[#4D718D] shadow-lg">
                  <img src={topper.img} alt={topper.name} className="w-full h-full object-cover rounded-full border-2 border-white" />
                </div>
                <div className="flex justify-center mb-3">
                  <Medal className="w-5 h-5 text-yellow-500" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-1">{topper.name}</h3>
                <p className="text-[#4D718D] font-semibold text-sm mb-2">{topper.achievement}</p>
                <p className="text-stone-400 text-xs uppercase tracking-wider mb-4">{topper.prev}</p>
                <p className="text-stone-500 text-sm italic leading-relaxed">"{topper.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Teachers */}
      <section className="py-16 md:py-24 px-6 bg-[#EBE0D2]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#4D718D]/10 text-[#4D718D] text-sm font-semibold mb-6">
              Expert Guidance
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 mb-6 tracking-tight leading-[1.1]">
              Meet Our <span className="italic font-serif font-light text-stone-500">Expert Coaches</span>
            </h2>
            <p className="text-stone-500 text-lg max-w-2xl mx-auto leading-relaxed">
              Our team consists of veteran educators from top institutes, dedicated to helping you navigate your tough target exams with confidence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {[
              {
                name: "Er. Dipen Sir",
                role: "Founder & Lead Physics Faculty",
                specialty: "JEE & NEET Physics Strategy",
                desc: "Expert Physics faculty with years of experience. Known for his tactical approach to cracking competitive exams.",
                img: "/hero-master.jpg",
              },
              {
                name: "Sarah Jenkins",
                role: "Senior Strategist",
                specialty: "Conceptual Mastery",
                desc: "Expert in deep conceptual breakdown, specializing in high-stakes exam preparation and clarity.",
                img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
              },
              {
                name: "Marcus Chen",
                role: "Executive Coach",
                specialty: "Leadership & Negotiation",
                desc: "Specializes in helping senior leaders transition into C-suite roles and master salary negotiation.",
                img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
              }
            ].map((coach, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-[40px] p-4 pb-8 shadow-sm border border-stone-100 group hover:shadow-xl transition-all duration-500"
              >
                <div className="aspect-[4/5] rounded-[32px] overflow-hidden mb-6 relative">
                  <img src={coach.img} alt={coach.name} className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex gap-4">
                      <a href="#" className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white transition-colors">
                        <Linkedin className="w-4 h-4 text-white hover:text-stone-900" />
                      </a>
                      <a href="#" className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white transition-colors">
                        <Twitter className="w-4 h-4 text-white hover:text-stone-900" />
                      </a>
                      <a href="#" className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white transition-colors">
                        <Mail className="w-4 h-4 text-white hover:text-stone-900" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="px-4 text-center">
                  <div className="text-[#4D718D] text-xs font-bold tracking-widest uppercase mb-2">{coach.specialty}</div>
                  <h3 className="text-2xl font-bold text-stone-900 mb-1">{coach.name}</h3>
                  <p className="text-stone-400 text-sm font-medium mb-4">{coach.role}</p>
                  <p className="text-stone-500 text-sm leading-relaxed mb-6 italic">"{coach.desc}"</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
};
