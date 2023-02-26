import { motion } from 'framer-motion';
import _ from 'lodash';
import { useState } from 'react';
import styled from 'styled-components';
import { IArticles } from '../shared/article/article.model';

export const Slider = ({ articles, currentArticle, setCurrentArticle }: IArticles) => {
    const length = articles.length;

    if (!_.isArray(articles) || length <= 0) {
        return null;
    }

    const NachosImage = styled(motion.img)`
        background-size: cover;
        object-fit: cover;
        background-position: center;
        width: 500px;
    `;
    return (
        <>
            {_.map(articles, (article, index) =>
                <>
                    {index === currentArticle && (
                        <NachosImage initial={{opacity: 0, y: -50}} animate={{opacity: 1, y:0}} transition={{duration:.5}} src={article.image}></NachosImage>
                    )}
                </>
            )}
        </>
    )
}
