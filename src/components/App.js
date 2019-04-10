import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div className='todo-app container'>
    <h1 className="center blue-text">Todo's</h1>
    
    <VisibleTodoList />
    <AddTodo />
    <Footer />
  </div>
)

export default App
