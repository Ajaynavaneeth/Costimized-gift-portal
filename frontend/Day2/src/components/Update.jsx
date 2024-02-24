import React from 'react'
import Home from './Home';

function Update() {
    // const [name, setName] = useState('John Doe');
    // const [address, setAddress] = useState('123 Main St');
    // const [number, setNumber] = useState('123-456-7890');

    // const [isEditing, setIsEditing] = useState(false);
    // const [tempName, setTempName] = useState(name);
    // const [tempAddress, setTempAddress] = useState(address);
    // const [tempNumber, setTempNumber] = useState(number);

    // const handleUpdate = () => {
    //     setName(tempName);
    //     setAddress(tempAddress);
    //     setNumber(tempNumber);
    //     setIsEditing(false);
    // };

    // const handleCancel = () => {
    //     setIsEditing(false);
    //     setTempName(name);
    //     setTempAddress(address);
    //     setTempNumber(number);
    // };

    return (
        <div>
            {/* {isEditing ? (
                <div>
                    <input type="text" value={tempName} onChange={(e) => setTempName(e.target.value)} />
                    <input type="text" value={tempAddress} onChange={(e) => setTempAddress(e.target.value)} />
                    <input type="text" value={tempNumber} onChange={(e) => setTempNumber(e.target.value)} />
                    <button onClick={handleUpdate}>Update</button>
                    <button onClick={handleCancel}>Cancel</button>
                </div>
            ) : (
                <div>
                    <p>Name: {name}</p>
                    <p>Address: {address}</p>
                    <p>Number: {number}</p>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                </div>
            )} */}
            profile
            <Home/>
        </div>
    );
}

export default Update
