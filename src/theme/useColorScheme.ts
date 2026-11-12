import { useCallback, useEffect, useState } from "react";
import {
  COLOR_SCHEME_STORAGE_KEY,
  DARK_MODE_CLASS,
  type ColorScheme,
} from "./colorScheme";

const DARK_QUERY = "(prefers-color-scheme: dark)";

function readStoredScheme(): ColorScheme | null {
  try {
    const value = localStorage.getItem(COLOR_SCHEME_STORAGE_KEY);
    return value === "light" || value === "dark" ? value : null;
  } catch {
    return null; // Storage can be blocked, e.g. in some private modes.
  }
}

function readSystemScheme(): ColorScheme {
  return window.matchMedia(DARK_QUERY).matches ? "dark" : "light";
}

export function useColorScheme() {
  const [stored, setStored] = useState<ColorScheme | null>(readStoredScheme);
  const [system, setSystem] = useState<ColorScheme>(readSystemScheme);
  const scheme = stored ?? system;

  // Track OS changes so "follow system" stays live.
  useEffect(() => {
    const query = window.matchMedia(DARK_QUERY);
    function onChange(e: MediaQueryListEvent) {
      setSystem(e.matches ? "dark" : "light");
    }
    query.addEventListener("change", onChange);
    return () => {
      query.removeEventListener("change", onChange);
    };
  }, []);

  // The class drives PrimeReact; color-scheme drives native scrollbars and inputs.
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle(DARK_MODE_CLASS, scheme === "dark");
    root.style.colorScheme = scheme;
  }, [scheme]);

  const setScheme = useCallback((next: ColorScheme) => {
    setStored(next);
    try {
      localStorage.setItem(COLOR_SCHEME_STORAGE_KEY, next);
    } catch {
      // Ignore: the choice still applies for this session.
    }
  }, []);

  const toggle = useCallback(() => {
    setScheme(scheme === "dark" ? "light" : "dark");
  }, [scheme, setScheme]);

  const followSystem = useCallback(() => {
    setStored(null);
    try {
      localStorage.removeItem(COLOR_SCHEME_STORAGE_KEY);
    } catch {
      // Ignore.
    }
  }, []);

  return {
    scheme,
    isFollowingSystem: stored === null,
    setScheme,
    toggle,
    followSystem,
  };
}
