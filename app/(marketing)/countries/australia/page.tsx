import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Study in Australia | FlySky Europe Vadodara",
  description: "Study in Australia with world-class education. Expert Australia student visa consultancy in Vadodara.",
};

export default function AustraliaPage() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[400px] flex items-center justify-center bg-gradient-to-r from-green-700 to-yellow-600 text-white">
        <div className="container text-center">
          <h1 className="text-5xl font-bold mb-4">Study in Australia</h1>
          <p className="text-xl">Top-ranked universities with excellent post-study work opportunities</p>
        </div>
      </section>
      <section className="py-20 container text-center">
        <h2 className="text-3xl font-bold mb-8">Coming Soon - Detailed Information</h2>
        <Button asChild size="lg"><Link href="/contact">Contact Us for Australia Programs</Link></Button>
      </section>
    </div>
  );
}
