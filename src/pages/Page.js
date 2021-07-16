import React, { useState } from "react";
import Header from "components/Header"
import InputContent from "components/InputContent"
import InputList from "components/InputList"
import Modal from "react-modal"

import 'components/Total-page.css'

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
        const id= list.length
        setList(list=>[...list, {...input,id}])
        setInput({title:'', content:''})
    }

    const onRemove= (id) => {
        setList(list.filter(list=> list.id !==id))
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
            <Modal isOpen={!!edit} onRequestClose={closeModal}>
                <input 
                    placeholder='제목'
                    name='title'
                    value={updateInput.title}
                    onChange={onChangeUpdate}    
                />
                <input 
                    placeholder='내용'
                    name='content'
                    value={updateInput.content}
                    onChange={onChangeUpdate}
                />
                <button onClick={onUpdate}>확인</button>
                <button onClick={closeModal}>닫기</button>
            </Modal>
        </>
    )
}

export default Page;