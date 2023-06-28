import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import DisplayTasks from "./display";
import { Button, ModalBody, ModalFooter, ModalHeader, ModalTitle, Modal } from "react-bootstrap";
import EditInfo from "./EditInfo";


export default function Home({ newtasks, add, handleDelete, setNewTasks, updateTasks }) {

    const [task, setTask] = useState("");
    const [discription, setDiscription] = useState("");
    const [priority, setPriotity] = useState("");
    const [index, setIndex] = useState("")
    const { item, setItem } = useState(0);


    useEffect(() => { })

    const handleSubmit = (e) => {
        e.preventDefault();
        const temp = { task: task, discription: discription, priority: priority }
        add(temp)
        setIndex(index + 1)
        localStorage.getItem("HandleSubmit Info", index + " " + task + " " + discription + " " + priority)
    }

    
    return (

        <>
            <header>
                <div><button className="absolute" type="submit" ><a href="https://www.flaticon.com/free-icons/logout" title="logout icons"></a></button></div>
                <br />
            </header>

            <form onSubmit={handleSubmit} className="home-form">

                {/* //<h1>Home Page</h1> */}
                <h1>Welcome to your ToDo application</h1>
                <br/>
                {/* <h5>//add button that will show input data</h5> */}
                <p>let's get started!</p>

                <div><input type="text" value={task} placeholder="Task Name" name="Task" onChange={(e) => setTask(e.target.value)} /></div>
                <br />
                <div><input type="text" value={discription} placeholder="Add Task Discription" name="Discription" onChange={(e) => setDiscription(e.target.value)} /></div>
                <br />
                <select onChange={(e) => setPriotity(e.target.value)} >

                    <option disabled="true">Please Select Priority level</option>
                    <option>High Priority</option>
                    <option>Medium Priority</option>
                    <option>Low Priority</option>
                </select>
                <br />

                <button type="submit">Add Task</button>
            </form>

            <h2 className="">Tasks In Circulation</h2>
            <DisplayTasks newtasks={newtasks} handleDelete={handleDelete} setNewTasks={setNewTasks} updateTasks={updateTasks} />

        </>

    )
}
