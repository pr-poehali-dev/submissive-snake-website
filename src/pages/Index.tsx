import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";

const Index = () => {
  const [monthlyMinutes, setMonthlyMinutes] = useState<number>(240);
  const [recommendation, setRecommendation] = useState<string>('');
  const [navHidden, setNavHidden] = useState<boolean>(false);

  useEffect(() => {
    let lastScroll = 0;
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setNavHidden(currentScroll > 100 && currentScroll > lastScroll);
      lastScroll = currentScroll;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: "Video",
      title: "Видео и аудио",
      description: "Обработка видео (вертикальных и горизонтальных), аудиофайлов, голосовых сообщений и кружочков ТГ"
    },
    {
      icon: "FileText",
      title: "Краткая выжимка",
      description: "Автоматические конспекты с договоренностями и принятыми решениями"
    },
    {
      icon: "Languages",
      title: "54 языка",
      description: "Поддержка распознавания и обработки на 54 языках мира"
    },
    {
      icon: "Subtitles",
      title: "Полная расшифровка",
      description: "Субтитры и таймкоды для удобной навигации"
    }
  ];

  const subscriptions = [
    {
      name: "Бесплатно",
      price: "0",
      period: "навсегда",
      features: ["Голосовые до 5 мин в группах ТГ", "Кружочки в группах ТГ", "Только расшифровка"],
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

  const calculateRecommendation = (minutes: number) => {
    if (minutes <= 240) {
      return {
        plan: "Базовый месячный",
        price: "300 ₽/мес",
        reason: "Оптимальный выбор для вашего использования"
      };
    } else if (minutes <= 900) {
      return {
        plan: "Премиум месячный",
        price: "900 ₽/мес",
        reason: "Лучший баланс цены и возможностей"
      };
    } else if (minutes <= 2880) {
      const monthlyPrice = 900;
      const yearlyPrice = 7490 / 12;
      if (yearlyPrice < monthlyPrice) {
        return {
          plan: "Премиум годовой",
          price: "7 490 ₽/год (экономия 3 310 ₽)",
          reason: "Годовая подписка выгоднее на 30%"
        };
      }
    }
    
    const totalMinutes = minutes * 12;
    const creditOption5k = totalMinutes <= 5000 ? { name: "Старт", price: 4000, minutes: 5000 } : null;
    const creditOption10k = totalMinutes <= 10000 ? { name: "Средний", price: 7000, minutes: 10000 } : null;
    const creditOption20k = totalMinutes <= 20000 ? { name: "Большой", price: 12000, minutes: 20000 } : null;
    
    const bestCredit = creditOption5k || creditOption10k || creditOption20k;
    
    if (bestCredit) {
      const pricePerMonth = bestCredit.price / 12;
      return {
        plan: `Кредиты ${bestCredit.name}`,
        price: `${bestCredit.price.toLocaleString()} ₽ (~${Math.round(pricePerMonth)} ₽/мес)`,
        reason: "Кредиты выгоднее при высоком использовании"
      };
    }
    
    return {
      plan: "Кредиты Большой",
      price: "12 000 ₽ за 20 000 минут",
      reason: "Максимальная выгода для интенсивного использования"
    };
  };

  const handleCalculate = () => {
    const result = calculateRecommendation(monthlyMinutes);
    setRecommendation(`Рекомендуем: ${result.plan} (${result.price}). ${result.reason}`);
  };

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

  return (
    <div className="min-h-screen bg-background">
      <nav className={`fixed top-0 w-full z-50 glass border-b border-border transition-transform duration-300 ${navHidden ? '-translate-y-full' : 'translate-y-0'}`}>
        <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
          <div className="text-xl md:text-2xl font-bold gradient-text">Саммари</div>
          <div className="hidden md:flex gap-6">
            <a href="#home" className="hover:text-primary transition-colors">Главная</a>
            <a href="#features" className="hover:text-primary transition-colors">Возможности</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Тарифы</a>
            <a href="#business" className="hover:text-primary transition-colors">Для бизнеса</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="glow" size="sm" asChild>
            <a href="https://t.me/sp_call_summary_bot" target="_blank" rel="noopener noreferrer">Начать</a>
          </Button>
        </div>
      </nav>

      <section id="home" className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 animate-glow-pulse"></div>
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 md:space-y-6 animate-fade-in">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
                <span className="gradient-text">Превращаем аудио</span> в умный конспект
              </h1>
              <p className="text-base md:text-xl text-muted-foreground">
                Я — Саммари. Делаю короткие выжимки из видео и подкастов: конспекты, тезисы, таймкоды и субтитры
              </p>
              <Button size="lg" className="glow" asChild>
                <a href="https://t.me/sp_call_summary_bot" target="_blank" rel="noopener noreferrer">
                  <Icon name="Send" size={20} className="mr-2" />
                  Попробовать бесплатно
                </a>
              </Button>
            </div>
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=600&fit=crop" 
                alt="Audio visualization"
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-12 md:py-20 px-4 bg-gradient-to-b from-transparent to-primary/5">
        <div className="container mx-auto">
          <div className="text-center mb-8 md:mb-16 space-y-2 md:space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold gradient-text">Возможности</h2>
            <p className="text-base md:text-xl text-muted-foreground">Все для эффективной работы с аудио и видео</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="glass hover-lift">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={feature.icon as any} size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="py-12 md:py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-8 md:mb-16 space-y-2 md:space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold gradient-text">Для кого это полезно</h2>
            <p className="text-base md:text-xl text-muted-foreground">Решения для разных задач</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 max-w-5xl mx-auto">
            {businessBenefits.map((benefit, index) => (
              <Card key={index} className="glass hover-lift text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon name={benefit.icon as any} size={32} className="text-secondary" />
                  </div>
                  <CardTitle className="text-xl mb-2">{benefit.title}</CardTitle>
                  <CardDescription className="text-base">{benefit.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-12 md:py-20 px-4 bg-gradient-to-b from-transparent to-secondary/5">
        <div className="container mx-auto">
          <div className="text-center mb-8 md:mb-16 space-y-2 md:space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold gradient-text">Тарифы</h2>
            <p className="text-base md:text-xl text-muted-foreground">Выберите подходящий план</p>
          </div>

          <div className="max-w-2xl mx-auto mb-8 md:mb-16">
            <Card className="glass glow">
              <CardHeader>
                <CardTitle className="text-center text-lg sm:text-xl md:text-2xl">🧮 Калькулятор тарифов</CardTitle>
                <CardDescription className="text-center text-sm md:text-base">Узнайте, какой тариф вам подходит</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 md:space-y-6">
                <div className="space-y-3 md:space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-base md:text-lg font-medium">Минут в месяц:</label>
                    <span className="text-2xl md:text-3xl font-bold gradient-text">{monthlyMinutes}</span>
                  </div>
                  <Slider
                    value={[monthlyMinutes]}
                    onValueChange={(value) => setMonthlyMinutes(value[0])}
                    min={60}
                    max={5000}
                    step={60}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>60 мин</span>
                    <span>5000 мин</span>
                  </div>
                </div>

                <Button 
                  onClick={handleCalculate} 
                  className="w-full glow" 
                  size="lg"
                >
                  <Icon name="Sparkles" size={20} className="mr-2" />
                  Подобрать тариф
                </Button>

                {recommendation && (
                  <div className="p-4 rounded-lg glass border-2 border-primary animate-fade-in">
                    <div className="flex items-start gap-3">
                      <Icon name="Lightbulb" className="text-primary flex-shrink-0 mt-1" size={24} />
                      <div>
                        <p className="font-semibold text-lg mb-1">Наша рекомендация:</p>
                        <p className="text-foreground">{recommendation}</p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="p-4 rounded-lg bg-primary/10 border border-primary/30">
                  <p className="text-sm text-center">
                    <Icon name="Info" size={16} className="inline mr-1" />
                    Для субтитров расход минут в 2 раза меньше
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mb-8 md:mb-16">
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 md:mb-8 gradient-text">📅 Помесячные подписки</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto">
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
                    <div className="text-2xl md:text-3xl mb-2">{plan.badge}</div>
                    <CardTitle className="text-lg md:text-2xl">{plan.name}</CardTitle>
                    <CardDescription>
                      <div className="mt-3 md:mt-4 mb-2">
                        <span className="text-3xl md:text-5xl font-bold gradient-text">{plan.price}</span>
                        <span className="text-muted-foreground ml-1 md:ml-2 text-sm md:text-base">₽/{plan.period}</span>
                      </div>
                      {plan.minutes && <p className="text-primary font-semibold">{plan.minutes}</p>}
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
                    <Button className="w-full mt-6" variant={plan.popular ? "default" : "outline"} asChild>
                      <a href="https://t.me/sp_call_summary_bot" target="_blank" rel="noopener noreferrer">
                        {plan.price === "0" ? "Начать" : "Оформить"}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-8 md:mb-16">
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-3 md:mb-4 gradient-text">📆 Годовые подписки</h3>
            <p className="text-center text-accent font-semibold text-base md:text-lg mb-6 md:mb-8">Скидка 30% при оплате на год</p>
            <div className="grid md:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
              {yearlyPlans.map((plan, index) => (
                <Card 
                  key={index} 
                  className={`glass relative overflow-hidden ${plan.popular ? 'ring-2 ring-accent glow scale-105' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-accent">Выгодно</Badge>
                    </div>
                  )}
                  <CardHeader>
                    <div className="text-2xl md:text-3xl mb-2">{plan.badge}</div>
                    <CardTitle className="text-lg md:text-2xl">{plan.name}</CardTitle>
                    <CardDescription>
                      <div className="mt-3 md:mt-4 mb-2 flex items-end gap-2">
                        <span className="text-3xl md:text-5xl font-bold gradient-text">{plan.price}</span>
                        <span className="text-muted-foreground line-through text-lg md:text-xl mb-2">{plan.oldPrice}</span>
                        <span className="text-muted-foreground ml-auto">₽/{plan.period}</span>
                      </div>
                      <p className="text-accent font-semibold">Экономия {plan.savings} ₽</p>
                      <p className="text-primary font-semibold mt-2">{plan.minutes}</p>
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
                    <Button className="w-full mt-6" variant={plan.popular ? "default" : "outline"} asChild>
                      <a href="https://t.me/sp_call_summary_bot" target="_blank" rel="noopener noreferrer">
                        Оформить годовую
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-3 md:mb-4 gradient-text">💳 Пакеты</h3>
            <p className="text-center text-muted-foreground text-sm md:text-base mb-6 md:mb-8">Без лимита по файлам и времени</p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto">
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
                    <div className="text-2xl md:text-3xl mb-2">{plan.badge}</div>
                    <CardTitle className="text-lg md:text-2xl">{plan.name}</CardTitle>
                    <CardDescription>
                      <div className="mt-3 md:mt-4 mb-2">
                        <span className="text-3xl md:text-5xl font-bold gradient-text">{plan.price}</span>
                        <span className="text-muted-foreground ml-1 md:ml-2 text-sm md:text-base">₽</span>
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
                    <Button className="w-full mt-6" variant={plan.popular ? "default" : "outline"} asChild>
                      <a href="https://t.me/sp_call_summary_bot" target="_blank" rel="noopener noreferrer">
                        Купить пакет
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>


        </div>
      </section>

      <section id="business" className="py-12 md:py-20 px-4 bg-gradient-to-b from-transparent to-secondary/5">
        <div className="container mx-auto">
          <div className="text-center mb-8 md:mb-16 space-y-2 md:space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold gradient-text">Тариф для бизнеса</h2>
            <p className="text-base md:text-xl text-muted-foreground">Полный доступ для всей команды</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Card className="glass glow border-secondary/50">
              <CardContent className="p-4 md:p-8 lg:p-12">
                <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
                  <div className="text-center space-y-2 md:space-y-3">
                    <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold gradient-text">600</div>
                    <p className="text-base md:text-xl font-semibold">Часов в месяц</p>
                    <p className="text-muted-foreground">Достаточно для обработки всех встреч команды</p>
                  </div>
                  <div className="text-center space-y-2 md:space-y-3">
                    <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold gradient-text">18000</div>
                    <p className="text-base md:text-xl font-semibold">Рублей в месяц</p>
                    <p className="text-muted-foreground">Или 180 000 ₽/год (те же 600 ч/мес)</p>
                  </div>
                </div>

                <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
                  <h3 className="text-xl md:text-2xl font-bold">Что входит</h3>
                  <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                    <div className="flex items-start gap-3">
                      <Icon name="Users" size={20} className="text-secondary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">Пользователи и чаты:</p>
                        <p className="text-muted-foreground">без ограничений</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="FileCheck" size={20} className="text-secondary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">Тарификация:</p>
                        <p className="text-muted-foreground">за итоги встреч</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Gift" size={20} className="text-secondary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">Расшифровки:</p>
                        <p className="text-muted-foreground">в подарок</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Building2" size={20} className="text-secondary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">Биллинг:</p>
                        <p className="text-muted-foreground">один админ-аккаунт на компанию</p>
                      </div>
                    </div>
                  </div>
                </div>

                <Button size="lg" className="w-full glow" asChild>
                  <a href="https://t.me/Eugen_Targaryen" target="_blank" rel="noopener noreferrer">
                    <Icon name="Send" size={20} className="mr-2" />
                    Подключить для бизнеса
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 md:py-12 px-4 border-t border-border bg-gradient-to-t from-transparent to-accent/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Поддержка</h3>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="https://docs.google.com/document/d/10hv-1zOm6HMgudROMF5Za3hIj_p14CcYcD4beYOS7qw/edit?tab=t.0" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Правила возврата
                  </a>
                </li>
                <li>
                  <a 
                    href="https://docs.google.com/document/d/1o57HHN41-zzOz4zOB0ZaiY56AQl-kLjJ362vR1QWXVQ/edit?tab=t.0" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Оферта
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Информация</h3>
              <ul className="space-y-2 md:space-y-3 text-muted-foreground text-sm md:text-base">
                <li>ИП Сидоров Денис</li>
                <li>ОГРНИП:318784700135482</li>
                <li>ИНН:511201452344</li>
                <li className="flex items-start gap-2">
                  <Icon name="MapPin" size={16} className="mt-1 flex-shrink-0" />
                  <span>197375, Санкт-Петербург, Вербная12к1</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Контакты</h3>
              <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
                <li>
                  <a 
                    href="https://t.me/njg_ss" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Icon name="Send" size={16} />
                    <span>@njg_ss</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:ijoy14@yandex.ru"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Icon name="Mail" size={16} />
                    <span>ijoy14@yandex.ru</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="tel:+79995293121"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Icon name="Phone" size={16} />
                    <span>+7(999) 529-31-21</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-border text-center text-muted-foreground text-sm md:text-base">
            <p>© 2024 Саммари. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;