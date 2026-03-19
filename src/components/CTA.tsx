import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CTA = () => (
  <section className="py-16 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto">
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-[#4D718D] to-[#3C5C75] rounded-3xl md:rounded-[40px] p-8 sm:p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl"
    >
      <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent pointer-events-none"></div>
      
      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6 tracking-tight">Ready to Secure Your Target Rank?</h2>
        <p className="text-base sm:text-lg md:text-xl opacity-90 mb-8 md:mb-10 leading-relaxed">Join hundreds of students who've transformed their physics scores through expert coaching. Whether you're aiming for board tops or cracking the JEE/NEET, your breakthrough starts here.</p>
        <Link to="/contact" className="inline-flex items-center gap-3 bg-[#14293E] hover:bg-[#0D1926] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium transition-colors group text-base sm:text-lg">
          Book Your Free Demo Class
          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white text-[#14293E] rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
          </div>
        </Link>
      </div>
    </motion.div>
  </section>
);
