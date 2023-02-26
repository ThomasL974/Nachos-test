import styled from "styled-components"
import { Slider } from '../../slide/Slider';
import { articles } from './article.data';

export const Article = ({BtnCount, currentArticle, setCurrentArticle}: any) => {

    const Content = styled.div`
        width: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `;
    return (
        <Content>
            <Slider currentArticle={currentArticle} setCurrentArticle={setCurrentArticle} articles={articles}></Slider>
        </Content>
    )
}
