import TodoList from './app/components/todoList'
import './scss/app.scss'
import {Route, Switch} from 'react-router-dom'
import EditTodo from './app/components/editTodo'

/**
 * Компонент который монтируется в DOM-дерево. Имеет 2 маршрута для перехода на страницы Todo-List и Edit Todo
 * @returns {JSX.Element}
 */

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
