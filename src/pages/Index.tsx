import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [selectedCity, setSelectedCity] = useState("Ярославль");

  const cities = ["Ярославль", "Кострома", "Иваново"];

  const services = [
    {
      title: "Мобильная техника",
      icon: "Smartphone",
      items: [
        "Ремонт смартфонов",
        "Замена экранов",
        "Замена аккумуляторов",
        "Восстановление после воды",
        "Замена разъемов",
        "Ремонт кнопок"
      ]
    },
    {
      title: "Компьютеры и ноутбуки",
      icon: "Laptop",
      items: [
        "Ремонт ноутбуков",
        "Ремонт компьютеров",
        "Чистка от пыли",
        "Замена термопасты",
        "Установка SSD",
        "Восстановление данных"
      ]
    },
    {
      title: "Бытовая техника",
      icon: "Home",
      items: [
        "Ремонт телевизоров",
        "Ремонт холодильников",
        "Ремонт стиральных машин",
        "Ремонт микроволновок",
        "Ремонт пылесосов",
        "Ремонт утюгов"
      ]
    },
    {
      title: "Цифровая техника",
      icon: "Camera",
      items: [
        "Ремонт фотоаппаратов",
        "Ремонт видеокамер",
        "Ремонт планшетов",
        "Ремонт электронных книг",
        "Ремонт навигаторов",
        "Ремонт умных часов"
      ]
    },
    {
      title: "Электроинструмент",
      icon: "Drill",
      items: [
        "Ремонт дрелей",
        "Ремонт шуруповертов",
        "Ремонт перфораторов",
        "Ремонт болгарок",
        "Ремонт лобзиков",
        "Ремонт триммеров"
      ]
    },
    {
      title: "Аудиотехника",
      icon: "Speaker",
      items: [
        "Ремонт колонок",
        "Ремонт наушников",
        "Ремонт музыкальных центров",
        "Ремонт усилителей",
        "Ремонт микрофонов",
        "Ремонт DJ-оборудования"
      ]
    }
  ];

  const advantages = [
    {
      icon: "Clock",
      title: "Быстрый ремонт",
      description: "Экспресс-ремонт за 30 минут"
    },
    {
      icon: "BadgeCheck",
      title: "Гарантия качества",
      description: "До 12 месяцев гарантии"
    },
    {
      icon: "Users",
      title: "Опыт с 2010 года",
      description: "Более 50 000 ремонтов"
    },
    {
      icon: "Wrench",
      title: "Все виды ремонта",
      description: "От замены экрана до восстановления платы"
    }
  ];

  const cityContacts = {
    "Ярославль": {
      addresses: [
        "ул. Свободы, д. 46",
        "пр-т Ленина, д. 28"
      ],
      phone: "+7 (4852) 67-89-00",
      schedule: "Пн-Пт: 9:00-20:00, Сб-Вс: 10:00-18:00"
    },
    "Кострома": {
      addresses: [
        "ул. Советская, д. 23"
      ],
      phone: "+7 (4942) 45-67-89",
      schedule: "Пн-Пт: 9:00-19:00, Сб: 10:00-17:00"
    },
    "Иваново": {
      addresses: [
        "пр-т Ленина, д. 65"
      ],
      phone: "+7 (4932) 34-56-78",
      schedule: "Пн-Пт: 9:00-19:00, Сб: 10:00-17:00"
    }
  };

  return (
    <div className="min-h-screen">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Wrench" size={28} className="text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-primary">ВИРТ</h1>
                <p className="text-xs text-muted-foreground">Сервисный центр</p>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-6">
              <div className="flex gap-2">
                {cities.map((city) => (
                  <button
                    key={city}
                    onClick={() => setSelectedCity(city)}
                    className={`px-4 py-2 rounded-lg transition-all ${
                      selectedCity === city
                        ? "bg-primary text-white"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    {city}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-end">
              <a href={`tel:${cityContacts[selectedCity as keyof typeof cityContacts].phone}`} className="text-2xl font-bold text-primary">
                {cityContacts[selectedCity as keyof typeof cityContacts].phone}
              </a>
              <span className="text-xs text-muted-foreground">Бесплатная консультация</span>
            </div>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-r from-primary to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Профессиональный ремонт техники в {selectedCity}
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Быстро, качественно, с гарантией. Бесплатная диагностика за 15 минут
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="secondary" className="font-semibold">
                <Icon name="Phone" className="mr-2" />
                Заказать звонок
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white">
                Узнать цены
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-white p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name={advantage.icon} size={32} className="text-primary" />
                </div>
                <h3 className="font-bold mb-2">{advantage.title}</h3>
                <p className="text-sm text-muted-foreground">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Наши услуги</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow border-2 hover:border-primary">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <Icon name={service.icon} size={28} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-4" variant="outline">
                    Заказать ремонт
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Как мы работаем</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Простой и прозрачный процесс ремонта
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: "Phone", title: "Звонок", description: "Вы звоните или оставляете заявку" },
              { icon: "Search", title: "Диагностика", description: "Бесплатная проверка за 15 минут" },
              { icon: "Wrench", title: "Ремонт", description: "Качественное устранение неисправности" },
              { icon: "CheckCircle", title: "Выдача", description: "Гарантия до 12 месяцев" }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-lg text-center">
                  <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {index + 1}
                  </div>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon name={step.icon} size={24} className="text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <Icon name="ChevronRight" size={24} className="text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Нужна консультация?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Оставьте заявку, и мы перезвоним в течение 5 минут
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="tel"
                placeholder="Ваш телефон"
                className="px-6 py-4 rounded-lg text-gray-900 text-lg w-full sm:w-80"
              />
              <Button size="lg" variant="secondary" className="font-semibold text-lg px-8">
                Заказать звонок
              </Button>
            </div>
            <p className="text-sm mt-4 text-blue-100">
              Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Контакты в городе {selectedCity}</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Адреса:</h3>
                      {cityContacts[selectedCity as keyof typeof cityContacts].addresses.map((addr, idx) => (
                        <p key={idx} className="text-muted-foreground">{addr}</p>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Телефон:</h3>
                      <a href={`tel:${cityContacts[selectedCity as keyof typeof cityContacts].phone}`} className="text-xl font-bold text-primary">
                        {cityContacts[selectedCity as keyof typeof cityContacts].phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Clock" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">График работы:</h3>
                      <p className="text-muted-foreground">{cityContacts[selectedCity as keyof typeof cityContacts].schedule}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gray-200 rounded-lg overflow-hidden h-[400px] flex items-center justify-center">
              <div className="text-center">
                <Icon name="Map" size={48} className="text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500">Карта</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Wrench" size={24} className="text-white" />
                </div>
                <span className="text-xl font-bold">ВИРТ</span>
              </div>
              <p className="text-gray-400 text-sm">
                Сервисный центр по ремонту техники в Ярославле, Костроме и Иваново
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">Услуги</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Ремонт смартфонов</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Ремонт ноутбуков</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Ремонт бытовой техники</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Ремонт электроинструмента</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Города</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                {cities.map((city) => (
                  <li key={city}>
                    <button onClick={() => setSelectedCity(city)} className="hover:text-white transition-colors">
                      {city}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Контакты</h3>
              <div className="space-y-3 text-sm">
                <a href={`tel:${cityContacts[selectedCity as keyof typeof cityContacts].phone}`} className="block text-xl font-bold text-primary">
                  {cityContacts[selectedCity as keyof typeof cityContacts].phone}
                </a>
                <p className="text-gray-400">{cityContacts[selectedCity as keyof typeof cityContacts].schedule}</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>© 2024 Сервисный центр ВИРТ. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
