import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";


const CheckedAssignments = () => {
    const {user}= useContext(AuthContext)
    const [checkedAssignments,setCheckedAssignments] = useState([]);
    const url = `http://localhost:5000/submittedAssignments?status=completed`;

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setCheckedAssignments(data)
        })
    },[url])
    return (
        <div>
            <h2 className="text-3xl">Checked Assignments:{checkedAssignments?.length}</h2>
        </div>
    );
};

export default CheckedAssignments;