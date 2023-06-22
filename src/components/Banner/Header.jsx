import React, { useState } from 'react'
import styled from 'styled-components';
import { GiCandleFlame } from "react-icons/gi";

const Header = () => {
    const [bar, setBar] = useState(false);
    return (
        <Container bar={bar}>
            <Logo>
                <img
                    src={process.env.PUBLIC_URL + '/myicon.jpg'}
                    alt="myicon"
                />
                <h1>Spark</h1>
            </Logo>
            <Nav bar={bar}>
                <span onClick={() => setBar(!bar)}><a href="#home">Home</a></span>
                <span onClick={() => setBar(!bar)}><a href="#service">Services</a></span>
                <span onClick={() => setBar(!bar)}><a href="#Award">Award</a></span>
                <span onClick={() => setBar(!bar)}><a href="#client">Testimonials</a></span>
                <span onClick={() => setBar(!bar)}><a href="#footer">Portfolio</a></span>
            </Nav>
            <div
                onClick={() => setBar(!bar)}
                className="bars flex-container" >
                <div className="bar"></div>
            </div>
        </Container>
    )
}

export default Header

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1280px;
    width: 80%;
    margin: 0 auto;
    padding: 1.5rem 0;
    position: relative;
    animation: header 500ms ease-in-out;
    @media(max-width: 840px){
        width: 90%;
    }
    .bars{
        display: none;
    }
    @media(max-width:640px){
        .bars{
            width: 40px;
            height: 40px;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0.5rem;
            z-index: 100;
            .bar{
                position: fixed;
                width: 2.5rem;
                height: 2px;
                background-color: ${props => props.bar ? "transparent" : "#fff"};
                transition: all 400ms ease-in-out;
                :before, :after{
                    content: "";
                    width: 2.5rem;
                    height: 2px;
                    background-color: #fff;
                    position: fixed;
                }

                :before{
                    transform: ${props => props.bar ? "rotate(45deg)" : "translateY(10px)"};
                    transition: all 400ms ease-in-out;
                }

                :after{
                    transform: ${props => props.bar ? "rotate(-45deg)" : "translateY(-10px)"};
                    transition: all 400ms ease-in-out;
                }
            }
        }
    }
`
const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    span{
        font-size: 1.8rem;
    }

    h1{
        font-weight: 600;
        font-size: 1.2rem;
    }
    img {  
        max-width: 1.8rem;  
        height: auto;  
        border-radius: 50%;
    }  
`
const Nav = styled.div`
    @media(max-width:640px){
        position: fixed;
        display: flex;
        flex-direction: column;
        background-color: #01be96;
        inset: 0;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        gap: 2rem;
        font-weight: 700;
        height: ${props => props.bar ? "100vh" : 0};
        transition: height 400ms ease-in-out;
        overflow: hidden;
        z-index: 100;
    }
    span{
        margin-left: 1rem;
        a{
            color: #fff;
            text-decoration: none;
            font-weight: 400;
            position: relative;
            :before{
                content: "";
                position: absolute;
                left: 0;
                right: 0;
                bottom: -5px;
                height: 2px;
                background-color: #fff;
                transform: scale(0);
                transform-origin: right;
                transition: transform 400ms ease-in-out;
            }
            :hover:before{
                transform: scale(1);
                transform-origin: left;
            }
            :hover{
                opacity: 0.7;
            }
        }
    }
`
