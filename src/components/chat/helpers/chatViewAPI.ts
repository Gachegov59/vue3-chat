import { IChatMessage, ICurrentChat } from '@/components/chat/interfaces/IChat';

export const chatMessagesAPI: IChatMessage[] = [
	{
		messageId: '14123edasd',
		userId: '126123edasd',
		userAvatar: 'avatar-default_1.png',
		isMine: false,
		date: 'Sat Jan 17 2024 15:36:16 GMT+0200',
		messages: [
			{
				id: '123123edasd',
				userId: '123123edasd',
				type: 'text',
				content: 'все ок',
				date: 'Sat Jan 17 2024 10:36:16 GMT+0200',
				isRead: true
			},
			{
				id: '123123edasd',
				userId: '123123edasd',
				type: 'text',
				content: 'Что нового у тебя?',
				date: 'Sat Jan 20 2024 10:36:16 GMT+0200',
				isRead: true
			},
			{
				id: '123123edasd',
				userId: '123123edasd',
				type: 'text',
				content: 'Ты тут?',
				date: 'Sat Jan 20 2024 10:46:16 GMT+0200',
				isRead: false
			},
			{
				id: '123123edasd',
				userId: '123123edasd',
				type: 'text',
				content: 'Привет, как дела?',
				date: 'Sat Jan 20 2024 10:56:16 GMT+0200',
				isRead: false
			},
			{
				id: '123123edasd',
				userId: '123123edasd',
				type: 'text',
				content: 'Я вот думаю, может сходим в кино?',
				date: 'Sat Jan 20 2024 11:06:16 GMT+0200',
				isRead: false
			},
			{
				id: '123123edasd',
				userId: '123123edasd',
				type: 'image',
				content: 'movie-poster_1.png',
				date: 'Sat Jan 20 2024 11:16:16 GMT+0200',
				isRead: false
			},
			{
				id: '123123edasd',
				userId: '123123edasd',
				type: 'text',
				content: 'Этот фильм выглядит интересным, ты не смотришь?',
				date: 'Sat Jan 20 2024 11:26:16 GMT+0200',
				isRead: false
			},
			{
				id: '12612423edasd',
				userId: '12612423edasd',
				type: 'text',
				content: 'Привет, извини, что не отвечал. Был занят.',
				date: 'Sat Jan 20 2024 11:36:16 GMT+0200',
				isRead: true
			},
			{
				id: '12612423edasd',
				userId: '12612423edasd',
				type: 'text',
				content: 'У меня все хорошо, спасибо за интерес.',
				date: 'Sat Jan 20 2024 11:46:16 GMT+0200',
				isRead: true
			},
			{
				id: '12612423edasd',
				userId: '12612423edasd',
				type: 'text',
				content: 'В кино я не хожу, не люблю толпы.',
				date: 'Sat Jan 20 2024 11:56:16 GMT+0200',
				isRead: true
			},
			{
				id: '12612423edasd',
				userId: '12612423edasd',
				type: 'text',
				content: 'А ты что любишь делать в свободное время?',
				date: 'Sat Jan 20 2024 12:06:16 GMT+0200',
				isRead: true
			},
			{
				id: '123123edasd',
				userId: '123123edasd',
				type: 'text',
				content: 'Я люблю читать книги, слушать музыку, играть в видеоигры.',
				date: 'Sat Jan 20 2024 12:16:16 GMT+0200',
				isRead: false
			},
			{
				id: '123123edasd',
				userId: '123123edasd',
				type: 'image',
				content: 'book-cover_1.png',
				date: 'Sat Jan 20 2024 12:26:16 GMT+0200',
				isRead: false
			},
			{
				id: '123123edasd',
				userId: '123123edasd',
				type: 'text',
				content: 'Это моя любимая книга, ты читал?',
				date: 'Sat Jan 20 2024 12:36:16 GMT+0200',
				isRead: false
			},
			{
				id: '12612423edasd',
				userId: '12612423edasd',
				type: 'text',
				content: 'Нет, я не читал. О чем она?',
				date: 'Sat Jan 20 2024 12:46:16 GMT+0200',
				isRead: true
			},
			{
				id: '123123edasd',
				userId: '123123edasd',
				type: 'text',
				content:
					'Она о приключениях молодого волшебника, который узнает, что он избранный, чтобы победить злого лорда.',
				date: 'Sat Jan 20 2024 12:56:16 GMT+0200',
				isRead: false
			},
			{
				id: '12612423edasd',
				userId: '12612423edasd',
				type: 'text',
				content: 'Звучит знакомо. Это Гарри Поттер?',
				date: 'Sat Jan 20 2024 13:06:16 GMT+0200',
				isRead: true
			},
			{
				id: '123123edasd',
				userId: '123123edasd',
				type: 'text',
				content: 'Да, это Гарри Поттер. Ты не любишь эту серию?',
				date: 'Sat Jan 20 2024 13:16:16 GMT+0200',
				isRead: false
			},
			{
				id: '12612423edasd',
				userId: '12612423edasd',
				type: 'text',
				content: 'Я не против, но я предпочитаю более реалистичную литературу.',
				date: 'Sat Jan 20 2024 13:26:16 GMT+0200',
				isRead: true
			},
			{
				id: '12612423edasd',
				userId: '12612423edasd',
				type: 'image',
				content: 'book-cover_2.png',
				date: 'Sat Jan 20 2024 13:36:16 GMT+0200',
				isRead: true
			},
			{
				id: '12612423edasd',
				userId: '12612423edasd',
				type: 'text',
				content: 'Это моя любимая книга, ты читал?',
				date: 'Sat Jan 20 2024 13:46:16 GMT+0200',
				isRead: true
			},
			{
				id: '123123edasd',
				userId: '123123edasd',
				type: 'text',
				content: 'Нет, я не читал. О чем она?',
				date: 'Sat Jan 20 2024 13:56:16 GMT+0200',
				isRead: false
			},
			{
				id: '12612423edasd',
				userId: '12612423edasd',
				type: 'text',
				content: 'Она о жизни и смерти, о любви и ненависти, о войне и мире, о смысле бытия.',
				date: 'Sat Jan 20 2024 14:06:16 GMT+0200',
				isRead: false
			}
		]
	},
	{
		messageId: '1467123edasd',
		userId: '12612423edasd',
		isMine: true,
		userAvatar: 'avatar-default_2.png',
		date: 'Sat Jan 17 2024 10:36:16 GMT+0200',
		messages: [
			{
				id: '12612423edasd',
				userId: '12612423edasd',
				type: 'text',
				content: 'Привет, извини, что не отвечал. Был занят.',
				date: 'Sat Jan 20 2024 11:36:16 GMT+0200',
				isRead: true
			},
			{
				id: '12612423edasd',
				userId: '12612423edasd',
				type: 'text',
				content: 'У меня все хорошо, спасибо за интерес.',
				date: 'Sat Jan 20 2024 11:46:16 GMT+0200',
				isRead: true
			},
			{
				id: '12612423edasd',
				userId: '12612423edasd',
				type: 'text',
				content: 'В кино я не хожу, не люблю толпы.',
				date: 'Sat Jan 20 2024 11:56:16 GMT+0200',
				isRead: true
			},
			{
				id: '12612423edasd',
				userId: '12612423edasd',
				type: 'text',
				content: 'А ты что любишь делать в свободное время?',
				date: 'Sat Jan 20 2024 12:06:16 GMT+0200',
				isRead: true
			},
			{
				id: '12612423edasd',
				userId: '12612423edasd',
				type: 'image',
				content: 'book-cover_2.png',
				date: 'Sat Jan 20 2024 12:16:16 GMT+0200',
				isRead: true
			},
			{
				id: '12612423edasd',
				userId: '12612423edasd',
				type: 'text',
				content: 'Это моя любимая книга, ты читал?',
				date: 'Sat Jan 20 2024 12:26:16 GMT+0200',
				isRead: true
			},
			{
				id: '12612423edasd',
				userId: '12612423edasd',
				type: 'text',
				content: 'Она о жизни и смерти, о любви и ненависти, о войне и мире, о смысле бытия.',
				date: 'Sat Jan 20 2024 12:36:16 GMT+0200',
				isRead: true
			},
			{
				id: '12612423edasd',
				userId: '12612423edasd',
				type: 'image',
				content: 'book-cover_3.png',
				date: 'Sat Jan 20 2024 12:46:16 GMT+0200',
				isRead: true
			},
			{
				id: '12612423edasd',
				userId: '12612423edasd',
				type: 'text',
				content: 'А это еще одна моя любимая книга, ты читал?',
				date: 'Sat Jan 20 2024 12:56:16 GMT+0200',
				isRead: true
			},
			{
				id: '12612423edasd',
				userId: '12612423edasd',
				type: 'text',
				content: 'Она о путешествии во времени, о том, как одно решение может изменить все.',
				date: 'Sat Jan 20 2024 13:06:16 GMT+0200',
				isRead: true
			},
			{
				id: '123123edasd',
				userId: '123123edasd',
				type: 'text',
				content: 'Привет, я тут. Извини, что не отвечал. Был занят.',
				date: 'Sat Jan 20 2024 13:16:16 GMT+0200',
				isRead: false
			},
			{
				id: '123123edasd',
				userId: '123123edasd',
				type: 'text',
				content: 'У меня все хорошо, спасибо за интерес.',
				date: 'Sat Jan 20 2024 13:26:16 GMT+0200',
				isRead: false
			},
			{
				id: '123123edasd',
				userId: '123123edasd',
				type: 'text',
				content: 'В кино я не хожу, не люблю толпы.',
				date: 'Sat Jan 20 2024 13:36:16 GMT+0200',
				isRead: false
			},
			{
				id: '123123edasd',
				userId: '123123edasd',
				type: 'text',
				content: 'А ты что любишь делать в свободное время?',
				date: 'Sat Jan 20 2024 13:46:16 GMT+0200',
				isRead: false
			},
			{
				id: '123123edasd',
				userId: '123123edasd',
				type: 'image',
				content: 'book-cover_1.png',
				date: 'Sat Jan 20 2024 13:56:16 GMT+0200',
				isRead: false
			},
			{
				id: '123123edasd',
				userId: '123123edasd',
				type: 'text',
				content: 'Это моя любимая книга, ты читал?',
				date: 'Sat Jan 20 2024 14:06:16 GMT+0200',
				isRead: false
			},
			{
				id: '123123edasd',
				userId: '123123edasd',
				type: 'text',
				content:
					'Она о приключениях молодого волшебника, который узнает, что он избранный, чтобы победить злого лорда.',
				date: 'Sat Jan 20 2024 14:16:16 GMT+0200',
				isRead: false
			},
			{
				id: '123123edasd',
				userId: '123123edasd',
				type: 'image',
				content: 'book-cover_4.png',
				date: 'Sat Jan 20 2024 14:26:16 GMT+0200',
				isRead: false
			},
			{
				id: '123123edasd',
				userId: '123123edasd',
				type: 'text',
				content: 'А это еще одна моя любимая книга, ты читал?',
				date: 'Sat Jan 20 2024 14:36:16 GMT+0200',
				isRead: false
			},
			{
				id: '123123edasd',
				userId: '123123edasd',
				type: 'text',
				content: 'Она о фантастическом мире, где люди делятся на фракции по своим характеристикам.',
				date: 'Sat Jan 20 2024 14:46:16 GMT+0200',
				isRead: false
			},
			{
				id: '12612423edasd',
				userId: '12612423edasd',
				type: 'text',
				content: 'Привет, я тут. Извини, что не отвечал. Был занят.',
				date: 'Sat Jan 20 2024 14:56:16 GMT+0200',
				isRead: true
			},
			{
				id: '12612423edasd',
				userId: '12612423edasd',
				type: 'text',
				content: 'У меня все хорошо, спасибо за интерес.',
				date: 'Sat Jan 20 2024 15:06:16 GMT+0200',
				isRead: true
			}
		]
	}
];

export const currentChatAPI: ICurrentChat = {
	chatId: '254424131',
	type: 'personal',
	name: 'Петя',
	owner: {
		ownerId: '123123edasd34',
		name: 'Петя'
	},
	members: [
		{
			id: '123123edasd34',
			name: 'Петя',
			surname: 'Петров',
			role: 'owner',
			status: true
		}
	],
	isRead: true
};
