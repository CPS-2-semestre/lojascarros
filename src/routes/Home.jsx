import React from 'react'

export default function CarStore() {
  const cars = [
    {
      id: 1,
      name: "Mustang GT",
      price: "R$ 350.000",
      img: "https://i.ibb.co/r3fhm7p/mustang.jpg",
    },
    {
      id: 2,
      name: "BMW M4",
      price: "R$ 420.000",
      img: "https://i.ibb.co/Z1xrmwB/bmw.jpg",
    },
    {
      id: 3,
      name: "Audi R8",
      price: "R$ 950.000",
      img: "https://i.ibb.co/Fx3B7Qh/audi.jpg",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Hero */}
      <section className="bg-cover bg-center h-[400px] flex items-center justify-center text-white" 
        style={{ backgroundImage: "url('https://i.ibb.co/xsgh1Fx/showroom.jpg')" }}>
        <div className="bg-black bg-opacity-60 p-6 rounded-2xl">
          <h2 className="text-4xl font-bold">Sua nova máquina espera por você</h2>
          <p className="mt-2">Escolha entre os melhores esportivos e de luxo</p>
          <button className="mt-4 px-6 py-2 bg-red-600 rounded-xl hover:bg-red-700 transition">
            Ver Carros
          </button>
        </div>
      </section>

      {/* Lista de Carros */}
      <main className="flex-1 p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {cars.map((car) => (
          <div key={car.id} className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition">
            <img src={car.img} alt={car.name} className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-xl font-bold">{car.name}</h3>
              <p className="text-gray-600">{car.price}</p>
              <button className="mt-3 w-full px-4 py-2 bg-black text-white rounded-lg hover:bg-red-600 transition">
                Comprar
              </button>
            </div>
          </div>
        ))}
      </main>
    
    </div>
  );
}

