import TodosPage from "@/app/(dashboard)/todos/page"
import Todo from "./Todo"

const TodoList = ({listOfTodos}) => {

    return listOfTodos.map(td => (
        <Todo key={td.id}todo={td}/>
    ))
}

export default TodoList