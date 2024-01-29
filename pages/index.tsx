import Head from "next/head";
import { useEffect, useState } from "react";

// export const getServerSideProps = async () => {
//   const res = await fetch(`http://localhost:3002/api/date`)
//   const data = await res.json()
//   return { props: { dateStringSSR: data.date } }
// }

export const getStaticProps = async () => {
  const res = await fetch(`http://localhost:3002/api/date`)
  const data = await res.json()
  return { props: { dateStringSSG: data.date } }
}

interface HomeProps {
  // dateStringSSR: string,
  dateStringSSG: string
}

export default function Home(props : HomeProps) {
  const [date, setDate] = useState<Date | null>(null)

  useEffect(() => {
    setInterval(() => {
      setDate(new Date())
    }, 1000)
  }, [])

  return (
    <>
      <Head>
        <title>Camille</title>
      </Head>
      <main>
        <h1>{date && date.toISOString()}</h1>
        <p>{props.dateStringSSG}</p>
      </main>
    </>
  )
}