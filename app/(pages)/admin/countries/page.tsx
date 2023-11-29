import db from '@/utils/db'
import CountryComponent from '@/app/components/Tables/CountryComponent'


export default async function Countries() {

  const getData = async () => {
    // await new Promise((resolve) => setTimeout(() => resolve(), 2000))
    const countries = await db.country.findMany({
      where: {},
    })
    return countries
  }
  const countries = await getData()

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Paises</div>
      <CountryComponent countries={countries} />

    </div>
  )
}
