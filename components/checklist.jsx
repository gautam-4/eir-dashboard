"use client"

import { useState, useEffect } from 'react';

const Checklist = ({ stage }) => {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    let tasks = [];
    switch (stage) {
      case 'L1':
        tasks = [
          { name: 'L1 Call', completed: false },
          { name: 'L1 Follow up call', completed: false },
          { name: 'Update Investment Note', completed: false },
          { name: 'De-Brief Call with TO', completed: false },
          { name: 'Define L2 Panel', completed: false },
        ];
        break;
      case 'L2':
        tasks = [
          { name: 'L2 Panel Discussion', completed: false },
          { name: 'De-brief with L2 Panel', completed: false },
          { name: 'Updated Investment Note', completed: false },
          { name: 'Define IC for L3', completed: false },
        ];
        break;
      case 'L2.5':
        tasks = [
          { name: 'IC Panel Discussion', completed: false },
          { name: 'De-brief with IC Panel', completed: false },
          { name: 'Investment Note Updated', completed: false },
          { name: 'Lead Mentor Identified', completed: false },
          { name: 'Platform Equity Negotiated and Platform Termsheet drafted accordingly', completed: false },
          { name: 'IA Growth Opportunities Termsheet Finalized and Attached', completed: false },
          { name: 'Mandate Letter rolled out', completed: false },
          { name: 'Platform Termsheet Signed', completed: false },
          { name: 'IA Growth Opportunities Termsheet Signed', completed: false },
          { name: 'Mandate Letter Signed', completed: false },
        ];
        break;
      case 'L3':
        tasks = [
          { name: 'Lead Mentor Agreement Closed', completed: false },
          { name: 'Due Diligence: BDD', completed: false },
          { name: 'Due Diligence: FDD', completed: false },
          { name: 'Due Diligence: LDD', completed: false },
          { name: 'Roc Compliance Done', completed: false },
        ];
        break;
      default:
        tasks = [];
    }
    setTaskList(tasks);
  }, [stage]);

  const toggleTask = (index) => {
    const newTaskList = [...taskList];
    newTaskList[index].completed = !newTaskList[index].completed;
    setTaskList(newTaskList);
  };

  return (
    <div className="p-4 bg-transparent text-white rounded-lg mt-6">
      {taskList.map((task, index) => (
        <div key={index} className="flex items-center mb-2">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(index)}
            className="form-checkbox h-5 w-5 text-green-500 bg-gray-700 border-gray-600 focus:ring-0"
          />
          <span
            className={`ml-2 ${task.completed ? 'line-through text-gray-400' : ''}`}
          >
            {task.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Checklist;
