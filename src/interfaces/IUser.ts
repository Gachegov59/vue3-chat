export interface IUser {
	id: string;
	name: string;
	middleName?: string;
	surname: string;
	chats: [];
	status: boolean;
	photoId?: string;
	account: string;
}

export interface IBtnBase {
	text: string;
}

export enum IBtnColors {
	// eslint-disable-next-line no-unused-vars
	blue = 'blue',
	blueDark = 'blueDark'
}
