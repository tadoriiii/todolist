import React, { useState } from "react";
import Header from "components/Header"
import InputContent from "components/InputContent"
import InputList from "components/InputList"
import Modal from "react-modal"
import styled from '@emotion/styled'
import {Global} from '@emotion/react'
import Total from 'components/Total' 

const Page =() => {
    const [list, setList] = useState([])
    const [input, setInput] = useState({'title':'', 'content':''}) 
    const [updateInput, setUpdateInput] = useState({'title':'', 'content':''})
    const [edit, setEdit] = useState(undefined);
    
    console.log('input', input)
    console.log('list', list)
    console.log('updateInput', updateInput)
    console.log('edit', edit)
    
    

    const onChange= (e) => {
        const {name, value} = e.target;
        setInput({...input, [name] : value })
    }

    const onChangeUpdate = (e) =>{
        const {name, value} = e.target;
        setUpdateInput({...updateInput, [name]: value})
    }

    const onClick= () => {
        const id = list.length === 0 ? 0 : list[list.length-1].id+1
        setList(list=>[...list, {...input,id}])
        setInput({title:'', content:''})
    }

    const onRemove= (id) => {
        setList(list.filter(list=> list.id !==id))
        //setList(list.map(item=> item.id > id ? {...item, id:item.id-1} : item))
    }

    const openModal= (title, content, id) => {
        console.log('open_list', title)
        setEdit({title, content, id})
        setUpdateInput({title, content, id})
    }

    const closeModal =() =>{
        setEdit(undefined);
    }

    const onUpdate =() => {
        setList(list.map(item=>item.id ===edit.id ? {...item, ...updateInput}:item))
        setEdit(undefined)
        setUpdateInput({'title':'', 'content':''})
    }

    return(
        <>
            <Global styles={Total} />
            <Container>
                <Header />
                <InputContent 
                    input={input}
                    onChange={onChange}
                    onClick={onClick}
                />
                <InputList 
                    list={list}
                    onRemove={onRemove}
                    openModal={openModal}
                />
                <ModalWindow isOpen={!!edit} onRequestClose={closeModal}>
                    <ModalInput
                        placeholder='제목'
                        name='title'
                        value={updateInput.title}
                        onChange={onChangeUpdate}    
                    />
                    <ModalInput 
                        placeholder='내용'
                        name='content'
                        value={updateInput.content}
                        onChange={onChangeUpdate}
                    />
                    <ModalButton onClick={onUpdate}>확인</ModalButton>
                    <ModalButton onClick={closeModal}>닫기</ModalButton>
                </ModalWindow>
            </Container>
        </>
    )
}

export default Page;

const Container = styled.div`
    width : 512px;
    height : 768px;
    background-color: #B7C88E;
    margin : 0 auto;
    display : flex;
    flex-direction: column;
`;
const ModalInput = styled.input`
    width: 100%;
    border: 0;
    border-bottom: 1px solid #ddd;
    background-color: white;
    color : black;
    outline: none;
    margin-top: 8px;
    margin-bottom: 8px;
`;

const ModalWindow = styled(Modal)`
    width : 500px;
    height : 200px;
    margin : 0 auto;
    margin-top : 300px;
    background-color: #FED67E;
    border : 2px solid #ddd;
`;

const ModalButton = styled.button`
    background-color: #9EC9E2;
    border : 1px solid black;
    color: black;
    font-size: 14px;
    width:32px;
    height:32px;
    margin-right: 4px;
    margin-top : 8px;
`;