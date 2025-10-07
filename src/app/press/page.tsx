import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Footer } from "@/components/footer";

export default function PressPage() {
  return (
    <main className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-semibold mb-8">Пресс-материалы</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Логотипы и брендинг</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Официальные логотипы и материалы для использования в СМИ
              </p>
              <Button variant="outline">
                Скачать пакет (ZIP)
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Пресс-релизы</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Официальные пресс-релизы и заявления
              </p>
              <Button variant="outline">
                Просмотреть
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Одностраничник (PDF)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Краткая презентация продукта в формате PDF для печати и распространения
            </p>
            <Button>
              Скачать PDF
            </Button>
          </CardContent>
        </Card>
      </div>
      
      <Footer />
    </main>
  );
}
