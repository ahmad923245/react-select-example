import React, { useEffect, useState } from 'react'

function SelectMenu() {

    const [listOfUser, setlistOfUser] = useState([])
    const [user, setuser] = useState({}) //make a state for store particullar user

    useEffect(() => {
        getData()
    }, [])



    //in thin function we are getting all the user list and save in state as you know
    const getData = () => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(res => res.json())
            .then((data) => {
                setlistOfUser(data) // here we saving in state
                console.log(data)
            }).catch(err => {
                console.log(err)
            })

    }



    const onChangeOption = (e) => {

        let id = e // now just save id in variable id 

        fetch(`https://jsonplaceholder.typicode.com/users/${id}`) // after that we will hit the api for get that  particullar user
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                setuser(data) //then save this into state
            })
            .catch(err => {
                console.log(err)
            })


    }











    return (
        <div style={{ margin: 50 }}>
            <select
                onChange={(e) => onChangeOption(e.target.value)} //when ever user select we will catch id for this specfic user 
            >
                {
                    listOfUser.map((item, index) => (
                        <option
                            value={item.id}
                            key={item.id}>{item.name}</option>
                    ))
                }
            </select>

            {/* here we show the data of user */}
            <div style={{ display: 'flex',alignItems:'center',justifyContent:'center' }}>


                <div>
                    <h4>Name:</h4>
                    <h4>Email:</h4>
                    <h4>Phone:</h4>
                    <h4>Website:</h4>
                </div>
                <div>
                    <h6>{user.name}</h6>
                    <h6>{user.email}</h6>
                    <h6>{user.phone}</h6>
                    <h6>{user.website}</h6>
                    
                </div>

            </div>





        </div>
    )
}

export default SelectMenu