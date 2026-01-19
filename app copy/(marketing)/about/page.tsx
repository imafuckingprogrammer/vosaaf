"use client";

import { Metadata } from "next";
import { motion } from "framer-motion";
import { CheckCircle2, Users, Award, Globe, TrendingUp, Heart, Shield, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              About <span className="bg-gradient-to-r from-blue-700 to-blue-600 bg-clip-text text-transparent">FlySky Europe</span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Your trusted partner for study abroad and visa consultancy in Vadodara, Gujarat.
              We turn dreams of international education into reality.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-600">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { number: "500+", label: "Students Placed", icon: Users },
              { number: "98%", label: "Visa Success Rate", icon: Award },
              { number: "15+", label: "Partner Countries", icon: Globe },
              { number: "8+", label: "Years Experience", icon: TrendingUp },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center text-white"
              >
                <stat.icon className="h-10 w-10 mx-auto mb-3 opacity-90" />
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm md:text-base text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in Vadodara, Gujarat, FlySky Europe has been a beacon of hope for students
                  aspiring to study abroad. Our journey began with a simple mission: to make
                  international education accessible to every deserving student.
                </p>
                <p>
                  Over the years, we've helped hundreds of students navigate the complex world of
                  international admissions and visa processes. Our team of experienced counselors
                  brings decades of combined expertise in education consultancy.
                </p>
                <p>
                  Located at Platinum Hub in Manjalpur, Vadodara, we've become the go-to destination
                  for students seeking guidance on studying in Europe, USA, Canada, Australia, and beyond.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://picsum.photos/600/400?random=30"
                  alt="FlySky Europe Office"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border-4 border-blue-50"
              >
                <div className="text-4xl font-bold text-blue-700 mb-1">500+</div>
                <div className="text-sm text-gray-600">Success Stories</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Heart,
                title: "Student-First",
                description: "Your success is our priority. We go above and beyond to ensure every student gets personalized attention."
              },
              {
                icon: Shield,
                title: "Integrity",
                description: "Honest, transparent guidance at every step. No hidden fees, no false promises."
              },
              {
                icon: Target,
                title: "Excellence",
                description: "We maintain the highest standards in everything we do, from counseling to visa applications."
              },
              {
                icon: Globe,
                title: "Global Perspective",
                description: "We stay updated with international education trends and visa policies worldwide."
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100"
              >
                <div className="h-14 w-14 bg-gradient-to-br from-blue-700 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose FlySky Europe?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              What sets us apart from other consultancies
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Expert Counseling",
                description: "Our team has years of experience in international education and understands the unique needs of each student."
              },
              {
                title: "98% Visa Success Rate",
                description: "Our meticulous documentation process and visa interview preparation ensures maximum success."
              },
              {
                title: "End-to-End Support",
                description: "From university selection to landing abroad, we support you at every step of your journey."
              },
              {
                title: "Partner Universities",
                description: "Direct partnerships with top universities in Europe, USA, Canada, Australia, and more."
              },
              {
                title: "Free Consultation",
                description: "Get expert advice at no cost. We believe in transparency and helping you make informed decisions."
              },
              {
                title: "Local Presence",
                description: "Based in Vadodara, we understand the local context and can provide personalized, accessible support."
              },
            ].map((reason, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6 text-blue-700" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{reason.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg md:text-xl text-blue-50 mb-8 leading-relaxed">
              Join hundreds of successful students who trusted us with their study abroad dreams.
              Book a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-gray-100 shadow-xl font-semibold">
                <Link href="/contact">Get Free Consultation</Link>
              </Button>
              <Button asChild size="lg" className="bg-blue-800 border-2 border-blue-800 text-white hover:bg-blue-900 hover:border-blue-900 shadow-xl font-semibold">
                <a href="tel:+919727616668">Call +91 97276 16668</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
