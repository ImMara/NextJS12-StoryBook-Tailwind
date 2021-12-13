import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import PageBuilder from "../components/PageBuilder";

export default function Home() {
  return (
    <div className={styles.container}>
        <PageBuilder/>
    </div>
  )
}
