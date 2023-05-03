import React from 'react'
import photo from "../../images/doctor.jpg"
import "./TableStyle.css"

function Table(props) {

    const handleClick = (e) => {
        props.onClick(e)
    }

  return (
    <div className="board">
        <table width= "100%">
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Title</td>
                    <td>Status</td>
                    <td>Role</td>
                    <td></td>
                </tr>
            </thead>
            {props.data.map((row, index) => (
            <tbody key={index} onClick = {() => handleClick(row)}>
                <tr>
                    <td className="people">
                        <img src = {photo} alt = ""/>
                        <div className="people-de">
                            <h5>{row.name}</h5>
                            <p>{row.email}</p>
                        </div>
                    </td>
                    <td className="people-des">
                        <h5>{row.title}</h5>
                        <p>{row.description}</p>
                    </td>

                    <td className={row.online ? "active" : "offline"}>
                        <p>{row.online ? "Online" : "Offline"}</p>
                    </td>

                    <td className="role">
                        <p>{row.role.name}</p>
                    </td>

                    <td className="edit"  >
                        <a href="#">Edit</a>
                    </td>
                </tr>
            </tbody>
            ))}
        </table>
    </div>
  )
}

export default Table