import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      title: 'КАК МЫ СПРАВИЛИСЬ С ЗАДАЧЕЙ?',
      subtitle: 'ОТЗЫВ ЗАКАЗЧИКА',
      description: 'Отзыв о нашем ремонте в таунхаусе площадью 240м2',
      image: 'https://cdn.poehali.dev/files/db9b52eb-e355-4be3-b037-c52b09a122c8.jpg'
    },
    {
      title: '3Х КОМНАТНАЯ КВАРТИРА',
      subtitle: 'С КОТИКАМИ И ГОЛОСОВЫМ УПРАВЛЕНИЕМ',
      description: 'Обзор трёхкомнатной квартиры с котиками и голосовым управлением',
      image: 'https://cdn.poehali.dev/files/71695eea-af4f-42f8-9a04-56ecc79eefc2.jpg'
    }
  ];

  const benefits = [
    {
      icon: 'Zap',
      title: 'Работаем быстро',
      points: [
        'Выезд на объект в день обращения',
        'Начинаем работы на следующий день после заключения договора',
        'Заказываем этапы строго в срок или с опережением'
      ]
    },
    {
      icon: 'Shield',
      title: 'Строгий контроль качества',
      points: [
        'Создали общий чат с прорабом, начальником участка и директором компании',
        'Вся работа ведется на камеру в любое время'
      ]
    },
    {
      icon: 'DollarSign',
      title: 'Выгодные цены',
      points: [
        'Предоставим скидку до 10% на всю стоимость ремонта',
        'Выполняем качественную по выгодным ценам, специализированных материалы (потолки, сантехника)'
      ]
    }
  ];

  const projects = [
    {
      title: 'Елена Летучая оценила ремонт от Атлон ФМ',
      subtitle: 'Кейс - Елена Летучая оценила ремонт от Атлон ФМ',
      image: 'https://cdn.poehali.dev/files/db9b52eb-e355-4be3-b037-c52b09a122c8.jpg'
    },
    {
      title: 'Квартира в ЖК Гранд Хаус',
      details: {
        area: '80 м²',
        type: 'Капитальный',
        cost: '980 000 руб.'
      },
      image: 'https://cdn.poehali.dev/files/01ab5560-9633-49d3-9211-8a68e5b2fbd1.jpg'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Video Testimonials */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
            Оцените видео-примеры наших работ
          </h2>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="relative">
                <img 
                  src={testimonials[currentSlide].image}
                  alt={testimonials[currentSlide].title}
                  className="w-full h-80 lg:h-96 object-cover"
                />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center shadow-2xl hover:bg-red-600 transition-colors">
                    <Icon name="Play" size={32} className="text-white ml-1" />
                  </button>
                </div>
                
                {/* Overlay Text */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                  <div className="text-white">
                    <div className="text-yellow-400 text-2xl lg:text-3xl font-bold mb-2">
                      {testimonials[currentSlide].title}
                    </div>
                    <div className="text-lg lg:text-xl font-semibold mb-2">
                      {testimonials[currentSlide].subtitle}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6 text-center">
                <p className="text-gray-700 font-medium">
                  {testimonials[currentSlide].description}
                </p>
              </div>
            </div>
            
            {/* Navigation */}
            <button 
              onClick={() => setCurrentSlide(currentSlide === 0 ? testimonials.length - 1 : currentSlide - 1)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors"
            >
              <Icon name="ChevronLeft" size={24} className="text-gray-600" />
            </button>
            
            <button 
              onClick={() => setCurrentSlide(currentSlide === testimonials.length - 1 ? 0 : currentSlide + 1)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors"
            >
              <Icon name="ChevronRight" size={24} className="text-gray-600" />
            </button>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-8 h-full flex flex-col">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Icon name={benefit.icon as any} size={24} className="text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{benefit.title}</h3>
                </div>
                
                <ul className="space-y-3 flex-1">
                  {benefit.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Projects Section */}
        <div className="mb-16">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-12">
            Делаем проекты для «звёздных заказчиков»
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="relative">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center shadow-2xl hover:bg-red-600 transition-colors">
                      <Icon name="Play" size={24} className="text-white ml-1" />
                    </button>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h4>
                  
                  {'subtitle' in project && (
                    <p className="text-gray-600 mb-4">{project.subtitle}</p>
                  )}
                  
                  {'details' in project && (
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Общая площадь:</span>
                        <span className="font-semibold">{project.details.area}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Вид ремонта:</span>
                        <span className="font-semibold">{project.details.type}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Стоимость:</span>
                        <span className="font-semibold text-orange-600">{project.details.cost}</span>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3">
              Посмотреть ещё объект
            </Button>
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="bg-gray-900 rounded-2xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            <span className="text-red-400">*</span>Кстати, мы прямо сейчас ведём НЕСКОЛЬКО таких серьёзных, дорогостоящих проектов.
          </h3>
          
          <p className="text-gray-300 mb-8">Вот примеры:</p>
          
          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-800 rounded-xl p-6">
              <div className="text-orange-400 text-lg font-semibold mb-2">Первое...</div>
              <h4 className="font-bold mb-2">Компания уже работает на серьёзных, дорогостоящих объектах</h4>
              <p className="text-gray-400 text-sm">
                Я сразу договорилась о встрече на объекте. И замерщик, Ярослав, приехали мне на объект в ЖК ЗИЛАРТ.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6">
              <div className="text-orange-400 text-lg font-semibold mb-2">Второе</div>
              <h4 className="font-bold mb-2">Общение с замерщиком</h4>
              <p className="text-gray-400 text-sm">
                Когда замерщик Ярослав приехал на мой объект, первое, что он сделал — внимательно изучил мой дизайн проект.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6">
              <div className="text-orange-400 text-lg font-semibold mb-2">Третье</div>
              <h4 className="font-bold mb-2">Подход к контролю качества</h4>
              <p className="text-gray-400 text-sm">
                Для меня создали специальный чат. В него вошли прораб, начальник участка и директор компании.
              </p>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-xl p-6 mb-8">
            <div className="text-orange-400 text-lg font-semibold mb-2">Четвёртое</div>
            <h4 className="font-bold mb-2">Скорость</h4>
            <p className="text-gray-400">
              Все вопросы решаются очень быстро. Доставка материалов - очень быстрая на счёт того, что у Атлона есть свой склад строительных материалов. А все логистике хорошо налажена.
            </p>
            <p className="text-gray-400 mt-4">
              Бригада быстро выполняет свою работу. На объект уже через день после подписания договора.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;