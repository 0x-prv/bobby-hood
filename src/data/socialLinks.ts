export interface SocialLink {
  label: string;
  href: string;
}

export const OFFICIAL_X_URL = "https://x.com/bobbyhood67";

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "X", href: OFFICIAL_X_URL },
];

// Set to a real address string when the token is live. Keep null until then.
export const CONTRACT_ADDRESS: string | null = null;
