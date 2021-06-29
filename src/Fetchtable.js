import React, { useState } from 'react'



const Fetchtable = () => {
    const [txt, setTxt] = useState("");
    const [users, setUsers] = useState([]);


    const inputSearch = (event) => {
        setTxt(event.target.value);

    }

    const SearchBtn = async (e) => {
        e.preventDefault();
        setTxt(txt)
       

        console.log(txt)
        var url = ""
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


        }

}
   
    console.log(users);

     
    return (
        
        <>
            <div>
                <input type="text" onChange={inputSearch} placeholder="Enter name here..." />
                <button onClick={SearchBtn}>Search</button>
            </div>

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
                            {
                                
                          users.map((val)=>
                            <tr key={val.userId}>
                               <td>{val.userId}</td>
                               <td>{val.name}</td>
                               <td>{val.phoneNumber}</td>
                               <td>
                                  <img src={val.profilePic} alt="error"/>
                               </td>
                            </tr>
                          )
                        }
                    </tbody>
                </table>
            </div>
          

        </>

    )

}

export default Fetchtable;
