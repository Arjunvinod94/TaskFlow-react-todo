import React, { useState } from 'react'

const AddTask = ({ addTask }) => {
    const [value, setValue] = useState("")
    const addItem = () => {
        addTask(value)
        setValue("")
    }
    return (
        <>
            <div class="add-items d-flex"> <input type="text" className="form-control todo-list-input" placeholder="What do you need to do today?"
                value={value}
                onChange={(e) => {
                    setValue(e.target.value)
                }} />
                <button className="add btn btn-primary font-weight-bold todo-list-add-btn" onClick={addItem}>Add</button> </div>
        </>
    )
}

export default AddTask