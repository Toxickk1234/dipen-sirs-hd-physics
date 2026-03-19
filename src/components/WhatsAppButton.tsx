import { motion } from 'motion/react';

const WHATSAPP_NUMBER = '917005655845'; // India country code + number
const WHATSAPP_MESSAGE = encodeURIComponent("Hi! I'm interested in HD Physics coaching. Can you tell me more?");

export const WhatsAppButton = () => (
  <motion.a
    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
    target="_blank"
    rel="noreferrer"
    aria-label="Chat on WhatsApp"
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
  >
    {/* WhatsApp SVG icon */}
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-8 h-8 fill-white">
      <path d="M16.003 2C8.28 2 2 8.28 2 16.003c0 2.47.654 4.785 1.796 6.793L2 30l7.394-1.77A13.93 13.93 0 0 0 16.003 30C23.72 30 30 23.72 30 16.003 30 8.28 23.72 2 16.003 2zm0 25.455a11.42 11.42 0 0 1-5.822-1.592l-.418-.248-4.39 1.05 1.085-4.28-.273-.44A11.425 11.425 0 0 1 4.545 16c0-6.322 5.136-11.455 11.458-11.455S27.455 9.678 27.455 16 22.32 27.455 16.003 27.455zm6.285-8.57c-.344-.172-2.036-1.003-2.352-1.116-.316-.115-.546-.172-.775.172-.23.344-.888 1.116-1.088 1.346-.2.23-.4.258-.744.086-.344-.172-1.453-.536-2.767-1.707-1.022-.912-1.712-2.038-1.912-2.382-.2-.344-.021-.53.15-.7.155-.153.344-.4.516-.6.172-.2.23-.344.344-.573.116-.23.058-.43-.03-.602-.086-.172-.775-1.87-1.063-2.56-.28-.674-.563-.582-.775-.594l-.66-.011c-.23 0-.602.086-.916.43-.315.344-1.203 1.175-1.203 2.866s1.232 3.326 1.403 3.555c.172.23 2.424 3.702 5.874 5.19.82.355 1.46.566 1.96.724.823.261 1.573.225 2.165.136.66-.098 2.036-.832 2.323-1.637.287-.804.287-1.493.2-1.636-.086-.143-.315-.23-.66-.4z" />
    </svg>
    {/* Pulse ring */}
    <span className="absolute w-full h-full rounded-full bg-[#25D366] animate-ping opacity-30" />
  </motion.a>
);
