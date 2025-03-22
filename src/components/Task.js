import React from 'react'
import { PencilLine } from 'lucide-react';
import { Trash2 } from 'lucide-react';

const Task = ({name, updateMode, deleteTask}) => {
  return (
    <>
      <div className="task">
        <p>{name}</p>
        <div className="icons">
          <PencilLine className='icon' onClick={updateMode}/>
          <Trash2 className='icon' onClick={deleteTask}/>
        </div>
      </div>
    </>
  )
}

export default Task
