"use client";

import { useState, useEffect, useCallback } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(initialValue);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (item !== null) {
        setValue(JSON.parse(item));
      }
    } catch {
      // ignore parse errors, keep initialValue
    } finally {
      setHydrated(true);
    }
  }, [key]);

  const setStoredValue = useCallback(
    (newValue: T) => {
      setValue(newValue);
      try {
        window.localStorage.setItem(key, JSON.stringify(newValue));
      } catch {
        // ignore write errors (private mode, quota, etc.)
      }
    },
    [key]
  );

  return [value, setStoredValue, hydrated] as const;
}