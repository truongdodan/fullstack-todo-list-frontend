import { useEffect, useState } from "react";
import Task from "./components/Task"
import { getAllTask, addTask, updateTask, deleteTask } from "./utils/HandleAPI";

function App() {
  let [taskList, SetTaskList] = useState([]);
  let [name, setName] = useState("");
  let [taskID, setTaskID] = useState("");
  let [isUpdate, setIsUpdate] = useState(false);
  let [theme, setTheme] = useState("theme--light");

  useEffect(() => {
    getAllTask(SetTaskList);
  }, []);

  const setupUpdate = (_id, name) => {
    setIsUpdate(true);
    setTaskID(_id);
    setName(name);
  }

  let currentdate = new Date(); 
  let ampm = currentdate.getHours() <= 12 ? "AM" : "PM";
  let datetime =    currentdate.getDate() + "/"
                  + (currentdate.getMonth()+1)  + "/" 
                  + currentdate.getFullYear() + ", "  
                  + currentdate.getHours() + ":"  
                  + currentdate.getMinutes() + ":" 
                  + currentdate.getSeconds() + " "
                  + ampm;          


  return (
    <div className={"todo-list " + theme}>
      <div className="container">
        <div className="header">
          <div className="theme-button">
            <div id="lightThemeButton" onClick={() => setTheme("theme--light")}></div>
            <div id="darkThemeButton" onClick={() => setTheme("theme--dark")}></div>
          </div>
          <p id="title">Just do it.</p>
        </div>
        <div id="addTaskForm" className="form--light">
          <input 
          type="text" 
          placeholder='Add a task.' 
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          />
          <div 
          id="addTaskButton" 
          className="add-task--light"
          onClick={isUpdate ? () => updateTask(taskID, name, setName, setIsUpdate, SetTaskList) : () => addTask(name, setName, SetTaskList)}>
          {isUpdate ? "Update" : "I got this! "}
          </div>
        </div>
        <p id="timer">{datetime}.</p>
        <div id="taskList" className="tasks--light">
          {taskList.map((task) => <Task 
                                  key={task._id} 
                                  className='task'
                                  name={task.name} 
                                  updateMode={() => setupUpdate(task._id, task.name)} 
                                  deleteTask={() => deleteTask(task._id, SetTaskList)}/> )}
        </div>
      </div>
    </div>
  );
}

export default App;
