import { MessageCircle } from "lucide-react";

export const WHATSAPP_URL = "https://wa.me/61998929841";

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-whatsapp px-5 py-4 text-whatsapp-foreground shadow-glow animate-pulse-cta hover:brightness-110 transition"
    >
      <MessageCircle className="h-6 w-6" strokeWidth={2.2} />
      <span className="hidden sm:inline font-semibold text-sm">Encomendar agora</span>
    </a>
  );
}
