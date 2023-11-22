import React from 'react';


import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai'
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';


const image11 = [images.gallery01, images.gallery02, images.gallery03, images.gallery04];

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const {current} = scrollRef;

    if(direction === "left"){
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  }

  return(
    <div className='app__gallery flex__center'>
      <div className='app__gallery_content'>
        <SubHeading title="Instagram"/> 
        <h1 className='headtext__cormorant'> Photo Gallery</h1>
        <p className='p__opensans' style={{color: "#AAA", marginTop: "2rem"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
        <button type='button' className='custom__button'>View More</button>
      </div>

      <div className='app__gallery_images'>
        <div className='app__gallery_images_container' ref={scrollRef}>
          {image11.map((image, index) => (
            <div className='app__gallery_images_card flex__center' key={`gallery__image_${index +1 }`}>
              <img src={image} alt="gallery"/>
              <AiFillInstagram className='gallery__images_icon'/>
            </div>
          ))} 

        </div>

        <div className='app__gallery_images_arrows'>
          <BsArrowLeftShort className='gallery__arrow_icon' onClick={()=>scroll("left")}/>
          <BsArrowRightShort className='gallery__arrow_icon' onClick={()=>scroll("right")}/>

        </div>
      </div>
    </div>
  );
}

export default Gallery;
