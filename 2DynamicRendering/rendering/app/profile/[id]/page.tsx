export default async  function idUserProfilePage ({params} : {params: Promise<{id: string}>}) {
    const {id} = await params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await res.json();
    if(!res.ok) {
        return <div>User not found</div>
    }
    return (
        <div>
            <h1>User Profile</h1>
            <p>Name: {user.name}</p>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
        </div>
    )
}