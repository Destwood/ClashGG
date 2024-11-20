import { doc, getDoc, setDoc } from 'firebase/firestore';
import { firestore } from 'services/firebase.services';

export class UserService {
	static async createUserProfile(uid: string, userInfo: Record<string, any>) {
		const userRef = doc(firestore, 'users', uid);
		await setDoc(userRef, userInfo);
	}

	static async getUserProfile(uid: string): Promise<Record<string, any> | null> {
		const userRef = doc(firestore, 'users', uid);
		const userDoc = await getDoc(userRef);
		if (userDoc.exists()) {
			return userDoc.data();
		}
		console.error(`User profile for UID ${uid} not found`);
		return null;
	}
}
