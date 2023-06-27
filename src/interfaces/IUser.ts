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
