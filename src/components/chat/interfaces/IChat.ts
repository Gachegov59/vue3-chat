import { IPagination } from '@/interfaces/IPagination';
import { IUser } from '@/interfaces/IUser';

export interface currentChatMessagesPagination extends IPagination {
	id: string;
}
export interface ICurrentChat {
	chatId: string;
	type: 'personal' | 'group';
	name: string;
	owner: {
		ownerId: string;
		name: string;
	};
	members: IUser[];
	isRead: boolean;
}

export interface IChatMessageItem {
	id: string;
	userId: string;
	type: 'text' | 'image' | 'audio' | 'video';
	content: string;
	date: string;
	isRead: boolean;
}

export interface IChatMessage {
	messageId: string;
	userId: string;
	userAvatar: string;
	isMine: boolean;
	date: string;
	messages: IChatMessageItem[];
}
