import { Card, CardContent } from "@/components/ui/card";

export function KpiGrid({ items }: { items: { label: string; value: string; note?: string }[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      {items.map((k, i) => (
        <Card key={i} className="glass hover:bg-card/60 transition-all duration-300 hover:scale-105">
          <CardContent className="p-8 text-center">
            <div className="text-4xl font-bold text-white mb-2">{k.value}</div>
            <div className="text-lg font-medium mb-2 text-white">{k.label}</div>
            {k.note && (
              <div className="text-sm text-muted-foreground leading-relaxed">
                {k.note}
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
