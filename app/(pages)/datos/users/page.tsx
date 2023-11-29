import db from '@/utils/db'
import AddUserButton from '@/app/components/Forms/UserForms/AddUserForm'
import AtendantsComponent from '@/app/components/Tables/AtendantsComponent'

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
    <div className="flex  flex-col items-center justify-between p-5">
      <h2 className='mb-10'>Gestion de Asistentes</h2>
      <AtendantsComponent users={users} />
    </div>
  )
}
