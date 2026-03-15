"use client";

import { ReactNode, useEffect, useState } from "react";

type Props = { children: ReactNode };

export default function ClientOnly({ children }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // server-side pe kuch render nahi hoga
  return <>{children}</>;
}