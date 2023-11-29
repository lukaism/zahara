import db from '@/utils/db'

const getData = async () => {
  // await new Promise((resolve) => setTimeout(() => resolve(), 2000))
  const users = await db.user.findMany({
    where: {},
  })

  return users
}

export default async function Meals() {
  const users = await getData()

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Meals</div>
    </div>
  )
}
