import React from 'react'
import Child from './Child'

const Parent = () => {
  return (
    <div>
        <Child name="vikraam" age={25} 
        marks={[90,92,93,94,95]} 
        person={{name:"viky",dept:["AI&DS","CT"]}}
        />
    </div>
  )
}

export default Parent