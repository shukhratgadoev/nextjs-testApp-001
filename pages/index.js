import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchposts } from '../store/actions/postAction'

export default function Home() {

	const dispatch = useDispatch()
	const { posts } = useSelector(state => state.post)

	useEffect(() => {
		dispatch(fetchposts())
	}, [])

	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					Welcome to <a href="https://nextjs.org">Next.js!</a>
				</h1>

				{
					posts && posts.map((item) => (
						<li key={item.id}>
							<h2>{item.title}</h2>
							<p>{item.body}</p>
						</li>
					))
				}


			</main>

			<footer className={styles.footer}>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by{' '}
					<img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
				</a>
			</footer>
		</div>
	)
}
