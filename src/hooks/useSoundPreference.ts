"use client";

import { useLocalStorage } from "./useLocalStorage";

export function useSoundPreference() {
  const [soundEnabled, setSoundEnabled, hydrated] = useLocalStorage<boolean>(
    "bobby-sound-enabled",
    false
  );

  return { soundEnabled, setSoundEnabled, hydrated };
}