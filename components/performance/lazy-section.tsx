"use client";

import { Suspense } from "react";

interface LazySectionProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export function LazySection({ children, fallback }: LazySectionProps) {
  return (
    <Suspense fallback={fallback || <div className="h-32 bg-muted animate-pulse rounded-lg" />}>
      {children}
    </Suspense>
  );
}
