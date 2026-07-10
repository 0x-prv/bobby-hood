export interface SocialLink {
  label: string;
  href: string;
}

// TODO: Replace with real URLs before launch.
export const SOCIAL_LINKS: SocialLink[] = [
  { label: "X", href: "https://x.com/PLACEHOLDER" },
];

// Set to a real address string when the token is live. Keep null until then.
export const CONTRACT_ADDRESS: string | null = null;