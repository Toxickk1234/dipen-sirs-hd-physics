import { Instagram, Twitter, Linkedin, Atom } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => (
  <footer className="bg-[#F4ECE1] pt-12 md:pt-16 pb-8 px-6 border-t border-stone-200">
    <div className="max-w-7xl mx-auto">
      <div className="mb-12 md:mb-20">
        <p className="text-stone-500 font-medium mb-4 md:mb-6 text-base md:text-lg">Let's Work Together</p>
        <a href="mailto:contact@hdphysics.in" className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-stone-900 hover:opacity-70 transition-opacity break-all">
          contact@hdphysics.in
        </a>
      </div>
      
      <div className="flex flex-col md:flex-row items-start justify-between gap-8 pt-8 border-t border-stone-200">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 font-bold text-xl tracking-tight mb-4 inline-flex text-stone-900">
              <div className="w-6 h-6 flex items-center justify-center rounded-sm bg-[#4D718D] text-white">
                <Atom className="w-4 h-4" />
              </div>
              HD Physics
            </Link>
            <p className="text-stone-500 text-sm leading-relaxed mb-6">
              Expert JEE/NEET physics coaching serving thousands of students in Agartala and online.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-stone-900 mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:contact@hdphysics.in" className="text-stone-600 hover:text-stone-900 transition-colors text-sm">contact@hdphysics.in</a>
              </li>
              <li>
                <a href="tel:+9107005655845" className="text-stone-600 hover:text-stone-900 transition-colors text-sm">070056 55845</a>
              </li>
              <li className="text-stone-600 text-sm">
                TG Rd, Opposite to Road Number 3,<br />Ram Nagar, Agartala, Tripura 799001
              </li>
              <li className="text-stone-500 text-sm mt-4 italic">
                Office Hours: Opens 8:30 am
              </li>
            </ul>
          </div>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 text-sm font-medium text-stone-600">
          <Link to="/about" className="hover:text-stone-900 transition-colors">About</Link>
          <Link to="/services" className="hover:text-stone-900 transition-colors">Services</Link>
          <Link to="/testimonials" className="hover:text-stone-900 transition-colors">Testimonials</Link>
          <Link to="/contact" className="hover:text-stone-900 transition-colors">Contact</Link>
        </div>
        
        <div className="flex items-center gap-4">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-full border border-stone-300 flex items-center justify-center hover:bg-stone-100 transition-colors text-stone-600">
            <Linkedin className="w-4 h-4" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full border border-stone-300 flex items-center justify-center hover:bg-stone-100 transition-colors text-stone-600">
            <Instagram className="w-4 h-4" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="w-10 h-10 rounded-full border border-stone-300 flex items-center justify-center hover:bg-stone-100 transition-colors text-stone-600">
            <Twitter className="w-4 h-4" />
          </a>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-8 md:mt-12 text-xs text-stone-400 font-medium text-center md:text-left">
        <p>© 2026 HD Physics. All rights reserved.</p>
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
          <a href="#" className="hover:text-stone-600 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-stone-600 transition-colors">Terms & Condition</a>
        </div>
      </div>
    </div>
  </footer>
);
