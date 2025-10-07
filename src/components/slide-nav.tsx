"use client";
import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";

export function useSlideNav() {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const anchors = Array.from(document.querySelectorAll("[data-slide]"));
      const index = anchors.findIndex(a => a.getBoundingClientRect().top >= -1);
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        const next = anchors[Math.min(index + 1, anchors.length - 1)] as HTMLElement;
        next?.scrollIntoView({ behavior: "smooth" });
      }
      if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        const prev = anchors[Math.max(index - 1, 0)] as HTMLElement;
        prev?.scrollIntoView({ behavior: "smooth" });
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
}

export function SlideProgress() {
  const [value, setValue] = useState(0);
  
  useEffect(() => {
    const updateProgress = () => {
      const total = document.querySelectorAll("[data-slide]").length || 1;
      const current = Array.from(document.querySelectorAll("[data-slide]"))
        .findIndex(a => (a as HTMLElement).getBoundingClientRect().top >= -1) + 1;
      const newValue = Math.max(1, (current / total) * 100);
      setValue(newValue);
    };
    
    updateProgress();
    window.addEventListener("scroll", updateProgress);
    window.addEventListener("resize", updateProgress);
    
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);
  
  return (
    <div className="fixed bottom-6 left-6 right-6 z-50">
      <div className="glass rounded-full p-2">
        <Progress value={value} className="h-2" />
      </div>
      <div className="flex justify-center mt-3">
        <div className="glass rounded-full px-4 py-2 text-sm text-muted-foreground">
          Используйте стрелки для навигации
        </div>
      </div>
    </div>
  );
}
