'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, TrendingUp, Clock, Users } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    title: 'E-commerce Platform Scaling',
    client: 'RetailCorp',
    industry: 'Retail',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    description: 'Scaled e-commerce infrastructure to handle 10x traffic during peak seasons.',
    results: {
      performance: '300% faster load times',
      growth: '150% increase in sales',
      efficiency: '60% reduction in server costs'
    },
    tags: ['AWS', 'Kubernetes', 'React', 'Node.js'],
    href: '/case-studies/ecommerce-scaling'
  },
  {
    id: 2,
    title: 'AI-Powered Healthcare Analytics',
    client: 'MedTech Solutions',
    industry: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
    description: 'Built AI system for predictive healthcare analytics and patient monitoring.',
    results: {
      performance: '95% prediction accuracy',
      growth: '40% faster diagnosis',
      efficiency: '50% reduction in manual work'
    },
    tags: ['Python', 'TensorFlow', 'Azure', 'React'],
    href: '/case-studies/healthcare-ai'
  },
  {
    id: 3,
    title: 'Fintech Mobile Banking App',
    client: 'NextGen Bank',
    industry: 'Finance',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
    description: 'Developed secure mobile banking app with biometric authentication.',
    results: {
      performance: '2M+ active users',
      growth: '85% user adoption rate',
      efficiency: '99.9% uptime achieved'
    },
    tags: ['React Native', 'Node.js', 'PostgreSQL', 'AWS'],
    href: '/case-studies/fintech-mobile'
  }
];

export default function CaseStudiesSection() {
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
            Success Stories That{' '}
            <span className="gradient-text">Inspire</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how we've helped businesses transform their operations and 
            achieve remarkable growth through innovative technology solutions.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <Link href={study.href}>
                <div className="bg-white rounded-lg border border-gray-200 overflow-hidden card-hover h-full cursor-pointer">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 text-gray-900 text-xs font-medium px-3 py-1 rounded-full">
                        {study.industry}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-gray-500">{study.client}</span>
                      <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {study.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {study.description}
                    </p>

                    {/* Results */}
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-sm">
                        <TrendingUp className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-gray-700">{study.results.performance}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Users className="h-4 w-4 text-blue-500 mr-2" />
                        <span className="text-gray-700">{study.results.growth}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Clock className="h-4 w-4 text-purple-500 mr-2" />
                        <span className="text-gray-700">{study.results.efficiency}</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <Link href="/case-studies">
            <button className="btn-primary text-lg px-8 py-4">
              View All Case Studies
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}