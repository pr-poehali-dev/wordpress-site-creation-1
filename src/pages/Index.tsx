import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const services = [
    { icon: "Smartphone", title: "Ремонт смартфонов", description: "Замена экранов, батарей, восстановление после воды" },
    { icon: "Laptop", title: "Ремонт ноутбуков", description: "Чистка, замена комплектующих, восстановление данных" },
    { icon: "Monitor", title: "Ремонт компьютеров", description: "Диагностика, сборка, модернизация ПК" },
    { icon: "Tv", title: "Ремонт телевизоров", description: "Замена матриц, блоков питания, настройка" },
    { icon: "Tablet", title: "Ремонт планшетов", description: "Замена стекла, разъемов, прошивка" },
    { icon: "Speaker", title: "Аудиотехника", description: "Ремонт колонок, наушников, микрофонов" }
  ];

  const advantages = [
    { icon: "Clock", title: "Быстрый ремонт", description: "Большинство работ за 1-2 часа" },
    { icon: "Shield", title: "Гарантия качества", description: "До 12 месяцев на все виды работ" },
    { icon: "Wrench", title: "Опытные мастера", description: "Более 10 лет на рынке" },
    { icon: "BadgeCheck", title: "Оригинальные запчасти", description: "Только проверенные комплектующие" }
  ];

  const portfolio = [
    { title: "iPhone 12 Pro", description: "Замена дисплея и батареи", image: "https://images.unsplash.com/photo-1592286927505-2fd11654c922?w=400&h=300&fit=crop" },
    { title: "MacBook Pro", description: "Чистка системы охлаждения", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop" },
    { title: "Samsung TV", description: "Замена блока питания", image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=300&fit=crop" }
  ];

  const reviews = [
    { name: "Алексей М.", rating: 5, text: "Быстро починили мой iPhone! Качество работы на высоте, рекомендую!" },
    { name: "Мария К.", rating: 5, text: "Отличный сервис! Восстановили ноутбук после залития. Спасибо большое!" },
    { name: "Дмитрий В.", rating: 5, text: "Профессионалы своего дела. Ремонт телевизора выполнен качественно и в срок." }
  ];

  const pricing = [
    { service: "Диагностика", price: "Бесплатно" },
    { service: "Замена экрана смартфона", price: "от 2500₽" },
    { service: "Замена батареи", price: "от 1500₽" },
    { service: "Чистка ноутбука", price: "от 1200₽" },
    { service: "Ремонт разъема зарядки", price: "от 1000₽" },
    { service: "Восстановление после воды", price: "от 2000₽" }
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Wrench" size={28} className="text-primary" />
              <span className="text-xl font-bold text-primary">ТехноСервис</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection("hero")} className="hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection("about")} className="hover:text-primary transition-colors">О компании</button>
              <button onClick={() => scrollToSection("services")} className="hover:text-primary transition-colors">Услуги</button>
              <button onClick={() => scrollToSection("advantages")} className="hover:text-primary transition-colors">Преимущества</button>
              <button onClick={() => scrollToSection("portfolio")} className="hover:text-primary transition-colors">Портфолио</button>
              <button onClick={() => scrollToSection("reviews")} className="hover:text-primary transition-colors">Отзывы</button>
              <button onClick={() => scrollToSection("pricing")} className="hover:text-primary transition-colors">Прайс</button>
              <button onClick={() => scrollToSection("contacts")} className="hover:text-primary transition-colors">Контакты</button>
            </div>
            <Button onClick={() => scrollToSection("contacts")}>Заказать звонок</Button>
          </div>
        </nav>
      </header>

      <section id="hero" className="pt-32 pb-20 bg-gradient-to-br from-primary/10 to-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">Профессиональный ремонт бытовой электроники</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Быстро, качественно, с гарантией. Более 10 лет опыта работы
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" onClick={() => scrollToSection("contacts")}>
                Заказать ремонт
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection("pricing")}>
                Узнать цены
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">О компании</h2>
            <p className="text-lg text-muted-foreground mb-6">
              ТехноСервис — ведущий сервисный центр по ремонту бытовой электроники с 2013 года. 
              Мы специализируемся на ремонте смартфонов, ноутбуков, компьютеров и другой техники.
            </p>
            <p className="text-lg text-muted-foreground">
              Наша команда состоит из сертифицированных специалистов с многолетним опытом. 
              Мы используем только оригинальные запчасти и современное оборудование для диагностики и ремонта.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Наши услуги</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Icon name={service.icon} size={32} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Наши преимущества</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name={advantage.icon} size={40} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                <p className="text-muted-foreground">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Портфолио работ</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {portfolio.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Отзывы клиентов</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">{review.text}</p>
                  <p className="font-semibold">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Прайс-лист</h2>
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-6">
              <div className="space-y-4">
                {pricing.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b last:border-b-0">
                    <span className="text-lg">{item.service}</span>
                    <span className="text-lg font-semibold text-primary">{item.price}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-6 text-center">
                * Точная стоимость определяется после диагностики
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Контакты</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Свяжитесь с нами</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" size={24} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Адрес:</p>
                    <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 123</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Phone" size={24} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Телефон:</p>
                    <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Mail" size={24} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Email:</p>
                    <p className="text-muted-foreground">info@technoservice.ru</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Clock" size={24} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Режим работы:</p>
                    <p className="text-muted-foreground">Пн-Пт: 9:00 - 20:00</p>
                    <p className="text-muted-foreground">Сб-Вс: 10:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Заказать звонок</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Input
                    placeholder="Телефон"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Опишите проблему"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                  />
                </div>
                <Button type="submit" className="w-full">
                  Отправить заявку
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Wrench" size={24} />
              <span className="font-bold">ТехноСервис</span>
            </div>
            <p className="text-sm">© 2024 ТехноСервис. Все права защищены.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Icon name="Phone" size={20} />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Icon name="Mail" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
