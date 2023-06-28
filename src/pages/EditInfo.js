import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";



export default function EditInfo({ newtasks, taskUpdate, setNewTasks, updateTasks }) {

    const [task, setTask] = useState(taskUpdate.task)
    const [discription, setDiscription] = useState(taskUpdate.discription)
    const [priority, setPriotity] = useState(taskUpdate.priority)
    //const [newtask, setNewTask] = useState()

    const [show, setShow] = useState("")
    const handleShow = (e) => setShow(true)
    const handleClose = (e) => setShow(false)


    const updateTask = [...newtasks]

    let updatedTasks = { task, discription, priority }



    useEffect(() => { handleClose() }, [newtasks])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(taskUpdate.priority)
        setNewTasks(newtasks.map((t, idx) => {
            console.log("taskUpdate editinfo", task)
            console.log("t.task", t.task)
            let index = newtasks.indexOf(taskUpdate);
            console.log(index);
            return idx === index ?
                {
                    task: task,
                    discription: discription,
                    priority: priority,

                }
                :
                t
        }))

        updatedTasks = { task: "", discription: "", priority: "" }


        taskUpdate = {}

    }

    return (

        <>

            <h5>add button that will show input data</h5>

            <form className="home-form" onSubmit={handleSubmit} >

                <h1>Home Page</h1>
                <h3>Welcome to your ToDo application</h3>


                <input className="task" type="text" value={task} placeholder="Task Name" name="Task" onChange={(e) => setTask(e.target.value)} />
                <br />
                <input className="discription" type="text" value={discription} placeholder="Add Task Discription" name="Discription" onChange={(e) => setDiscription(e.target.value)} />
                <br />
                <select className="select-button" value={priority} onChange={(e) => setPriotity(e.target.value)} placeholder="Choose Priority">
                    <br />
                    <option>High Priority</option>
                    <option>Middle Priority</option>
                    <option>Low Priority</option>
                </select>
                <br />

                <button type="submit" >Add Task</button>
            </form>

        </>

    )
}