export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Agent", href: "/#agent" },
  { label: "Game", href: "/#game" },
  { label: "Story", href: "/story" },
  { label: "Gang", href: "/gang" },
  { label: "Memes", href: "/#memes" },
];
