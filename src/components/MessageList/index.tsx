import { useEffect, useState } from "react";
import { api } from "../../services/api";

import logoImg from "../../assets/logo.svg";

import styles from "./style.module.scss";

interface Message {
	id: string;
	text: string;
	user: {
		name: string;
		avatar_url: string;
	};
}

export function MessageList() {
	const [messages, setMessages] = useState<Message[]>([]);
	useEffect(() => {
		async function loadMessages() {
			const { data } = await api.get<Message[]>("/message/last3");
			setMessages(data);
		}
		loadMessages();
	}, []);
	return (
		<div className={styles.messageListWrapper}>
			<img src={logoImg} alt="DoWhile 2021" />
			<ul className={styles.messageList}>
				{messages.map((message) => (
					<li className={styles.message} key={message.id}>
						<p className={styles.messageItem}>{message.text}</p>
						<div className={styles.messageUser}>
							<div className={styles.userImage}>
								<img src={message.user.avatar_url} alt={message.user.name} />
							</div>
							<span>{message.user.name}</span>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}
