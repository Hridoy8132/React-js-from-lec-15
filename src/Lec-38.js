// Lec-38 start Send Data Child to Parent Component.

function User(props)
{
    const name="Web development"
    return(
        <div>
            <h1>User Name is : </h1>
            <button onClick={()=>props.getData(name)} >Click Me</button>
        </div>
    )
}

export default User;

// Lec-38 End Send Data Child to Parent Component.
