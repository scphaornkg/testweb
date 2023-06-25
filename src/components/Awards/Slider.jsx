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
    img: process.env.PUBLIC_URL+'/F4_MOIC.jpg',
    disc: "In F4, participated in the International Olympiad in Informatics Macau trials, and finally won the silver medal"
  },
  {
    img: process.env.PUBLIC_URL+'/f3-gmcc.jpg',
    disc: "After learning C and C++ for 3 years, participated in the competition for the first time and won the silver medal"
  },
  {
    img: process.env.PUBLIC_URL+'/GMCC Macau gold.jpg',
    disc: "After solving a large number of problems during F4, I successfully won the Macau Gold Award at the GMCC."
  },
  {
    img: process.env.PUBLIC_URL+'/GMCC GLOBAL Silver.jpg',
    disc: "Won the GMCC Macau Gold Award and the World Silver Award."
  },
  {
    img: process.env.PUBLIC_URL+'/APCS.jpg',
    disc: "In June of F5, I went to Taiwan and participated in the APCS test, and the candidates whose scores exceeded 70%"
  },
  {
    img: process.env.PUBLIC_URL+'/goodF2.jpg',
    disc: "I didn't have a single violation in the whole school year when I was F2, and I was a student of good conduct, so I won the scholarship"
  },
  {
    img: process.env.PUBLIC_URL+'/goodF4.jpg',
    disc: "I didn't have a single violation in the whole school year when I was F4, and I was a student of good conduct, so I won the scholarship"
  },
  {
    img: process.env.PUBLIC_URL+'/f3-bottlesumo.jpg',
    disc: "Due to the pandemic in F2, it was a pity that I was unable to participate in the EV3 competition. In the next year, when the epidemic eased, I was able to participate in the online competition and finally won the gold medal."
  },
  {
    img: process.env.PUBLIC_URL+'/moic2023.jpg',
    disc: "F5 participated in the Macau Olympiad in Informatics Trials. I was the only one in the whole school to enter the second round and finally won the bronze medal"
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