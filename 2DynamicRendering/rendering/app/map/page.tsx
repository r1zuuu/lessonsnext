export default function Page(){
    const Users = [
        {id: 1, name: "Jan Kowalski"},
        {id: 2, name: "Anna Nowak"},
        {id: 3, name: "Piotr Wiśniewski"}
    ]
    return (
        <div>
            {Users.map(user => (
                <div key={user.id}>{user.name}</div>
            ))}
        </div>
    )
}