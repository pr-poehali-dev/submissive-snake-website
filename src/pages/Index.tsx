import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const features = [
    {
      icon: "FileText",
      title: "Конспекты",
      description: "Автоматические выжимки из аудио и видео"
    },
    {
      icon: "List",
      title: "Тезисы",
      description: "Структурированные ключевые мысли"
    },
    {
      icon: "Clock",
      title: "Таймкоды",
      description: "Ссылки на важные моменты в записи"
    },
    {
      icon: "Subtitles",
      title: "Субтитры",
      description: "Полная расшифровка для видео"
    }
  ];

  const subscriptions = [
    {
      name: "Бесплатно",
      price: "0",
      period: "навсегда",
      features: ["Голосовые до 5 мин", "Кружочки в группах", "Базовое summary", "Расшифровка аудио"],
      popular: false,
      badge: "🎁"
    },
    {
      name: "Базовый",
      price: "300",
      period: "мес",
      minutes: "240 мин/мес",
      features: ["240 минут в месяц", "Файлов без ограничений", "Все форматы аудио/видео", "Конспекты и тезисы"],
      popular: false,
      badge: "📄"
    },
    {
      name: "Премиум",
      price: "900",
      period: "мес",
      minutes: "900 мин/мес",
      features: ["900 минут в месяц", "Файлов без ограничений", "Приоритетная обработка", "Таймкоды и субтитры", "Экспорт результатов"],
      popular: true,
      badge: "⭐️"
    }
  ];

  const yearlyPlans = [
    {
      name: "Базовый годовой",
      price: "2 990",
      period: "год",
      oldPrice: "3 600",
      savings: "610",
      minutes: "240 мин/мес",
      features: ["240 минут каждый месяц", "Скидка 30%", "Все возможности месячного плана"],
      popular: false,
      badge: "📄"
    },
    {
      name: "Премиум годовой",
      price: "7 490",
      period: "год",
      oldPrice: "10 800",
      savings: "3 310",
      minutes: "900 мин/мес",
      features: ["900 минут каждый месяц", "Скидка 30%", "Все возможности месячного плана"],
      popular: true,
      badge: "⭐️"
    }
  ];

  const credits = [
    {
      name: "Старт",
      price: "4 000",
      minutes: "5 000 мин",
      features: ["5 000 минут", "Без срока действия", "Без лимита по файлам", "Гибкое использование"],
      popular: false,
      badge: "🚀"
    },
    {
      name: "Средний",
      price: "7 000",
      minutes: "10 000 мин",
      features: ["10 000 минут", "Без срока действия", "Без лимита по файлам", "Выгоднее на 30%"],
      popular: true,
      badge: "⚡️"
    },
    {
      name: "Большой",
      price: "12 000",
      minutes: "20 000 мин",
      features: ["20 000 минут", "Без срока действия", "Без лимита по файлам", "Максимальная выгода"],
      popular: false,
      badge: "🦾"
    }
  ];

  const businessBenefits = [
    {
      icon: "TrendingUp",
      title: "Экономия времени",
      description: "Не нужно слушать часовые записи совещаний"
    },
    {
      icon: "BookOpen",
      title: "Обучение и развитие",
      description: "Быстрое изучение лекций и вебинаров"
    },
    {
      icon: "Briefcase",
      title: "Для команд",
      description: "Конспекты встреч и интервью всегда под рукой"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 glass border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold gradient-text">Саммари</div>
          <div className="hidden md:flex gap-6">
            <a href="#home" className="hover:text-primary transition-colors">Главная</a>
            <a href="#features" className="hover:text-primary transition-colors">Возможности</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Тарифы</a>
            <a href="#business" className="hover:text-primary transition-colors">Для бизнеса</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="glow">Начать</Button>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 animate-glow-pulse"></div>
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-primary/20 text-primary border-primary">🎁 Бесплатно до 5 минут</Badge>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="gradient-text">Превращаем аудио</span> в умный конспект
              </h1>
              <p className="text-xl text-muted-foreground">
                Я — Саммари. Делаю короткие выжимки из видео и подкастов: конспекты, тезисы, таймкоды и субтитры
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="glow">
                  <Icon name="Send" size={20} className="mr-2" />
                  Попробовать бесплатно
                </Button>
                <Button size="lg" variant="outline" className="glass">
                  Как это работает?
                </Button>
              </div>
            </div>
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
              <img 
                src="https://cdn.poehali.dev/projects/d512dd05-5e81-4cad-b9ff-2cc5ed47cd59/files/98c22647-0d9d-40e7-b8e4-5283f9e68b54.jpg" 
                alt="Tech Dashboard" 
                className="relative rounded-2xl glow"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">Возможности</h2>
            <p className="text-xl text-muted-foreground">Всё, что нужно для работы с аудио и видео</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="glass hover:glow transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                    <Icon name={feature.icon as any} className="text-primary" size={24} />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 bg-gradient-to-b from-transparent to-primary/5">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">Тарифы</h2>
            <p className="text-xl text-muted-foreground">🎉 Выберите удобный формат — подписка или кредиты</p>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 gradient-text">📅 Месячные подписки</h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {subscriptions.map((plan, index) => (
                <Card 
                  key={index} 
                  className={`glass relative overflow-hidden ${plan.popular ? 'ring-2 ring-primary glow scale-105' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-accent">Популярный</Badge>
                    </div>
                  )}
                  <CardHeader>
                    <div className="text-3xl mb-2">{plan.badge}</div>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription>
                      <div className="mt-4 mb-2">
                        <span className="text-5xl font-bold gradient-text">{plan.price}</span>
                        <span className="text-muted-foreground ml-2">₽/{plan.period}</span>
                      </div>
                      {plan.minutes && (
                        <p className="text-primary font-semibold">{plan.minutes}</p>
                      )}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-6" variant={plan.popular ? "default" : "outline"}>
                      Выбрать план
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-4 gradient-text">✨ Годовые подписки</h3>
            <p className="text-center text-muted-foreground mb-8">Со скидкой до 30%</p>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {yearlyPlans.map((plan, index) => (
                <Card 
                  key={index} 
                  className={`glass relative overflow-hidden ${plan.popular ? 'ring-2 ring-accent glow' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-accent">Выгодно!</Badge>
                    </div>
                  )}
                  <CardHeader>
                    <div className="text-3xl mb-2">{plan.badge}</div>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription>
                      <div className="mt-4 mb-2">
                        <div className="flex items-center gap-3">
                          <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                          <span className="text-xl text-muted-foreground line-through">{plan.oldPrice}</span>
                        </div>
                        <p className="text-accent font-semibold mt-2">Экономия {plan.savings} ₽</p>
                        <p className="text-primary text-sm mt-1">{plan.minutes}</p>
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-6" variant={plan.popular ? "default" : "outline"}>
                      Купить годовую подписку
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-center mb-4 gradient-text">💳 Кредиты</h3>
            <p className="text-center text-muted-foreground mb-8">Без лимита по файлам и времени</p>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {credits.map((plan, index) => (
                <Card 
                  key={index} 
                  className={`glass relative overflow-hidden ${plan.popular ? 'ring-2 ring-secondary glow scale-105' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-secondary">Выгодно</Badge>
                    </div>
                  )}
                  <CardHeader>
                    <div className="text-3xl mb-2">{plan.badge}</div>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription>
                      <div className="mt-4 mb-2">
                        <span className="text-5xl font-bold gradient-text">{plan.price}</span>
                        <span className="text-muted-foreground ml-2">₽</span>
                      </div>
                      <p className="text-secondary font-semibold">{plan.minutes}</p>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-6" variant={plan.popular ? "default" : "outline"}>
                      Купить кредиты
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-12 max-w-3xl mx-auto">
            <Card className="glass border-primary/50">
              <CardHeader>
                <CardTitle className="text-xl">💡 Полезно знать</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="flex items-start gap-2">
                  <Icon name="Info" size={18} className="text-primary flex-shrink-0 mt-1" />
                  <span>Создание субтитров расходует в 2 раза меньше минут (часовое видео ≈ 30 мин)</span>
                </p>
                <p className="flex items-start gap-2">
                  <Icon name="RefreshCw" size={18} className="text-primary flex-shrink-0 mt-1" />
                  <span>Подписка продлевается автоматически — отключить можно в разделе информации о подписке</span>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="business" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-secondary/20 blur-3xl rounded-full"></div>
              <img 
                src="https://cdn.poehali.dev/projects/d512dd05-5e81-4cad-b9ff-2cc5ed47cd59/files/9e590588-2330-4a62-a35a-49e944c98c56.jpg" 
                alt="Business Analytics" 
                className="relative rounded-2xl glow"
              />
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Для кого?</h2>
                <p className="text-xl text-muted-foreground">
                  Саммари помогает всем, кто работает с аудио и видео контентом
                </p>
              </div>
              <div className="space-y-6">
                {businessBenefits.map((benefit, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Icon name={benefit.icon as any} className="text-secondary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button size="lg" className="glow">
                <Icon name="Send" size={20} className="mr-2" />
                Начать использовать
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-t from-transparent to-accent/5">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">Контакты</h2>
            <p className="text-xl text-muted-foreground">Свяжитесь с нами прямо сейчас</p>
          </div>
          <Card className="glass glow">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Имя</label>
                  <Input 
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="glass"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input 
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="glass"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите о вашем проекте"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="glass"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full glow">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 Саммари. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;