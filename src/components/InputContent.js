import React from 'react';
import styled from '@emotion/styled'

const InputContent = ({input, onClick, onChange}) => {
    return(
        <>
            <InputWrapper>
                <InputTitle 
                    placeholder = '제목'
                    name = 'title'
                    value = {input.title}
                    onChange={onChange}
                />
                <InputContents 
                    placeholder = '내용'
                    name = 'content'
                    value = {input.content}
                    onChange={onChange}
                />
                <Resister onClick={onClick}>등록</Resister>
            </InputWrapper>
        </>
    )
}

export default InputContent;

const InputWrapper = styled.div`
    background-color: #B7C88E;
    width: 500px;
    display:flex;
    justify-content:center;
    flex-direction: column;
    margin : 0 auto;
    padding-top:40px;
`;

const InputTitle = styled.input`
    background-color: white;
    border : 1px solid black;
    width : 100%;
    margin-bottom : 4px;
`;

const InputContents = styled.input`
    background-color: white;
    border : 1px solid black;
    margin-bottom : 4px;
`;

const Resister = styled.button`
    background-color: #9EC9E2;
    border: 1px solid black;
    color : black;
    letter-spacing: 10px;
`;