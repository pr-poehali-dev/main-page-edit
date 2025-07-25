import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Наглядная демонстрация того,{' '}
                <span className="text-orange-500">КАК</span> будет проходить ремонт Вашей 
                квартиры, если Вы обратитесь к нам
              </h2>
              
              <p className="text-lg text-gray-600">
                Да, недавно Людмила (наш клиент) написала 
                развёрнутый отзыв о нашей работе.
              </p>
              
              <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                <div className="flex">
                  <Icon name="AlertTriangle" className="text-red-400 mr-3 mt-1" size={20} />
                  <div className="text-gray-700">
                    <p className="font-semibold">На самом деле, даже простой, короткий отзыв получить от клиента не просто.</p>
                    <p className="mt-2">А тут получился полноценный рассказ о совместной работе.</p>
                  </div>
                </div>
              </div>
              
              <p className="text-lg text-gray-700 font-medium">
                Прочитайте эту историю.
              </p>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  Она короткая, но очень наглядная. И она поможет вам 
                  понять, что следует ждать от работы с нами. Честно, 
                  открыто, без прикрас.
                </p>
                
                <p className="font-semibold">Поехали.</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <img 
                src="https://cdn.poehali.dev/files/71695eea-af4f-42f8-9a04-56ecc79eefc2.jpg"
                alt="Современный интерьер с деревянными панелями"
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-100 rounded-full opacity-60"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-red-100 rounded-full opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;