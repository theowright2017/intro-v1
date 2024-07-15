import { useState } from 'react'

const getData = async () => {
  await new Promise((res, rej) => setTimeout((v) => res(v)))
  return { data: [1, 2, 3] }
}

const Card = async () => {
  const data = await getData()

  return (
    <div>
        <div>Card Componnt</div>
      {data.data.map((n) => (
        <div key={n}>{n}</div>
      ))}
    </div>
  )
}

export default Card;
