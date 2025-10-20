import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Building2, Users, Target, Lightbulb, Rocket, Zap, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import { Navigation } from "@/components/sections/navigation";

export default function CasosDeExitoPage() {
  return (
    <div className="min-h-screen bg-[#0B0E1A] overflow-x-hidden">
      {/* Navigation Header */}
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-6 bg-[#FF6634]/10 text-[#FF6634] border-[#FF6634]/20">
            Casos de Éxito Reales
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Escucharon a Clientes <span className="text-[#FF6634]">Sintéticos</span>.
            <br />Los Resultados Fueron <span className="text-[#FF6634]">Reales</span>.
          </h1>
          <p className="text-xl text-[#E1E5EB] mb-8 max-w-3xl mx-auto leading-relaxed">
            Descubre cómo agencias y consultoras están usando Synth para generar insights culturales profundos 
            en días, no meses, transformando su capacidad estratégica.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-6 !w-full !h-[5274px]">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Case Study 1: Cosmética Natural - TEXTO COMPLETO */}
          <Card className="bg-[#1A1F2E] border-[#2A3441] overflow-hidden">
            <CardHeader className="pb-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <Badge className="bg-[#FF6634]/10 text-[#FF6634] border-[#FF6634]/20">
                    <Target className="w-3 h-3 mr-1" />
                    Cosmética & Beauty
                  </Badge>
                  <Badge className="bg-green-500/10 text-green-400 border-green-500/20">
                    450% Engagement
                  </Badge>
                </div>
                <Lightbulb className="w-8 h-8 text-[#FF6634]" />
              </div>
              <CardTitle className="text-3xl text-white mb-3 leading-tight">
                Descubriendo la Barrera de la "Autenticidad": Cómo una Agencia Ayudó a una Nueva Marca de Cosmética Natural a Encontrar su Voz
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-[#0B0E1A] p-4 rounded-lg border border-[#2A3441]">
                    <h4 className="text-[#FF6634] font-semibold mb-2 flex items-center">
                      <Building2 className="w-4 h-4 mr-2" />
                      Cliente
                    </h4>
                    <p className="text-[#E1E5EB]">Agencia de Investigación de Mercados Mediana</p>
                    <p className="text-sm text-[#E1E5EB]/80 mt-1"><strong>Cliente Final:</strong> Nueva marca de cosmética natural (PYME)</p>
                  </div>
                  
                  <div className="bg-[#0B0E1A] p-4 rounded-lg border border-[#2A3441]">
                    <h4 className="text-[#FF6634] font-semibold mb-2 flex items-center">
                      <Target className="w-4 h-4 mr-2" />
                      El Desafío
                    </h4>
                    <p className="text-[#E1E5EB] text-sm leading-relaxed">
                      La PYME tenía un producto excelente, pero sus primeras campañas en redes sociales fracasaban. 
                      El engagement era bajo y eran ignorados frente a marcas "indie" ya establecidas. 
                      La agencia de investigación necesitaba diagnosticar rápidamente por qué el mensaje no conectaba, 
                      antes de que la PYME agotara su presupuesto de lanzamiento.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-[#FF6634]/5 p-4 rounded-lg border border-[#FF6634]/20">
                    <h4 className="text-[#FF6634] font-semibold mb-2 flex items-center">
                      <Zap className="w-4 h-4 mr-2" />
                      La Solución Synth (El "Diagnóstico Cultural")
                    </h4>
                    <p className="text-[#E1E5EB] text-sm leading-relaxed">
                      La directora de investigación de la agencia, como <strong>Directora de Simulación</strong>, diseñó un focus group 
                      con la Persona <strong>"Jóvenes Urbanos Digitales"</strong>. Su movimiento de experta fue usar la 
                     <strong> Capa Contextual</strong> para simular el mercado real: asignó a la mitad de los participantes la 
                     <strong> Agenda Oculta "El Anclado a la Marca"</strong>, programándolos con lealtad a una marca "indie" de la competencia.
                    </p>
                  </div>
                  
                  <div className="bg-yellow-500/5 p-4 rounded-lg border border-yellow-500/20">
                    <h4 className="text-yellow-400 font-semibold mb-2 flex items-center">
                      <Lightbulb className="w-4 h-4 mr-2" />
                      El Insight Clave
                    </h4>
                    <p className="text-[#E1E5EB] text-sm leading-relaxed">
                      La simulación fue una revelación. Los participantes "neutrales" encontraron el producto "interesante". 
                      Sin embargo, los "anclados" fueron brutales. Su rechazo no era sobre los ingredientes, sino sobre la 
                     <strong> autenticidad</strong>. Usando frases de su cosmovisión, calificaron la comunicación de la marca como 
                     <em>"da vibras de greenwashing"</em> y <em>"se siente como una marca de boomer intentando ser woke"</em>. 
                      La agencia descubrió que el problema no era el producto, sino un tono de voz y una identidad visual que 
                      se percibían como corporativas e inauténticas.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Impacto en el Negocio - Sección expandida */}
              <div className="bg-[#FF6634]/10 border border-[#FF6634]/20 rounded-lg p-6">
                <h4 className="text-[#FF6634] font-semibold mb-4 text-lg">El Impacto en el Negocio</h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-[#E1E5EB] font-semibold mb-2">1. Recomendación Estratégica de Alto Valor:</p>
                    <p className="text-[#E1E5EB] text-sm leading-relaxed">
                      La agencia no entregó un simple informe. Entregó un <strong>"Diagnóstico de Autenticidad de Marca"</strong> 
                      con ejemplos concretos de la simulación, posicionándose como un socio estratégico y no un simple proveedor de datos.
                    </p>
                  </div>
                  <div>
                    <p className="text-[#E1E5EB] font-semibold mb-2">2. Aumento de la Tasa de Engagement para el Cliente:</p>
                    <p className="text-[#E1E5EB] text-sm leading-relaxed">
                      La PYME ejecutó un rebrand completo (nuevo packaging, nuevo tono de voz) basado en los insights. Su 
                     <strong> tasa de engagement en Instagram aumentó en un 450%</strong> en el siguiente trimestre.
                    </p>
                  </div>
                  <div>
                    <p className="text-[#E1E5EB] font-semibold mb-2">3. Eficiencia y Rentabilidad para la Agencia:</p>
                    <p className="text-[#E1E5EB] text-sm leading-relaxed">
                      La agencia proporcionó este profundo insight cultural en <strong>menos de una semana</strong>, permitiéndoles 
                      aumentar su <strong>capacidad de proyectos en un 20%</strong> ese año, impulsando significativamente su rentabilidad.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-[#FF6634]/10 p-4 rounded-lg text-center border border-[#FF6634]/20">
                  <div className="text-2xl font-bold text-[#FF6634] mb-1">450%</div>
                  <div className="text-sm text-[#E1E5EB]">Aumento Engagement Instagram</div>
                </div>
                <div className="bg-[#FF6634]/10 p-4 rounded-lg text-center border border-[#FF6634]/20">
                  <div className="text-2xl font-bold text-[#FF6634] mb-1">1 semana</div>
                  <div className="text-sm text-[#E1E5EB]">Tiempo de insight cultural</div>
                </div>
                <div className="bg-[#FF6634]/10 p-4 rounded-lg text-center border border-[#FF6634]/20">
                  <div className="text-2xl font-bold text-[#FF6634] mb-1">20%</div>
                  <div className="text-sm text-[#E1E5EB]">Aumento capacidad proyectos</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Case Study 2: PYME Alimentaria - TEXTO COMPLETO */}
          <Card className="bg-[#1A1F2E] border-[#2A3441] overflow-hidden">
            <CardHeader className="pb-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <Badge className="bg-[#FF6634]/10 text-[#FF6634] border-[#FF6634]/20">
                    <Target className="w-3 h-3 mr-1" />
                    Alimentación & FMCG
                  </Badge>
                  <Badge className="bg-green-500/10 text-green-400 border-green-500/20">
                    300% Engagement
                  </Badge>
                </div>
                <Users className="w-8 h-8 text-[#FF6634]" />
              </div>
              <CardTitle className="text-3xl text-white mb-3 leading-tight">
                Cómo una Agencia de Investigación Ayudó a una PYME Alimentaria a Conectar con la Gen Z
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-[#0B0E1A] p-4 rounded-lg border border-[#2A3441]">
                    <h4 className="text-[#FF6634] font-semibold mb-2 flex items-center">
                      <Building2 className="w-4 h-4 mr-2" />
                      Cliente
                    </h4>
                    <p className="text-[#E1E5EB]">Agencia de Investigación de Mercados Boutique</p>
                    <p className="text-sm text-[#E1E5EB]/80 mt-1"><strong>Cliente Final:</strong> PYME familiar de productos gourmet</p>
                  </div>
                  
                  <div className="bg-[#0B0E1A] p-4 rounded-lg border border-[#2A3441]">
                    <h4 className="text-[#FF6634] font-semibold mb-2 flex items-center">
                      <Target className="w-4 h-4 mr-2" />
                      El Desafío
                    </h4>
                    <p className="text-[#E1E5EB] text-sm leading-relaxed">
                      La PYME quería lanzar una nueva línea de snacks orgánicos para rejuvenecer su marca, pero estaban completamente 
                      desconectados de la Generación Z. Su primer borrador de campaña se basaba en la "tradición" y la "receta familiar". 
                      La agencia de investigación sabía que esto era un error, pero necesitaba <strong>pruebas contundentes e insights rápidos</strong> 
                      para convencer a una dirección conservadora. Un estudio tradicional era demasiado lento y caro.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-[#FF6634]/5 p-4 rounded-lg border border-[#FF6634]/20">
                    <h4 className="text-[#FF6634] font-semibold mb-2 flex items-center">
                      <Zap className="w-4 h-4 mr-2" />
                      La Solución Synth (Dirigida por el Experto)
                    </h4>
                    <p className="text-[#E1E5EB] text-sm leading-relaxed mb-3">
                      La Directora de Investigación de la agencia, actuando como <strong>Directora de Simulación</strong>, asumió el control. 
                      Su experiencia le dijo que el problema era cultural.
                    </p>
                    <ol className="text-[#E1E5EB] text-sm leading-relaxed space-y-2 list-decimal list-inside">
                      <li>Creó una Persona detallada del target: "Joven Urbano Digital".</li>
                      <li>El motor de Synth <strong>asignó automáticamente la Cosmovisión</strong> correspondiente, con su lenguaje y valores.</li>
                      <li>El movimiento de experta fue usar la <strong>Capa Contextual</strong>: cambió el contexto a 
                          <strong>"Amigo Cercano"</strong> para obtener la verdad sin filtros sociales.</li>
                    </ol>
                  </div>
                  
                  <div className="bg-yellow-500/5 p-4 rounded-lg border border-yellow-500/20">
                    <h4 className="text-yellow-400 font-semibold mb-2 flex items-center">
                      <Lightbulb className="w-4 h-4 mr-2" />
                      El Insight Clave
                    </h4>
                    <p className="text-[#E1E5EB] text-sm leading-relaxed">
                      La simulación fue una revelación. Los participantes sintéticos, hablando con el sociolecto y los valores de su "tribu" cultural, 
                      destrozaron el concepto de "tradición", calificándolo de <em>"cringe"</em> y <em>"marketing de boomer"</em>. 
                      No solo rechazaron el mensaje, sino que articularon lo que sí querían: <strong>transparencia radical en los ingredientes, 
                      una historia de sostenibilidad auténtica (no "greenwashing") y una marca que "entendiera sus vibras"</strong>. 
                      La directora de la agencia no solo obtuvo un "no", obtuvo el <strong>manual de instrucciones completo</strong> sobre cómo conectar con ellos.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Impacto en el Negocio - Sección expandida */}
              <div className="bg-[#FF6634]/10 border border-[#FF6634]/20 rounded-lg p-6">
                <h4 className="text-[#FF6634] font-semibold mb-4 text-lg">El Impacto en el Negocio (KPIs)</h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-[#E1E5EB] font-semibold mb-2">1. Aumento del Valor del Proyecto para la Agencia:</p>
                    <p className="text-[#E1E5EB] text-sm leading-relaxed">
                      La agencia no entregó un simple test de concepto, sino un <strong>"Análisis Cultural de Conexión Generacional"</strong>. 
                      Esto les permitió facturar el proyecto con un <strong>margen un 35% superior</strong> al de un focus group tradicional.
                    </p>
                  </div>
                  <div>
                    <p className="text-[#E1E5EB] font-semibold mb-2">2. Mitigación del Riesgo para la PYME:</p>
                    <p className="text-[#E1E5EB] text-sm leading-relaxed">
                      La PYME <strong>evitó un fracaso de lanzamiento casi seguro</strong>, pivotando toda su estrategia de marketing 
                      antes de invertir en producción y medios.
                    </p>
                  </div>
                  <div>
                    <p className="text-[#E1E5EB] font-semibold mb-2">3. Aumento de la Tasa de Engagement:</p>
                    <p className="text-[#E1E5EB] text-sm leading-relaxed">
                      La nueva campaña, co-creada con los insights de Synth, logró en su primer mes una 
                     <strong> tasa de engagement en redes sociales un 300% superior</strong> a las campañas anteriores de la marca.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-[#FF6634]/10 p-4 rounded-lg text-center border border-[#FF6634]/20">
                  <div className="text-2xl font-bold text-[#FF6634] mb-1">35%</div>
                  <div className="text-sm text-[#E1E5EB]">Mayor margen proyecto</div>
                </div>
                <div className="bg-[#FF6634]/10 p-4 rounded-lg text-center border border-[#FF6634]/20">
                  <div className="text-2xl font-bold text-[#FF6634] mb-1">300%</div>
                  <div className="text-sm text-[#E1E5EB]">Más engagement vs anterior</div>
                </div>
                <div className="bg-[#FF6634]/10 p-4 rounded-lg text-center border border-[#FF6634]/20">
                  <div className="text-2xl font-bold text-[#FF6634] mb-1">0%</div>
                  <div className="text-sm text-[#E1E5EB]">Riesgo fracaso lanzamiento</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Case Study 3: FMCG - TEXTO COMPLETO */}
          <Card className="bg-[#1A1F2E] border-[#2A3441] overflow-hidden">
            <CardHeader className="pb-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <Badge className="bg-[#FF6634]/10 text-[#FF6634] border-[#FF6634]/20">
                    <Target className="w-3 h-3 mr-1" />
                    Gran Consumo
                  </Badge>
                  <Badge className="bg-green-500/10 text-green-400 border-green-500/20">
                    +€1M Ahorrado
                  </Badge>
                </div>
                <Rocket className="w-8 h-8 text-[#FF6634]" />
              </div>
              <CardTitle className="text-3xl text-white mb-3 leading-tight">
                Cómo se Redujo el Riesgo del Lanzamiento de un Nuevo Producto FMCG
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-[#0B0E1A] p-4 rounded-lg border border-[#2A3441]">
                    <h4 className="text-[#FF6634] font-semibold mb-2 flex items-center">
                      <Building2 className="w-4 h-4 mr-2" />
                      Cliente
                    </h4>
                    <p className="text-[#E1E5EB]">Consultora de Innovación de Producto</p>
                    <p className="text-sm text-[#E1E5EB]/80 mt-1"><strong>Sector:</strong> Gran Consumo (Alimentación) - Líder industria alimentaria</p>
                  </div>
                  
                  <div className="bg-[#0B0E1A] p-4 rounded-lg border border-[#2A3441]">
                    <h4 className="text-[#FF6634] font-semibold mb-2 flex items-center">
                      <Target className="w-4 h-4 mr-2" />
                      El Desafío
                    </h4>
                    <p className="text-[#E1E5EB] text-sm leading-relaxed">
                      Su cliente, un líder de la industria alimentaria, quería lanzar una nueva línea de bebidas funcionales, 
                      pero no estaban seguros de qué "ángulo" de posicionamiento funcionaría mejor: ¿energía, relajación o concentración? 
                      Una decisión errónea supondría millones en desarrollo y marketing perdidos.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-[#FF6634]/5 p-4 rounded-lg border border-[#FF6634]/20">
                    <h4 className="text-[#FF6634] font-semibold mb-2 flex items-center">
                      <Zap className="w-4 h-4 mr-2" />
                      La Solución Synth
                    </h4>
                    <p className="text-[#E1E5EB] text-sm leading-relaxed">
                      La consultora diseñó un focus group sintético para testear los tres conceptos. El <strong>Director de Simulación</strong> 
                      utilizó la <strong>Capa Contextual</strong> con un control granular: a dos participantes les asignó la 
                     <strong> Agenda Oculta "El Escéptico"</strong> y a otros dos el <strong>Estado Emocional "Estresado"</strong>, 
                      para simular las condiciones del consumidor real (falta de tiempo, escepticismo ante promesas de salud).
                    </p>
                  </div>
                  
                  <div className="bg-yellow-500/5 p-4 rounded-lg border border-yellow-500/20">
                    <h4 className="text-yellow-400 font-semibold mb-2 flex items-center">
                      <Lightbulb className="w-4 h-4 mr-2" />
                      El Insight Clave
                    </h4>
                    <p className="text-[#E1E5EB] text-sm leading-relaxed">
                      Los conceptos de "energía" y "relajación" fueron destrozados por los escépticos ("otro café con azúcar") y los estresados 
                      ("no tengo tiempo para esto"). Sin embargo, el concepto de <strong>"concentración"</strong> resonó de forma inesperada. 
                      Los participantes lo conectaron con la necesidad de rendir en el trabajo, viéndolo no como un lujo, sino como una 
                     <strong> herramienta de productividad</strong>.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Impacto en el Negocio - Sección expandida */}
              <div className="bg-[#FF6634]/10 border border-[#FF6634]/20 rounded-lg p-6">
                <h4 className="text-[#FF6634] font-semibold mb-4 text-lg">El Impacto en el Negocio (KPIs)</h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-[#E1E5EB] font-semibold mb-2">1. Reducción del Riesgo de Innovación:</p>
                    <p className="text-[#E1E5EB] text-sm leading-relaxed">
                      Descartaron dos caminos de producto que habrían fracasado, <strong>ahorrando un estimado de 9 meses de I+D 
                      y +€1M en costes de lanzamiento</strong>.
                    </p>
                  </div>
                  <div>
                    <p className="text-[#E1E5EB] font-semibold mb-2">2. Aumento de la Tasa de Éxito del Lanzamiento:</p>
                    <p className="text-[#E1E5EB] text-sm leading-relaxed">
                      Se centraron en el ángulo de "productividad", lo que llevó a que el producto superara las previsiones de ventas 
                      en un <strong>40% en su primer año</strong>.
                    </p>
                  </div>
                  <div>
                    <p className="text-[#E1E5EB] font-semibold mb-2">3. Speed-to-Market:</p>
                    <p className="text-[#E1E5EB] text-sm leading-relaxed">
                      La decisión estratégica sobre el posicionamiento se tomó en <strong>una semana</strong>, en lugar de los 
                      4-6 meses que habría llevado un estudio tradicional multi-país.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-[#FF6634]/10 p-4 rounded-lg text-center border border-[#FF6634]/20">
                  <div className="text-2xl font-bold text-[#FF6634] mb-1">+€1M</div>
                  <div className="text-sm text-[#E1E5EB]">Ahorro en costes lanzamiento</div>
                </div>
                <div className="bg-[#FF6634]/10 p-4 rounded-lg text-center border border-[#FF6634]/20">
                  <div className="text-2xl font-bold text-[#FF6634] mb-1">40%</div>
                  <div className="text-sm text-[#E1E5EB]">Superó previsiones ventas</div>
                </div>
                <div className="bg-[#FF6634]/10 p-4 rounded-lg text-center border border-[#FF6634]/20">
                  <div className="text-2xl font-bold text-[#FF6634] mb-1">1 semana</div>
                  <div className="text-sm text-[#E1E5EB]">vs 4-6 meses tradicional</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Case Study 4: Agencia Automotriz - TEXTO COMPLETO */}
          <Card className="bg-[#1A1F2E] border-[#2A3441] overflow-hidden">
            <CardHeader className="pb-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <Badge className="bg-[#FF6634]/10 text-[#FF6634] border-[#FF6634]/20">
                    <Target className="w-3 h-3 mr-1" />
                    Automotriz Lujo
                  </Badge>
                  <Badge className="bg-green-500/10 text-green-400 border-green-500/20">
                    +€3M Cuenta
                  </Badge>
                </div>
                <Star className="w-8 h-8 text-[#FF6634]" />
              </div>
              <CardTitle className="text-3xl text-white mb-3 leading-tight">
                Cómo una Agencia Top Ganó la Cuenta de un Gigante Automotriz en 72 Horas
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-[#0B0E1A] p-4 rounded-lg border border-[#2A3441]">
                    <h4 className="text-[#FF6634] font-semibold mb-2 flex items-center">
                      <Building2 className="w-4 h-4 mr-2" />
                      Cliente
                    </h4>
                    <p className="text-[#E1E5EB]">Agencia de Publicidad Top 5 en España</p>
                    <p className="text-sm text-[#E1E5EB]/80 mt-1"><strong>Sector:</strong> Automotriz (Lujo) - Lanzamiento SUV eléctrico</p>
                  </div>
                  
                  <div className="bg-[#0B0E1A] p-4 rounded-lg border border-[#2A3441]">
                    <h4 className="text-[#FF6634] font-semibold mb-2 flex items-center">
                      <Target className="w-4 h-4 mr-2" />
                      El Desafío
                    </h4>
                    <p className="text-[#E1E5EB] text-sm leading-relaxed">
                      Tenían menos de una semana para presentar una propuesta estratégica para el lanzamiento de un nuevo SUV eléctrico. 
                      La competencia tenía meses de ventaja. Necesitaban un insight profundo y diferenciador, y lo necesitaban <em>ya</em>.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-[#FF6634]/5 p-4 rounded-lg border border-[#FF6634]/20">
                    <h4 className="text-[#FF6634] font-semibold mb-2 flex items-center">
                      <Zap className="w-4 h-4 mr-2" />
                      La Solución Synth
                    </h4>
                    <p className="text-[#E1E5EB] text-sm leading-relaxed">
                      El equipo de planning, actuando como <strong>Directores de Simulación</strong>, creó una Persona detallada del cliente objetivo 
                      (ejecutivo, 45-55 años, NSE A/B). Lanzaron un focus group sintético con 8 participantes. La clave fue el uso de la 
                     <strong> Capa Cultural</strong>. Nuestro motor asignó automáticamente a varios participantes la cosmovisión 
                     <strong>"Consumidor Premium Establecido"</strong>, revelando que su lenguaje no giraba en torno a la "sostenibilidad" 
                      o la "tecnología", sino en torno al <strong>"legado", la "discreción" y el "saber estar"</strong>.
                    </p>
                  </div>
                  
                  <div className="bg-yellow-500/5 p-4 rounded-lg border border-yellow-500/20">
                    <h4 className="text-yellow-400 font-semibold mb-2 flex items-center">
                      <Lightbulb className="w-4 h-4 mr-2" />
                      El Insight Clave
                    </h4>
                    <p className="text-[#E1E5EB] text-sm leading-relaxed">
                      Descubrieron que el principal freno para la adopción del vehículo eléctrico en este segmento no era la autonomía ni el precio, 
                      sino el <strong>miedo a la ostentación</strong>. La compra de un eléctrico se percibía como una declaración política "ruidosa", 
                      chocando con su valor cultural de <strong>"estatus silencioso"</strong>.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Impacto en el Negocio - Sección expandida */}
              <div className="bg-[#FF6634]/10 border border-[#FF6634]/20 rounded-lg p-6">
                <h4 className="text-[#FF6634] font-semibold mb-4 text-lg">El Impacto en el Negocio (KPIs)</h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-[#E1E5EB] font-semibold mb-2">1. Pitch Win Rate:</p>
                    <p className="text-[#E1E5EB] text-sm leading-relaxed">
                      La agencia presentó una estrategia basada en el concepto de <strong>"El Lujo Silencioso del Futuro"</strong>, 
                      completamente inesperada y anclada en un profundo insight cultural. <strong>Ganaron la cuenta, valorada en +€3M anuales.</strong>
                    </p>
                  </div>
                  <div>
                    <p className="text-[#E1E5EB] font-semibold mb-2">2. Reducción del Time-to-Strategy:</p>
                    <p className="text-[#E1E5EB] text-sm leading-relaxed">
                      Pasaron de una idea a una estrategia validada en <strong>72 horas</strong>, frente a las 6-8 semanas de un proceso tradicional.
                    </p>
                  </div>
                  <div>
                    <p className="text-[#E1E5EB] font-semibold mb-2">3. El Factor Decisivo en el Pitch (Credibilidad Tecnológica):</p>
                    <p className="text-[#E1E5EB] text-sm leading-relaxed">
                      Durante la presentación final, la agencia reveló su "arma secreta". Explicaron que habían validado su hipótesis estratégica 
                      en un <strong>"sandbox" de comportamiento humano con Synth</strong>. No solo presentaron el concepto creativo, sino que 
                      mostraron extractos de la transcripción de la simulación, demostrando cómo su idea resonaba con el arquetipo cultural del cliente. 
                      Esta prueba de validación ultrarrápida y basada en datos fue el <strong>factor decisivo</strong> para el cliente, 
                      que lo vio como una forma revolucionaria de de-riscar la inversión en marketing y eligió a la agencia por su innovadora metodología.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-[#FF6634]/10 p-4 rounded-lg text-center border border-[#FF6634]/20">
                  <div className="text-2xl font-bold text-[#FF6634] mb-1">€3M+</div>
                  <div className="text-sm text-[#E1E5EB]">Cuenta ganada anual</div>
                </div>
                <div className="bg-[#FF6634]/10 p-4 rounded-lg text-center border border-[#FF6634]/20">
                  <div className="text-2xl font-bold text-[#FF6634] mb-1">72 horas</div>
                  <div className="text-sm text-[#E1E5EB]">Idea a estrategia validada</div>
                </div>
                <div className="bg-[#FF6634]/10 p-4 rounded-lg text-center border border-[#FF6634]/20">
                  <div className="text-2xl font-bold text-[#FF6634] mb-1">100%</div>
                  <div className="text-sm text-[#E1E5EB]">Factor decisivo en pitch</div>
                </div>
              </div>

              <div className="bg-[#FF6634]/10 border border-[#FF6634]/20 rounded-lg p-6">
                <Quote className="w-8 h-8 text-[#FF6634] mb-4" />
                <p className="text-[#E1E5EB] italic text-lg leading-relaxed mb-4">
                  "Durante la presentación final, revelamos nuestro 'arma secreta': habíamos validado nuestra 
                  hipótesis en un sandbox de comportamiento humano con Synth. Mostramos extractos de la 
                  simulación que demostraban cómo nuestra idea resonaba con el arquetipo cultural del cliente."
                </p>
                <p className="text-sm text-[#FF6634] font-semibold">
                  — Equipo de Planning, Agencia Top 5 España
                </p>
                <p className="text-xs text-[#E1E5EB]/70 mt-2">
                  <strong>Resultado:</strong> Esta prueba de validación ultrarrápida fue el factor decisivo. 
                  El cliente lo vio como una forma revolucionaria de de-riscar la inversión en marketing.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#FF6634] to-[#FF8A5B]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Listo para tu Próximo Insight Revolucionario?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Únete a las agencias y consultoras líderes que ya están usando Synth para generar 
            insights culturales profundos en días, no meses.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="bg-white text-[#FF6634] hover:bg-white/90 px-8 py-3 text-lg font-semibold !whitespace-pre-line">Prueba Gratis

            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#FF6634] px-8 py-3 text-lg font-semibold !whitespace-pre-line">Ver Demo

              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
          <p className="text-white/80 text-sm mt-4">
            Sin compromiso • Setup en 5 minutos • Soporte completo en español
          </p>
        </div>
      </section>

      {/* Footer - Same as home page */}
      <footer className="bg-[#1A1F2E] border-t border-[#2A3441]">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo y descripción */}
            <div className="md:col-span-1">
              <div className="flex items-center mb-4">
                <img
                  src="https://i.postimg.cc/bvqJBxD6/Logo-Synth-sin-fondo.png"
                  alt="Synth"
                  className="h-10 w-auto object-contain" />
              </div>
              <p className="text-[#E1E5EB] max-w-md mb-6">
                Revoluciona tu investigación cualitativa con inteligencia artificial. 
                Descubre insights profundos en minutos, no meses.
              </p>
            </div>

            {/* Contact Information */}
            <div>
              <h4 className="font-bold text-white mb-4">Contacto</h4>
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
                  <span className="text-[#E1E5EB]">Madrid, España</span>
                </li>
              </ul>
            </div>

            {/* Producto */}
            <div>
              <h4 className="font-bold text-white mb-4">Producto</h4>
              <ul className="space-y-2">
                <li><a href="/#soluciones" className="text-[#E1E5EB] hover:text-[#FF6634] transition-colors">Metodologías</a></li>
                <li><a href="/#precios" className="text-[#E1E5EB] hover:text-[#FF6634] transition-colors">Precios</a></li>
                <li><a href="/#faq" className="text-[#E1E5EB] hover:text-[#FF6634] transition-colors">FAQ</a></li>
                <li><a href="/casos-de-exito" className="text-[#E1E5EB] hover:text-[#FF6634] transition-colors">Casos de Uso</a></li>
              </ul>
            </div>

            {/* Empresa */}
            <div>
              <h4 className="font-bold text-white mb-4">Empresa</h4>
              <ul className="space-y-2">
                <li><a href="/centro-confianza-seguridad" className="text-[#E1E5EB] hover:text-[#FF6634] transition-colors">Centro de Confianza y Seguridad</a></li>
                <li><a href="/blog" className="text-[#E1E5EB] hover:text-[#FF6634] transition-colors">Blog</a></li>
                <li><a href="mailto:hola@synth-insights.com" className="text-[#E1E5EB] hover:text-[#FF6634] transition-colors">Contacto</a></li>
                <li><a href="mailto:hola@synth-insights.com?subject=Soporte" className="text-[#E1E5EB] hover:text-[#FF6634] transition-colors">Soporte</a></li>
              </ul>
            </div>
          </div>
        
          {/* Línea divisoria */}
          <div className="border-t border-[#2A3441] pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6">
              <a href="/privacidad" className="text-[#E1E5EB] hover:text-[#FF6634] text-sm transition-colors">
                Política de Privacidad
              </a>
              <a href="/terminos-y-condiciones" className="text-[#E1E5EB] hover:text-[#FF6634] text-sm transition-colors">
                Términos y Condiciones
              </a>
            </div>
          </div>
        </div>
      </footer>

      <div className="border-t border-[#2A3441] pt-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-[#E1E5EB] mb-4 md:mb-0">
          © 2025 Synth. Todos los derechos reservados.
        </p>
      </div>
    </div>);

}