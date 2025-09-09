'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, MessageCircle } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid-pattern" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-6 leading-tight">
              Ready to Transform Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Business?
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              Let's discuss your project and explore how our expertise can help you 
              build scalable, reliable solutions that drive real business results.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
          >
            <Link href="/contact">
              <Button className="bg-white text-black hover:bg-gray-100 text-lg px-8 py-4 group">
                <Calendar className="mr-2 h-5 w-5" />
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            
            <Link href="/case-studies">
              <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black text-lg px-8 py-4 group">
                <MessageCircle className="mr-2 h-5 w-5" />
                View Our Work
              </Button>
            </Link>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            {[
              {
                title: 'Free Consultation',
                description: 'No-obligation discussion about your project needs and goals'
              },
              {
                title: 'Custom Solutions',
                description: 'Tailored technology solutions designed specifically for your business'
              },
              {
                title: 'Ongoing Support',
                description: '24/7 support and maintenance to ensure your success'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="border-t border-gray-800 pt-8"
          >
            <p className="text-gray-400 mb-4">
              Or reach out directly:
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
              <a 
                href="mailto:hello@techflowsolutions.com" 
                className="text-gray-300 hover:text-white transition-colors"
              >
                hello@techflowsolutions.com
              </a>
              <div className="hidden sm:block w-1 h-1 bg-gray-600 rounded-full" />
              <a 
                href="tel:+1-555-123-4567" 
                className="text-gray-300 hover:text-white transition-colors"
              >
                +1 (555) 123-4567
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0);
          background-size: 20px 20px;
        }
      `}</style>
    </section>
  );
}