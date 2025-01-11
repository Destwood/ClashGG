import { toast } from 'react-toastify';
import { ToastPosition } from 'utils/enums';
import 'react-toastify/dist/ReactToastify.css';

export class ToastService {
	// Показати успішне повідомлення
	static success(message: string) {
		toast.success(message, {
			position: ToastPosition.topRight,
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
		});
	}

	static error(message?: string) {
		toast.success(message, {
			position: ToastPosition.topRight,
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
		});
	}
}
