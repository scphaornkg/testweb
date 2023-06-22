import React, { useRef } from 'react'
import Slider from 'react-slick';
import Award from './Award';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';

let data = [
  {
    img : process.env.PUBLIC_URL+'/expert.jpg',
    disc: "Microsoft Office Specialist - Expert 2023"
  },
  {
    img: process.env.PUBLIC_URL+'/associate.jpg',
    disc: "Microsoft Office Specialist - Associate 2023"
  },
  {
    img: process.env.PUBLIC_URL+'/F5_MOIC.jpg',
    disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!"
  },
  {
    img: process.env.PUBLIC_URL+'/GMCC Macau gold.jpg',
    disc: "After solving a large number of problems during F4, I successfully won the Macau Gold Award at the GMCC."
  },
  {
    img: process.env.PUBLIC_URL+'/GMCC GLOBAL Silver.jpg',
    disc: "Won the GMCC Macau Gold Award and the World Silver Award."
  }
];

var settings = {
  className: "center",
  centerMode: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        centerMode: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false
      }
    }
  ]
};
const SliderComp = () => {
  const arrowRef = useRef(null);
  let sliderAward = "";
  sliderAward = data.map((item, i) => (
    <Award item={item} key={i} />
  ))
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
        {sliderAward}
      </Slider>
      <Buttons>
        <button
          onClick={() => arrowRef.current.slickPrev()}
          className='back'><IoIosArrowBack /></button>
        <button
          onClick={() => arrowRef.current.slickNext()}
          className='next'><IoIosArrowForward /></button>
      </Buttons>
    </Container>
  )
}

export default SliderComp;

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button{
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.100);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back{
    left: -1rem;
  }
`