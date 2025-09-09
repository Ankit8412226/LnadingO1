'use client';

import { motion } from 'framer-motion';
import { AnimatedCounter } from '@/components/ui/animated-counter';

const stats = [
  {
    number: 500,
    suffix: '+',
    label: 'Projects Delivered',
    description: 'Successfully completed projects across various industries'
  },
  {
    number: 98,
    suffix: '%',
    label: 'Client Satisfaction',
    description: 'Of our clients rate our services as excellent'
  },
  {
    number: 150,
    suffix: '+',
    label: 'Enterprise Clients',
    description: 'Fortune 500 companies trust our solutions'
  },
  {
    number: 24,
    suffix: '/7',
    label: 'Support Available',
    description: 'Round-the-clock technical support and monitoring'
  },
  {
    number: 50,
    suffix: '+',
    label: 'Team Members',
    description: 'Expert developers, designers, and consultants'
  },
  {
    number: 99.9,
    suffix: '%',
    label: 'Uptime Guarantee',
    description: 'Reliable infrastructure with minimal downtime'
  }
];

export default function StatsSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            Proven Track Record of{' '}
            <span className="gradient-text">Excellence</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Numbers that speak to our commitment to delivering exceptional results 
            for businesses of all sizes.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-lg border border-gray-200 p-8 text-center card-hover"
            >
              {/* Number */}
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2 font-poppins">
                <AnimatedCounter to={stat.number} suffix={stat.suffix} />
              </div>
              
              {/* Label */}
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {stat.label}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-lg border border-gray-200 p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Join Our Success Stories?</h3>
            <p className="text-gray-600 mb-6">
              Let's discuss how we can help you achieve similar results for your business.
            </p>
            <button className="btn-primary">
              Schedule a Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}