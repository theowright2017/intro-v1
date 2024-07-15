'use client'
import { useState } from 'react'
import { createTodo } from '@/utils/actions'

const NewTodoForm = () => {
  const [state, updateState] = useState('')

  return (
    <div>
      hello
      <form action={createTodo}>
        <input name="content" type="text" className="border border-black/25" />
        <button type='submit'>New Todo</button>
      </form>
    </div>
  )
}

export default NewTodoForm
