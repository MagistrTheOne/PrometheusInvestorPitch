"use client";
import { cn } from "@/lib/utils";

export function Slide({
  title,
  kicker,
  children,
  className,
}: {
  title: string;
  kicker?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("min-h-[100dvh] flex items-center justify-center section-padding relative", className)}>
      <div className="max-w-7xl w-full relative z-10 text-center">
        {kicker && (
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary mb-6">
            {kicker}
          </div>
        )}
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
          {title}
        </h2>
        <div className="text-lg md:text-xl text-muted-foreground max-w-4xl leading-relaxed mx-auto">
          {children}
        </div>
      </div>
      
    </section>
  );
}
