import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnimatedTextHighlight } from "@/components/blocks/text-animations/animated-text-highlight";
import { 
  ArrowLeft, 
  Calendar, 
  User, 
  Clock, 
  ArrowRight,
  Brain,
  Zap,
  Target,
  TrendingUp
} from "lucide-react";
import { fetchPosts, type Post } from "@/lib/contentful";
import { Navigation } from "@/components/sections/navigation";
import { Footer } from "@/components/sections/footer";
import { BlogNewsletterForm } from "@/components/sections/blog-newsletter-form";

export const revalidate = 60;
export const dynamic = "force-dynamic";

function estimateReadTime(text?: string) {
  if (!text) return "5 min";
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min`;
}

export default async function BlogPage() {
  const posts = await fetchPosts();
  const featuredPost = posts.find(p => p.featured) || posts[0];
  const otherPosts = posts.filter(p => (featuredPost ? p.slug !== featuredPost.slug : true));

  return (
    <div className="min-h-screen bg-[#0B0E1A] text-white">
      {/* Navigation */}
      <Navigation />

      {/* Header */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-b from-[#0B0E1A] to-[#1A1F2E]">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="inline-flex items-center text-[#E1E5EB] hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al inicio
          </Link>
          
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Blog de <AnimatedTextHighlight>Synth</AnimatedTextHighlight>
            </h1>
            <p className="text-xl text-[#E1E5EB] max-w-3xl mx-auto">
              Insights, metodologías y casos de éxito en investigación sintética. 
              Todo lo que necesitas saber sobre el futuro de la investigación cualitativa.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <Badge className="bg-[#FF6634] text-white mb-4">Artículo Destacado</Badge>
            </div>
            
            <Card className="bg-[#1A1F2E] border-[#2A3441] overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-8 p-8">
                <div>
                  {featuredPost.tags?.[0] && (
                    <Badge className="bg-[#FF6634]/20 text-[#FF6634] border-[#FF6634]/30 mb-4">
                      {featuredPost.tags[0]}
                    </Badge>
                  )}
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                    {featuredPost.title}
                  </h2>
                  <p className="text-[#E1E5EB] mb-6 text-lg leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center space-x-6 text-sm text-[#E1E5EB] mb-6">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      {featuredPost.author || "Equipo Synth"}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {featuredPost.date ? new Date(featuredPost.date).toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" }) : ""}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {estimateReadTime(featuredPost.excerpt)}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags?.map((tag, index) => (
                      <Badge key={index} className="bg:white/10 text:white border-white/20">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button asChild className="bg-[#FF6634] hover:bg-[#FF6634]/90 text-white">
                    <Link href={`/blog/${encodeURIComponent(featuredPost.slug)}#top`}>
                      Leer Artículo
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
                
                {/* Featured Image */}
                <div className="rounded-lg overflow-hidden border border-[#FF6634]/30 bg-black/20 flex items-center justify-center">
                  {featuredPost.coverImageUrl ? (
                    <img
                      src={featuredPost.coverImageUrl}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-center p-12">
                      <Brain className="w-16 h-16 text-[#FF6634] mx-auto mb-4" />
                      <p className="text-[#E1E5EB]">Artículo destacado sobre IA e investigación</p>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* All Posts Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Todos los Artículos</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post: Post) => {
              const getCategoryIcon = (category: string) => {
                switch(category) {
                  case 'Investigación': return <Target className="w-5 h-5" />;
                  case 'Tecnología': return <Zap className="w-5 h-5" />;
                  case 'Casos de Éxito': return <TrendingUp className="w-5 h-5" />;
                  default: return <Brain className="w-5 h-5" />;
                }
              };
              
              return (
                <Card key={post.slug} className="bg-[#1A1F2E] border-[#2A3441] hover:border-[#FF6634]/50 transition-all duration-300 group overflow-hidden">
                  {/* Card Image */}
                  {post.coverImageUrl && (
                    <div className="w-full h-40 overflow-hidden">
                      <img
                        src={post.coverImageUrl}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="text-[#FF6634]">
                        {getCategoryIcon(post.tags?.[0] || "")}
                      </div>
                      <Badge className="bg-[#FF6634]/20 text-[#FF6634] border-[#FF6634]/30">
                        {post.tags?.[0] || "General"}
                      </Badge>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 group-hover:text-[#FF6634] transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-[#E1E5EB] mb-4 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center space-x-4 text-xs text-[#E1E5EB] mb-4">
                      <div className="flex items-center">
                        <User className="w-3 h-3 mr-1" />
                        {post.author || "Equipo Synth"}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {estimateReadTime(post.excerpt)}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags?.map((tag, index) => (
                        <Badge key={index} className="bg-white/10 text-white border-white/20 text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-[#E1E5EB]">{post.date ? new Date(post.date).toLocaleDateString("es-ES", { day: "numeric", month: "short", year: "numeric" }) : ""}</span>
                      <Button asChild variant="ghost" size="sm" className="text-[#FF6634] hover:text-white hover:bg-[#FF6634]">
                        <Link href={`/blog/${encodeURIComponent(post.slug)}#top`}>
                          Leer más
                          <ArrowRight className="w-3 h-3 ml-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <BlogNewsletterForm />

      {/* Footer */}
      <Footer />
    </div>
  );
}