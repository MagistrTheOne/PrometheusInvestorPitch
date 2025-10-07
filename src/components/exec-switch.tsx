"use client";
import { Switch } from "@/components/ui/switch";
import { useRouter, useSearchParams } from "next/navigation";

export function ExecSwitch() {
  const router = useRouter();
  const params = useSearchParams();
  const exec = params.get("exec") === "1";
  
  return (
    <div className="fixed top-4 right-4 flex items-center gap-2 text-sm">
      <span>Режим Президента</span>
      <Switch 
        checked={exec} 
        onCheckedChange={(v) => {
          const q = new URLSearchParams(params.toString());
          v ? q.set("exec", "1") : q.delete("exec");
          router.push("?" + q.toString());
        }} 
      />
    </div>
  );
}
