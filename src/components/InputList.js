import React from 'react';
import styled from '@emotion/styled'

const InputList = ({list, onRemove, openModal}) => {

    const listItem = list.map((item)=>(
        <List key={item.id}>
            <ItemTitle>{item.title}</ItemTitle>
            <ItemContent>{item.content}</ItemContent>
            <Button onClick={()=>onRemove(item.id)}>삭제</Button>
            <Button primary onClick={()=>openModal(item.title, item.content, item.id)}>수정</Button>
        </List>
    ))
    return(
        <ListWrapper>
            {listItem}
        </ListWrapper>
    )
}

export default InputList;

const List = styled.li`
    border-bottom : 2px solid black;
    background-color: #B7C88E;
`;

const ListWrapper = styled.ul`
    width:500px;
    height : 500px;
    margin: 0 auto;
    padding-top : 70px;
    background-color: #B7C88E;
    display : flex;
    flex-direction: column;
    list-style: none;
    overflow-y: scroll;
`;

const ItemTitle = styled.div`
    background-color: #B7C88E;
    font-size: 34px;
    font-weight: 700;
`;

const ItemContent = styled.div`
    background-color: #B7C88E;
    font-size : 18px;
    font-weight : 400;
`;

{/*const Remove = styled.button`
    background-color: #9EC9E2;
    border : 1px solid black;
    color: black;
    margin-bottom:2px;
    font-size: 14px;
    width:32px;
    height:32px;
`;

const Update = styled.button`
    background-color: #9EC9E2;
    border : 1px solid black;
    color: black;
    margin-bottom:2px;
    font-size: 14px;
    width:32px;
    height:32px;
    margin-left : 4px;
`;*/}

const Button = styled.button`
    background-color: ${props => props.primary ? '#9EC9E2' : '#F5EBAD'};
    border : 1px solid black;
    color: black;
    margin-bottom:2px;
    font-size: 14px;
    width:32px;
    height:32px;
    margin-left : ${props => props.primary ? '4px' : '0'};
`;