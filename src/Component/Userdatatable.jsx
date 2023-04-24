import Fetch from "./fetch.jsx"

const Userdatatable = ({ arrange}) => {
  return (
    <div>
         <table cellPadding={10} style={{width:"850px",boxShadow:"0 0 1px black",margin:"50px auto"}}>
                  <thead>
                      <tr style={{background:"black",color:"white"}}>
                          <th>Image</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Gender</th>

                      </tr>
                  </thead>
          
          <Fetch displaydata={arrange} />
                
        </table>
    </div>
  )
}

export default Userdatatable