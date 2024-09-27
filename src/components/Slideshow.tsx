import { useState, useEffect } from 'react';
import img1 from '../../public/assets/img_1_face.jpg';
import img2 from '../../public/assets/img1_lip.jpg';
import img3 from '../../public/assets/img_2_face.jpg';

const Slideshow = () => {
  const images = [img1, img2, img3];
  const [image, setImage] = useState(images[0]);
  const [count, setCount] = useState(0);

  const slides = () => {
    setCount((prevCount) => {
      const nextCount = prevCount >= images.length - 1 ? 0 : prevCount + 1;
      setImage(images[nextCount]);
      return nextCount;
    });
  };

  useEffect(() => {
    const intervalId = setInterval(slides, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <img className='Slides' src={image} />
    </div>
  );
};

export { Slideshow as default };
