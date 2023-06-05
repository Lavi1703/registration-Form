import React, { useState } from 'react'

function Registration() {

    const[userRegistration , setRegistration] = useState({
        name:"",
        email:"",
        mob:"",
        dob:"",
        address:"",
        radio1:"",
        radio2:"",
        country:"",
        state:"",
        pin:""

    })
    const [records,setRecords] = useState([])
    const handleInput  =(e)=>{
      const name=e.target.name
      const value = e.target.value;
      setRegistration({...userRegistration,[name]:value})
    }
    
    const handleSubmit =(e)=>{
         e.preventDefault()
         const newRecord = {...userRegistration,id:new Date().getTime().toString() }
         console.log(newRecord);
         setRecords([...records,newRecord])

         setRegistration({ name:"",email:"",mob:"",dob:"", address:"",radio1:"",radio2:"",country:"",
         state:"",
         pin:""});


    }
  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <table>
            <caption><em>Registration Form</em></caption>
           <thead>
              <tr>
                <th></th>
                <th></th>
              </tr>
           </thead>
           <tbody>
              <tr>
                <td><label htmlFor="name">Name</label></td>
                <td><input type="text" id="name" onChange={handleInput} value={userRegistration.name} name="name" required/></td>
              </tr>
              <tr>
                <td><label htmlFor="email">Email</label></td>
                <td><input type="email" id="email"onChange={handleInput} value={userRegistration.email} name="email" required/></td>
              </tr>
              <tr>
                <td><label htmlFor="mob">Mobile Number</label></td>
                <td><input type="number" id="mob"onChange={handleInput} value={userRegistration.mob} name="mob" required/></td>
              </tr>
              <tr>
                <td><label htmlFor="dob">Date of Birth</label></td>
                <td><input type="date" id="dob"onChange={handleInput} value={userRegistration.dob} name="dob" required/></td>
              </tr>
              <tr>
                <td><label htmlFor="address">Address</label></td>
                <td> <input type="text" id="address"onChange={handleInput} value={userRegistration.address} name="address" required/></td>
              </tr>
              <tr>
                <td><p>Gender</p></td>
                <td><input type="radio" id="male"onChange={handleInput} value="Male" name="radio1" required/>
                    <label htmlFor="male">Male</label>
                    <input type="radio" id="female"onChange={handleInput} value="Female" name="radio1" required/>
                    <label htmlFor="female">Female</label>
                </td>
              </tr>
              <tr>
                <td><p>Marital Status</p></td>
                <td> <input type="radio" id="married"onChange={handleInput} value="Married" name="radio2" required/>
                     <label htmlFor="married">Married</label>
                     <input type="radio" id="unmarried"onChange={handleInput} value="UnMarried" name="radio2" required/> 
                     <label htmlFor="married">UnMarried</label>
                </td>
              </tr>
              <tr>
                <td><label htmlFor="country">Country</label></td>
                <td> 
                    <select id="country" name="country" onChange={handleInput} required>
                        <option value=""></option>
                        <option value="USA">USA</option>
                        <option value="India">India</option>
                    </select>
                </td>
              </tr>
              <tr>
                <td><label htmlFor="state">State</label></td>
                <td> 
                <select id="state" name="state" onChange={handleInput} required>
                    <option value=""></option>
                    <option value="Banglore">Banglore</option>
                    <option value="Delhi">Delhi</option>
                </select>
                </td>
              </tr>
              <tr>
                <td>
                <label htmlFor="pin">Pin Code</label>
                </td>
                <td>
                <input type="number" id="pin"onChange={handleInput} value={userRegistration.pin} name="pin" required/>
                </td>
              </tr>
              <tr>
                <td colSpan="2"><button type="submit">Registration</button></td>
              </tr>
           </tbody>
             
        </table>

      </form>
      <div className='record'>
        {
            records.map((currElem)=>{
             const{id,name,email,mob,dob,address,radio1,radio2,country,state,pin} = currElem;
              return(
                <div key={id} className="styles">
                    <p>{name}</p>
                    <p>{email}</p>
                    <p>{mob}</p>
                    <p>{dob}</p>
                    <p>{radio1}</p>
                    <p>{radio2}</p>
                    <p>{address}</p>
                    <p>{country}</p>
                    <p>{state}</p>
                    <p>{pin}</p>
                </div>
            )
            })
        }
      </div>
    </div>
  )
}

export default Registration
