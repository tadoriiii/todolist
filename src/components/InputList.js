import React from 'react';
import './body-container.css'

const InputList = ({list, onRemove, openModal}) => {
    const listItem = list.map((item)=>(
        <li key={item.id} className='list'>
            <div>{item.title}</div>
            <div>{item.content}</div>
            <button onClick={()=>onRemove(item.id)}>삭제</button>
            <button onClick={()=>openModal(item.title, item.content, item.id)}>수정</button>
        </li>
    ))
    return(
        <ul className="list-wrapper">
            {listItem}
        </ul>
    )
}

export default InputList;