import { Footer } from "@/components/footer";

export default function LicensePage() {
  return (
    <main className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-semibold mb-8">Лицензионное соглашение</h1>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Предмет соглашения</h2>
            <p className="text-muted-foreground">
              Настоящее лицензионное соглашение регулирует условия использования программного обеспечения 
              «Прометей AGI» и связанных с ним материалов.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Права интеллектуальной собственности</h2>
            <p className="text-muted-foreground">
              Все права на программное обеспечение, включая исходный код, алгоритмы, модели и документацию, 
              принадлежат ООО «Прометей». Использование ПО возможно только в рамках лицензионного соглашения.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Ограничения использования</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Запрещено обратное проектирование и декомпиляция</li>
              <li>Запрещено создание производных продуктов без разрешения</li>
              <li>Запрещено использование в военных или террористических целях</li>
              <li>Запрещено нарушение экспортного законодательства</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Соответствие российскому законодательству</h2>
            <p className="text-muted-foreground">
              Программное обеспечение разработано в соответствии с требованиями российского законодательства, 
              включая ФЗ-152 «О персональных данных», ФЗ-149 «Об информации» и требования по импортозамещению.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Техническая поддержка</h2>
            <p className="text-muted-foreground">
              Техническая поддержка предоставляется в рамках SLA, включая консультации, обновления 
              и исправление ошибок. Поддержка осуществляется на русском языке.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Контактная информация</h2>
            <div className="bg-card p-4 rounded-lg">
              <p className="text-muted-foreground">
                <strong>Лицензиар:</strong> ООО «Прометей»<br/>
                <strong>Адрес:</strong> г. Москва, ул. Примерная, д. 1<br/>
                <strong>Email:</strong> legal@prometheus.example.ru<br/>
                <strong>Телефон:</strong> +7 (495) 123-45-67
              </p>
            </div>
          </section>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
