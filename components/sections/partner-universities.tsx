"use client";

import { motion } from "framer-motion";

const universities = [
  { name: "University of Toronto", country: "Canada", flag: "🇨🇦" },
  { name: "Technical University Munich", country: "Germany", flag: "🇩🇪" },
  { name: "University of Manchester", country: "UK", flag: "🇬🇧" },
  { name: "MIT", country: "USA", flag: "🇺🇸" },
  { name: "University of Melbourne", country: "Australia", flag: "🇦🇺" },
  { name: "Trinity College Dublin", country: "Ireland", flag: "🇮🇪" },
  { name: "ETH Zurich", country: "Switzerland", flag: "🇨🇭" },
  { name: "University of Amsterdam", country: "Netherlands", flag: "🇳🇱" },
];

export function PartnerUniversities() {
  return (
    <section className="py-20 md:py-24 bg-background border-y border-border/50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Partner Universities
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We work with 200+ top-ranked universities worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
          {universities.map((uni, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex flex-col items-center justify-center p-6 rounded-lg border border-border/50 bg-card hover:shadow-sm transition-shadow duration-200"
            >
              <span className="text-3xl mb-3">{uni.flag}</span>
              <h3 className="font-medium text-center text-sm text-foreground">
                {uni.name}
              </h3>
              <p className="text-xs text-muted-foreground mt-1">{uni.country}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center text-muted-foreground"
        >
          And many more prestigious institutions across the globe
        </motion.p>
      </div>
    </section>
  );
}
