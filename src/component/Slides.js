import React, { useState } from 'react'

export default function Slides() {
  const [currentImage, setCurrentImage] = useState(1);
  const totalImages = 5; // Mettez le nombre total d'images que vous avez

  const goToNextImage = () => {
    if (currentImage < totalImages) {
      setCurrentImage(currentImage + 1);
    }
  };

  const goToPreviousImage = () => {
    if (currentImage > 1) {
      setCurrentImage(currentImage - 1);
    }
  };
  return (
    <div>
      <h1>Image Slider</h1>
      <img
        src={`{currentImage}.jpg`}
        alt={`Image ${currentImage}`}
        style={{ maxWidth: '100%' }}
      />
      <div>
        <button onClick={goToPreviousImage} disabled={currentImage === 1}>
          Previous
        </button>
        <button onClick={goToNextImage} disabled={currentImage === totalImages}>
          Next
        </button>
      </div>
    </div>
  );
}

