import { Footer } from "@/components/footer";

export default function CookiesPage() {
  return (
    <main className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-semibold mb-8">Политика использования cookies</h1>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Что такое cookies</h2>
            <p className="text-muted-foreground">
              Cookies — это небольшие текстовые файлы, которые сохраняются на вашем устройстве 
              при посещении веб-сайта. Они помогают сайту запомнить информацию о вашем посещении.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Используемые cookies</h2>
            <div className="bg-card p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Функциональные cookies</h3>
              <p className="text-muted-foreground text-sm">
                Используются для обеспечения базовой функциональности сайта, включая навигацию 
                между слайдами и сохранение предпочтений пользователя.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Отсутствие трекинга</h2>
            <p className="text-muted-foreground">
              На данном сайте НЕ используются аналитические, рекламные или другие трекинг-cookies. 
              Мы не собираем данные о поведении пользователей и не передаем информацию третьим лицам.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Управление cookies</h2>
            <p className="text-muted-foreground">
              Вы можете отключить cookies в настройках вашего браузера, однако это может повлиять 
              на функциональность сайта. Для отключения cookies обратитесь к документации вашего браузера.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Контакты</h2>
            <p className="text-muted-foreground">
              По вопросам использования cookies обращайтесь по email: privacy@prometheus.example.ru
            </p>
          </section>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
