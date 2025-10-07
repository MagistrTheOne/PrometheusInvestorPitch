import { Footer } from "@/components/footer";

export default function CasesPage() {
  return (
    <main className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-semibold mb-8">Кейсы и отрасли</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Государственный сектор</h2>
            <ul className="space-y-2">
              <li>Обработка документооборота</li>
              <li>Анализ обращений граждан</li>
              <li>Поддержка принятия решений</li>
              <li>Соответствие ФЗ-152</li>
            </ul>
          </div>
          
          <div className="bg-card p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Корпоративный сектор</h2>
            <ul className="space-y-2">
              <li>Автоматизация бизнес-процессов</li>
              <li>Анализ данных и отчётность</li>
              <li>Клиентский сервис</li>
              <li>Внутренние коммуникации</li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Пилотные проекты</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-card p-4 rounded-lg">
              <h3 className="font-semibold">Q4 2025</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Пилоты в 3-х федеральных ведомствах
              </p>
            </div>
            <div className="bg-card p-4 rounded-lg">
              <h3 className="font-semibold">Q1 2026</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Корпоративные пилоты в 5 компаниях
              </p>
            </div>
            <div className="bg-card p-4 rounded-lg">
              <h3 className="font-semibold">Q2 2026</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Промышленная эксплуатация
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
