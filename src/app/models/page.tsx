import { ModelCard } from "@/components/model-card";
import { Footer } from "@/components/footer";
import { models } from "@/lib/data";

export default function ModelsPage() {
  return (
    <main className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-semibold mb-8">Линейка моделей</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {models.map((model, i) => (
            <ModelCard key={i} {...model} />
          ))}
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Технические характеристики</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-card p-4 rounded-lg">
              <h3 className="font-semibold">Svarog</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Параметры: 7B-70B<br/>
                Контекст: 32K токенов<br/>
                Языки: RU, EN
              </p>
            </div>
            <div className="bg-card p-4 rounded-lg">
              <h3 className="font-semibold">Radon-MCAI</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Архитектура: Meta-Cognitive<br/>
                Агенты: Multi-agent<br/>
                Планирование: Hierarchical
              </p>
            </div>
            <div className="bg-card p-4 rounded-lg">
              <h3 className="font-semibold">Oracle850B-MoE</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Параметры: 850B<br/>
                Эксперты: 64-128<br/>
                Активация: Top-2
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
