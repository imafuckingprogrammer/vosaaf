import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Study in Canada | FlySky Europe Vadodara",
  description: "Study in Canada with affordable education and PR opportunities. Expert Canada student visa consultancy in Vadodara.",
};

export default function CanadaPage() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[400px] flex items-center justify-center bg-gradient-to-r from-red-700 to-red-900 text-white">
        <div className="container text-center">
          <h1 className="text-5xl font-bold mb-4">Study in Canada</h1>
          <p className="text-xl">Quality education with PR pathway and multicultural environment</p>
        </div>
      </section>
      <section className="py-20 container text-center">
        <h2 className="text-3xl font-bold mb-8">Coming Soon - Detailed Information</h2>
        <Button asChild size="lg"><Link href="/contact">Contact Us for Canada Programs</Link></Button>
      </section>
    </div>
  );
}
