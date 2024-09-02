import React from 'react';
import Icon from '@mdi/react';
import { mdiCloseCircleOutline } from '@mdi/js';

const ListTask = ({ task, index, removeTask }) => {
  return (
    <div className="list-wrapper">
      <ul className="d-flex flex-column-reverse todo-list">
        <li className="d-flex justify-content-between align-items-center">
          <div className="form-check d-flex align-items-center">
          <span className="bullet-point" style={{ fontSize: '1.5rem', marginRight: '8px' }}>
              &#8226;
            </span>
            <label className="form-check-label ml-2">
              {task.title}
            </label>
          </div>
          <Icon
            path={mdiCloseCircleOutline}
            size={1}
            onClick={() => removeTask(index)}
            style={{ cursor: 'pointer', color: 'red' }}
          />
        </li>
      </ul>
    </div>
  );
};

export default ListTask;
