import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Building2, Users, Star, Quote, Target, Lightbulb, Rocket, Zap, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import { Navigation } from "@/components/sections/navigation";

export const metadata = {
  title: "Case Studies | Synth",
  description:
    "Real results powered by synthetic research. Explore how agencies and consultancies use Synth to achieve measurable outcomes.",
};

export default function CaseStudiesENPage() {
  return (
    <div className="min-h-screen bg-[#0B0E1A] overflow-x-hidden">
      {/* Navigation Header */}
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-6 bg-[#FF6634]/10 text-[#FF6634] border-[#FF6634]/20">Real Case Studies</Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            They listened to <span className="text-[#FF6634]">Synthetic Customers</span>.
            <br />The Results Were <span className="text-[#FF6634]">Real</span>.
          </h1>
          <p className="text-xl text-[#E1E5EB] mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover how agencies and consultancies are using Synth to generate deep cultural insights in days, not months—
            transforming their strategic capability.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-6 !w-full !h-[5274px]">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Case Study 1: Natural Cosmetics - FULL TEXT */}
          <Card className="bg-[#1A1F2E] border-[#2A3441] overflow-hidden">
            <CardHeader className="pb-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <Badge className="bg-[#FF6634]/10 text-[#FF6634] border-[#FF6634]/20">
                    <Target className="w-3 h-3 mr-1" />
                    Cosmetics & Beauty
                  </Badge>
                  <Badge className="bg-green-500/10 text-green-400 border-green-500/20">450% Engagement</Badge>
                </div>
                <Lightbulb className="w-8 h-8 text-[#FF6634]" />
              </div>
              <CardTitle className="text-3xl text-white mb-3 leading-tight">
                Uncovering the "Authenticity" Barrier: How an Agency Helped a New Natural Cosmetics Brand Find Its Voice
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-[#0B0E1A] p-4 rounded-lg border border-[#2A3441]">
                    <h4 className="text-[#FF6634] font-semibold mb-2 flex items-center">
                      <Building2 className="w-4 h-4 mr-2" />
                      Client
                    </h4>
                    <p className="text-[#E1E5EB]">Mid-sized Market Research Agency</p>
                    <p className="text-sm text-[#E1E5EB]/80 mt-1">
                      <strong>End Client:</strong> New natural cosmetics brand (SMB)
                    </p>
                  </div>

                  <div className="bg-[#0B0E1A] p-4 rounded-lg border border-[#2A3441]">
                    <h4 className="text-[#FF6634] font-semibold mb-2 flex items-center">
                      <Target className="w-4 h-4 mr-2" />
                      The Challenge
                    </h4>
                    <p className="text-[#E1E5EB] text-sm leading-relaxed">
                      The SMB had an excellent product, but their first social campaigns flopped. Engagement was low and they were
                      ignored against established indie brands. The research agency needed to quickly diagnose why the message wasn't
                      connecting—before the SMB burned through their launch budget.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-[#FF6634]/5 p-4 rounded-lg border border-[#FF6634]/20">
                    <h4 className="text-[#FF6634] font-semibold mb-2 flex items-center">
                      <Zap className="w-4 h-4 mr-2" />
                      The Synth Solution (Cultural Diagnosis)
                    </h4>
                    <p className="text-[#E1E5EB] text-sm leading-relaxed">
                      The agency's Head of Research, acting as <strong>Simulation Director</strong>, designed a focus group with the
                      Persona <strong>“Digital Urban Youth”</strong>. Her expert move was to use the <strong>Contextual Layer</strong>
                      to simulate the real market: she assigned half the participants the <strong>Hidden Agenda "Brand-Anchored"</strong>,
                      programming them with loyalty to a competing indie brand.
                    </p>
                  </div>

                  <div className="bg-yellow-500/5 p-4 rounded-lg border border-yellow-500/20">
                    <h4 className="text-yellow-400 font-semibold mb-2 flex items-center">
                      <Lightbulb className="w-4 h-4 mr-2" />
                      The Key Insight
                    </h4>
                    <p className="text-[#E1E5EB] text-sm leading-relaxed">
                      The simulation was a revelation. "Neutral" participants found the product "interesting." But the
                      "anchored" ones were brutal. Their rejection wasn't about ingredients, it was about <strong>authenticity</strong>.
                      Using the language of their worldview, they called the brand's communication <em>greenwashing vibes</em> and
                      <em>a boomer brand trying to be woke</em>. The agency discovered the product wasn't the problem—the tone of
                      voice and visual identity felt corporate and inauthentic.
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Impact - expanded */}
              <div className="bg-[#FF6634]/10 border border-[#FF6634]/20 rounded-lg p-6">
                <h4 className="text-[#FF6634] font-semibold mb-4 text-lg">Business Impact</h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-[#E1E5EB] font-semibold mb-2">1. High-Value Strategic Recommendation:</p>
                    <p className="text-[#E1E5EB] text-sm leading-relaxed">
                      The agency didn't deliver a simple report. They delivered a <strong>"Brand Authenticity Diagnosis"</strong> with
                      concrete examples from the simulation—positioning themselves as a strategic partner, not just a data vendor.
                    </p>
                  </div>
                  <div>
                    <p className="text-[#E1E5EB] font-semibold mb-2">2. Engagement Lift for the Client:</p>
                    <p className="text-[#E1E5EB] text-sm leading-relaxed">
                      The SMB executed a full rebrand (new packaging, new tone of voice) based on the insights. Their
                      <strong>Instagram engagement rate increased by 450%</strong> the following quarter.
                    </p>
                  </div>
                  <div>
                    <p className="text-[#E1E5EB] font-semibold mb-2">3. Efficiency and Profitability for the Agency:</p>
                    <p className="text-[#E1E5EB] text-sm leading-relaxed">
                      The agency delivered deep cultural insight in <strong>under a week</strong>, enabling them to increase
                      <strong>project capacity by 20%</strong> that year and significantly boosting profitability.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-[#FF6634]/10 p-4 rounded-lg text-center border border-[#FF6634]/20">
                  <div className="text-2xl font-bold text-[#FF6634] mb-1">450%</div>
                  <div className="text-sm text-[#E1E5EB]">Instagram engagement lift</div>
                </div>
                <div className="bg-[#FF6634]/10 p-4 rounded-lg text-center border border-[#FF6634]/20">
                  <div className="text-2xl font-bold text-[#FF6634] mb-1">1 week</div>
                  <div className="text-sm text-[#E1E5EB]">Time to cultural insight</div>
                </div>
                <div className="bg-[#FF6634]/10 p-4 rounded-lg text-center border border-[#FF6634]/20">
                  <div className="text-2xl font-bold text-[#FF6634] mb-1">20%</div>
                  <div className="text-sm text-[#E1E5EB]">Increase in project capacity</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Case Study 2: Food SMB - FULL TEXT */}
          <Card className="bg-[#1A1F2E] border-[#2A3441] overflow-hidden">
            <CardHeader className="pb-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <Badge className="bg-[#FF6634]/10 text-[#FF6634] border-[#FF6634]/20">
                    <Target className="w-3 h-3 mr-1" />
                    Food & FMCG
                  </Badge>
                  <Badge className="bg-green-500/10 text-green-400 border-green-500/20">300% Engagement</Badge>
                </div>
                <Users className="w-8 h-8 text-[#FF6634]" />
              </div>
              <CardTitle className="text-3xl text-white mb-3 leading-tight">
                How a Research Agency Helped a Food SMB Connect with Gen Z
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-[#0B0E1A] p-4 rounded-lg border border-[#2A3441]">
                    <h4 className="text-[#FF6634] font-semibold mb-2 flex items-center">
                      <Building2 className="w-4 h-4 mr-2" />
                      Client
                    </h4>
                    <p className="text-[#E1E5EB]">Boutique Market Research Agency</p>
                    <p className="text-sm text-[#E1E5EB]/80 mt-1">
                      <strong>End Client:</strong> Family-owned gourmet products SMB
                    </p>
                  </div>

                  <div className="bg-[#0B0E1A] p-4 rounded-lg border border-[#2A3441]">
                    <h4 className="text-[#FF6634] font-semibold mb-2 flex items-center">
                      <Target className="w-4 h-4 mr-2" />
                      The Challenge
                    </h4>
                    <p className="text-[#E1E5EB] text-sm leading-relaxed">
                      The SMB wanted to launch a new line of organic snacks to rejuvenate the brand, but they were completely disconnected
                      from Gen Z. Their first campaign draft leaned on "tradition" and "family recipes." The research agency knew this was the
                      wrong direction, but needed <strong>hard proof and fast insights</strong> to convince a conservative leadership team.
                      A traditional study was too slow and expensive.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-[#FF6634]/5 p-4 rounded-lg border border-[#FF6634]/20">
                    <h4 className="text-[#FF6634] font-semibold mb-2 flex items-center">
                      <Zap className="w-4 h-4 mr-2" />
                      The Synth Solution (Expert-Led)
                    </h4>
                    <p className="text-[#E1E5EB] text-sm leading-relaxed mb-3">
                      The agency's Head of Research, acting as <strong>Simulation Director</strong>, took control. Her experience told her the
                      problem was cultural.
                    </p>
                    <ol className="text-[#E1E5EB] text-sm leading-relaxed space-y-2 list-decimal list-inside">
                      <li>She created a detailed target Persona: "Digital Urban Youth."</li>
                      <li>The Synth engine <strong>automatically assigned the Worldview</strong> with their language and values.</li>
                      <li>
                        The expert move was using the <strong>Contextual Layer</strong>: she changed the context to
                        <strong>"Close Friend"</strong> to get the truth without social filters.
                      </li>
                    </ol>
                  </div>

                  <div className="bg-yellow-500/5 p-4 rounded-lg border border-yellow-500/20">
                    <h4 className="text-yellow-400 font-semibold mb-2 flex items-center">
                      <Lightbulb className="w-4 h-4 mr-2" />
                      The Key Insight
                    </h4>
                    <p className="text-[#E1E5EB] text-sm leading-relaxed">
                      The simulation was eye-opening. Synthetic participants, speaking with the sociolect and values of their cultural "tribe," 
                      tore apart the "tradition" concept—calling it <em>cringe</em> and <em>boomer marketing</em>. They didn't just
                      reject the message; they articulated what they did want: <strong>radical transparency in ingredients, an authentic
                      sustainability story (not "greenwashing"), and a brand that "gets their vibe."</strong> The agency lead didn't just get a
                      "no"—she got the <strong>complete instruction manual</strong> for how to connect with them.
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Impact - expanded */}
              <div className="bg-[#FF6634]/10 border border-[#FF6634]/20 rounded-lg p-6">
                <h4 className="text-[#FF6634] font-semibold mb-4 text-lg">Business Impact (KPIs)</h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-[#E1E5EB] font-semibold mb-2">1. Increased Project Value for the Agency:</p>
                    <p className="text-[#E1E5EB] text-sm leading-relaxed">
                      Instead of a simple concept test, the agency delivered a <strong>"Generational Connection Cultural Analysis."</strong>
                      This allowed them to bill the project with a <strong>35% higher margin</strong> than a traditional focus group.
                    </p>
                  </div>
                  <div>
                    <p className="text-[#E1E5EB] font-semibold mb-2">2. Risk Mitigation for the SMB:</p>
                    <p className="text-[#E1E5EB] text-sm leading-relaxed">
                      The SMB <strong>avoided an almost-certain launch failure</strong>, pivoting their entire marketing strategy before
                      investing in production and media.
                    </p>
                  </div>
                  <div>
                    <p className="text-[#E1E5EB] font-semibold mb-2">3. Engagement Rate Lift:</p>
                    <p className="text-[#E1E5EB] text-sm leading-relaxed">
                      The new campaign, co-created with Synth insights, achieved in its first month a
                      <strong>300% higher social engagement rate</strong> than the brand's previous campaigns.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-[#FF6634]/10 p-4 rounded-lg text-center border border-[#FF6634]/20">
                  <div className="text-2xl font-bold text-[#FF6634] mb-1">35%</div>
                  <div className="text-sm text-[#E1E5EB]">Higher project margin</div>
                </div>
                <div className="bg-[#FF6634]/10 p-4 rounded-lg text-center border border-[#FF6634]/20">
                  <div className="text-2xl font-bold text-[#FF6634] mb-1">300%</div>
                  <div className="text-sm text-[#E1E5EB]">More engagement vs. prior</div>
                </div>
                <div className="bg-[#FF6634]/10 p-4 rounded-lg text-center border border-[#FF6634]/20">
                  <div className="text-2xl font-bold text-[#FF6634] mb-1">0%</div>
                  <div className="text-sm text-[#E1E5EB]">Launch failure risk</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Case Study 3: FMCG - FULL TEXT */}
          <Card className="bg-[#1A1F2E] border-[#2A3441] overflow-hidden">
            <CardHeader className="pb-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <Badge className="bg-[#FF6634]/10 text-[#FF6634] border-[#FF6634]/20">
                    <Target className="w-3 h-3 mr-1" />
                    FMCG
                  </Badge>
                  <Badge className="bg-green-500/10 text-green-400 border-green-500/20">€1M+ Saved</Badge>
                </div>
                <Rocket className="w-8 h-8 text-[#FF6634]" />
              </div>
              <CardTitle className="text-3xl text-white mb-3 leading-tight">
                How Launch Risk Was Reduced for a New FMCG Product
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-[#0B0E1A] p-4 rounded-lg border border-[#2A3441]">
                    <h4 className="text-[#FF6634] font-semibold mb-2 flex items-center">
                      <Building2 className="w-4 h-4 mr-2" />
                      Client
                    </h4>
                    <p className="text-[#E1E5EB]">Product Innovation Consultancy</p>
                    <p className="text-sm text-[#E1E5EB]/80 mt-1">
                      <strong>Sector:</strong> FMCG (Food) — Industry leader
                    </p>
                  </div>

                  <div className="bg-[#0B0E1A] p-4 rounded-lg border border-[#2A3441]">
                    <h4 className="text-[#FF6634] font-semibold mb-2 flex items-center">
                      <Target className="w-4 h-4 mr-2" />
                      The Challenge
                    </h4>
                    <p className="text-[#E1E5EB] text-sm leading-relaxed">
                      Their client, a leader in the food industry, wanted to launch a new line of functional beverages but wasn't sure which
                      positioning angle would work best: energy, relaxation, or focus. A wrong decision would mean millions lost in
                      development and marketing.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-[#FF6634]/5 p-4 rounded-lg border border-[#FF6634]/20">
                    <h4 className="text-[#FF6634] font-semibold mb-2 flex items-center">
                      <Zap className="w-4 h-4 mr-2" />
                      The Synth Solution
                    </h4>
                    <p className="text-[#E1E5EB] text-sm leading-relaxed">
                      The consultancy designed a synthetic focus group to test the three concepts. The <strong>Simulation Director</strong>
                      used the <strong>Contextual Layer</strong> with granular control: two participants were assigned the
                      <strong>Hidden Agenda "The Skeptic"</strong> and two others the <strong>Emotional State "Stressed"</strong> to simulate
                      real consumer conditions (time pressure, skepticism about health claims).
                    </p>
                  </div>

                  <div className="bg-yellow-500/5 p-4 rounded-lg border border-yellow-500/20">
                    <h4 className="text-yellow-400 font-semibold mb-2 flex items-center">
                      <Lightbulb className="w-4 h-4 mr-2" />
                      The Key Insight
                    </h4>
                    <p className="text-[#E1E5EB] text-sm leading-relaxed">
                      The "energy" and "relaxation" concepts were torn apart by skeptics ("another sugary coffee") and stressed participants
                      ("I don't have time for this"). However, the <strong>"focus"</strong> concept resonated unexpectedly. Participants
                      linked it to the need to perform at work, seeing it not as a luxury but as a <strong>productivity tool</strong>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Impact - expanded */}
              <div className="bg-[#FF6634]/10 border border-[#FF6634]/20 rounded-lg p-6">
                <h4 className="text-[#FF6634] font-semibold mb-4 text-lg">Business Impact (KPIs)</h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-[#E1E5EB] font-semibold mb-2">1. Innovation Risk Reduction:</p>
                    <p className="text-[#E1E5EB] text-sm leading-relaxed">
                      Two product paths that would have failed were discarded, <strong>saving an estimated 9 months of R&D and €1M+ in
                      launch costs</strong>.
                    </p>
                  </div>
                  <div>
                    <p className="text-[#E1E5EB] font-semibold mb-2">2. Higher Launch Success Rate:</p>
                    <p className="text-[#E1E5EB] text-sm leading-relaxed">
                      They focused on the "productivity" angle, which led the product to <strong>exceed sales forecasts by 40% in its first
                      year</strong>.
                    </p>
                  </div>
                  <div>
                    <p className="text-[#E1E5EB] font-semibold mb-2">3. Speed-to-Market:</p>
                    <p className="text-[#E1E5EB] text-sm leading-relaxed">
                      The strategic positioning decision was made in <strong>one week</strong>, instead of the 4–6 months a traditional
                      multi-country study would have taken.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-[#FF6634]/10 p-4 rounded-lg text-center border border-[#FF6634]/20">
                  <div className="text-2xl font-bold text-[#FF6634] mb-1">€1M+</div>
                  <div className="text-sm text-[#E1E5EB]">Launch costs avoided</div>
                </div>
                <div className="bg-[#FF6634]/10 p-4 rounded-lg text-center border border-[#FF6634]/20">
                  <div className="text-2xl font-bold text-[#FF6634] mb-1">40%</div>
                  <div className="text-sm text-[#E1E5EB]">Exceeded sales forecast</div>
                </div>
                <div className="bg-[#FF6634]/10 p-4 rounded-lg text-center border border-[#FF6634]/20">
                  <div className="text-2xl font-bold text-[#FF6634] mb-1">1 week</div>
                  <div className="text-sm text-[#E1E5EB]">vs. 4–6 months traditional</div>
                </div>
              </div>

              <div className="bg-[#FF6634]/10 border border-[#FF6634]/20 rounded-lg p-6">
                <Quote className="w-8 h-8 text-[#FF6634] mb-4" />
                <p className="text-[#E1E5EB] italic text-lg leading-relaxed mb-4">
                  "In the final presentation, we revealed our 'secret weapon': we had validated our hypothesis in a human-behavior sandbox
                  with Synth. We showed transcript excerpts demonstrating how our idea resonated with the client's cultural archetype."
                </p>
                <p className="text-sm text-[#FF6634] font-semibold">— Planning Team, Top-5 Agency (Spain)</p>
                <p className="text-xs text-[#E1E5EB]/70 mt-2">
                  <strong>Outcome:</strong> This ultra-fast, data-backed validation was the decisive factor. The client saw it as a
                  revolutionary way to de-risk marketing investment.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#FF6634] to-[#FF8A5B]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready for Your Next Breakthrough Insight?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join leading agencies and consultancies already using Synth to generate deep cultural insights in days, not months.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="bg-white text-[#FF6634] hover:bg-white/90 px-8 py-3 text-lg font-semibold !whitespace-pre-line">
              Try it free
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#FF6634] px-8 py-3 text-lg font-semibold !whitespace-pre-line"
            >
              See demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
          <p className="text-white/80 text-sm mt-4">No commitment • 5-minute setup • Full support in English</p>
        </div>
      </section>

      {/* Footer - Same as home page */}
      <footer className="bg-[#1A1F2E] border-t border-[#2A3441]">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo & description */}
            <div className="md:col-span-1">
              <div className="flex items-center mb-4">
                <img
                  src="https://i.postimg.cc/bvqJBxD6/Logo-Synth-sin-fondo.png"
                  alt="Synth"
                  className="h-10 w-auto object-contain"
                />
              </div>
              <p className="text-[#E1E5EB] max-w-md mb-6">
                Revolutionize your qualitative research with artificial intelligence. Discover deep insights in minutes, not months.
              </p>
            </div>

            {/* Contact Information */}
            <div>
              <h4 className="font-bold text-white mb-4">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Mail className="w-4 h-4 text-[#FF6634] mr-3 flex-shrink-0" />
                  <a href="mailto:hola@synth-insights.com" className="text-[#E1E5EB] hover:text-[#FF6634] transition-colors">
                    hola@synth-insights.com
                  </a>
                </li>
                <li className="flex items-center">
                  <Phone className="w-4 h-4 text-[#FF6634] mr-3 flex-shrink-0" />
                  <a href="tel:+34620915003" className="text-[#E1E5EB] hover:text-[#FF6634] transition-colors">
                    +34 620915003
                  </a>
                </li>
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 text-[#FF6634] mr-3 flex-shrink-0" />
                  <span className="text-[#E1E5EB]">Madrid, Spain</span>
                </li>
              </ul>
            </div>

            {/* Product */}
            <div>
              <h4 className="font-bold text-white mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/en#solutions" className="text-[#E1E5EB] hover:text-[#FF6634] transition-colors">
                    Methodologies
                  </a>
                </li>
                <li>
                  <a href="/en#pricing" className="text-[#E1E5EB] hover:text-[#FF6634] transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="/en#faq" className="text-[#E1E5EB] hover:text-[#FF6634] transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="/en/case-studies" className="text-[#E1E5EB] hover:text-[#FF6634] transition-colors">
                    Case Studies
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-bold text-white mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/centro-confianza-seguridad" className="text-[#E1E5EB] hover:text-[#FF6634] transition-colors">
                    Trust & Security Center
                  </a>
                </li>
                <li>
                  <a href="/blog" className="text-[#E1E5EB] hover:text-[#FF6634] transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="mailto:hola@synth-insights.com" className="text-[#E1E5EB] hover:text-[#FF6634] transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="mailto:hola@synth-insights.com?subject=Support" className="text-[#E1E5EB] hover:text-[#FF6634] transition-colors">
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-[#2A3441] pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6">
              <a href="/en/privacy-policy" className="text-[#E1E5EB] hover:text-[#FF6634] text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="/en/terms-and-conditions" className="text-[#E1E5EB] hover:text-[#FF6634] text-sm transition-colors">
                Terms & Conditions
              </a>
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