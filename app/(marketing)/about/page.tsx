"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Users, Award, Globe, TrendingUp, Heart, Shield, Target, ArrowRight, Phone } from "lucide-react";
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

const stats = [
  { number: "500+", label: "Students Placed", icon: Users },
  { number: "98%", label: "Visa Success Rate", icon: Award },
  { number: "15+", label: "Partner Countries", icon: Globe },
  { number: "8+", label: "Years Experience", icon: TrendingUp },
];

const values = [
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
];

const reasons = [
  { title: "Expert Counseling", description: "Our team has years of experience in international education and understands the unique needs of each student." },
  { title: "98% Visa Success Rate", description: "Our meticulous documentation process and visa interview preparation ensures maximum success." },
  { title: "End-to-End Support", description: "From university selection to landing abroad, we support you at every step of your journey." },
  { title: "Partner Universities", description: "Direct partnerships with top universities in Europe, USA, Canada, Australia, and more." },
  { title: "Free Consultation", description: "Get expert advice at no cost. We believe in transparency and helping you make informed decisions." },
  { title: "Local Presence", description: "Based in Vadodara, we understand the local context and can provide personalized, accessible support." },
];

export default function AboutPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-20 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About FlySky Europe
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Your trusted partner for study abroad and visa consultancy in Vadodara, Gujarat.
              We turn dreams of international education into reality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <stat.icon className="h-8 w-8 mx-auto mb-3 opacity-80" />
                <div className="text-3xl md:text-4xl font-bold mb-1">{stat.number}</div>
                <div className="text-sm text-primary-foreground/70">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
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
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                  alt="FlySky Europe Office"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card border p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-foreground mb-1">500+</div>
                <div className="text-sm text-muted-foreground">Success Stories</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-card p-6 rounded-xl border border-border/50 hover:shadow-md transition-shadow duration-200"
              >
                <div className="h-12 w-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose FlySky Europe?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              What sets us apart from other consultancies
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 bg-muted rounded-lg flex items-center justify-center">
                    <CheckCircle2 className="h-5 w-5 text-foreground" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{reason.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
              Join hundreds of successful students who trusted us with their study abroad dreams.
              Book a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
              >
                <a href="tel:+919727616668">
                  <Phone className="mr-2 h-4 w-4" />
                  Call +91 97276 16668
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
