import React, {  useState } from 'react'

import BootstrapTable from 'react-bootstrap-table-next';
import 'bootstrap/dist/css/bootstrap.min.css';




const Fetchtable = () =>{


   const [txt, setTxt] = useState("");
   const [users, setUsers] = useState([]);
//    const [searched, setSearched] = useState(false);


   const columns = [
       {dataField: 'userId', text: 'UserId'},
       {dataField: 'name', text: 'Name'},
       {dataField: 'phoneNumber', text: 'PhoneNumber'},
       {dataField: 'profilePic', text: 'ProfilePic'}
   ]





    const inputSearch = (event) => {
        setTxt(event.target.value);

    }







     const searchBtn = async () => {
        // e.preventDefault();
        setTxt(txt)

        console.log(txt)
        let url = ""
        if (txt === "") {
            url = "http://65.0.216.210:5000/search/people"
        }
        else {
            url = "http://65.0.216.210:5000/search/people?query={query}".replace("{query}", txt)
        }

        console.log(url)


        const response = await fetch(url,
            {
                method: 'GET',
                headers: {
                    'Accept': 'Application/json',
                    'content-type': 'Application/json',
                    'userId': 'web_user',
                    'auth': 'we-are-metby'
                }
            })


        if (response.ok) {
            const user = await response.json();
            console.log(user);
             console.log("hello");
            console.log(user.records);
            setUsers(user.records);
            // setSearched(true)

        }

    // PrintResult();

}






    console.log(users);
  



    return (

        <>
            <div>
                <input type="text" onChange={inputSearch} placeholder="Search here user name" />
                <button onClick= { searchBtn } >Search</button>
             </div>

                <BootstrapTable keyField='userId' columns={columns} data={users}/>
                 {/* { searched ? users.length > 0
                       ?(
                           <div>
                               <table>
                                   <thead>
                                       <tr>
                                            <th>UserId</th>
                                            <th>Name</th>
                                            <th>phone Number</th>
                                            <th>profilePic</th>
                                       </tr>
                                   </thead>
                                   <tbody>

                                          {  users.map((val)=>{
                                              return(
                                               <tr key={val.userId}>
                                                <td>{val.userId}</td>
                                                <td>{val.name}</td>
                                                <td>{val.phoneNumber}</td>
                                                <td>
                                                      <img src={val.profilePic} alt="error"/>
                                                </td>
                                               </tr>
                                              )
                                              })
                                           }


                                   </tbody>
                                </table>
                           </div>)


                           :(
                               <div>
                                   No users
                               </div>

                           ) : ''} */}




</>

)


}

export default Fetchtable;
