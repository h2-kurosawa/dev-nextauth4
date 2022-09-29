import { useSession, signIn, signOut } from 'next-auth/react'

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

/**
 * とりあえずログイン
 * @see  https://zenn.dev/happy663/articles/30dc517646653c
 */

export default function Home() {
	//session情報を呼び出す
	const { data: session } = useSession()

	//sessionがあればログイン状態
	if (session) {
		return (
			<>
				Signed in as {session.user.email}
				<button onClick={() => signOut()}>Sign out</button>
			</>
		)
	} else {
		return (
			<>
				Not signed in <br />
				<button onClick={() => signIn()}>Sign in</button>
			</>
		)
	}
}
