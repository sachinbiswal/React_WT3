import { useState, useEffect } from "react";

const Fetch = ({ displaydata }) => {

const [user, setUser] = useState([]);

useEffect(() => {
    fetch("https://randomuser.me/api/?results=20")
    .then(res => res.json())
    .then(data => setUser(data.results));
}, []);

  return (
    <tbody>        
        {
            displaydata === "all" ?
                user.map((e, idx) => {
                    return (
                        <tr key={idx}>
                            <td>
                                <img src={e.picture.medium} alt="" />
                            </td>
                            <td>{e.name.first}</td>
                            <td>{e.email}</td>
                            <td>{e.gender}</td>
                        </tr>
                    )
                })
            :
                user.filter(item => item.gender===displaydata).map((e, idx) => {
                    return (
                        <tr key={idx}>
                            <td>
                                <img src={e.picture.medium} alt = "" />
                            </td>
                            <td>{e.name.first}</td>
                            <td>{e.email}</td>
                            <td>{e.gender}</td>
                        </tr>
                    )
                })
        }
    </tbody>
  )
}

export default Fetch