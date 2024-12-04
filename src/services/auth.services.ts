import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from 'services/firebase.services';

export class Auth {
	static async login(email: string, password: string) {
		return signInWithEmailAndPassword(auth, email, password);
	}

	static async signUp(email: string, password: string) {
		return createUserWithEmailAndPassword(auth, email, password);
	}

	static restoreSession = (callback: (user: any | null) => void) => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				user.getIdToken().then((token) => {
					callback({
						token,
						username: user.displayName,
						email: user.email,
						uid: user.uid,
					});
				});
			} else {
				callback(null);
			}
		});
	};
}
