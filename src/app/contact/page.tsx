"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Footer } from "@/components/footer";
import { contactInfo } from "@/lib/data";

export default function ContactPage() {
  return (
    <main className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-semibold mb-8">Контакты</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Запросить демо</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="name">Имя</Label>
                  <Input id="name" placeholder="Ваше имя" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <Label htmlFor="company">Организация</Label>
                  <Input id="company" placeholder="Название организации" />
                </div>
                <div>
                  <Label htmlFor="message">Сообщение</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Опишите ваши потребности..."
                    rows={4}
                  />
                </div>
                <Button type="submit" className="w-full">
                  Отправить запрос
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Контактная информация</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold">Telegram</h3>
                <a 
                  href={contactInfo.telegram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  @MagistrTheOne
                </a>
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-muted-foreground">{contactInfo.email}</p>
              </div>
              <div>
                <h3 className="font-semibold">Город разработки</h3>
                <p className="text-muted-foreground">{contactInfo.address}</p>
              </div>
              <div>
                <h3 className="font-semibold">Ответственный</h3>
                <p className="text-muted-foreground">{contactInfo.responsible}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
