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
      icon: "Zap",
      title: "Молниеносная скорость",
      description: "Обработка запросов в режиме реального времени"
    },
    {
      icon: "Shield",
      title: "Безопасность",
      description: "Шифрование данных по стандартам банков"
    },
    {
      icon: "Sparkles",
      title: "ИИ-автоматизация",
      description: "Умные алгоритмы для оптимизации процессов"
    },
    {
      icon: "Users",
      title: "Масштабируемость",
      description: "От стартапа до корпорации"
    }
  ];

  const plans = [
    {
      name: "Старт",
      price: "990",
      period: "мес",
      features: ["До 1000 запросов", "Базовая поддержка", "API доступ", "Аналитика"],
      popular: false
    },
    {
      name: "Про",
      price: "2990",
      period: "мес",
      features: ["До 10000 запросов", "Приоритетная поддержка", "API доступ", "Расширенная аналитика", "Интеграции"],
      popular: true
    },
    {
      name: "Бизнес",
      price: "9990",
      period: "мес",
      features: ["Безлимитные запросы", "VIP поддержка 24/7", "API доступ", "Кастомная аналитика", "Все интеграции", "Персональный менеджер"],
      popular: false
    }
  ];

  const businessBenefits = [
    {
      icon: "TrendingUp",
      title: "Рост продаж на 40%",
      description: "Автоматизация продаж через Telegram"
    },
    {
      icon: "Clock",
      title: "Экономия 20 часов в неделю",
      description: "Роботизация рутинных задач"
    },
    {
      icon: "Target",
      title: "Точность 95%+",
      description: "ИИ-анализ клиентских запросов"
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
          <div className="text-2xl font-bold gradient-text">TechBot</div>
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
              <Badge className="bg-primary/20 text-primary border-primary">Инновационная технология</Badge>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="gradient-text">Будущее бизнеса</span> начинается здесь
              </h1>
              <p className="text-xl text-muted-foreground">
                Мощный Telegram-бот для автоматизации бизнес-процессов с использованием ИИ
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="glow">
                  <Icon name="Send" size={20} className="mr-2" />
                  Открыть в Telegram
                </Button>
                <Button size="lg" variant="outline" className="glass">
                  Демо
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
            <p className="text-xl text-muted-foreground">Технологии, которые работают на вас</p>
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
            <p className="text-xl text-muted-foreground">Выберите оптимальный план для вашего бизнеса</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
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
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>
                    <div className="mt-4 mb-6">
                      <span className="text-5xl font-bold gradient-text">{plan.price}</span>
                      <span className="text-muted-foreground ml-2">₽/{plan.period}</span>
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
                    Выбрать план
                  </Button>
                </CardContent>
              </Card>
            ))}
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
                <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Для бизнеса</h2>
                <p className="text-xl text-muted-foreground">
                  Трансформируйте свой бизнес с помощью ИИ-автоматизации
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
                Получить консультацию
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
          <p>© 2024 TechBot. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
