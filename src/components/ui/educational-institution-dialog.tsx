"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { GraduationCap, Loader2 } from "lucide-react";
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
  const [formData, setFormData] = useState({
    institutionType: '',
    name: '',
    email: '',
    position: ''
  });

  const t = locale === 'en' ? {
    title: 'Educational Institutions',
    description: 'Tell us about your institution and we will contact you with exclusive discounts of up to 60%.',
    institutionType: 'Type of Educational Institution',
    institutionTypePlaceholder: 'School, University, Academy, etc.',
    name: 'Full Name',
    namePlaceholder: 'Your full name',
    email: 'Email',
    emailPlaceholder: 'your.email@institution.edu',
    position: 'Position at Institution',
    positionPlaceholder: 'Director, Professor, Coordinator, etc.',
    submit: 'Request Information',
    submitting: 'Sending...',
    successTitle: 'Request sent successfully!',
    successMessage: 'We will contact you shortly with more information about our exclusive discounts.',
    errorTitle: 'Error sending request',
    errorMessage: 'Please try again or contact us at hola@synth-insights.com',
    requiredFields: 'Please fill in all fields',
    invalidEmail: 'Please enter a valid email address'
  } : {
    title: 'Instituciones Educativas',
    description: 'Cuéntanos sobre tu institución y te contactaremos con descuentos exclusivos de hasta 60%.',
    institutionType: 'Tipo de Institución Educativa',
    institutionTypePlaceholder: 'Colegio, Universidad, Academia, etc.',
    name: 'Nombre Completo',
    namePlaceholder: 'Tu nombre completo',
    email: 'Correo Electrónico',
    emailPlaceholder: 'tu.correo@institucion.edu',
    position: 'Puesto en la Institución',
    positionPlaceholder: 'Director, Profesor, Coordinador, etc.',
    submit: 'Solicitar Información',
    submitting: 'Enviando...',
    successTitle: '¡Solicitud enviada correctamente!',
    successMessage: 'Te contactaremos pronto con más información sobre nuestros descuentos exclusivos.',
    errorTitle: 'Error al enviar solicitud',
    errorMessage: 'Por favor intenta nuevamente o contáctanos en hola@synth-insights.com',
    requiredFields: 'Por favor completa todos los campos',
    invalidEmail: 'Por favor ingresa un correo electrónico válido'
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.institutionType || !formData.name || !formData.email || !formData.position) {
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
          tags: ['educational_institution', locale === 'en' ? 'educational_inquiry_en' : 'consulta_educativa'],
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

      toast.success(t.successTitle, {
        description: t.successMessage,
      });

      // Reset form and close dialog
      setFormData({
        institutionType: '',
        name: '',
        email: '',
        position: ''
      });
      onOpenChange(false);
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
      </DialogContent>
    </Dialog>
  );
}
