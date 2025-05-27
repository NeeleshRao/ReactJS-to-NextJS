// 'use client'
// import { useState } from 'react'

// export default function Home() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
      
//       <h1>Example Project</h1>
//       <div>
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>        
//       </div>
      
//     </>
//   )
// }
"use client"
import { useState } from 'react'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>Example Project</h1>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>        
      </div>
      
    </>
  )
}

export default Home

