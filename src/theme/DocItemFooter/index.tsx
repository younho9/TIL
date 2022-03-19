/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment'; // swizzled
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'; // swizzled
import type {Props} from '@theme/DocItem';
import EditThisPage from '@theme/EditThisPage';
import LastUpdated from '@theme/LastUpdated';
import TagsListInline, {
	Props as TagsListInlineProps,
} from '@theme/TagsListInline';

import {ShareThisPage} from '../../components'; // swizzled

import styles from './styles.module.scss';

import {ThemeClassNames} from '@docusaurus/theme-common';
import clsx from 'clsx';
import React from 'react';

function TagsRow(props: TagsListInlineProps) {
	return (
		<div
			className={clsx(
				ThemeClassNames.docs.docFooterTagsRow,
				'row margin-bottom--sm',
			)}
		>
			<div className="col">
				<TagsListInline {...props} />
			</div>
		</div>
	);
}

type EditMetaRowProps = Pick<
	Props['content']['metadata'],
	'editUrl' | 'lastUpdatedAt' | 'lastUpdatedBy' | 'formattedLastUpdatedAt'
>;
function EditMetaRow({
	title, // swizzled
	editUrl,
	lastUpdatedAt,
	lastUpdatedBy,
	formattedLastUpdatedAt,
}: {
	title: string; // swizzled
} & EditMetaRowProps) {
	const location = ExecutionEnvironment.canUseDOM ? window.location : null; // swizzled
	const context = useDocusaurusContext(); // swizzled
	const {siteConfig} = context; // swizzled
	const url = location && `${siteConfig.url}/${location.pathname}`; // swizzled
	const shareData = {url, title}; // swizzled

	return (
		<div className={clsx(ThemeClassNames.docs.docFooterEditMetaRow, 'row')}>
			{/* swizzled */}
			<div className={clsx('col', styles.pageActionWrapper)}>
				{editUrl && <EditThisPage editUrl={editUrl} />}
				{/* swizzled */}
				{url && navigator.share && <ShareThisPage data={shareData} />}
			</div>

			<div className={clsx('col', styles.lastUpdated)}>
				{(lastUpdatedAt || lastUpdatedBy) && (
					<LastUpdated
						lastUpdatedAt={lastUpdatedAt}
						formattedLastUpdatedAt={formattedLastUpdatedAt}
						lastUpdatedBy={lastUpdatedBy}
					/>
				)}
			</div>
		</div>
	);
}

export default function DocItemFooter(props: Props): JSX.Element {
	const {content: DocContent} = props;
	const {metadata} = DocContent;
	const {
		title, // swizzled
		editUrl,
		lastUpdatedAt,
		formattedLastUpdatedAt,
		lastUpdatedBy,
		tags,
	} = metadata;

	const canDisplayTagsRow = tags.length > 0;
	const canDisplayEditMetaRow = !!(editUrl || lastUpdatedAt || lastUpdatedBy);

	const canDisplayFooter = canDisplayTagsRow || canDisplayEditMetaRow;

	if (!canDisplayFooter) {
		return <></>;
	}

	return (
		<footer
			className={clsx(ThemeClassNames.docs.docFooter, 'docusaurus-mt-lg')}
		>
			{canDisplayTagsRow && <TagsRow tags={tags} />}
			{canDisplayEditMetaRow && (
				<EditMetaRow
					title={title} // swizzled
					editUrl={editUrl}
					lastUpdatedAt={lastUpdatedAt}
					lastUpdatedBy={lastUpdatedBy}
					formattedLastUpdatedAt={formattedLastUpdatedAt}
				/>
			)}
		</footer>
	);
}
