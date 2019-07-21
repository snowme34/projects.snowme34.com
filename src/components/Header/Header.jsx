import React, {Component} from 'react'

import styles from './Header.css'

export default class Header extends Component {
	render() {
		return(
			<div>
				<div className={styles.header}>
					<a className={styles.profileLink} href="https://snowme34.com" target="_blank">snowme34</a>
				</div>
				<div className={styles.tagline}>
					A Student
				</div>
			</div>
		);
	}
}
