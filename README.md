import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { LucideDog } from 'lucide-react';

const API_URL = 'https://api.eprolo.com/v1/products';
const API_KEY = '071122Mateo'; // EPROLO API Key

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      if (!API_KEY) {
        setError('API key is missing. Please configure your API key in the environment variables.');
        return;
      }

      try {
        const response = await fetch(`${API_URL}?category=pet-supplies`, {
          headers: {
            'Authorization': `Bearer ${API_KEY}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        const processedProducts = data.products.map(product => ({
          ...product,
          price: (product.price * 1.12).toFixed(2), // Applying 12% profit margin
        }));
        setProducts(processedProducts);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchProducts();
  }, []);

  const combos = [
    {
      name: 'Combo Juguete + Correa + Plato',
      price: (30 * 1.15).toFixed(2), // Applying 15% profit margin
      imageUrl: 'https://via.placeholder.com/300',
    },
    {
      name: 'Combo Cama + Juguete Antiestrés',
      price: (50 * 1.15).toFixed(2),
      imageUrl: 'https://via.placeholder.com/300',
    },
  ];

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
        {error ? (
          <div className="text-red-500 text-center">{error}</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <Card key={index} className="hover:shadow-lg">
                <CardContent>
                  <img
                    src={product.imageUrl || 'https://via.placeholder.com/300'}
                    alt={product.name}
                    className="w-full rounded-md mb-2"
                  />
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-teal-600 font-bold mt-2">${product.price}</p>
                  <Button className="mt-4 w-full">Comprar Ahora</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section>

      {/* Combos Section */}
      <section className="py-8 px-4 bg-white">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">Combos Especiales</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {combos.map((combo, index) => (
            <Card key={index} className="hover:shadow-lg">
              <CardContent>
                <img
                  src={combo.imageUrl}
                  alt={combo.name}
                  className="w-full rounded-md mb-2"
                />
                <h3 className="text-lg font-semibold">{combo.name}</h3>
                <p className="text-teal-600 font-bold mt-2">${combo.price}</p>
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
