import Head from "next/head";
import { useEffect, useState } from "react";

export const getServerSideProps = () => {
  return { props: { dateStringSSR: new Date().toISOString() } }
}

// export const getStaticProps = () => {
//   return { props: { dateStringSSG: new Date().toISOString() } }
// }

interface HomeProps {
  dateStringSSR: string,
  // dateStringSSG: string
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
        <p>{props.dateStringSSR}</p>
      </main>
    </>
  )
}