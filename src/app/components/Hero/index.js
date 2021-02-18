import React from "react";
// import { imgData } from "../../../stockImgData";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
import style from "./Hero.module.scss";
function Hero() {
  return (
    <section className={style.hero}>
      <div className={style.container}>
        <div className='first'>
          <h1>A digital ecosystem, inspired by the natural world</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque et
            voluptate quasi fugiat consequatur nostrum?
          </p>
          <button>Learn more</button>
        </div>
        <div>
          <img src='/isometric_city.png' alt='' />
        </div>
      </div>
    </section>
  );
}

export default Hero;

{
  /* <Carousel
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        interval={10000}
        transitionTime={300}
        stopOnHover={false}
        // onChange={onChange}
        // onClickItem={onClickItem}
        // onClickThumb={onClickThumb}
      >
        {imgData.map((img) => (
          <div key={img.id}>
            <img className={style.bg} src={img.path} alt={img.title} />
            <h1 className={style.quote}>{img.quote}</h1>
            <p className={` ${style.caption}`}>{img.attr}</p>
          </div>
        ))}
      </Carousel> */
}
