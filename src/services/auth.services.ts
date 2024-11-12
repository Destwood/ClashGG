import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from 'services/firebase.services';

export class Auth {
	static async login(email: string, password: string) {
		return signInWithEmailAndPassword(auth, email, password);
	}

	static async signUp(email: string, password: string) {
		return createUserWithEmailAndPassword(auth, email, password);
	}
}
