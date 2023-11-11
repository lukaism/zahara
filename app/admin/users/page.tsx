import db from '@/utils/db'
import AddUserButton from '@/app/components/AddUserButton'

const getData = async () => {
  // await new Promise((resolve) => setTimeout(() => resolve(), 2000))
  const users = await db.user.findMany({
    where: {},
  })

  return users
}

export default async function Users() {
  const users = await getData()

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>User Management</div>
      {users && users.map(user => {
        return (
          <div>{user.name} {user.role}</div>
        )
      })}
      <AddUserButton />
    </div>
  )
}
