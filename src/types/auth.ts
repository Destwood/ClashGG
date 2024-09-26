import { Auth } from 'utils/enums';

export interface ModalState {
	typeOfModal: Auth.signUp | Auth.logIn;
}
