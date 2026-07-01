/* eslint-disable react-hooks/set-state-in-effect */
import { useReducedMotion as useFramerReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export function useReducedMotion() {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReduced = useFramerReducedMotion();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return false;
  return prefersReduced ?? false;
}
