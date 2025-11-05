"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2, CheckCircle, X } from "lucide-react";
import { toast } from "sonner";

interface DemoFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  locale?: 'es' | 'en';
}

export function DemoFormDialog({ open, onOpenChange, locale = 'es' }: DemoFormDialogProps) {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    company: '',
    companyType: '',
    country: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const t = locale === 'en' ? {
    title: 'Request a Demo',
    description: 'Fill out the form and our team will contact you shortly to schedule a personalized demo.',
    email: 'Email',
    emailPlaceholder: 'you@company.com',
    name: 'Name',
    namePlaceholder: 'John Doe',
    company: 'Company (Recommended)',
    companyPlaceholder: 'Acme Inc.',
    companyType: 'Company Type',
    companyTypePlaceholder: 'Select company type',
    country: 'Country',
    countryPlaceholder: 'Select country',
    companyTypes: {
      creative: 'Creative Agency',
      media: 'Media Agency',
      consulting: 'Strategic Consultancies',
      market: 'Market Research Agencies',
      client: 'Final Client (Brands, Startups, SMEs)',
      education: 'Educational Institution',
      other: 'Other',
    },
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
    submit: 'Request Demo',
    submitting: 'Submitting...',
    successTitle: 'Demo Requested!',
    successMessage: 'Thank you! Our team will contact you shortly to schedule your personalized demo.',
    close: 'Close',
    errorMessage: 'There was an error submitting your request. Please try again.',
    requiredFields: 'Please fill in all required fields',
  } : {
    title: 'Solicitar Demo',
    description: 'Completa el formulario y nuestro equipo te contactará pronto para agendar una demo personalizada.',
    email: 'Email',
    emailPlaceholder: 'tu@empresa.com',
    name: 'Nombre',
    namePlaceholder: 'Juan Pérez',
    company: 'Empresa (Recomendado)',
    companyPlaceholder: 'Mi Empresa S.L.',
    companyType: 'Tipo de empresa',
    companyTypePlaceholder: 'Selecciona tipo de empresa',
    country: 'País',
    countryPlaceholder: 'Selecciona país',
    companyTypes: {
      creative: 'Agencia Creativa',
      media: 'Agencia de Medios',
      consulting: 'Consultoras Estratégicas',
      market: 'Agencias Investigación de Mercados',
      client: 'Cliente final (Marcas, Startups, PYMEs)',
      education: 'Institución Educativa',
      other: 'Otro',
    },
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
    submit: 'Solicitar Demo',
    submitting: 'Enviando...',
    successTitle: '¡Demo Solicitada!',
    successMessage: 'Gracias! Nuestro equipo te contactará pronto para agendar tu demo personalizada.',
    close: 'Cerrar',
    errorMessage: 'Hubo un error al enviar tu solicitud. Por favor intenta de nuevo.',
    requiredFields: 'Por favor completa todos los campos requeridos',
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/contact-mautic', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'demo',
          email: formData.email,
          firstName: formData.name.split(' ')[0] || formData.name,
          lastName: formData.name.split(' ').slice(1).join(' ') || '',
          company: formData.company,
          companyType: formData.companyType,
          country: formData.country,
          locale,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
        
        // Reset form after 4 seconds
        setTimeout(() => {
          setFormData({ email: '', name: '', company: '', companyType: '', country: '' });
          setIsSuccess(false);
          onOpenChange(false);
        }, 4000);
      } else {
        toast.error(t.errorMessage);
      }
    } catch (error) {
      console.error('Error submitting demo request:', error);
      toast.error(t.errorMessage);
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
                <DialogTitle className="text-2xl font-bold">{t.title}</DialogTitle>
                <DialogDescription className="text-[#E1E5EB]">
                  {t.description}
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">
                    {t.email} <span className="text-[#FF6634]">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={t.emailPlaceholder}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-[#0B0E1A] border-[#2A3441] text-white placeholder:text-[#6B7280]"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">
                    {t.name} <span className="text-[#FF6634]">*</span>
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder={t.namePlaceholder}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-[#0B0E1A] border-[#2A3441] text-white placeholder:text-[#6B7280]"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-white">
                    {t.company}
                  </Label>
                  <Input
                    id="company"
                    type="text"
                    placeholder={t.companyPlaceholder}
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="bg-[#0B0E1A] border-[#2A3441] text-white placeholder:text-[#6B7280]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="companyType" className="text-white">
                    {t.companyType} <span className="text-[#FF6634]">*</span>
                  </Label>
                  <Select
                    value={formData.companyType}
                    onValueChange={(value) => setFormData({ ...formData, companyType: value })}
                    required
                  >
                    <SelectTrigger className="bg-[#0B0E1A] border-[#2A3441] text-white">
                      <SelectValue placeholder={t.companyTypePlaceholder} />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1A1F2E] border-[#2A3441] text-white">
                      <SelectItem value="creative">{t.companyTypes.creative}</SelectItem>
                      <SelectItem value="media">{t.companyTypes.media}</SelectItem>
                      <SelectItem value="consulting">{t.companyTypes.consulting}</SelectItem>
                      <SelectItem value="market">{t.companyTypes.market}</SelectItem>
                      <SelectItem value="client">{t.companyTypes.client}</SelectItem>
                      <SelectItem value="education">{t.companyTypes.education}</SelectItem>
                      <SelectItem value="other">{t.companyTypes.other}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="country" className="text-white">
                    {t.country} <span className="text-[#FF6634]">*</span>
                  </Label>
                  <Select
                    value={formData.country}
                    onValueChange={(value) => setFormData({ ...formData, country: value })}
                    required
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
                  className="w-full bg-[#FF6634] hover:bg-[#FF6634]/90 text-white"
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
                {t.close}
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}