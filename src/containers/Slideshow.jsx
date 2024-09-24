import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';

const Slideshow = () => {
  return (
    <div>

    

      <div class='Slideshow'>
        <div class='mySlides fade'>
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
      </div>
    </div>
  );
};

export { Slideshow as default };
