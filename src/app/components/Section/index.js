import React from "react";
// import Curve from "../../../assets/curve1.svg";
import style from "./Section.module.scss";

function Section(props) {
  return (
    <>
      <section className={`${style.section} `}>
        {props.curve && (
          <svg
            className={`${style.curve} ${props.color && style[props.color]}`}
            version='1.1'
            x='0px'
            y='0px'
            height='25px'
            viewBox='0 0 1366 25'
            preserveAspectRatio='none'
          >
            <defs id='defs8' />
            <path d='M683.1,23.9C386.6,23.9,129.2,14.1,0,0v25h1366V0C1236.7,14.1,979.4,23.9,683.1,23.9z' />
          </svg>
        )}
        <div className={`${style.color} ${props.color && style[props.color]}`}>
          <div
            className={`${style.content} ${props.reverse && style.reverse} `}
          >
            <div className={style.text}>
              <h1> {props.heading}</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat quas architecto molestiae, soluta autem temporibus
                consequatur repudiandae sequi earum quidem?
              </p>
              <button className='outline'>Learn More</button>
            </div>

            <img src={`/${props.number}.svg`} alt='banner' />
          </div>
        </div>
      </section>
    </>
  );
}

export default Section;
