import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { GraduationCap, DollarSign, Clock, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Study in UK | FlySky Europe Vadodara",
  description: "Study in UK with FlySky Europe. Expert UK student visa consultancy in Vadodara. Get admission to top British universities.",
  keywords: ["study in UK", "UK student visa", "study abroad UK", "British universities", "Vadodara"],
};

export default function UKPage() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[400px] flex items-center justify-center bg-gradient-to-r from-blue-900 to-red-900 text-white">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url(https://picsum.photos/1920/400?random=32)", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="container relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-4">Study in United Kingdom</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">Home to world-renowned universities like Oxford and Cambridge</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card><CardContent className="pt-6 text-center"><GraduationCap className="h-10 w-10 mx-auto mb-3 text-blue-600" /><div className="text-2xl font-bold">150+</div><div className="text-sm text-gray-600">Universities</div></CardContent></Card>
            <Card><CardContent className="pt-6 text-center"><Clock className="h-10 w-10 mx-auto mb-3 text-blue-600" /><div className="text-2xl font-bold">3 Years</div><div className="text-sm text-gray-600">Bachelor Duration</div></CardContent></Card>
            <Card><CardContent className="pt-6 text-center"><DollarSign className="h-10 w-10 mx-auto mb-3 text-blue-600" /><div className="text-2xl font-bold">£10-30K</div><div className="text-sm text-gray-600">Annual Tuition</div></CardContent></Card>
            <Card><CardContent className="pt-6 text-center"><CheckCircle2 className="h-10 w-10 mx-auto mb-3 text-green-600" /><div className="text-2xl font-bold">2 Years</div><div className="text-sm text-gray-600">Post-Study Work</div></CardContent></Card>
          </div>
          <div className="max-w-4xl mx-auto"><h2 className="text-3xl font-bold text-center mb-8">Why Study in UK?</h2><div className="grid md:grid-cols-2 gap-6"><div className="flex gap-4"><CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" /><div><h3 className="font-semibold mb-2">Prestigious Universities</h3><p className="text-gray-600">Home to Oxford, Cambridge, and Imperial College</p></div></div><div className="flex gap-4"><CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" /><div><h3 className="font-semibold mb-2">Shorter Degrees</h3><p className="text-gray-600">Complete your degree faster than other countries</p></div></div><div className="flex gap-4"><CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" /><div><h3 className="font-semibold mb-2">Graduate Route Visa</h3><p className="text-gray-600">2-year post-study work visa for all graduates</p></div></div><div className="flex gap-4"><CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" /><div><h3 className="font-semibold mb-2">Rich Cultural Experience</h3><p className="text-gray-600">Diverse, multicultural environment</p></div></div></div></div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Study in UK?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">Get expert guidance on UK university admissions and student visa process</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100"><Link href="/contact">Book Free Consultation</Link></Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10"><a href="tel:+919727616668">Call +91 97276 16668</a></Button>
          </div>
        </div>
      </section>
    </div>
  );
}
