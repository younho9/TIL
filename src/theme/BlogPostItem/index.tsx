/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment'; // swizzled
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import {useBaseUrlUtils} from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'; // swizzled
import BlogPostAuthors from '@theme/BlogPostAuthors';
import type {Props} from '@theme/BlogPostItem';
import EditThisPage from '@theme/EditThisPage';
import MDXComponents from '@theme/MDXComponents';
import TagsListInline from '@theme/TagsListInline';

import {ShareThisPage} from '../../components'; // swizzled

import styles from './styles.module.scss';

import {usePluralForm} from '@docusaurus/theme-common';
import {MDXProvider} from '@mdx-js/react';
import clsx from 'clsx';
import React from 'react';

// Very simple pluralization: probably good enough for now
function useReadingTimePlural() {
	const {selectMessage} = usePluralForm();
	return (readingTimeFloat: number) => {
		const readingTime = Math.ceil(readingTimeFloat);
		return selectMessage(
			readingTime,
			translate(
				{
					id: 'theme.blog.post.readingTime.plurals',
					description:
						'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',
					message: 'One min read|{readingTime} min read',
				},
				{readingTime},
			),
		);
	};
}

function BlogPostItem(props: Props): JSX.Element {
	const readingTimePlural = useReadingTimePlural();
	const {withBaseUrl} = useBaseUrlUtils();
	const {
		children,
		frontMatter,
		assets,
		metadata,
		truncated,
		isBlogPostPage = false,
	} = props;
	const {
		date,
		formattedDate,
		permalink,
		tags,
		readingTime,
		title,
		editUrl,
		authors,
	} = metadata;

	const image = assets.image ?? frontMatter.image;

	const location = ExecutionEnvironment.canUseDOM ? window.location : null; // swizzled
	const context = useDocusaurusContext(); // swizzled
	const {siteConfig} = context; // swizzled
	const url = location && `${siteConfig.url}/${location.pathname}`; // swizzled
	const shareData = {url, title}; // swizzled

	const renderPostHeader = () => {
		const TitleHeading = isBlogPostPage ? 'h1' : 'h2';

		return (
			<header>
				<TitleHeading className={styles.blogPostTitle} itemProp="headline">
					{isBlogPostPage ? (
						title
					) : (
						<Link itemProp="url" to={permalink}>
							{title}
						</Link>
					)}
				</TitleHeading>
				<div className={clsx(styles.blogPostData, 'margin-vert--md')}>
					<time dateTime={date} itemProp="datePublished">
						{formattedDate}
					</time>

					{typeof readingTime !== 'undefined' && (
						<>
							{' · '}
							{readingTimePlural(readingTime)}
						</>
					)}
				</div>
				<BlogPostAuthors authors={authors} assets={assets} />
			</header>
		);
	};

	return (
		<article
			className={!isBlogPostPage ? 'margin-bottom--xl' : undefined}
			itemProp="blogPost"
			itemScope
			itemType="http://schema.org/BlogPosting"
		>
			{renderPostHeader()}

			{image && (
				<meta itemProp="image" content={withBaseUrl(image, {absolute: true})} />
			)}

			<div className="markdown" itemProp="articleBody">
				<MDXProvider components={MDXComponents}>{children}</MDXProvider>
			</div>

			{(tags.length > 0 || truncated) && (
				<footer
					className={clsx('row docusaurus-mt-lg', {
						[styles.blogPostDetailsFull]: isBlogPostPage,
					})}
				>
					{tags.length > 0 && (
						<div className={clsx('col', {'col--9': !isBlogPostPage})}>
							<TagsListInline tags={tags} />
						</div>
					)}

					{isBlogPostPage && editUrl && (
						<div
							className={clsx(
								'col',
								'margin-top--sm',
								styles.pageActionWrapper,
							)}
						>
							<EditThisPage editUrl={editUrl} />
							{/* swizzled */}
							{url && navigator.share && <ShareThisPage data={shareData} />}
						</div>
					)}

					{!isBlogPostPage && truncated && (
						<div className="col col--3 text--right">
							<Link
								to={metadata.permalink}
								aria-label={`Read more about ${title}`}
							>
								<b>
									<Translate
										id="theme.blog.post.readMore"
										description="The label used in blog post item excerpts to link to full blog posts"
									>
										Read More
									</Translate>
								</b>
							</Link>
						</div>
					)}
				</footer>
			)}
		</article>
	);
}

export default BlogPostItem;
