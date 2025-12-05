import React from 'react'
import { useParams } from 'react-router-dom'

const GrandChild = () => {
  const {id} = useParams()
  return (
    <div>
      GrandChild {id}
    </div>
  )
}

export default GrandChild
