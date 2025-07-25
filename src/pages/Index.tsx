import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Заявка отправлена:', formData);
    alert('Заявка успешно отправлена! Наш геолог свяжется с вами в ближайшее время.');
    setFormData({ name: '', phone: '', message: '' });
  };

  const services = [
    {
      icon: 'Drill',
      title: 'Бурение артезианских скважин',
      description: 'Профессиональное бурение глубиной до 200 метров с гарантией качества'
    },
    {
      icon: 'Droplets',
      title: 'Анализ воды',
      description: 'Комплексный анализ качества воды в собственной лаборатории'
    },
    {
      icon: 'Settings',
      title: 'Обустройство скважин',
      description: 'Установка насосного оборудования и системы водоснабжения'
    },
    {
      icon: 'Shield',
      title: 'Гарантийное обслуживание',
      description: 'Полное сервисное обслуживание с гарантией до 5 лет'
    }
  ];

  const portfolio = [
    {
      title: 'Частный дом в Подмосковье',
      depth: '85 м',
      capacity: '3 м³/час',
      description: 'Артезианская скважина для коттеджа площадью 300 м²'
    },
    {
      title: 'Дачный участок в Калужской области',
      depth: '45 м',
      capacity: '1.5 м³/час',
      description: 'Скважина для дачи с сезонным проживанием'
    },
    {
      title: 'Загородный комплекс',
      depth: '120 м',
      capacity: '5 м³/час',
      description: 'Система водоснабжения для гостевого дома'
    }
  ];

  const prices = [
    { service: 'Бурение скважины (за метр)', price: 'от 3 500 ₽' },
    { service: 'Обустройство скважины', price: 'от 85 000 ₽' },
    { service: 'Анализ воды', price: '5 500 ₽' },
    { service: 'Промывка скважины', price: 'от 15 000 ₽' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Icon name="Droplets" size={32} className="text-primary" />
            <h1 className="text-2xl font-bold text-gray-900">АкваБур</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-600 hover:text-primary transition-colors">Услуги</a>
            <a href="#portfolio" className="text-gray-600 hover:text-primary transition-colors">Портфолио</a>
            <a href="#prices" className="text-gray-600 hover:text-primary transition-colors">Цены</a>
            <a href="#contacts" className="text-gray-600 hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="bg-primary hover:bg-secondary">
            <Icon name="Phone" size={16} className="mr-2" />
            +7 (495) 123-45-67
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Профессиональное бурение<br />
            <span className="text-primary">артезианских скважин</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Обеспечиваем ваш дом чистой питьевой водой. Более 1000 пробуренных скважин
            с гарантией качества до 5 лет.
          </p>
          
          {/* Consultation Form */}
          <Card className="max-w-md mx-auto shadow-lg">
            <CardHeader className="bg-primary text-white rounded-t-lg">
              <CardTitle className="text-center">Бесплатная консультация геолога</CardTitle>
              <CardDescription className="text-blue-100 text-center">
                Узнайте стоимость бурения на вашем участке
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Имя</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Ваше имя"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Телефон</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+7 (___) ___-__-__"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="message">Дополнительная информация</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Адрес участка, пожелания к глубине..."
                    rows={3}
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-secondary">
                  Получить консультацию
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center text-gray-900 mb-16">Наши услуги</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold mb-3">{service.title}</h4>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center text-gray-900 mb-16">Наши работы</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Глубина:</span>
                      <span className="font-semibold">{project.depth}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Дебит:</span>
                      <span className="font-semibold">{project.capacity}</span>
                    </div>
                  </div>
                  <p className="text-gray-600">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prices Section */}
      <section id="prices" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-2xl">
          <h3 className="text-4xl font-bold text-center text-gray-900 mb-16">Цены</h3>
          <Card className="shadow-lg">
            <CardContent className="p-0">
              {prices.map((item, index) => (
                <div key={index} className={`flex justify-between items-center p-6 ${index !== prices.length - 1 ? 'border-b' : ''}`}>
                  <span className="text-gray-700">{item.service}</span>
                  <span className="text-xl font-bold text-primary">{item.price}</span>
                </div>
              ))}
            </CardContent>
          </Card>
          <p className="text-center text-gray-600 mt-6">
            Окончательная стоимость зависит от геологических условий участка
          </p>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 px-4 bg-gray-900 text-white">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold mb-8">Контакты</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center">
              <Icon name="Phone" size={32} className="text-primary mb-4" />
              <h4 className="text-xl font-semibold mb-2">Телефон</h4>
              <p>+7 (495) 123-45-67</p>
              <p>+7 (926) 987-65-43</p>
            </div>
            <div className="flex flex-col items-center">
              <Icon name="Mail" size={32} className="text-primary mb-4" />
              <h4 className="text-xl font-semibold mb-2">Email</h4>
              <p>info@akvabur.ru</p>
              <p>zakaz@akvabur.ru</p>
            </div>
            <div className="flex flex-col items-center">
              <Icon name="MapPin" size={32} className="text-primary mb-4" />
              <h4 className="text-xl font-semibold mb-2">Адрес</h4>
              <p>Москва, ул. Строителей, 15</p>
              <p>Работаем по всему Подмосковью</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Droplets" size={24} className="text-primary" />
            <span className="text-xl font-bold">АкваБур</span>
          </div>
          <p>&copy; 2024 АкваБур. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;