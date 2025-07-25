import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const DemoSection = () => {
  const [phone, setPhone] = useState('');

  const features = [
    {
      icon: 'Grid3x3',
      title: 'Планировки и дизайн-проект объявления',
      description: 'на которых уже работает колледж'
    },
    {
      icon: 'Users',
      title: 'Качество установки любого качества и доставки',
      description: 'будет'
    },
    {
      icon: 'Award',
      title: 'Качество производства коммуникации',
      description: ''
    },
    {
      icon: 'CreditCard',
      title: 'Точная стоимость всех этапов работ',
      description: ''
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-900/20 to-transparent" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://cdn.poehali.dev/files/01ab5560-9633-49d3-9211-8a68e5b2fbd1.jpg"
                alt="Женщина с котятами в квартире"
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Profile Card */}
            <div className="absolute -bottom-8 left-8 bg-white text-black rounded-xl p-4 shadow-xl max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <Icon name="User" size={24} className="text-gray-600" />
                </div>
                <div>
                  <h4 className="font-semibold">Всем привет, меня зовут Людмила.</h4>
                  <p className="text-sm text-gray-600">Вот моя квартира...</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <Icon name="MessageSquare" size={32} className="text-orange-400" />
                <h2 className="text-3xl lg:text-4xl font-bold">Общение с замерщиком</h2>
              </div>
              
              <div className="space-y-4 text-gray-300">
                <p>
                  Когда замерщик Ярослав приехал на мой объект, первое, что он 
                  сделал — внимательно изучил мой дизайн проект.
                </p>
                
                <p>
                  Дизайнера часто в проекте напрямую забывают о коммуникациях 
                  и других технических моментах...
                </p>
                
                <p className="text-orange-400 font-semibold">
                  Ярослав ЧЕСТНО указал на технические просчёты 
                  проекта, чтобы сэкономить...
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-semibold mb-4">Вызвать замерщика</h3>
              
              <div className="space-y-4">
                <Input
                  placeholder="Ваш номер телефона"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
                />
                
                <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 font-semibold">
                  Вызвать замерщика
                </Button>
                
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <input type="checkbox" className="rounded" />
                  <span>
                    Нажимая на кнопку вы даёте своё согласие на{' '}
                    <span className="text-orange-400 underline">обработку персональных данных</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {features.map((feature, index) => (
                <Card key={index} className="bg-gray-800/30 border-gray-700 hover:bg-gray-800/50 transition-colors">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <Icon name={feature.icon as any} size={24} className="text-orange-400 mt-1" />
                      <div>
                        <h4 className="font-medium text-sm text-white leading-tight">
                          {feature.title}
                        </h4>
                        {feature.description && (
                          <p className="text-xs text-gray-400 mt-1">
                            {feature.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-16 text-center space-y-4">
          <p className="text-gray-400">Как видите, мы правда серьёзно подходим к выбору компании...</p>
          <h3 className="text-2xl lg:text-3xl font-bold">А дальше начали искать...</h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            В общем, мы перебрали около 9 компаний. Кто-то нам понравился 
            меньше, кто-то больше, но в итоге, мы остановились на Атлон ФМ.
          </p>
          <p className="text-orange-400 font-semibold">И вот почему...</p>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;