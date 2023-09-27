//Import area
import React from 'react'
import Link from 'next/link'
//Defenation area
export default function RightAside() {
  return (
    <> 
       <aside className='col-3 g_tbdr'>

<ul className="nav flex-column">
  <li className="nav-item">
    <Link className="nav-link active" aria-current="page" href="/flight"> <h1>Why ?</h1> <h3>Hi</h3></Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" href="/city"><h1>How ?</h1> <h3>Hi</h3></Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" href="/island"><h1>When ?</h1> <h3>Hi</h3></Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" href="/food"><h1>Where ?</h1> <h3>Hi</h3></Link>
  </li>
</ul>

</aside>
  </>

  )
}
//Export area