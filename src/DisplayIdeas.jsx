import React, { useState } from "react";

function DisplayIdeas (props) {
  let crazyIdeas = props.ideas.map(idea => <li>{idea}</li>)
  
  return(
    <div>
      <ul>
        {crazyIdeas}
      </ul>
    </div>
  )
}

export default DisplayIdeas


// import React, { useState } from "react"

// function DisplayIdeas (props) {
//   return(
//     <div>

//     </div>
//   )
// }

// export default DisplayIdeas


// SAME AS ABOVE
// export default function DisplayIdeas() {
//     return (
//         <h1>DiasplayIdeas</h1>
//     )
// }