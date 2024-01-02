import React, { useState, useEffect } from 'react';
import imagem1 from '../../imagens/teste/Teste1.png';
import imagem2 from '../../imagens/teste/Teste2.png';
import imagem3 from '../../imagens/teste/Teste3.png';
import imagem4 from '../../imagens/teste/Teste4.png';
import imagem5 from '../../imagens/teste/Teste5.png';
import './carousel.css';

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    imagem1,
    imagem2,
    imagem3,
    imagem4,
    imagem5,
    // Adicione mais caminhos de imagens conforme necessário
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      const nextImage = (currentImage + 1) % images.length;
      setCurrentImage(nextImage);
    }, 5000); // Altera a cada 5 segundos (5000ms)

    return () => clearInterval(timer);
  }, [currentImage, images.length]);

  return (
    <div className="carousel">
      <div className="carousel-images">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Imagem ${index + 1}`}
            style={{ display: index === currentImage ? 'block' : 'none' }}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;