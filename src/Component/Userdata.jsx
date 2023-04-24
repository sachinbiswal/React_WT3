import { useState } from 'react'
import Userdatatable from '../Component/Userdatatable.jsx'

const Userdata = () => {

  const [display, setDisplay] = useState("All");

  return (
    <div style = {{width : "850px",margin : "20px",padding : "20px"}}>
        <h1>User Details</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ad nulla vitae, ullam necessitatibus rem, reiciendis ducimus tempora possimus dolor velit! Distinctio harum quam dolor delectus exercitationem molestias, ullam veritatis qui modi expedita, animi architecto velit itaque nobis dignissimos aspernatur vitae quasi! Dolorem rem amet corporis, saepe praesentium officia aperiam molestias vitae provident obcaecati enim maxime ad, doloremque assumenda, nisi dolor ipsa dolorum eveniet facilis nam voluptatibus. Nostrum libero sed hic facere vel, suscipit inventore labore soluta repellendus, doloribus cum tempora! Odio culpa quisquam facilis veniam, incidunt esse hic doloribus architecto quidem ipsam vel, laudantium dolorem voluptate sint, iure magnam!</p>
        <div className='label'>

        <label className='label1'>All<input type="radio" name="gender" id="all" value="all" 
              onChange={e => setDisplay(e.target.value)}/></label>

            <label className='label2'>Male<input type="radio" name="gender" id="male" value="male" 
              onChange={e => setDisplay(e.target.value)} /></label>

            <label className='label3'>Female<input type="radio" name="gender" id="female" value="female" 
              onChange={e => setDisplay(e.target.value)} /></label>

        </div>
        <Userdatatable arrange={display} />
    </div>
  )
}

export default Userdata