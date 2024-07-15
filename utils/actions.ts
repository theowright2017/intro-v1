'use server'
import { revalidatePath } from 'next/cache'
import prisma from './db'

/* 
    - server actions
    - this is guaranteed to run on the server
    - not the same as REST, not an API call
    - cannot update FE based on db response, from here

*/

export const createTodo = async (data) => {
  const todo = await prisma.todo.create({
    data: {
      content: data.get('content'),
    },
  })

  revalidatePath('/todos') // revalidate cache 
}
