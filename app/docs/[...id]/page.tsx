import { Random } from "./random"

const DocsWithIdPage = ({ params }) => {
  console.log(params)
  return (
    <div>
      Docs with id Page -- {params.id} -- {params.title}
      <div><Random/></div>
    </div>
  )
}

export default DocsWithIdPage
