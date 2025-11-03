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
    firstName: '',
    lastName: '',
    company: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const t = locale === 'en' ? {
    title: 'Request a Demo',
    description: 'Fill out the form and our team will contact you shortly to schedule a personalized demo.',
    email: 'Email',
    emailPlaceholder: 'you@company.com',
    firstName: 'First Name',
    firstNamePlaceholder: 'John',
    lastName: 'Last Name',
    lastNamePlaceholder: 'Doe',
    company: 'Company',
    companyPlaceholder: 'Acme Inc.',
    submit: 'Request Demo',
    submitting: 'Submitting...',
    successTitle: 'Demo Requested!',
    successMessage: 'Thank you! Our team will contact you shortly to schedule your personalized demo.',
    close: 'Close',
    errorMessage: 'There was an error submitting your request. Please try again.',
    requiredFields: 'Please fill in all fields',
  } : {
    title: 'Solicitar Demo',
    description: 'Completa el formulario y nuestro equipo te contactará pronto para agendar una demo personalizada.',
    email: 'Email',
    emailPlaceholder: 'tu@empresa.com',
    firstName: 'Nombre',
    firstNamePlaceholder: 'Juan',
    lastName: 'Apellido',
    lastNamePlaceholder: 'Pérez',
    company: 'Empresa',
    companyPlaceholder: 'Mi Empresa S.L.',
    submit: 'Solicitar Demo',
    submitting: 'Enviando...',
    successTitle: '¡Demo Solicitada!',
    successMessage: 'Gracias! Nuestro equipo te contactará pronto para agendar tu demo personalizada.',
    close: 'Cerrar',
    errorMessage: 'Hubo un error al enviar tu solicitud. Por favor intenta de nuevo.',
    requiredFields: 'Por favor completa todos los campos',
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.firstName || !formData.lastName || !formData.company) {
      toast.error(t.requiredFields);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/mautic/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'demo',
          email: formData.email,
          firstName: formData.firstName,
          lastName: formData.lastName,
          company: formData.company,
          locale,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
        toast.success(locale === 'en' ? 'Demo requested successfully!' : '¡Demo solicitada con éxito!');
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setFormData({ email: '', firstName: '', lastName: '', company: '' });
          setIsSuccess(false);
          onOpenChange(false);
        }, 3000);
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
                  {t.email}
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

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-white">
                    {t.firstName}
                  </Label>
                  <Input
                    id="firstName"
                    type="text"
                    placeholder={t.firstNamePlaceholder}
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="bg-[#0B0E1A] border-[#2A3441] text-white placeholder:text-[#6B7280]"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-white">
                    {t.lastName}
                  </Label>
                  <Input
                    id="lastName"
                    type="text"
                    placeholder={t.lastNamePlaceholder}
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="bg-[#0B0E1A] border-[#2A3441] text-white placeholder:text-[#6B7280]"
                    required
                  />
                </div>
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
                  required
                />
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
            <div className="mb-4 flex justify-center">
              <div className="w-16 h-16 bg-[#FF6634]/20 rounded-full flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-[#FF6634]" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2">{t.successTitle}</h3>
            <p className="text-[#E1E5EB] mb-6">{t.successMessage}</p>
            <Button
              onClick={() => onOpenChange(false)}
              className="bg-[#FF6634] hover:bg-[#FF6634]/90 text-white"
            >
              {t.close}
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
