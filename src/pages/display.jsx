import React, { useState } from "react"
import { Button, ModalBody, ModalFooter, ModalHeader, ModalTitle, Modal } from "react-bootstrap";

import EditInfo from "./EditInfo";

export default function DisplayTasks({newtasks, handleDelete, setNewTask}) {

    //const { updateTask } = useState(props.employees)


    const { updateTask } = useState(newtasks)
    const [currentTask, setCurrentTask] = useState({})
    // const updatedEmployee = {name,idnumber,mail, eposition ,phone,image}

    //const id = theEmployee.idnumber;

    const [show, setShow] = useState(false)

    const handleShow = (t) => {
       setCurrentTask(t)
        setShow(true)

    }

    const handleClose = () => setShow(false)


    return (

        <>
            <table className="table">
                <tbody>
                    <tr>
                        <th> Task Name</th>
                        <th> Discription</th>
                        <th> Priority</th>
                        <th>Operations</th>
                    </tr>
                   {/* {console.log(newtasks)} */}

                    {newtasks.map((data, tasks) => {{}
                        
                        return (
                            <tr>

                                <td>{data.task}</td>
                                <td>{data.discription}</td>
                                <td>{data.priority}</td>

                                <td>
                                    <button onClick={() => handleDelete(data.tasks)} >Delete</button>
                                    <button onClick={() => { handleShow(data) }} >Update</button></td>
                            </tr>

                        )
                    })}


                </tbody>
            </table>

            <Modal show={show} onHide={handleClose} closebuttom>
                <ModalHeader>
                    <ModalTitle>Edit Task details below</ModalTitle>

                </ModalHeader>
                <ModalBody>

                    <EditInfo taskUpdate={currentTask} newtasks={newtasks} setNewtasks={setNewTask} />

                </ModalBody>
                <ModalFooter>

                    <Button variant="secondary" onClick={handleClose}>Close</Button>

                </ModalFooter>

            </Modal>
        </>

    )
}