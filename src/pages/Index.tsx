import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Icon name="Building2" size={28} className="text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-800">Атлон ФМ</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">О компании</a>
            <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">Услуги</a>
            <a href="#portfolio" className="text-gray-600 hover:text-blue-600 transition-colors">Портфолио</a>
            <a href="#reviews" className="text-gray-600 hover:text-blue-600 transition-colors">Отзывы</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Контакты</a>
          </nav>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Icon name="Phone" size={16} className="mr-2" />
            Заказать звонок
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-orange-100 text-orange-800 mb-4">Ремонт квартир премиум класса</Badge>
              <h1 className="text-5xl font-bold text-gray-800 mb-6 leading-tight">
                Качественный ремонт квартир с 
                <span className="text-blue-600"> гарантией 5 лет</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Строительная компания "Атлон ФМ" — ваш надежный партнер в создании идеального жилого пространства. 
                Быстро, качественно, с полной гарантией.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="Play" size={20} className="mr-2" />
                  Смотреть работы
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">200+</div>
                  <div className="text-sm text-gray-600">Проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">15</div>
                  <div className="text-sm text-gray-600">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">5</div>
                  <div className="text-sm text-gray-600">Лет гарантии</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white p-6 rounded-2xl shadow-xl">
                <img 
                  src="/img/f65fbe09-6076-4d51-abb0-8072dfd43a0e.jpg" 
                  alt="Современный ремонт квартиры" 
                  className="w-full h-80 object-cover rounded-lg"
                />
                <div className="absolute -bottom-4 -left-4 bg-orange-500 text-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-2">
                    <Icon name="Clock" size={20} />
                    <span className="font-semibold">от 30 дней</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">О компании Атлон ФМ</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы — команда профессионалов с 15-летним опытом в сфере ремонта и строительства. 
              Наша миссия — создавать качественные жилые пространства, которые служат десятилетиями.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={32} className="text-blue-600" />
                </div>
                <CardTitle>Опытная команда</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Более 20 сертифицированных специалистов с многолетним опытом в строительстве и дизайне
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" size={32} className="text-orange-600" />
                </div>
                <CardTitle>Гарантия качества</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Предоставляем расширенную гарантию на все виды работ сроком до 5 лет
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Zap" size={32} className="text-green-600" />
                </div>
                <CardTitle>Быстрые сроки</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Выполняем ремонт квартир от 30 дней с соблюдением всех технологических процессов
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600">Полный спектр работ по ремонту и отделке квартир</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Icon name="Hammer" size={24} className="text-blue-600" />
                  <CardTitle>Косметический ремонт</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Обновление интерьера без перепланировки</p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">От:</span>
                    <span className="font-semibold">2,500 ₽/м²</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Срок:</span>
                    <span className="font-semibold">15-20 дней</span>
                  </div>
                </div>
                <Button className="w-full" variant="outline">Подробнее</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Icon name="Wrench" size={24} className="text-orange-600" />
                  <CardTitle>Капитальный ремонт</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Полная реконструкция с заменой коммуникаций</p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">От:</span>
                    <span className="font-semibold">8,500 ₽/м²</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Срок:</span>
                    <span className="font-semibold">60-90 дней</span>
                  </div>
                </div>
                <Button className="w-full" variant="outline">Подробнее</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Icon name="Sparkles" size={24} className="text-purple-600" />
                  <CardTitle>Дизайнерский ремонт</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Эксклюзивные решения от наших дизайнеров</p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">От:</span>
                    <span className="font-semibold">15,000 ₽/м²</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Срок:</span>
                    <span className="font-semibold">90-120 дней</span>
                  </div>
                </div>
                <Button className="w-full" variant="outline">Подробнее</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Icon name="PaintBucket" size={24} className="text-green-600" />
                  <CardTitle>Отделочные работы</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Покраска, поклейка обоев, укладка плитки</p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">От:</span>
                    <span className="font-semibold">1,800 ₽/м²</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Срок:</span>
                    <span className="font-semibold">10-15 дней</span>
                  </div>
                </div>
                <Button className="w-full" variant="outline">Подробнее</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Icon name="Zap" size={24} className="text-yellow-600" />
                  <CardTitle>Электромонтажные работы</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Замена проводки, установка розеток и выключателей</p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">От:</span>
                    <span className="font-semibold">3,200 ₽/м²</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Срок:</span>
                    <span className="font-semibold">5-10 дней</span>
                  </div>
                </div>
                <Button className="w-full" variant="outline">Подробнее</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Icon name="Droplets" size={24} className="text-blue-500" />
                  <CardTitle>Сантехнические работы</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Замена труб, установка сантехники</p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">От:</span>
                    <span className="font-semibold">2,800 ₽/м²</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Срок:</span>
                    <span className="font-semibold">7-12 дней</span>
                  </div>
                </div>
                <Button className="w-full" variant="outline">Подробнее</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Наши работы</h2>
            <p className="text-xl text-gray-600">Портфолио выполненных проектов</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=500&q=80"
                alt="Современная кухня"
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Современная кухня-гостиная</h3>
                <p className="text-gray-600 mb-3">120 м² • Срок: 75 дней</p>
                <div className="flex justify-between items-center">
                  <Badge variant="secondary">Завершено</Badge>
                  <Button variant="ghost" size="sm">
                    <Icon name="ExternalLink" size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=500&q=80"
                alt="Спальня в скандинавском стиле"
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Спальня в скандинавском стиле</h3>
                <p className="text-gray-600 mb-3">80 м² • Срок: 45 дней</p>
                <div className="flex justify-between items-center">
                  <Badge variant="secondary">Завершено</Badge>
                  <Button variant="ghost" size="sm">
                    <Icon name="ExternalLink" size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=500&q=80"
                alt="Ванная комната премиум"
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Ванная комната премиум</h3>
                <p className="text-gray-600 mb-3">15 м² • Срок: 20 дней</p>
                <div className="flex justify-between items-center">
                  <Badge variant="secondary">Завершено</Badge>
                  <Button variant="ghost" size="sm">
                    <Icon name="ExternalLink" size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              <Icon name="FolderOpen" size={20} className="mr-2" />
              Смотреть все работы
            </Button>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-gray-600">Что говорят о нас наши заказчики</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "Отличная работа! Ремонт выполнили точно в срок, качество на высшем уровне. 
                  Особенно понравилось внимание к деталям."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <Icon name="User" size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Мария Петрова</div>
                    <div className="text-sm text-gray-500">2-комнатная квартира</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "Команда профессиональная, всё объясняют, показывают. Цены адекватные, 
                  результат превзошёл ожидания!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <Icon name="User" size={20} className="text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Алексей Иванов</div>
                    <div className="text-sm text-gray-500">3-комнатная квартира</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "Сделали ремонт квартиры под ключ. Очень довольны результатом! 
                  Рекомендуем всем знакомым."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                    <Icon name="User" size={20} className="text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Елена Смирнова</div>
                    <div className="text-sm text-gray-500">1-комнатная квартира</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Получить консультацию</h2>
            <p className="text-xl text-gray-600">Оставьте заявку и мы свяжемся с вами в течение 15 минут</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-2xl">Заказать консультацию</CardTitle>
                <p className="text-gray-600">Заполните форму и получите бесплатную консультацию</p>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Имя</label>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Телефон</label>
                    <Input placeholder="+7 (___) ___-__-__" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Тип ремонта</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>Выберите тип ремонта</option>
                      <option>Косметический ремонт</option>
                      <option>Капитальный ремонт</option>
                      <option>Дизайнерский ремонт</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Комментарий</label>
                    <Textarea placeholder="Расскажите о ваших пожеланиях..." />
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                    <Icon name="Send" size={20} className="mr-2" />
                    Получить консультацию
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Icon name="MapPin" size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Офис</h3>
                    <p className="text-gray-600">г. Москва, ул. Строителей, д. 25, офис 301</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Icon name="Phone" size={24} className="text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Телефон</h3>
                    <p className="text-gray-600">+7 (495) 123-45-67</p>
                    <p className="text-sm text-gray-500">Работаем ежедневно с 9:00 до 21:00</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Icon name="Mail" size={24} className="text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Email</h3>
                    <p className="text-gray-600">info@atlonfm.ru</p>
                    <p className="text-sm text-gray-500">Ответим в течение часа</p>
                  </div>
                </div>
              </Card>

              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-4">Преимущества работы с нами</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Icon name="CheckCircle" size={20} className="text-green-600" />
                    <span className="text-gray-600">Бесплатный замер и консультация</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="CheckCircle" size={20} className="text-green-600" />
                    <span className="text-gray-600">Договор с фиксированной стоимостью</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="CheckCircle" size={20} className="text-green-600" />
                    <span className="text-gray-600">Поэтапная оплата по факту работ</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="CheckCircle" size={20} className="text-green-600" />
                    <span className="text-gray-600">Гарантия на все виды работ</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Building2" size={24} className="text-blue-400" />
                <h3 className="text-xl font-bold">Атлон ФМ</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Строительная компания полного цикла. Качественный ремонт квартир с гарантией.
              </p>
              <div className="flex space-x-4">
                <Icon name="Instagram" size={20} className="text-gray-400 hover:text-white cursor-pointer" />
                <Icon name="Phone" size={20} className="text-gray-400 hover:text-white cursor-pointer" />
                <Icon name="Mail" size={20} className="text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Косметический ремонт</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Капитальный ремонт</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Дизайнерский ремонт</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Отделочные работы</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#portfolio" className="hover:text-white transition-colors">Портфолио</a></li>
                <li><a href="#reviews" className="hover:text-white transition-colors">Отзывы</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p>+7 (495) 123-45-67</p>
                <p>info@atlonfm.ru</p>
                <p>г. Москва, ул. Строителей, д. 25</p>
              </div>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-700" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2024 Атлон ФМ. Все права защищены.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Политика конфиденциальности</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;