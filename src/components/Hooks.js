import React , { useState }from 'react'

function Hooks() {
 
    const [ count, setCount] = useState(0)

    const [name, setName] = useState({firstName:"",lastName: ""})
    const hangeHandler = (e) => {
        setName({...name, [e.target.name]:e.target.value})
    }
    return (
        <div>
            {/* <input type = "text" value = {}/> */}
            <button onClick= {() => setCount(count+1)} > Click {count} time</button>
            
            {/* <input type="text" name="firstName" value={name.firstName} onChange={hangeHandler}/> */}
            {/* <input type="text" name="lastName" value={name.lastName} onChange={hangeHandler}/> */}
            {/* <h2>{name.firstName}</h2>
            <h2>{name.lastName}</h2>
            <h2>{JSON.stringify(name)}</h2> */}
        </div>
    )
}

export default Hooks
