import axios from "axios"

const baseURL = "https://fullstack-todo-list-1.onrender.com";

const getAllTask = (setAllTask) => {
    axios
    .get(baseURL)
    .then(({data}) => {
        console.log("data ---->", data);
        setAllTask(data);
    })
    .catch((err) => console.log(err))
};

const addTask = (name, setName, setAllTask) => {
    axios
    .post(`${baseURL}/save`, {name})
    .then((data) => {
        console.log(data);
        setName("");
        getAllTask(setAllTask);
    })
    .catch((err) => console.log(err))
};

const updateTask = (taskID, name, setName, setUpdateMode, setAllTask) => {
    axios
    .post(`${baseURL}/update`, {_id: taskID, name})
    .then((data) => {
        console.log(data);
        setUpdateMode(false);
        setName("");
        getAllTask(setAllTask);
    })
};

const deleteTask = (_id, setAllTask) => {
    axios
    .post(`${baseURL}/delete`, {_id})          
    .then((data) => {
        console.log(data);
        getAllTask(setAllTask);
    })
    .catch((err) => console.log(err))
};

export {getAllTask, addTask, updateTask, deleteTask};