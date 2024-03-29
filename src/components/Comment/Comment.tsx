import useThemeContext from '@theme/hooks/useThemeContext';

import React from 'react';

const utterancesSelector = 'iframe.utterances-frame';

function Comment(): JSX.Element {
	const {isDarkTheme} = useThemeContext();
	const utterancesTheme = isDarkTheme ? 'github-dark' : 'github-light';
	const containerRef = React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {
		const utterancesEl =
			containerRef.current.querySelector<HTMLIFrameElement>(utterancesSelector);

		const createUtterancesEl = () => {
			const script = document.createElement('script');

			script.src = 'https://utteranc.es/client.js';
			script.setAttribute('repo', 'younho9/TIL');
			script.setAttribute('issue-term', 'title');
			script.setAttribute('label', 'comment');
			script.setAttribute('theme', utterancesTheme);
			script.crossOrigin = 'anonymous';
			script.async = true;

			containerRef.current.appendChild(script);
		};

		const postThemeMessage = () => {
			const message = {
				type: 'set-theme',
				theme: utterancesTheme,
			};

			utterancesEl.contentWindow.postMessage(message, 'https://utteranc.es');
		};

		utterancesEl ? postThemeMessage() : createUtterancesEl();
	}, [utterancesTheme]);

	return <div ref={containerRef} />;
}

export default Comment;
