import TodoList from './app/components/todoList'
import './scss/app.scss'
import {Route, Switch} from 'react-router-dom'
import EditTodo from './app/components/editTodo'



function App() {
  return (
    <div className="wrapper">
      <Switch>
        <Route path='/:id' component={EditTodo}/>
        <Route path='/' exact component={TodoList}/>
      </Switch>
    </div>
  );
}

export default App;
