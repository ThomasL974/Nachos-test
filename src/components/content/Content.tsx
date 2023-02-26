import styled from "styled-components"
import { Counter } from "../shared/counter/Counter";
import piment from "../../assets/images/piment-title.png";
import { Article } from "../shared/article/Article";
import { motion } from "framer-motion";
import { useState } from "react";
import { Choices } from "../shared/choice/Choices";

export const Content = () => {
    const [currentArticle, setCurrentArticle] = useState(0);
    return (
        <Wrapper>
            <Section>
                <TitleSection>
                    <Title
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: .6, delay: .5 }}>
                        FLAMIN HOT<br></br>NACHOS
                    </Title>
                    <Piment
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: .5, delay: 1.5 }}
                        drag
                        dragConstraints={{
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0
                        }}
                        whileDrag={{ scale: 1.2 }}
                        src={piment}
                        alt="Image piment titre" />
                </TitleSection>
                <Paragraph
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: .6, delay: 1 }}>Presenting the Classic Nachos with a Flaming Hot<br></br>Twist. It will Rock your taste buds with Chilli & Lime.</Paragraph>
                <Counter BtnCount={BtnCount}/>
            </Section>
            <Article currentArticle={currentArticle} setCurrentArticle={setCurrentArticle} BtnCount={BtnCount}/>
            <Choices setCurrentArticle={setCurrentArticle}/>
        </Wrapper>
    )
}

const Wrapper = styled.section`
        width: 100%;
        padding: 0 5rem;
        height: auto;
        display: flex;
        flex-direction: row;
        @media (max-width: 1025px) {
            flex-direction: column;
        }
    `;
const TitleSection = styled.div`
        width: 100%;
        height: auto;
        position: relative;
    `
const Title = styled(motion.h1)`
        font-size: 4rem;
        font-family: "Bold", sans-serif;
        position: relative;
    `;

const Piment = styled(motion.img)`
        width: 150px;
        position: absolute;
        left: 330px;
        top: 19%;
        cursor: grab;
    `;

const Paragraph = styled(motion.p)`
        font-family: "light", sans-serif;
        color: #A0A0A0;
    `;

const Section = styled.div`
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: start;
        padding: 8rem 0;
        gap: 20px;
    `;

const BtnCount: any = styled(motion.button)`
    width: 45px;
    height: 45px;
    display: flex;
    box-shadow: 0 0 7px -5px #000000;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    background-color: white;
    font-size: 1.2rem;
    border: none;
    cursor: pointer;
    transition: .2s linear;

    svg{
        fill: black;
    }
`;
