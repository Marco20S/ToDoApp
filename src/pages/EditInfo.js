import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";



export default function EditInfo({ newtasks, taskUpdate, setNewtasks }) {

    const [task, setTask] = useState(taskUpdate.task)
    const [discription, setDiscription] = useState(taskUpdate.discription)
    const [priority, setPriotity] = useState(taskUpdate.priority)

    const [show, setShow] = useState("")
    const handleShow = (e) => setShow(true)
    const handleClose = (e) => setShow(false)


    const updateTask = [...newtasks]

    let updatedTasks = { task, discription, priority }



    useEffect(() => { handleClose() }, [newtasks])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(updatedTasks)
        setTask(newtasks.map(t => {
            return t.task === taskUpdate.task ?
                {
                    task: taskUpdate.task,
                    discription: taskUpdate.discription,
                    priority: taskUpdate.priority,

                }
                :
                t
        }))

        updatedTasks = { task: "", discription: "", priority: "" }

    }

    return (

        <>

            <h5>add button that will show input data</h5>

            <form className="home-form" onSubmit={handleSubmit} >

                <h1>Home Page</h1>
                <h3>Welcome to your ToDo application</h3>


                <input className="task" type="text" value={task} placeholder="Task Name" name="Task" onChange={(event) => setTask(event.target.value)} />
                <br />
                <input className="discription" type="text"  value={discription} placeholder="Add Task Discription" name="Discription" onChange={(event) => setDiscription(event.target.value)} />
                <br />
                <select className="select-button" value={priority} onChange={(event) => setPriotity(event.target.value)} placeholder="Choose Priority">
                    <br />
                    <option>High</option>
                    <option>Mid</option>
                    <option>Low</option>
                </select>
                <br />

                <button type="submit" >Add Task</button>
            </form>







        </>

    )
}