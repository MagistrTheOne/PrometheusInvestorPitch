import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ModelCard({ 
  name, 
  role, 
  status, 
  description 
}: { 
  name: string; 
  role: string; 
  status: string;
  description?: string;
}) {
  const getStatusColor = (status: string) => {
    if (status.includes("готов")) return "text-green-400";
    if (status.includes("pilot")) return "text-yellow-400";
    if (status.includes("R&D")) return "text-blue-400";
    return "text-muted-foreground";
  };

  return (
    <Card className="glass hover:bg-card/60 transition-all duration-300 hover:scale-105">
      <CardHeader className="pb-4 text-center">
        <CardTitle className="text-2xl font-bold text-white">{name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-center">
        <div className="text-lg font-medium text-white">{role}</div>
        <div className={`text-sm font-medium ${getStatusColor(status)}`}>
          Статус: {status}
        </div>
        {description && (
          <div className="text-sm text-muted-foreground leading-relaxed pt-2 border-t border-border/50">
            {description}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
