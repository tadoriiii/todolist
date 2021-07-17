import React from 'react';
import styled from '@emotion/styled'

const Header = () => {
    return(
        <>
            <TopWrapper>
                <H1>To Do list</H1>
            </TopWrapper>
        </>
    )
} 

export default Header;

const TopWrapper = styled.header`
    height:70px;
    width:100%;
    border-bottom : 2px solid black;
    background-color: #B7C88E;
    margin-top : 2px;
    text-align:center;
    top:0;
    left:0;
`;

const H1 = styled.h1`
    background-color : #B8C88E;
    font-size:40px;
    font-weight:900;
`;