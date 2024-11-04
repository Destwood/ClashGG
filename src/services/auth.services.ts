import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth();

export class Auth {
	static async login(email: string, password: string) {
		return signInWithEmailAndPassword(auth, email, password);
	}

	static async signUp(email: string, password: string) {
		return createUserWithEmailAndPassword(auth, email, password);
	}
}
