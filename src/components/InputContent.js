import React from 'react';
import './body-container.css'

const InputContent = ({input, onClick, onChange}) => {
    return(
        <>
            <div className='input-wrapper'>
                <input 
                    placeholder = '제목'
                    name = 'title'
                    
                    value = {input.title}
                    onChange={onChange}
                />
                <input 
                    placeholder = '내용'
                    name = 'content'
                    value = {input.content}
                    onChange={onChange}
                />
                <button onClick={onClick}>등록</button>
            </div>
        </>
    )
}

export default InputContent;