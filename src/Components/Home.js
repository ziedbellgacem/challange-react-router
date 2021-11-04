import {useState} from "react"
import {Carousel,} from "react-bootstrap"


function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
         <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.touraineloirevalley.com/wp-content/uploads/2020/01/ville_tours_credit_adt_touraine_jcoutand_2029-716.jpg"
            alt="Second slide"
            height="825px"
          />
  
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://d2bgjx2gb489de.cloudfront.net/gbb-blogs/wp-content/uploads/2017/03/20145512/Nice-city-french-riviera-mediterranean-sea-63477664-870x400.jpg"
            alt="First slide"
            height="825px"
          />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://c1.wallpaperflare.com/preview/3/335/702/ho-chi-minh-city-saigon-ho-chi-minh-city-vietnam.jpg"
            alt="Second slide"
            height="825px"
          />
  
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.setaswall.com/wp-content/uploads/2017/03/Hd-Eiffel-Tower-Day-Wallpaper-1920x1080.jpg"
            alt="Third slide"
            height="825px"
          />
  
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
 export default  ControlledCarousel;