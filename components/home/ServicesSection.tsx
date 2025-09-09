'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Cloud,
  Settings,
  Smartphone,
  Brain,
  Shield,
  Headphones,
  Building,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud architecture, migration, and optimization for AWS, Azure, and GCP.',
    href: '/services/cloud',
    features: ['Migration & Setup', 'Auto-scaling', '24/7 Monitoring', 'Cost Optimization']
  },
  {
    icon: Settings,
    title: 'DevOps & Infrastructure',
    description: 'CI/CD pipelines, containerization, and infrastructure as code for rapid deployment.',
    href: '/services/devops',
    features: ['CI/CD Pipelines', 'Docker & Kubernetes', 'Infrastructure as Code', 'Monitoring']
  },
  {
    icon: Smartphone,
    title: 'Web & Mobile Apps',
    description: 'Full-stack development with modern frameworks and responsive design.',
    href: '/services/development',
    features: ['React/Next.js', 'React Native', 'API Development', 'UI/UX Design']
  },
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Custom AI solutions, data analytics, and machine learning model deployment.',
    href: '/services/ai-ml',
    features: ['Custom AI Models', 'Data Analytics', 'ML Pipelines', 'AI Integration']
  },
  {
    icon: Building,
    title: 'SaaS Solutions',
    description: 'End-to-end SaaS development with scalable architecture and user management.',
    href: '/services/saas',
    features: ['Multi-tenant Architecture', 'Payment Integration', 'User Management', 'Analytics']
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Comprehensive security audits, penetration testing, and compliance solutions.',
    href: '/services/security',
    features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Incident Response']
  },
  {
    icon: Headphones,
    title: 'IT Support',
    description: '24/7 technical support, system maintenance, and help desk services.',
    href: '/services/support',
    features: ['24/7 Support', 'System Maintenance', 'Help Desk', 'Remote Assistance']
  }
];

export default function ServicesSection() {
  return (
    <section className="section-padding bg-white">
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
            Services That Drive{' '}
            <span className="gradient-text">Innovation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From concept to deployment, we provide comprehensive technology solutions
            that scale with your business needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.slice(0, 6).map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <Link href={service.href}>
                <div className="bg-white border border-gray-200 rounded-lg p-8 card-hover h-full cursor-pointer">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-primary-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <service.icon className="h-8 w-8" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="text-sm text-gray-500 flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Link */}
                  <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all duration-300">
                    <span>Learn more</span>
                    <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Additional Service */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <Link href={services[6].href}>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 card-hover cursor-pointer group">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-primary-50 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <services[6].icon className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {services[6].title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {services[6].description}
                    </p>
                  </div>
                </div>
                <ArrowRight className="h-6 w-6 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          </Link>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Link href="/services">
            <button className="btn-primary text-lg px-8 py-4">
              View All Services
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
