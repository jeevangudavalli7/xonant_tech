"use client";

import React from "react";
import { useReveal } from "@/hooks/useReveal";

export const ScrollRevealProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  useReveal();
  return <>{children}</>;
};

export default ScrollRevealProvider;
