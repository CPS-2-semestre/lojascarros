import Slider from 'react-slick'; // Importando o Slider do react-slick
import mustangImg from '../assets/mustang.png';
import bmwImg from '../assets/bmw.png';
import audiImg from '../assets/audi.png';
import ferrari488 from '../assets/Ferrari488Img.jpg';
import porscheImg from '../assets/porscheImg.jpg';
import lamborghiniImg from "../assets/lamborghiniHuracanImg.jpg";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Carros = () => {
  const carros = [
    {
      id: 1,
      name: 'Mustang GT',
      price: 'R$ 350.000',
      img: mustangImg,
    },
    {
      id: 2,
      name: 'BMW M4',
      price: 'R$ 420.000',
      img: bmwImg,
    },
    {
      id: 3,
      name: 'Audi R8',
      price: 'R$ 950.000',
      img: audiImg,
    },
    {
      id: 4,
      name: 'Porsche 911',
      price: 'R$ 900.000',
      img: porscheImg,
    },
    {
      id: 5,
      name: 'Lamborghini Huracan',
      price: 'R$ 1.200.000',
      img: lamborghiniImg,
    },
    {
      id: 6,
      name: 'Ferrari 488',
      price: 'R$ 1.500.000',
      img: ferrari488,
    },
  ];

  // Configurações do carrossel
  const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <button className="slick-next">Next</button>, // Personalize a seta "next"
  prevArrow: <button className="slick-prev">Prev</button>, // Personalize a seta "prev"
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};


  return (
    <div className="min-h-screen bg-gray-500 flex items-center justify-center p-6 overflow-hidden">
      <div className="w-full max-w-6xl">
      <h1 className="text-4xl font-bold text-center mb-8">Nossos Carros</h1>

      {/* Carrossel */}
      <Slider {...settings}>
        {carros.map((car) => (
          <div key={car.id} className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition">
            <img src={car.img} alt={car.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold">{car.name}</h3>
              <p className="text-gray-600">{car.price}</p>
              <button className="mt-3 w-full px-4 py-2 bg-black text-white rounded-lg hover:bg-red-600 transition">
                Comprar
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
</div>
  );
};

export default Carros;
