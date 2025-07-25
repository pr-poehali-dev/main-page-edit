import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  const [formData, setFormData] = useState({
    problem: '',
    phone: '',
    description: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Отправка сообщения:', formData);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)'
        }} />
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="text-orange-400">Привет!</span>
              </h1>
              
              <div className="text-lg lg:text-xl text-gray-300 space-y-4">
                <p>
                  Мы команда компании <span className="text-orange-400 font-semibold">Атлон ФМ</span>, которая воплощает 
                  нестандартные решения в реальность. И это самый 
                  необычный сайт ремонтной компании, который вы когда-либо видели.
                </p>
                
                <p className="text-orange-400 font-semibold">Почему?</p>
                
                <p className="text-2xl lg:text-3xl font-bold text-white">
                  Потому что только на нашем сайте Вас ждёт...
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 space-y-4">
              <Input
                placeholder="Как Вас зовут?"
                value={formData.problem}
                onChange={(e) => setFormData({...formData, problem: e.target.value})}
                className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
              />
              
              <Input
                placeholder="Ваш номер телефона"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
              />
              
              <Textarea
                placeholder="Напишите, какой ремонт вы хотите?"
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 h-24"
              />
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3 text-lg"
              >
                Отправить сообщение
              </Button>
              
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Checkbox id="privacy" />
                <label htmlFor="privacy">
                  Нажимая на кнопку "отправить", вы даёте своё согласие на{' '}
                  <span className="text-orange-400 underline cursor-pointer">обработку персональных данных</span>
                </label>
              </div>
            </form>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://cdn.poehali.dev/files/e7db7a3c-d9c1-4a28-a0f4-f9ac4c97aafb.jpg"
                alt="3D интерьер с мебелью и растениями"
                className="w-full h-auto object-cover"
              />
              
              {/* Floating Message Bubble */}
              <div className="absolute top-1/2 right-8 bg-white rounded-full p-6 shadow-xl transform -translate-y-1/2">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full">
                  <Icon name="MessageCircle" size={24} className="text-gray-600" />
                </div>
                
                <div className="absolute -bottom-8 right-4 bg-white rounded-2xl p-4 shadow-lg max-w-48">
                  <p className="text-sm text-gray-600 font-medium">
                    Мы полностью открыты для общения...
                  </p>
                  <div className="text-xs text-orange-500 font-semibold mt-1">
                    🔥 Жми сюда
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    Можете написать прямо сейчас.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;