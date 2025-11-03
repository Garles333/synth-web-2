"use client";

import { useState, ReactNode } from "react";
import { DemoFormDialog } from "@/components/blocks/forms/demo-form-dialog";

interface DemoDialogTriggerProps {
  children: ReactNode;
  locale?: 'es' | 'en';
  ctaName?: string;
  page?: string;
}

export function DemoDialogTrigger({ 
  children, 
  locale = 'es',
  ctaName = 'Demo Request',
  page = 'unknown'
}: DemoDialogTriggerProps) {
  const [open, setOpen] = useState(false);

  const handleOpen = async () => {
    setOpen(true);
    
    // Track CTA click in Mautic
    try {
      await fetch('/api/contact-mautic', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'cta_click',
          email: 'anonymous@synth.com', // Placeholder for anonymous tracking
          fields: {
            cta_name: ctaName,
            cta_page: page,
            cta_locale: locale,
            cta_clicked_at: new Date().toISOString(),
          },
        }),
      });
    } catch (error) {
      console.log('Mautic tracking failed (non-blocking):', error);
    }
  };

  return (
    <>
      <div onClick={handleOpen}>
        {children}
      </div>
      <DemoFormDialog open={open} onOpenChange={setOpen} locale={locale} />
    </>
  );
}