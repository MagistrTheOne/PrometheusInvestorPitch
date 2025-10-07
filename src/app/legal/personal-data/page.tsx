import { Footer } from "@/components/footer";

export default function PersonalDataPage() {
  return (
    <main className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-semibold mb-8">Обработка персональных данных</h1>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Соответствие ФЗ-152</h2>
            <p className="text-muted-foreground">
              Обработка персональных данных осуществляется в строгом соответствии с Федеральным законом 
              от 27.07.2006 № 152-ФЗ «О персональных данных» и подзаконными актами.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Категории обрабатываемых данных</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Фамилия, имя, отчество</li>
              <li>Контактные данные (телефон, email)</li>
              <li>Наименование организации</li>
              <li>Должность и сфера деятельности</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Меры защиты персональных данных</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Шифрование данных при передаче (TLS 1.3)</li>
              <li>Контроль доступа на основе ролей</li>
              <li>Журналирование всех операций</li>
              <li>Регулярное резервное копирование</li>
              <li>Аудит безопасности</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Сроки хранения</h2>
            <p className="text-muted-foreground">
              Персональные данные хранятся в течение срока, необходимого для достижения целей обработки, 
              но не более 5 лет с момента последнего взаимодействия с субъектом персональных данных.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Контактная информация</h2>
            <div className="bg-card p-4 rounded-lg">
              <p className="text-muted-foreground">
                <strong>Ответственное лицо:</strong> Иванов И.И.<br/>
                <strong>Телефон:</strong> +7 (495) 123-45-67<br/>
                <strong>Email:</strong> privacy@prometheus.example.ru<br/>
                <strong>Адрес:</strong> г. Москва, ул. Примерная, д. 1
              </p>
            </div>
          </section>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
