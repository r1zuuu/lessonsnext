'use client'

import { Suspense, useEffect, useState } from "react";

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

export default function ProfilePage() {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => { //mock fetching z api 
        fetch('/api/user')
            .then(res => res.json())
            .then(data => {
                setUser(data);
                setLoading(false)
      })
  }, [])

  if (loading) {
    return <Suspense fallback={<div>Loading...</div>} />
  }
  if (!user) {
    return <Suspense fallback={<div>User not found</div>} />
  }
  return (
    <div>
      <h1>Profile Page</h1>
      <p>Name: {user.name}</p>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
    </div>
  )
}