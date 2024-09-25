import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';

import { useState, useEffect } from 'react';

const images = [img1, img2, img3];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Initialize with the first image

  useEffect(() => {
    let x = 0; // Initialize slide index

    // Define the setter function without parameters
    const setter = () => {
      if (x >= images.length) x = 0; // Reset index if it exceeds the array length
      setCurrentIndex(x); // Update the currentIndex state
      x++; // Move to the next slide
    };

    // Set up the interval to change slides every 1000ms (1 second)
    const intervalId = setInterval(setter, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures this runs once when the component mounts

  // const [image, setImage] = useState(0);

  // useEffect(() => {
  //   let x = 0;

  //   const setter = () => {
  //     if (x >= images.length) x = 0;
  //     setImage(images[x]);
  //     x++;
  //   };

  //   const run = setInterval(setter, 1000);
  //   return () => clearInterval(run);
  // }, []);

  return (
    <div>
      <div class='Slideshow'>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          style={{ width: '100%' }}
        />
        {/* <img src={image} alt='slideshow' /> */}
        {/* <div class='mySlides fade'>
          <div class='numbertext'>1 / 3</div>
          <img src={img1} alt='img1' style={{ width: '35%' }} />
          <div class='text'>Caption Text</div>
        </div>

        <div class='mySlides fade'>
          <div class='numbertext'>2 / 3</div>
          <img src={img2} alt='img2' style={{ width: '35%' }} />
          <div class='text'>Caption Two</div>
        </div>

        <div class='mySlides fade'>
          <div class='numbertext'>3 / 3</div>
          <img src={img3} alt='img3' style={{ width: '35%' }} />
          <div class='text'>Caption Three</div>
        </div>

        <a class='prev' onclick='plusSlides(-1)'>
          &#10094;
        </a>
        <a class='next' onclick='plusSlides(1)'>
          &#10095;
        </a>
      </div>

      <div style={{ textAlign: 'center' }}>
        <span class='dot' onclick='currentSlide(1)'></span>
        <span class='dot' onclick='currentSlide(2)'></span>
        <span class='dot' onclick='currentSlide(3)'></span>
      </div> */}
      </div>
    </div>
  );
};

export { Slideshow as default };
