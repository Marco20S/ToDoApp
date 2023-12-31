import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';




import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import { type } from '@testing-library/user-event/dist/type';


function App() {

  const [newtasks, setNewTasks] = useState();
  const [user, setUser] = useState();
  const [users, setUsers] = useState();

  const [isloggedin, setUserstate] = useState(false)

  //localstorage useEffect code for adding tasks

  useEffect(() => {
    const fromLocalStorage = localStorage.getItem("newtasks") || []

    if (typeof fromLocalStorage == 'object') {
      localStorage.setItem('newtasks', JSON.stringify(fromLocalStorage))
      setNewTasks(fromLocalStorage)
    } else {
      setNewTasks(JSON.parse(fromLocalStorage))
    }
  }, [])

  useEffect(() => {
    console.log(newtasks)
    newtasks && localStorage.setItem('newtasks', JSON.stringify(newtasks))
    console.log(newtasks)
  }, [newtasks])


  //localstorage useEffect code for adding users
  useEffect(() => {
    const loginLocalStorage = localStorage.getItem("users") || []

    if ((typeof loginLocalStorage) == 'object') {
      localStorage.setItem('users', JSON.stringify(loginLocalStorage))
      setUsers(loginLocalStorage)
    } else {
      setUsers(JSON.parse(loginLocalStorage))
    }
  }, [])

  useEffect(() => {
    user && localStorage.setItem('user', JSON.stringify(user))
    users && localStorage.setItem('users', JSON.stringify(users))
  }, [users, user])



  //add function tasks
  const add = (t) => {
    setNewTasks(() => [...newtasks, {
      task: t.task, discription: t.discription,
      priority: t.priority
    }])

  }

  const addUser = (t) => {
    setUsers(() => [...users, {
      name: t.name, username: t.username,
      mail: t.mail, password: t.password
    }])

  }

  // login user if user id found then addinto new array {user} 

  const login = (username, password) => {

    const foundUser = users.filter(currentUser => {
      return (
        currentUser.username == username && currentUser.password == password
      )
    })
    console.log(foundUser)
    setUser(foundUser)

    return foundUser.length > 0
  }

  //delete function

  const handleDelete = (deleteTask) => {
    console.log("handleDelete", deleteTask)
    alert("The following Tasks will be removed from the list: ")
    setNewTasks(newtasks.filter(tasks => {
      console.log(tasks.task, '==', deleteTask)
      return tasks.task !== deleteTask
    }
    ))
    console.log("deleted task", setNewTasks)
  }

  //update function
  const updateTasks = (task, updatedTasks) => {
    setNewTasks(newtasks.map((tasks) => tasks.task === task ?
      updatedTasks : tasks))
    console.log("UPDATE", setNewTasks)

  }

  return (
    <div className="App">
      <>
        <Router>
          {/* {console.log("App.js", newtasks)} */}
          <Routes>
            {/* {console.log(isloggedin)} */}
            {newtasks && <Route path='/' element={isloggedin ? <Home add={add} handleDelete={handleDelete} updateTasks={updateTasks} setNewTasks={setNewTasks} newtasks={newtasks || []} /> : <Navigate to={"/login"} />} />}
            <Route path='/register/' element={<Register addUser={addUser} user={user || []} />} />
            <Route path='/login/' element={!isloggedin ? <Login setUserstate={setUserstate} login={login} user={user} /> : <Navigate to={"/"} />} />

          </Routes>
        </Router>
      </>





    </div>
  );
}

export default App;
