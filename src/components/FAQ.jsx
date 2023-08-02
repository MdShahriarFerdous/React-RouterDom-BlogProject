import React, { useState } from "react";
import { BiCaretDown, BiCaretUp } from "react-icons/bi";

import styles from "./FAQ.module.css";

const FAQ = ({ title, body, index }) => {
	const [toggle, setToggle] = useState(false);
	return (
		<article
			className={`${styles.faqdiv} ${toggle ? styles.item : ""}`}
			onClick={() => {
				setToggle((prevValue) => {
					return !prevValue;
				});
			}}
		>
			<div className={styles.faqheading}>
				<h4>
					<span>
						{index < 9 ? `0${index + 1}.` : `${index + 1}.`}
					</span>
					{title}
				</h4>
				{toggle ? (
					<BiCaretUp className={styles.icon} />
				) : (
					<BiCaretDown className={styles.icon} />
				)}
			</div>

			{toggle && <p className={styles.desc}>{body}</p>}
		</article>
	);
};

export default FAQ;
