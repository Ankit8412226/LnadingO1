'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const clients = [
  {
    name: 'Microsoft',
    logo: 'https://images.unsplash.com/photo-1633409361618-c73427e4e206?w=200&h=100&fit=crop&crop=center',
    industry: 'Technology'
  },
  {
    name: 'Salesforce',
    logo: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=100&fit=crop&crop=center',
    industry: 'SaaS'
  },
  {
    name: 'Goldman Sachs',
    logo: 'https://images.unsplash.com/photo-1565373679623-079527ccab7b?w=200&h=100&fit=crop&crop=center',
    industry: 'Finance'
  },
  {
    name: 'Johnson & Johnson',
    logo: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=200&h=100&fit=crop&crop=center',
    industry: 'Healthcare'
  },
  {
    name: 'Target',
    logo: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=200&h=100&fit=crop&crop=center',
    industry: 'Retail'
  },
  {
    name: 'Ford',
    logo: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=200&h=100&fit=crop&crop=center',
    industry: 'Manufacturing'
  },
  {
    name: 'Netflix',
    logo: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=200&h=100&fit=crop&crop=center',
    industry: 'Entertainment'
  },
  {
    name: 'Spotify',
    logo: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=200&h=100&fit=crop&crop=center',
    industry: 'Media'
  }
];

export default function ClientsSection() {
  return (
    <section className="section-padding bg-white border-y border-gray-100">
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
            Trusted by Industry{' '}
            <span className="gradient-text">Leaders</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From startups to Fortune 500 companies, businesses trust us to deliver 
            innovative solutions that drive growth and efficiency.
          </p>
        </motion.div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center card-hover h-32 flex items-center justify-center">
                <div className="w-full">
                  <div className="relative h-12 mb-3 grayscale group-hover:grayscale-0 transition-all duration-300">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <p className="text-sm text-gray-500 font-medium">
                    {client.industry}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated Logo Ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative overflow-hidden bg-gray-50 rounded-lg py-8"
        >
          <div className="flex animate-scroll space-x-16">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`ticker-${index}`}
                className="flex-shrink-0 w-40 h-16 relative grayscale opacity-60"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-contain"
                  sizes="160px"
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div>
            <div className="text-3xl font-bold text-primary mb-2">150+</div>
            <p className="text-gray-600">Enterprise Clients</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <p className="text-gray-600">Industries Served</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <p className="text-gray-600">Client Retention Rate</p>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
}