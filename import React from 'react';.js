import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { LucideDog } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="bg-teal-500 text-white p-4 text-center shadow-md">
        <h1 className="text-3xl font-bold">Pet Haven - Todo para Consentir a tu Mascota</h1>
        <p className="text-base mt-1">Encuentra juguetes, accesorios y mucho más para el bienestar de tus amigos peludos.</p>
      </header>

      {/* Search Section */}
      <div className="bg-white p-4 flex justify-center shadow-md">
        <Input placeholder="Busca juguetes, arneses o camas..." className="w-1/2 mr-2" />
        <Button>Buscar</Button>
      </div>

      {/* Categories Section */}
      <section className="py-8 px-4">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">Categorías Populares</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Juguetes', 'Accesorios de Paseo', 'Camas y Descanso', 'Higiene'].map((category, index) => (
            <Card key={index} className="hover:shadow-lg">
              <CardContent className="text-center">
                <LucideDog className="text-teal-500 mx-auto" size={48} />
                <p className="mt-2 font-semibold text-gray-700">{category}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="bg-gray-100 py-8 px-4">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">Productos Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[{
            img: 'https://images.unsplash.com/photo-1556526274-1d7cb45a4989?auto=format&fit=crop&w=300&q=80',
            title: 'Juguete Interactivo para Perros',
            price: '$29.99'
          }, {
            img: 'https://images.unsplash.com/photo-1601758174477-d45e217ed3f8?auto=format&fit=crop&w=300&q=80',
            title: 'Dispensador Automático de Agua',
            price: '$49.99'
          }, {
            img: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=300&q=80',
            title: 'Cama Antiestrés para Mascotas',
            price: '$59.99'
          }].map((product, index) => (
            <Card key={index} className="hover:shadow-lg">
              <CardContent>
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full rounded-md mb-2"
                />
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <p className="text-teal-600 font-bold mt-2">{product.price}</p>
                <Button className="mt-4 w-full">Comprar Ahora</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-8 px-4 bg-white">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">Lo que dicen nuestros clientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[{
            name: 'María L.',
            review: 'Mi perro ama su nueva cama antiestrés. La calidad es excelente.'
          }, {
            name: 'Carlos P.',
            review: 'El dispensador automático de agua me ha facilitado mucho el cuidado de mi mascota.'
          }, {
            name: 'Lucía R.',
            review: 'Los juguetes interactivos mantienen a mi cachorro entretenido por horas.'
          }].map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg">
              <CardContent>
                <p className="text-gray-600 italic">"{testimonial.review}"</p>
                <p className="text-teal-600 font-semibold mt-2">- {testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-teal-600 text-white py-4 text-center mt-8">
        <p>&copy; 2025 Pet Haven. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default HomePage;
