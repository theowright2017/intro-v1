import TodoList from '@/components/TodoList'
import prisma from '@/utils/db'

const getData = async () => {
  const todos = await prisma.todo.findMany({})
  return todos
}

const TodosPage = async () => {
  const todos = await getData()
  return (
    <div>
      <h1>Todos</h1>
      <div>
        <TodoList listOfTodos={todos} />
      </div>
    </div>
  )
}

export default TodosPage
