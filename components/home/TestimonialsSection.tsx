'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "TechFlow Solutions transformed our entire infrastructure. Their cloud migration reduced our costs by 40% while improving performance dramatically. The team's expertise and support throughout the process was exceptional.",
    author: {
      name: "Sarah Johnson",
      role: "CTO",
      company: "RetailCorp",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b2b32e2d?w=80&h=80&fit=crop&crop=face"
    },
    rating: 5,
    project: "Cloud Migration & Optimization"
  },
  {
    id: 2,
    content: "The AI analytics platform they built for us has revolutionized our decision-making process. We can now predict market trends with 95% accuracy, giving us a significant competitive advantage.",
    author: {
      name: "Michael Chen",
      role: "Head of Data Science",
      company: "FinanceForward",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
    },
    rating: 5,
    project: "AI Analytics Platform"
  },
  {
    id: 3,
    content: "Outstanding mobile app development! They delivered our banking app ahead of schedule with features we didn't even know we needed. The user experience is incredibly smooth and secure.",
    author: {
      name: "Emily Rodriguez",
      role: "Product Manager",
      company: "NextGen Bank",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
    },
    rating: 5,
    project: "Mobile Banking App"
  },
  {
    id: 4,
    content: "Their DevOps implementation reduced our deployment time from hours to minutes. The CI/CD pipeline they built is robust, and the monitoring solutions give us complete visibility into our systems.",
    author: {
      name: "David Kumar",
      role: "Engineering Director",
      company: "TechStart Inc.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
    },
    rating: 5,
    project: "DevOps & CI/CD Setup"
  },
  {
    id: 5,
    content: "Excellent cybersecurity audit and implementation. They identified vulnerabilities we missed and provided comprehensive solutions. Our security posture is now enterprise-grade.",
    author: {
      name: "Lisa Thompson",
      role: "CISO",
      company: "SecureData Corp",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face"
    },
    rating: 5,
    project: "Security Audit & Implementation"
  },
  {
    id: 6,
    content: "The SaaS platform they developed scales beautifully. We've grown from 1,000 to 100,000 users without any performance issues. Their architecture decisions were spot-on.",
    author: {
      name: "Robert Martinez",
      role: "Founder & CEO",
      company: "CloudCo",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face"
    },
    rating: 5,
    project: "SaaS Platform Development"
  }
];

export default function TestimonialsSection() {
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
            What Our Clients{' '}
            <span className="gradient-text">Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what industry leaders say about 
            working with TechFlow Solutions.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-lg p-6 card-hover relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10">
                <Quote className="h-8 w-8 text-primary" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.author.avatar}
                    alt={testimonial.author.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.author.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.author.role} at {testimonial.author.company}
                  </p>
                </div>
              </div>

              {/* Project Tag */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <span className="text-xs bg-primary-50 text-primary px-3 py-1 rounded-full">
                  {testimonial.project}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gray-50 rounded-lg p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
              <p className="text-gray-600">Average Rating</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <p className="text-gray-600">Happy Clients</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <p className="text-gray-600">Retention Rate</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}