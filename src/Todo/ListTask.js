import React from 'react'

const ListTask = ({task, index, removeTask}) => {
  return (
    <>
        <div className='list-tasks'> 
            {task.title}
            <button onClick={()=>{removeTask(index)}} type="button" class="delete-btn">Delete</button>
        </div>
    </>
  )
}

export default ListTask