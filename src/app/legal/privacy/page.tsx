import { Footer } from "@/components/footer";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-semibold mb-8">Политика конфиденциальности</h1>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Общие положения</h2>
            <p className="text-muted-foreground">
              Настоящая Политика конфиденциальности определяет порядок обработки персональных данных 
              пользователей сайта prometheus.example.ru (далее — «Сайт») в соответствии с требованиями 
              Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных».
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Оператор персональных данных</h2>
            <p className="text-muted-foreground">
              Оператором персональных данных является ООО «Прометей», зарегистрированное по адресу: 
              г. Москва, ул. Примерная, д. 1. Ответственное лицо за обработку персональных данных: 
              Иванов И.И., тел. +7 (495) 123-45-67, email: privacy@prometheus.example.ru
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Цели обработки персональных данных</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Предоставление информации о продуктах и услугах</li>
              <li>Обработка запросов и обращений пользователей</li>
              <li>Организация демонстраций и презентаций</li>
              <li>Соблюдение требований законодательства РФ</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Правовые основания обработки</h2>
            <p className="text-muted-foreground">
              Обработка персональных данных осуществляется на основании согласия субъекта персональных данных, 
              а также в случаях, предусмотренных федеральными законами.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Права субъектов персональных данных</h2>
            <p className="text-muted-foreground">
              Субъект персональных данных имеет право на получение информации об обработке его персональных данных, 
              доступ к персональным данным, их уточнение, блокирование или уничтожение в случае их неправомерной обработки.
            </p>
          </section>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
