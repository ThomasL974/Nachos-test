import styled from "styled-components";
import { HiShoppingCart } from "react-icons/hi";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useState } from "react";
import { motion } from "framer-motion";

export const Counter = ({BtnCount}: any) => {

    const [counter, setCounter] = useState(0);

    return (
        <Section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.8 }}>
            <ButtonCart>
                <div>
                    <HiShoppingCart />
                </div>
                <span>ADD TO CART</span>
            </ButtonCart>
            <Count>
                <BtnCount whileTap={{ scale: .5 }} transition={{ duration: .2 }} onClick={() => counter <= 0 ? 0 : setCounter(counter - 1)}><AiOutlineMinus /></BtnCount>
                <div>{counter}</div>
                <BtnCount whileTap={{ scale: 1.5 }} transition={{ duration: .2 }} onClick={() => setCounter(counter + 1)}><AiOutlinePlus /></BtnCount>
            </Count>
        </Section>
    )
}

const Section = styled(motion.div)`
        width: 100%;
        height: 50px;
        margin: 2rem 0;
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 2rem;
        font-family: "Light", sans-serif;
    `;

const ButtonCart = styled.button`
        border: none;
        width: 200px;
        height: 60px;
        background-color: black;
        color: white;
        padding: .3rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50px;
        position: relative;

        span {
            margin: 0 0 0 2rem;
        }

        div{
            width: 50px;
            height: 50px;
            background-color: #FFD154;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50px;
            transition: width .3s ease-out;
            position: absolute;
            left: 5px;

            svg{
                fill: black;
                transform: scale(1.9);
            }
        }

        &:hover > div {
            width: 190px;
        }
    `;

const Count = styled.div`
        width: 200px;
        height: auto;
        display: flex;
        justify-content: space-between;

        div{
            width: 45px;
            height: 45px;
            display: flex;
            box-shadow: 0 0 7px -5px #000000;
            border-radius: 50%;
            align-items: center;
            justify-content: center;
            background-color: white;
            font-size: 1.2rem;
        }
    `;

