/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type {Props} from '@theme/DocItem';
import DocItemFooter from '@theme/DocItemFooter';
import DocPaginator from '@theme/DocPaginator';
import DocVersionBanner from '@theme/DocVersionBanner';
import {MainHeading} from '@theme/Heading';
import useWindowSize from '@theme/hooks/useWindowSize';
import Seo from '@theme/Seo';
import TOC from '@theme/TOC';

import {Comment} from '../../components'; // swizzled

import styles from './styles.module.scss';

import {ThemeClassNames} from '@docusaurus/theme-common';
import clsx from 'clsx';
import React from 'react';

export default function DocItem(props: Props): JSX.Element {
	const {content: DocContent, versionMetadata} = props;
	const {metadata, frontMatter} = DocContent;
	const {
		image,
		keywords,
		hide_title: hideTitle,
		hide_table_of_contents: hideTableOfContents,
	} = frontMatter;
	const {description, title} = metadata;

	// We only add a title if:
	// - user asks to hide it with frontmatter
	// - the markdown content does not already contain a top-level h1 heading
	const shouldAddTitle =
		!hideTitle && typeof DocContent.contentTitle === 'undefined';

	const windowSize = useWindowSize();

	const canRenderTOC =
		!hideTableOfContents && DocContent.toc && DocContent.toc.length > 0;

	const renderTocDesktop =
		canRenderTOC && (windowSize === 'desktop' || windowSize === 'ssr');

	return (
		<>
			<Seo {...{title, description, keywords, image}} />

			<div className="row">
				<div
					className={clsx('col', {
						[styles.docItemCol]: !hideTableOfContents,
					})}
				>
					<DocVersionBanner versionMetadata={versionMetadata} />
					<div className={styles.docItemContainer}>
						<article>
							{versionMetadata.badge && (
								<span
									className={clsx(
										ThemeClassNames.docs.docVersionBadge,
										'badge badge--secondary',
									)}
								>
									Version: {versionMetadata.label}
								</span>
							)}

							<div
								className={clsx(ThemeClassNames.docs.docMarkdown, 'markdown')}
							>
								{/*
                 Title can be declared inside md content or declared through frontmatter and added manually
                 To make both cases consistent, the added title is added under the same div.markdown block
                 See https://github.com/facebook/docusaurus/pull/4882#issuecomment-853021120
                 */}
								{shouldAddTitle && <MainHeading>{title}</MainHeading>}

								<DocContent />
							</div>

							<DocItemFooter {...props} />
						</article>

						<DocPaginator metadata={metadata} />
					</div>
					<Comment /> {/* swizzled */}
				</div>
				{renderTocDesktop && (
					<div className="col col--3">
						<TOC
							toc={DocContent.toc}
							className={ThemeClassNames.docs.docTocDesktop}
						/>
					</div>
				)}
			</div>
		</>
	);
}
