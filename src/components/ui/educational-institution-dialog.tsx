"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GraduationCap, Loader2, CheckCircle } from "lucide-react";
import { toast } from "sonner";

interface EducationalInstitutionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  locale?: 'es' | 'en';
}

export function EducationalInstitutionDialog({ 
  open, 
  onOpenChange,
  locale = 'es'
}: EducationalInstitutionDialogProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    institutionType: '',
    name: '',
    email: '',
    position: '',
    country: ''
  });

  const t = locale === 'en' ? {
    title: 'Educational Institutions',
    description: 'Tell us about your institution and we will contact you with exclusive benefits and discounts.',
    institutionType: 'Type of Educational Institution',
    institutionTypePlaceholder: 'School, University, Academy, etc.',
    name: 'Full Name',
    namePlaceholder: 'Your full name',
    email: 'Email',
    emailPlaceholder: 'your.email@institution.edu',
    position: 'Position at Institution',
    positionPlaceholder: 'Director, Professor, Coordinator, etc.',
    country: 'Country',
    countryPlaceholder: 'Select country',
    countries: {
      spain: 'Spain',
      argentina: 'Argentina',
      bolivia: 'Bolivia',
      chile: 'Chile',
      colombia: 'Colombia',
      mexico: 'Mexico',
      paraguay: 'Paraguay',
      peru: 'Peru',
      other: 'Other',
    },
    submit: 'Request Information',
    submitting: 'Sending...',
    successTitle: 'Request sent successfully!',
    successMessage: 'We will contact you shortly with more information about our exclusive benefits and discounts.',
    errorTitle: 'Error sending request',
    errorMessage: 'Please try again or contact us at hola@synth-insights.com',
    requiredFields: 'Please fill in all fields',
    invalidEmail: 'Please enter a valid email address'
  } : {
    title: 'Instituciones Educativas',
    description: 'Cuéntanos sobre tu institución y te contactaremos con beneficios y descuentos exclusivos.',
    institutionType: 'Tipo de Institución Educativa',
    institutionTypePlaceholder: 'Colegio, Universidad, Academia, etc.',
    name: 'Nombre Completo',
    namePlaceholder: 'Tu nombre completo',
    email: 'Correo Electrónico',
    emailPlaceholder: 'tu.correo@institucion.edu',
    position: 'Puesto en la Institución',
    positionPlaceholder: 'Director, Profesor, Coordinador, etc.',
    country: 'País',
    countryPlaceholder: 'Selecciona país',
    countries: {
      spain: 'España',
      argentina: 'Argentina',
      bolivia: 'Bolivia',
      chile: 'Chile',
      colombia: 'Colombia',
      mexico: 'México',
      paraguay: 'Paraguay',
      peru: 'Perú',
      other: 'Otro',
    },
    submit: 'Solicitar Información',
    submitting: 'Enviando...',
    successTitle: '¡Solicitud enviada correctamente!',
    successMessage: 'Te contactaremos pronto con más información sobre nuestros beneficios y descuentos exclusivos.',
    errorTitle: 'Error al enviar solicitud',
    errorMessage: 'Por favor intenta nuevamente o contáctanos en hola@synth-insights.com',
    requiredFields: 'Por favor completa todos los campos',
    invalidEmail: 'Por favor ingresa un correo electrónico válido'
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.institutionType || !formData.name || !formData.email || !formData.position || !formData.country) {
      toast.error(t.requiredFields);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error(t.invalidEmail);
      return;
    }

    setIsSubmitting(true);

    try {
      // Mapear country a tags pais_*
      const countryTagMap: Record<string, string> = {
        'spain': 'pais_es',
        'argentina': 'pais_ar',
        'bolivia': 'pais_bo',
        'chile': 'pais_cl',
        'colombia': 'pais_co',
        'mexico': 'pais_mx',
        'paraguay': 'pais_py',
        'peru': 'pais_pe',
        'other': 'pais_otro_latam',
      };

      // Preparar tags
      const tags = ['info_educativo_solicitado', 'rol_educacion', `idioma_${locale}`];
      
      // Agregar tag de país
      if (formData.country && countryTagMap[formData.country]) {
        tags.push(countryTagMap[formData.country]);
      }

      const response = await fetch('/api/contact-mautic', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'educational_institution',
          email: formData.email,
          firstName: formData.name.split(' ')[0],
          lastName: formData.name.split(' ').slice(1).join(' ') || formData.name.split(' ')[0],
          locale,
          tags,
          fields: {
            institution_type: formData.institutionType,
            position: formData.position,
            lead_source: 'Educational Institutions Form'
          }
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setIsSuccess(true);

      // Reset form and close dialog after 4 seconds
      setTimeout(() => {
        setFormData({
          institutionType: '',
          name: '',
          email: '',
          position: '',
          country: ''
        });
        setIsSuccess(false);
        onOpenChange(false);
      }, 4000);
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error(t.errorTitle, {
        description: t.errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-[#1A1F2E] border-[#2A3441] text-white">
        {isSuccess && (
          <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-[#FF6634] to-[#FF8A5B] p-4 rounded-t-lg animate-fadeInUp">
            <div className="flex items-center justify-center gap-3 text-white">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold">{t.successTitle}</h3>
                <p className="text-sm text-white/90">{t.successMessage}</p>
              </div>
            </div>
          </div>
        )}

        <div className={isSuccess ? 'mt-24' : ''}>
          {!isSuccess ? (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#FF6634]/20 to-[#FF8A5B]/20 rounded-lg flex items-center justify-center border border-[#FF6634]/30">
                    <GraduationCap className="w-5 h-5 text-[#FF6634]" />
                  </div>
                  <DialogTitle className="text-2xl font-bold text-white">
                    {t.title}
                  </DialogTitle>
                </div>
                <DialogDescription className="text-[#E1E5EB]">
                  {t.description}
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                <div className="space-y-2">
                  <label htmlFor="institutionType" className="text-sm font-medium text-white">
                    {t.institutionType}
                  </label>
                  <Input
                    id="institutionType"
                    type="text"
                    placeholder={t.institutionTypePlaceholder}
                    value={formData.institutionType}
                    onChange={(e) => setFormData({ ...formData, institutionType: e.target.value })}
                    className="bg-[#0B0E1A] border-[#2A3441] text-white placeholder:text-[#6B7280]"
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-white">
                    {t.name}
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder={t.namePlaceholder}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-[#0B0E1A] border-[#2A3441] text-white placeholder:text-[#6B7280]"
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-white">
                    {t.email}
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={t.emailPlaceholder}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-[#0B0E1A] border-[#2A3441] text-white placeholder:text-[#6B7280]"
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="position" className="text-sm font-medium text-white">
                    {t.position}
                  </label>
                  <Input
                    id="position"
                    type="text"
                    placeholder={t.positionPlaceholder}
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                    className="bg-[#0B0E1A] border-[#2A3441] text-white placeholder:text-[#6B7280]"
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="country" className="text-sm font-medium text-white">
                    {t.country} <span className="text-[#FF6634]">*</span>
                  </label>
                  <Select
                    value={formData.country}
                    onValueChange={(value) => setFormData({ ...formData, country: value })}
                    disabled={isSubmitting}
                  >
                    <SelectTrigger className="bg-[#0B0E1A] border-[#2A3441] text-white">
                      <SelectValue placeholder={t.countryPlaceholder} />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1A1F2E] border-[#2A3441] text-white">
                      <SelectItem value="spain">{t.countries.spain}</SelectItem>
                      <SelectItem value="argentina">{t.countries.argentina}</SelectItem>
                      <SelectItem value="bolivia">{t.countries.bolivia}</SelectItem>
                      <SelectItem value="chile">{t.countries.chile}</SelectItem>
                      <SelectItem value="colombia">{t.countries.colombia}</SelectItem>
                      <SelectItem value="mexico">{t.countries.mexico}</SelectItem>
                      <SelectItem value="paraguay">{t.countries.paraguay}</SelectItem>
                      <SelectItem value="peru">{t.countries.peru}</SelectItem>
                      <SelectItem value="other">{t.countries.other}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#FF6634] hover:bg-[#FF8A5B] text-white font-semibold py-3 rounded-lg transition-all duration-300"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      {t.submitting}
                    </>
                  ) : (
                    t.submit
                  )}
                </Button>
              </form>
            </>
          ) : (
            <div className="py-8 text-center">
              <Button
                onClick={() => onOpenChange(false)}
                className="bg-[#FF6634] hover:bg-[#FF6634]/90 text-white"
              >
                {locale === 'en' ? 'Close' : 'Cerrar'}
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}