import { MessageCircle } from "lucide-react";

export function InstagramIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function FacebookIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function TikTokIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M19.59 7.06a5.5 5.5 0 0 1-3.06-1.13 5.56 5.56 0 0 1-2.02-3.31 5.5 5.5 0 0 0-.23-1.17h-3.56v13.05a2.92 2.92 0 1 1-2.92-2.92c.31 0 .61.05.9.15v-3.63a6.55 6.55 0 1 0 7.7 6.45V10.8a9.1 9.1 0 0 0 4.19 1.27V8.6a5.7 5.7 0 0 1-1 .13z" />
    </svg>
  );
}

export function WhatsAppIcon(props) {
  return <MessageCircle aria-hidden="true" {...props} />;
}