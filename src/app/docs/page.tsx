import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Footer } from "@/components/footer";

export default function DocsPage() {
  const documents = [
    {
      title: "Технический паспорт",
      description: "Полное описание архитектуры и компонентов",
      type: "PDF"
    },
    {
      title: "Жизненный цикл ПО",
      description: "Процессы разработки и сопровождения",
      type: "PDF"
    },
    {
      title: "SLA и гарантии",
      description: "Уровни обслуживания и поддержки",
      type: "PDF"
    },
    {
      title: "BPMN диаграммы",
      description: "Бизнес-процессы и workflow",
      type: "PDF"
    }
  ];

  return (
    <main className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-semibold mb-8">Документация</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {documents.map((doc, i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {doc.title}
                  <span className="text-sm text-muted-foreground">{doc.type}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{doc.description}</p>
                <Button variant="outline" size="sm">
                  Скачать
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Пакетная загрузка</h2>
          <p className="text-muted-foreground mb-4">
            Скачайте все документы одним архивом для удобства работы.
          </p>
          <Button>
            Скачать архив (ZIP)
          </Button>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
