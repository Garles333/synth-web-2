import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedTextHighlight } from "@/components/blocks/text-animations/animated-text-highlight";
import { HeroMobileAnimated } from "@/components/blocks/heros/hero-mobile-animated";
import { HeroDesktopAnimated } from "@/components/blocks/heros/hero-desktop-animated";
import {
  ArrowRight,
  Shield,
  Clock,
  Rocket,
  Lightbulb,
  MessageCircle,
  Users,
  Search,
  CheckCircle,
  Play,
  Mail,
  Phone,
  MapPin,
  DollarSign,
  Sparkles,
  Zap
} from "lucide-react";
import { AhorroSynthCalculator } from "@/components/sections/ahorro-synth-calculator";
import { NewsletterBannerHome } from "@/components/blocks/newsletter-sections/newsletter-banner-home";
import { BlogPreviewSection } from "@/components/sections/blog-preview-section";
import { FaqSection } from "@/components/blocks/faqs/faq-section";
import { Testimonial3DRoulette } from "@/components/blocks/testimonials/testimonials-3d-roulette";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ArquitecturaTecnologica } from "@/components/sections/arquitectura-tecnologica";
import { Pricing } from "@/components/sections/pricing";
import { ValidationCarousel } from "@/components/blocks/feature-sections/validation-carousel";
import { RealismSynthLayers } from "@/components/sections/realism-synth-layers";
import { LaboratorioRealismo } from "@/components/sections/laboratorio-realismo";
import { DiferenciaFundamental } from "@/components/sections/diferencia-fundamental";
import { SparkSection } from "@/components/sections/spark-section";
import Link from "next/link";
import { fetchPosts } from "@/lib/contentful";

export const metadata = {
  title: 'Synthetic-data simulation platform: Test, validate, and refine business decisions before real-world impact.',
  description: 'Synthetic-data simulation platform: Test, validate, and refine business decisions before real-world impact.',
  alternates: {
    canonical: 'https://synth-insights.com/en',
    languages: {
      'es-ES': 'https://synth-insights.com/',
      'en-US': 'https://synth-insights.com/en'
    }
  }
};

export const revalidate = 60;
export const dynamic = "force-dynamic";

export default async function HomePageEN() {
  const posts = await fetchPosts();
  const articles = posts.map((p) => ({
    title: p.title,
    excerpt: p.excerpt || "",
    image: p.coverImageUrl || p.imageUrl,
    slug: p.slug,
  }));

  function formatFaqHtml(raw: string) {
    const keys = [
      'Synth Insight Engine', 'Knowledge Library', 'contextual insight', 'Multi-layer Persona Profiles', 'AI-driven Consistency', 'Brand-specific Knowledge',
      'rapid exploration', 'directional validation', 'discard ideas', 'compare multiple concepts', 'understand consumer language',
      'export', 'native integrations', 'Methodologies', 'focus group', 'transcripts', 'AI-generated analysis', 'JSON',
      'Preparation', 'Execution', 'Analysis', 'actionable insights',
      'customize', 'AI labs', 'full control', 'research director',
      'savings', 'over 90%', 'direct costs', 'Savings Calculator',
      'free', 'no credit card required'
    ];

    let html = raw
      .split(/\n+/)
      .map((p) => {
        let res = p;
        keys.forEach((c) => {
          res = res.replace(new RegExp(`(?<![\\w>])(${c.replace(/([.*+?^=!:${}()|\[\]\\])/g, "\\$1")})(?![\\w<])`, 'gi'), '<strong>$1</strong>');
        });
        return `<p>${res.trim()}</p>`;
      })
      .join('');

    html = html.replace(new RegExp('<p>- ([^<]+)</p>', 'g'), '<ul class="list-disc pl-8 my-2"><li>$1</li></ul>');
    return html;
  }

  const faqs = [
    {
      question: "Is Synth just another advanced chatbot?",
      answer: formatFaqHtml(`No. While a chatbot uses generic knowledge, each Synth participant thinks and speaks through the 5 layers of our Realism Engine™: identity, irrational biases, culture, current emotion, and intentions. The difference is getting an answer vs. understanding a person.`)
    },
    {
      question: `What exactly is the "Realism Engine™"?`,
      answer: formatFaqHtml(`It's our 5-layer architecture that ensures authenticity. As Simulation Director, you define the <strong>Identity</strong> (the DNA), inject <strong>Cognitive Biases</strong> (the subconscious), and modulate the <strong>Context</strong> (emotion, agenda). Our engine adds the <strong>Cultural Layer</strong> (the tribe). The result? A very human-like replica, not a machine.`)
    },
    {
      question: `What are "Worldviews" and why do they matter?`,
      answer: formatFaqHtml(`They are your customers' cultural operating systems. Our engine automatically assigns each participant a cultural archetype that defines their unwritten values and language. This lets you validate whether your message resonates with the tribe's <em>code</em>. Run a simulation and see if your brand speaks their language.`)
    },
    {
      question: `Why would I want to test with "irrational" participants (with biases)?`,
      answer: formatFaqHtml(`Because your customers are irrational. Real people don't make 100% logical decisions; they rely on mental shortcuts. By injecting biases like "Loss Aversion", you discover the real emotional barriers to your product. It's the fastest way to move from idealized to real behavior. You can choose among 9 biases.`)
    },
    {
      question: `With so much control, how do I avoid confirming my own biases?`,
      answer: formatFaqHtml(`That's the genius of being the Simulation Director. Synth isn't an oracle; it's your stress-testing lab. Best practice: run multiple scenarios—a baseline simulation (neutral), a pessimistic one (skeptical participants), and a competitive one (defenders of a competitor). Discover under which conditions your idea survives, not whether it's good in a vacuum.`)
    },
    {
      question: `What's the real value of changing a participant's emotion or agenda?`,
      answer: formatFaqHtml(`It's the difference between testing in a vacuum and testing in the real world. Set the state to "Anxious" to simulate how your customer reacts to a price increase during a crisis. Set the agenda to "Competitor Advocate" to see how your value proposition holds up to a direct attack. <strong>You have full control over context.</strong>`)
    },
    {
      question: `With such a powerful tool, does it mean I no longer need research agencies?`,
      answer: formatFaqHtml(`On the contrary. Synth is the greatest ally of research agencies. We don't replace their expertise—we give them superpowers. We let agencies spend less time on logistics (recruiting, transcription) and more on where they add unique value: deep analysis and strategic recommendations. Synth turns good agencies into indispensable strategic partners for their clients.`)
    },
    {
      question: `How does the cost of Synth compare to traditional research?`,
      answer: formatFaqHtml(`The savings are radical: <strong>over 90%</strong> compared to a traditional qualitative study.\n\nThe true shift is strategic: you move from affording one study to being able to <strong>launch ten for the cost of one</strong>. It's the difference between betting on an idea and continuously validating it.\n\nHow do we achieve it? By eliminating recruiting, incentives, room rentals, and manual transcription costs.\n\nCalculate your exact savings with our <strong>Savings Calculator</strong>.`)
    },
    {
      question: `Do I need a large research team to use Synth?`,
      answer: formatFaqHtml(`No. Synth democratizes deep insight. A single researcher or market insights professional can become a Simulation Director and achieve in hours the qualitative depth that previously required a full team and weeks of work. It's strategic agility for teams of any size.\nWe discourage use by profiles without foundational research knowledge.`)
    },
    {
      question: `This all sounds great, but… can I try the platform before deciding?`,
      answer: formatFaqHtml(`Absolutely. We believe Synth's power is best understood by experiencing it. That's why we offer a <strong>Freemium</strong> model that lets you launch your first simulations and see the quality of insights yourself. There's nothing to lose and a new universe of understanding to gain. Start for free and discover the future of research.`)
    }
  ];

  return (
    <div className="min-h-screen bg-[#0B0E1A] text-white">
      <h1 className="sr-only">AI-speed Market Research</h1>
      <h2 className="sr-only">Validate your ideas with Synthetic Focus Groups</h2>
      <h2 className="sr-only">An insights platform for agencies and brands</h2>
      <h2 className="sr-only">How our model-agnostic AI works</h2>
      <h2 className="sr-only">AI-powered market research platform, synthetic focus group, consumer insights software, online qualitative research, online focus groups tool, AI consumer analysis, market validation platform</h2>

      <nav className="fixed top-0 w-full z-50 bg-[#0B0E1A]/80 backdrop-blur-md border-b border-[#2A3441]">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://i.postimg.cc/bvqJBxD6/Logo-Synth-sin-fondo.png"
              alt="Synth"
              className="h-8 w-auto object-contain"
            />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="hover:text-[#FF6634] transition-colors">Home</a>
            <a href="#motor-realismo" className="hover:text-[#FF6634] transition-colors">What makes us different</a>
            <a href="/en/case-studies" className="hover:text-[#FF6634] transition-colors">Case Studies</a>
            <a href="#precios" className="hover:text-[#FF6634] transition-colors">Pricing</a>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <div className="flex items-center gap-1 mr-2">
              <Link href="/" className="inline-flex items-center px-2 py-1 rounded-md border border-[#FF6634] text-white transition">
                <span role="img" aria-label="Spanish">🇪🇸</span>
              </Link>
            </div>
            <Button asChild className="bg-[#FF6634] hover:bg-[#FF6634]/90 text-white">
              <Link href="/en/onboarding">Try it free</Link>
            </Button>
          </div>
        </div>
      </nav>

      <section id="inicio" className="pt-24 pb-16 px-4 max-w-6xl mx-auto text-center relative overflow-hidden">
        <div className="mb-12 relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#1A1F2E] border border-[#2A3441] transform hover:scale-105 transition-all duration-300">
            <Shield className="w-4 h-4 text-[#FF6634] mr-2" />
            <span className="text-sm text-[#E1E5EB]">
              <strong className="text-white">Try the platform free, no credit card required</strong>
            </span>
          </div>
        </div>

        <div className="mb-6">
          <div className="block md:hidden">
            <div className="flex flex-col items-center justify-center min-h-[160px]">
              <HeroMobileAnimated locale="en" />
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex flex-col items-center justify-center min-h-[180px]">
              <HeroDesktopAnimated locale="en" />
            </div>
          </div>
        </div>

        <p className="text-sm text-[#E1E5EB] mb-8 mx-auto leading-relaxed relative z-10 md:text-lg whitespace-pre-line w-full max-w-[460px] md:w-[788px] md:h-[103px] lg:w-[980px] lg:max-w-[980px] lg:h-auto">
          The simulation platform built for agencies, consultancies, and research teams who need to validate hypotheses without the timelines and costs of traditional fieldwork.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 relative z-10">
          <Button asChild className="bg-[#FF6634] hover:bg-[#FF6634]/90 text-white px-8 py-3 text-base md:text-lg transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-[#FF6634]/25">
            <Link href="/en/onboarding">
              Try it free
              <Play className="w-5 h-5 ml-2" />
            </Link>
          </Button>
          <Button variant="outline" className="border-[#2A3441] text-white hover:bg-[#1A1F2E] px-8 py-3 text-base md:text-lg transform hover:scale-105 transition-all duration-300 hover:border-[#FF6634]/50">
            Watch Demo
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto relative z-10">
          <div className="text-center p-6 bg-gradient-to-br from-[#1A1F2E]/60 to-[#0B0E1A]/60 rounded-2xl border border-[#2A3441] hover:border-[#FF6634]/50 transition-all duration-500 group transform hover:scale-105 backdrop-blur-sm">
            <div className="text-3xl font-bold text-[#FF6634] mb-2 group-hover:scale-110 transition-transform duration-300">85-90%</div>
            <p className="text-[#E1E5EB] text-sm font-medium">Accuracy vs. real</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-[#1A1F2E]/60 to-[#0B0E1A]/60 rounded-2xl border border-[#2A3441] hover:border-[#FF6634]/50 transition-all duration-500 group transform hover:scale-105 backdrop-blur-sm">
            <div className="text-3xl font-bold text-[#FF6634] mb-2 group-hover:scale-110 transition-transform duration-300">100x</div>
            <p className="text-[#E1E5EB] text-sm font-medium">Faster</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-[#1A1F2E]/60 to-[#0B0E1A]/60 rounded-2xl border border-[#2A3441] hover:border-[#FF6634]/50 transition-all duration-500 group transform hover:scale-105 backdrop-blur-sm">
            <div className="text-3xl font-bold text-[#FF6634] mb-2 group-hover:scale-110 transition-transform duration-300">90%</div>
            <p className="text-[#E1E5EB] text-sm font-medium">Cost reduction</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-[#1A1F2E]/60 to-[#0B0E1A]/60 rounded-2xl border border-[#2A3441] hover:border-[#FF6634]/50 transition-all duration-500 group transform hover:scale-105 backdrop-blur-sm">
            <div className="text-3xl font-bold text-[#FF6634] mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
            <p className="text-[#E1E5EB] text-sm font-medium">Agencies trust us</p>
          </div>
        </div>
      </section>

      <section className="py-12 border-t border-[#2A3441]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Some brands already trust Synth</h2>
          <div className="relative overflow-hidden">
            <div className="flex animate-slide-continuous space-x-16 items-center">
              {Array.from({ length: 4 }, (_, setIndex) => (
                <div key={setIndex} className="flex space-x-16 items-center shrink-0">
                  {["Pulso App", "The Signal", "Tierras de Castilla", "Nexus Studio", "Echo Design"].map((brand, index) => (
                    <div key={`${setIndex}-${index}`} className="flex items-center justify-center text-white/70 font-light text-xl whitespace-nowrap min-w-fit">
                      {brand}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ScrollReveal direction="up" distance={60}>
        <section className="py-20 px-4 bg-gradient-to-b from-[#0B0E1A] to-[#1A1F2E]/30 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-10 left-10 w-32 h-32 bg-[#FF6634]/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-48 h-48 bg-[#FF6634]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-[#FF6634]/8 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="absolute inset-0 z-0 overflow-hidden">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-[#FF6634]/30 rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${3 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="mb-12 overflow-hidden">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 animate-slideUpStagger">
                <span className="inline-block text-white animate-slideInLeft" style={{ animationDelay: '0.2s' }}>
                  Less Logistics.
                </span>{' '}
                <span className="inline-block text-[#FF6634] animate-slideInRight" style={{ animationDelay: '0.4s' }}>
                  More Value
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="animate-fadeInScale" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
                <div className="bg-gradient-to-br from-[#1A1F2E]/80 to-[#0B0E1A]/60 backdrop-blur-sm border border-[#2A3441] rounded-2xl p-8 text-left group hover:border-[#FF6634]/30 transition-all duration-500 hover:transform hover:scale-105 h-full flex flex-col">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-[#FF6634]/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-[#FF6634]/30 transition-colors duration-300">
                      <Clock className="w-6 h-6 text-[#FF6634]" />
                    </div>
                    <h3 className="text-xl font-bold text-white">The Problem</h3>
                  </div>
                  <p className="text-[#E1E5EB] leading-relaxed flex-grow">
                    Traditional research isn't built for today's speed. Your team loses valuable time to operational logistics.
                  </p>
                </div>
              </div>

              <div className="animate-fadeInScale" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
                <div className="bg-gradient-to-br from-[#1A1F2E]/80 to-[#0B0E1A]/60 backdrop-blur-sm border border-[#2A3441] rounded-2xl p-8 text-left group hover:border-[#FF6634]/30 transition-all duration-500 hover:transform hover:scale-105 h-full flex flex-col">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-[#FF6634]/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-[#FF6634]/30 transition-colors duration-300">
                      <Rocket className="w-6 h-6 text-[#FF6634]" />
                    </div>
                    <h3 className="text-xl font-bold text-white">The Solution</h3>
                  </div>
                  <p className="text-[#E1E5EB] leading-relaxed flex-grow">
                    Synth automates 90% of operational work so your team invests its talent where it's irreplaceable.
                  </p>
                </div>
              </div>
            </div>

            <div className="animate-fadeInUp" style={{ animationDelay: '1s', animationFillMode: 'both' }}>
              <div className="relative max-w-4xl mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FF6634]/10 to-transparent blur-2xl animate-pulse"></div>

                <div className="relative bg-gradient-to-br from-[#1A1F2E]/90 to-[#0B0E1A]/70 border border-[#2A3441] hover:border-[#FF6634]/40 rounded-2xl px-10 py-8 backdrop-blur-lg transition-all duration-700 group hover:shadow-2xl hover:shadow-[#FF6634]/10">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#FF6634] to-[#FF8A5B] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Lightbulb className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <p className="text-xl md:text-2xl font-semibold text-white mb-4 leading-relaxed">
                    Synth doesn't replace your expertise, <span className="text-[#FF6634] font-bold">it unleashes it</span>
                  </p>

                  <p className="text-lg text-[#E1E5EB] leading-relaxed max-w-3xl mx-auto">
                    Focus on strategy, analysis, and the high-value consulting your clients demand while we handle the rest.
                  </p>

                  <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center group-hover:scale-105 transition-transform duration-300">
                      <div className="text-3xl font-bold text-[#FF6634] mb-2">90%</div>
                      <p className="text-sm text-[#E1E5EB]">Work Automated</p>
                    </div>
                    <div className="text-center group-hover:scale-105 transition-transform duration-300" style={{ transitionDelay: '0.1s' }}>
                      <div className="text-3xl font-bold text-[#FF6634] mb-2">100%</div>
                      <p className="text-sm text-[#E1E5EB]">Expertise Unlocked</p>
                    </div>
                    <div className="text-center group-hover:scale-105 transition-transform duration-300" style={{ transitionDelay: '0.2s' }}>
                      <div className="text-3xl font-bold text-[#FF6634] mb-2">∞</div>
                      <p className="text-sm text-[#E1E5EB]">Strategic Value</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal direction="up" distance={90}>
        <div>
          <ValidationCarousel locale="en" />
        </div>
      </ScrollReveal>

      <ScrollReveal direction="left" distance={80}>
        <section id="soluciones" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Methodologies you <AnimatedTextHighlight>Accelerate</AnimatedTextHighlight>
              </h2>
              <p className="text-xl text-[#E1E5EB] max-w-3xl mx-auto">
                All the qualitative research methodologies you know, but with the speed and scalability of synthetic AI.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-[#1A1F2E] border-[#2A3441] p-6 hover:border-[#FF6634]/50 transition-all duration-300">
                <div className="w-12 h-12 bg-[#FF6634]/20 rounded-lg flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6 text-[#FF6634]" />
                </div>
                <h3 className="text-xl font-bold mb-3">In-depth Interviews</h3>
                <p className="text-[#E1E5EB] mb-4">
                  Intimate, deep 1:1 conversations that reveal authentic motivations, frustrations, and desires.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm"><CheckCircle className="w-4 h-4 text-[#FF6634] mr-2 mt-0.5 flex-shrink-0" /> Complex psychological profiles</li>
                  <li className="flex items-center text-sm"><CheckCircle className="w-4 h-4 text-[#FF6634] mr-2 mt-0.5 flex-shrink-0" /> Smart follow-up questions</li>
                  <li className="flex items-center text-sm"><CheckCircle className="w-4 h-4 text-[#FF6634] mr-2 mt-0.5 flex-shrink-0" /> Deep emotional analysis</li>
                </ul>
              </Card>

              <Card className="bg-[#1A1F2E] border-[#2A3441] p-6 hover:border-[#FF6634]/50 transition-all duration-300">
                <div className="w-12 h-12 bg-[#FF6634]/20 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-[#FF6634]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Focus Groups</h3>
                <p className="text-[#E1E5EB] mb-4">
                  Immersive group sessions with up to 12 diverse synthetic participants. Real group dynamics in minutes. You can also run mixed synthetic focus groups where a human participant joins the AIs.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm"><CheckCircle className="w-4 h-4 text-[#FF6634] mr-2 mt-0.5 flex-shrink-0" /> Demographically diverse participants</li>
                  <li className="flex items-center text-sm"><CheckCircle className="w-4 h-4 text-[#FF6634] mr-2 mt-0.5 flex-shrink-0" /> Authentic group dynamics</li>
                  <li className="flex items-center text-sm"><CheckCircle className="w-4 h-4 text-[#FF6634] mr-2 mt-0.5 flex-shrink-0" /> Mixed mode (humans + AI)</li>
                  <li className="flex items-center text-sm"><CheckCircle className="w-4 h-4 text-[#FF6634] mr-2 mt-0.5 flex-shrink-0" /> Automatic transcripts</li>
                </ul>
              </Card>

              <Card className="bg-[#1A1F2E] border-[#2A3441] p-6 hover:border-[#FF6634]/50 transition-all duration-300">
                <div className="w-12 h-12 bg-[#FF6634]/20 rounded-lg flex items-center justify-center mb-4">
                  <Search className="w-6 h-6 text-[#FF6634]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Surveys</h3>
                <Badge className="bg-[#FF6634]/20 text-[#FF6634] border-[#FF6634]/30 text-lg font-medium mb-3 px-3 py-1">Coming soon</Badge>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm"><CheckCircle className="w-4 h-4 text-[#FF6634] mr-2 mt-0.5 flex-shrink-0" /> Thousands of answers in minutes</li>
                  <li className="flex items-center text-sm"><CheckCircle className="w-4 h-4 text-[#FF6634] mr-2 mt-0.5 flex-shrink-0" /> Automatic statistical analysis</li>
                  <li className="flex items-center text-sm"><CheckCircle className="w-4 h-4 text-[#FF6634] mr-2 mt-0.5 flex-shrink-0" /> Advanced segmentation</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <AhorroSynthCalculator locale="en" />

      <section className="py-20 px-0 bg-[#1A1F2E] relative overflow-x-clip">
        <div className="absolute inset-0 z-0">
          <img
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1753258326722-7ue1k3jh895.jpg"
            alt="Tech BG"
            className="w-full h-full object-cover"
            style={{ filter: 'saturate(1.65) contrast(1.23) brightness(1.07)', objectPosition: 'center' }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom,rgba(11,14,26,0.60) 0%,rgba(11,14,26,0.70) 100%)' }} />
        </div>
        <div className="max-w-6xl mx-auto relative z-10 px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Technology{' '}
              <span
                className="text-white transition-colors duration-300 hover:text-[#FF6634] cursor-pointer"
                style={{ WebkitTransition: 'color 0.3s', MozTransition: 'color 0.3s', OTransition: 'color 0.3s', transition: 'color 0.3s' }}
              >
                Architecture
              </span>
            </h2>
            <p className="text-xl text-[#E1E5EB] max-w-3xl mx-auto">
              Advanced tech stack with multiple processing layers and a state-of-the-art, model-agnostic architecture.
            </p>
          </div>

          <div className="relative mb-12">
            <div className="relative z-10">
              <ArquitecturaTecnologica locale="en" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-[#FF6634]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3">
            <Shield className="text-white !w-[39px] !h-full" />
            <span className="text-white font-bold text-lg">All information is end-to-end encrypted</span>
            <Shield className="text-white !w-[34px] !h-full" />
          </div>
          <p className="text-white/90 mt-2 !whitespace-pre-line">GDPR compliant, SOC 2 readiness, and enterprise-grade security standards</p>
        </div>
      </section>

      <RealismSynthLayers locale="en" />

      <ScrollReveal direction="up" distance={60}>
        <LaboratorioRealismo locale="en" />
      </ScrollReveal>

      <ScrollReveal direction="up" distance={60}>
        <DiferenciaFundamental locale="en" />
      </ScrollReveal>

      <ScrollReveal direction="up" distance={60}>
        <SparkSection locale="en" />
      </ScrollReveal>

      <section id="equipo" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <AnimatedTextHighlight>Research</AnimatedTextHighlight> Team
            </h2>
            <p className="text-xl text-[#E1E5EB] max-w-3xl mx-auto">
              Founders with qualitative research and technology experience who understand both methodology and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            <div className="animate-fadeInUpTeam" style={{ animationDelay: '0.04s', animationFillMode: 'both' }}>
              <Card className="bg-[#1A1F2E] border-[#2A3441] p-6 text-center h-[400px] flex flex-col hover:scale-[1.03] hover:shadow-lg transition-transform duration-400">
                <div className="mb-6 flex-shrink-0 relative flex items-center justify-center h-36">
                  <div className="relative mx-auto">
                    <img
                      src="https://i.postimg.cc/gcB1t8BG/Cd-P-de-Pie-removebg-preview.png"
                      alt="Carlos de Prado"
                      className="w-32 h-36 object-cover object-top mx-auto animate-glow-avatar rounded-lg relative z-10"
                      style={{ maskImage: 'radial-gradient(ellipse at center, black 70%, transparent 100%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 70%, transparent 100%)' }}
                    />
                    <div className="absolute inset-0 w-32 h-36 mx-auto rounded-lg bg-gradient-to-br from-[#FF6634]/30 to-[#FF8A5B]/20 blur-md animate-pulse opacity-60 -z-10"></div>
                  </div>
                </div>
                <div className="mt-auto flex-grow flex flex-col justify-end">
                  <h3 className="text-xl font-bold mb-2 relative team-name-glow">Carlos de Prado<span className="team-underline-glow"></span></h3>
                  <p className="text-[#FF6634] mb-3">CEO & Co-Founder</p>
                  <p className="text-sm text-[#E1E5EB] leading-relaxed !whitespace-pre-line">Strategist with 20+ years leading high-performance teams and driving growth in competitive startups and global consultancies.</p>
                </div>
              </Card>
            </div>

            <div className="animate-fadeInUpTeam" style={{ animationDelay: '0.24s', animationFillMode: 'both' }}>
              <Card className="bg-[#1A1F2E] border-[#2A3441] p-6 text-center h-[400px] flex flex-col hover:scale-[1.03] hover:shadow-lg transition-transform duration-400">
                <div className="mb-6 flex-shrink-0 relative flex items-center justify-center h-36">
                  <div className="relative mx-auto">
                    <img
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1755630316605-etbjgew24x.png"
                      alt="Omar Hidalgo"
                      className="w-32 h-36 object-cover object-top mx-auto animate-glow-avatar rounded-lg relative z-10"
                      style={{ maskImage: 'radial-gradient(ellipse at center, black 70%, transparent 100%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 70%, transparent 100%)' }}
                    />
                    <div className="absolute inset-0 w-32 h-36 mx-auto rounded-lg bg-gradient-to-br from-[#FF6634]/30 to-[#FF8A5B]/20 blur-md animate-pulse opacity-60 -z-10"></div>
                  </div>
                </div>
                <div className="mt-auto flex-grow flex flex-col justify-end">
                  <h3 className="text-xl font-bold mb-2 relative team-name-glow">Omar Hidalgo<span className="team-underline-glow"></span></h3>
                  <p className="text-[#FF6634] mb-3">CIO & Co-Founder</p>
                  <p className="text-sm text-[#E1E5EB] leading-relaxed !whitespace-pre-line">Process and innovation specialist with 20+ years leading technical teams. Expert in optimizing business models through technology architecture and transformation.</p>
                </div>
              </Card>
            </div>

            <div className="animate-fadeInUpTeam" style={{ animationDelay: '0.44s', animationFillMode: 'both' }}>
              <Card className="bg-[#1A1F2E] border-[#2A3441] p-6 text-center h-[400px] flex flex-col hover:scale-[1.03] hover:shadow-lg transition-transform duration-400">
                <div className="mb-6 flex-shrink-0 relative flex items-center justify-center h-36">
                  <div className="relative mx-auto" style={{ marginTop: '8px' }}>
                    <img
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1755630595109-zlk2es9s96j.png"
                      alt="Jesús Rodríguez"
                      className="w-40 h-45 object-cover object-top mx-auto animate-glow-avatar rounded-lg relative z-10"
                      style={{ maskImage: 'radial-gradient(ellipse at center, black 70%, transparent 100%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 70%, transparent 100%)' }}
                    />
                    <div className="absolute inset-0 w-40 h-45 mx-auto rounded-lg bg-gradient-to-br from-[#FF6634]/30 to-[#FF8A5B]/20 blur-md animate-pulse opacity-60 -z-10"></div>
                  </div>
                </div>
                <div className="mt-auto flex-grow flex flex-col justify-end">
                  <h3 className="text-xl font-bold mb-2 relative team-name-glow">Jesús Rodríguez<span className="team-underline-glow"></span></h3>
                  <p className="text-[#FF6634] mb-3">CMO & Co-Founder</p>
                  <p className="text-sm text-[#E1E5EB] leading-relaxed !whitespace-pre-line">Marketing leader with 20+ years in B2B. Specialist in brand building, growth strategies, and high-impact positioning.</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <ScrollReveal direction="up" distance={60}>
        <section className="py-20 px-4 bg-gradient-to-b from-[#0B0E1A] to-[#1A1F2E]/30 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-20 left-20 w-64 h-64 bg-[#FF6634]/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#FF6634]/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Simple and <span className="text-[#FF6634]">Transparent</span> Billing
              </h2>
              <p className="text-xl text-[#E1E5EB] max-w-3xl mx-auto leading-relaxed">
                Pay per Interaction, not Preparation
              </p>
              <p className="text-lg text-[#E1E5EB] max-w-3xl mx-auto mt-4 leading-relaxed">
                Our pricing model is designed to be fair and predictable. We want you to invest your time exploring ideas, not worrying about hidden costs.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-gradient-to-br from-[#1A1F2E]/90 to-[#0B0E1A]/70 border-[#2A3441] hover:border-[#FF6634]/50 transition-all duration-500 hover:transform hover:scale-105 p-8 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6634]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-[#FF6634]/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#FF6634]/30 transition-colors duration-300">
                    <DollarSign className="w-7 h-7 text-[#FF6634]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Pay per Participant, One Time</h3>
                  <p className="text-[#E1E5EB] leading-relaxed">
                    The cost is only generated when you integrate a synthetic participant into a simulation (interview or focus group). It's a one-time payment per participant and simulation.
                  </p>
                </div>
              </Card>

              <Card className="bg-gradient-to-br from-[#1A1F2E]/90 to-[#0B0E1A]/70 border-[#2A3441] hover:border-[#FF6634]/50 transition-all duration-500 hover:transform hover:scale-105 p-8 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6634]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-[#FF6634]/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#FF6634]/30 transition-colors duration-300">
                    <Clock className="w-7 h-7 text-[#FF6634]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">24 Hours of Unlimited Interaction</h3>
                  <p className="text-[#E1E5EB] leading-relaxed">
                    Once the simulation starts, a 24-hour window of unlimited dialogue opens. During this time, you can ask all the questions you need to the participants of that session at no additional cost.
                  </p>
                </div>
              </Card>

              <Card className="bg-gradient-to-br from-[#1A1F2E]/90 to-[#0B0E1A]/70 border-[#2A3441] hover:border-[#FF6634]/50 transition-all duration-500 hover:transform hover:scale-105 p-8 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6634]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-[#FF6634]/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#FF6634]/30 transition-colors duration-300">
                    <Sparkles className="w-7 h-7 text-[#FF6634]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Everything Else is Free</h3>
                  <p className="text-[#E1E5EB] leading-relaxed mb-4">
                    We believe creativity should have no barriers. That's why all preparation and analysis work has no associated cost. You can, without limits:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start text-sm text-[#E1E5EB]">
                      <CheckCircle className="w-4 h-4 text-[#FF6634] mr-2 mt-0.5 flex-shrink-0" />
                      <span>Create and refine Synthetic Personas in your library</span>
                    </li>
                    <li className="flex items-start text-sm text-[#E1E5EB]">
                      <CheckCircle className="w-4 h-4 text-[#FF6634] mr-2 mt-0.5 flex-shrink-0" />
                      <span>Design Moderation Guides and Visual Stimuli with AI</span>
                    </li>
                    <li className="flex items-start text-sm text-[#E1E5EB]">
                      <CheckCircle className="w-4 h-4 text-[#FF6634] mr-2 mt-0.5 flex-shrink-0" />
                      <span>Generate executive summaries and key findings analysis post-simulation</span>
                    </li>
                  </ul>
                </div>
              </Card>
            </div>

            <div className="flex justify-center">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-[#FF6634]/20 to-[#FF8A5B]/20 border border-[#FF6634]/30">
                <Zap className="w-5 h-5 text-[#FF6634] mr-2" />
                <span className="text-white font-semibold">Fair and predictable model to explore without limits</span>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <section id="precios" className="py-20 px-4 bg-gradient-to-b from-[#171B28] to-[#0B0E1A] relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-20">
          <Pricing locale="en" />
        </div>
      </section>

      <Testimonial3DRoulette locale="en" />

      <ScrollReveal direction="left" distance={80}>
        <div className="py-16 px-4 flex items-center justify-center bg-gradient-to-r from-[#1A1F2E]/80 to-[#0B0E1A]/90 border-y border-[#2A3441]">
          <div className="w-full max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-10">
            <span className="flex-1 min-w-[270px] text-2xl md:text-3xl font-bold text-center sm:text-left text-white sm:pr-8 leading-tight whitespace-pre-line">
              Get insights on how AI is <span className="text-[#FF6634]">transforming</span> Market Research
            </span>
            <div className="flex-1 w-full max-w-md min-w-[270px]">
              <NewsletterBannerHome locale="en" buttonLabel="Join" placeholder="Your email" />
            </div>
          </div>
        </div>
      </ScrollReveal>

      <section id="faq" className="px-4 pt-20 -mt-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-[#E1E5EB] max-w-2xl mx-auto">Get answers to your questions about our AI agents and platform.</p>
        </div>
      </section>

      <FaqSection hideHeader faqs={faqs} />

      <footer className="bg-[#1A1F2E] border-t border-[#2A3441]">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <div className="flex items-center mb-4">
                <img src="https://i.postimg.cc/bvqJBxD6/Logo-Synth-sin-fondo.png" alt="Synth" className="h-10 w-auto object-contain" />
              </div>
              <p className="text-[#E1E5EB] max-w-md mb-6 !whitespace-pre-line">
                The sandbox of human experience. Test, validate, and refine business decisions before real-world impact.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Mail className="w-4 h-4 text-[#FF6634] mr-3 flex-shrink-0" />
                  <a href="mailto:hola@synth-insights.com" className="text-[#E1E5EB] hover:text-[#FF6634] transition-colors">hola@synth-insights.com</a>
                </li>
                <li className="flex items-center">
                  <Phone className="w-4 h-4 text-[#FF6634] mr-3 flex-shrink-0" />
                  <a href="tel:+34620915003" className="text-[#E1E5EB] hover:text-[#FF6634] transition-colors">+34 620915003</a>
                </li>
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 text-[#FF6634] mr-3 flex-shrink-0" />
                  <span className="text-[#E1E5EB]">Madrid, Spain</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#soluciones" className="text-[#E1E5EB] hover:text-[#FF6634] transition-colors">Methodologies</a></li>
                <li><a href="#precios" className="text-[#E1E5EB] hover:text-[#FF6634] transition-colors">Pricing</a></li>
                <li><a href="#faq" className="text-[#E1E5EB] hover:text-[#FF6634] transition-colors">FAQ</a></li>
                <li><a href="#" className="text-[#E1E5EB] hover:text-[#FF6634] transition-colors">Use Cases</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="/centro-confianza-seguridad" className="text-[#E1E5EB] hover:text-[#FF6634] transition-colors">Trust & Security Center</a></li>
                <li><a href="/blog" className="text-[#E1E5EB] hover:text-[#FF6634] transition-colors">Blog</a></li>
                <li><a href="mailto:hola@synth-insights.com" className="text-[#E1E5EB] hover:text-[#FF6634] transition-colors">Contact</a></li>
                <li><a href="mailto:hola@synth-insights.com?subject=Support" className="text-[#E1E5EB] hover:text-[#FF6634] transition-colors">Support</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#2A3441] pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6">
              <a href="/en/privacy-policy" className="text-[#E1E5EB] hover:text-[#FF6634] text-sm transition-colors">Privacy Policy</a>
              <a href="/en/terms-and-conditions" className="text-[#E1E5EB] hover:text-[#FF6634] text-sm transition-colors">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </footer>

      <div className="border-t border-[#2A3441] pt-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-[#E1E5EB] mb-4 md:mb-0">© 2025 Synth. All rights reserved.</p>
      </div>
    </div>
  );
}