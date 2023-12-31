import React from 'react'

interface User {
  id: number;
  name: string;
  email: string;
}

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", { next: { revalidate: 10 }}); // get fresh data every 10 sec. { cache: "no-store" } || { next: { revalidate: 10 } }
  const users: User[] = await res.json();

  // if {cache:"no-store"} is used on time, the time changes every time you refresh. 
  // if {next:{revalidate:10}} is used on time, the time is rendered only the first time and never changes again.

  return (
    <>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <table className="table table-zebra w-[200px]">
        <thead>
          <tr>
            <th>
              Name
            </th>
            <th>
              Email
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => <tr key={user.id}>
            <th>{user.name}</th>
            <th>{user.email}</th>
          </tr>)}
        </tbody>
      </table>
    </>
  )
}

export default UsersPage