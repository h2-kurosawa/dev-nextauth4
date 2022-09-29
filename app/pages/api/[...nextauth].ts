import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
	],
	callbacks: {
		async signIn({ account, profile }) {
			if (
				account.provider === 'google' &&
				profile.email_verified &&
				profile.email.endsWith(process.env.PX_DOMAIN)
			) {
				return true
			} else {
				return false
			}
		},
		// session
		// セッションがチェックされるたびに呼び出されます。デフォルトでは、セキュリティを強化するために、トークンのサブセットのみが返されます。
		async session({ session, token, user }) {
			console.log(session, token, user)
			return session
		},
	},
})
