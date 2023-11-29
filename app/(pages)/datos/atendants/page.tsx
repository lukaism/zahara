import db from '@/utils/db'
import AddUserButton from '@/app/components/Forms/UserForms/AddUserForm'
import AtendantsComponent from '@/app/components/Tables/AtendantsComponent'

const getData = async () => {
  // await new Promise((resolve) => setTimeout(() => resolve(), 2000))
  const atendants = await db.user.findMany({
    where: {},
  })
  return atendants
}

export default async function Atendants() {
  const atendants = await getData()

  return (
    <div className="flex  flex-col items-center justify-between p-5">
      <h2 className='mb-10'>Gestion de Asistentes</h2>
      <AtendantsComponent users={atendants} />
    </div>
  )
}
