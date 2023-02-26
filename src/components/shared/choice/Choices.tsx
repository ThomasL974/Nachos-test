import { motion } from "framer-motion";
import styled from "styled-components";

export const Choices = ({setCurrentArticle }: any) => {

    const setChoice = (e: any) => {
        const { id } = e.target;
        setCurrentArticle(+id)
    }
    return (
        <Choice>
            <BtnChoice initial={{opacity: 0, x: 20}} animate={{opacity: 1, x: 0}} transition={{duration: 0.2, delay: 1.8}} whileHover={{scale: 1.1}} whileTap={{ scale: 0.8 }} onClick={setChoice} id='0'>Noir</BtnChoice>
            <BtnChoice initial={{opacity: 0, x: 20}} animate={{opacity: 1, x: 0}} transition={{duration: 0.2, delay: 1.9}} whileHover={{scale: 1.1}} whileTap={{ scale: 0.8 }} onClick={setChoice} id='1'>Bleu</BtnChoice>
            <BtnChoice initial={{opacity: 0, x: 20}} animate={{opacity: 1, x: 0}} transition={{duration: 0.2, delay: 2}} whileHover={{scale: 1.1}} whileTap={{ scale: 0.8 }} onClick={setChoice} id='2'>Vert</BtnChoice>
            <BtnChoice initial={{opacity: 0, x: 20}} animate={{opacity: 1, x: 0}} transition={{duration: 0.2, delay: 2.1}} whileHover={{scale: 1.1}} whileTap={{ scale: 0.8 }} onClick={setChoice} id='3'>Rouge</BtnChoice>
        </Choice>
    )
};

const Choice = styled.div`
        width: 40%;
        max-width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        gap: 20px;
`;

const BtnChoice: any = styled(motion.button)`
    width: 100%;
    height: 45px;
    display: flex;
    box-shadow: 0 0 7px -5px #000000;
    border-radius: 50px;
    align-items: center;
    justify-content: center;
    background-color: white;
    font-size: 1.2rem;
    border: none;
    cursor: pointer;
    transition: all .2s linear;
    transform: scale(0);

    svg{
        fill: black;
    }
`;