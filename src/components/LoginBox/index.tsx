import styles from "./style.module.scss";
import { VscGithubInverted } from "react-icons/vsc";

export function LoginBox() {
	return (
		<div className={styles.loginBoxWrapper}>
			<strong>Entre e compartilhe sua menssagem</strong>
			<a href="#" className={styles.signInWithGithub}>
				<VscGithubInverted size="24" />
				Entrar com Github
			</a>
		</div>
	);
}
