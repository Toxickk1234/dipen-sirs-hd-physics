import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Navbar } from '../components/Navbar';
import { Send, MapPin, Mail, Clock, CheckCircle2, Phone, Calendar } from 'lucide-react';

const faqs = [
  {
    q: 'How does the free demo class work?',
    a: 'It\'s a 45-minute trial session where you attend a live class to experience my teaching style and see if it\'s the right fit for your learning pace. There\'s zero pressure to enroll.',
  },
  {
    q: 'Do you offer refunds?',
    a: 'Yes. If you\'re not satisfied within the first week of enrollment, I\'ll refund your full payment — no questions asked. I\'m that confident in the value I provide.',
  },
  {
    q: 'Can I do coaching sessions online?',
    a: 'Absolutely. We offer hybrid batches where sessions are conducted offline in Agartala and simultaneously streamed via Zoom or Google Meet, so you can learn from anywhere.',
  },
  {
    q: 'How quickly will I see results in my mock tests?',
    a: 'Most students see a 20-30% improvement in their mock test scores within the first month. Results vary based on your dedication, but I give you the exact framework to score high.',
  },
  {
    q: 'I\'m not sure which batch is right for me. What should I do?',
    a: 'Book a free counseling call or demo class. We\'ll discuss your current preparation level and I\'ll recommend the right batch — or tell you honestly how you can improve.',
  },
];

const contactInfo = [
  {
    icon: <Mail className="w-5 h-5 text-[#4D718D]" />,
    label: 'Email',
    value: 'contact@hdphysics.in',
    href: 'mailto:contact@hdphysics.in',
  },
  {
    icon: <Phone className="w-5 h-5 text-[#4D718D]" />,
    label: 'Phone',
    value: '070056 55845',
    href: 'tel:+9107005655845',
  },
  {
    icon: <MapPin className="w-5 h-5 text-[#4D718D]" />,
    label: 'Location',
    value: 'TG Rd, opposite to Road Number 3, Ram Nagar, Agartala, Tripura 799001',
    href: 'https://maps.app.goo.gl/yRLy9Xa9xV7B9VpX9',
  },
  {
    icon: <Clock className="w-5 h-5 text-[#4D718D]" />,
    label: 'Hours',
    value: 'Opens 8:30 am',
    href: null,
  },
];

export const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <div className="bg-[#14293E] text-white relative overflow-hidden">
        <Navbar theme="dark" />
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-block px-4 py-1.5 rounded-full border border-white/20 text-sm font-medium mb-8">
              Get in Touch
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] mb-6 tracking-tight">
              Let's Work <br /><span className="italic font-serif font-light text-white/80">Together</span>
            </h1>
            <p className="text-lg sm:text-xl opacity-80 max-w-xl mx-auto leading-relaxed">
              Ready to take the next step in your physics prep? Reach out and let's talk about how I can help you secure that top rank.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#F4ECE1] to-transparent pointer-events-none" />
      </div>

      {/* Main Contact Section */}
      <section className="py-16 md:py-24 px-6 bg-[#F4ECE1]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-start">

          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-8 tracking-tight">
              Start with a Free<br />Demo Class
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-12">
              Not sure where to begin? Book a free trial. We'll talk about your exam goals and I'll tell you honestly whether — and how — coaching can help you reach them.
            </p>

            <div className="space-y-6 mb-12">
              {contactInfo.map((info, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#4D718D]/10 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-1">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} className="text-stone-800 hover:text-stone-900 font-medium transition-colors">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-stone-800 font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Book Call CTA */}
            <div className="bg-[#EBE0D2] rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#4D718D] rounded-xl flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-bold text-stone-900">Book a Free Demo Class</p>
                  <p className="text-stone-500 text-xs">Pick a slot that works for you</p>
                </div>
              </div>
              <p className="text-stone-600 text-sm mb-6 leading-relaxed">
                No sales pitch. Just a real conversation about your preparation and whether this institute is right for you.
              </p>
              <button className="w-full py-3.5 rounded-full bg-[#14293E] text-white font-semibold hover:bg-black transition-colors flex items-center justify-center gap-2">
                <Calendar className="w-4 h-4" /> Schedule Free Demo
              </button>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white p-10 md:p-12 rounded-3xl shadow-sm border border-stone-100 text-center h-full flex flex-col items-center justify-center min-h-[500px]"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-3xl font-bold text-stone-900 mb-4">Message Sent!</h3>
                <p className="text-stone-500 text-lg max-w-sm leading-relaxed">
                  Thanks for reaching out, {formState.name}. I'll be in touch within 24 hours. Check your inbox!
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormState({ name: '', email: '', service: '', message: '' }); }}
                  className="mt-8 px-6 py-3 rounded-full border border-stone-300 text-stone-700 hover:bg-stone-100 transition-colors font-medium text-sm"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-stone-100 space-y-6"
              >
                <h3 className="text-2xl font-bold text-stone-900 mb-2">Send a Message</h3>
                <p className="text-stone-500 text-sm mb-6">Fill out the form below and I'll respond within 24 hours.</p>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-stone-900 mb-2">First Name *</label>
                    <input
                      required
                      type="text"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-900 bg-stone-50 text-sm"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-900 mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-900 bg-stone-50 text-sm"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-900 mb-2">Email Address *</label>
                  <input
                    required
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-900 bg-stone-50 text-sm"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-900 mb-2">I'm interested in...</label>
                  <select
                    value={formState.service}
                    onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-900 bg-stone-50 text-sm text-stone-700"
                  >
                    <option value="">Select a service</option>
                    <option>Class 11 Physics</option>
                    <option>Class 12 Physics</option>
                    <option>NEET Physics Preparation</option>
                    <option>JEE Main & Advanced Physics</option>
                    <option>Foundation Batch (Class 9 & 10)</option>
                    <option>Just exploring — want to learn more</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-900 mb-2">What's your biggest physics challenge right now? *</label>
                  <textarea
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-900 bg-stone-50 text-sm resize-none"
                    placeholder="Tell me about where you are now, where you want to be, and what's in the way..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#14293E] hover:bg-black text-white px-6 py-4 rounded-xl font-medium transition-colors"
                >
                  <Send className="w-4 h-4" /> Send Message
                </button>

                <p className="text-center text-stone-400 text-xs">I respond to all messages within 24 hours, usually sooner.</p>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 px-6 bg-[#EBE0D2]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4 tracking-tight">Frequently Asked Questions</h2>
            <p className="text-stone-500 text-lg">Got more? Just send me a message above.</p>
          </motion.div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white rounded-2xl overflow-hidden border border-stone-100"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-stone-50 transition-colors"
                >
                  <span className="font-semibold text-stone-900 pr-4">{faq.q}</span>
                  <span className={`w-6 h-6 rounded-full border border-stone-300 flex items-center justify-center shrink-0 text-stone-600 transition-transform ${openFaq === i ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-stone-600 leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
