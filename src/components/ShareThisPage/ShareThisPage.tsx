/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Translate from '@docusaurus/Translate';

import styles from './styles.module.scss';

import clsx from 'clsx';
import React from 'react';
import {IoShareOutline} from 'react-icons/io5';

interface Props {
	data: {
		url: string;
		title: string;
		text?: string;
	};
}

export default function ShareThisPage({data}: Props): JSX.Element {
	const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
		e.preventDefault();

		if (navigator.share) {
			void navigator.share(data);
		}
	};

	return (
		// eslint-disable-next-line jsx-a11y/anchor-is-valid
		<a href="#" target="_blank" rel="noreferrer noopener" onClick={handleClick}>
			<IoShareOutline size={20} className={clsx(styles.iconShare)} />
			<Translate description="The link label to share the current page">
				Share this page
			</Translate>
		</a>
	);
}
