import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.scss';

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;

  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <img
            alt={'Today I Learned'}
            className={styles.heroLogo}
            src={useBaseUrl('/img/undraw_developer_activity.svg')}
            width={600}
          />
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>

          <div className={styles.buttons}>
            <Link className={styles.getStarted} to={useBaseUrl('log/2021/')}>
              Get Started
            </Link>
          </div>
          <div className={styles.githubButtonWrapper}>
            <iframe
              className={styles.githubButton}
              src="https://ghbtns.com/github-btn.html?user=younho9&amp;repo=til&amp;type=star&amp;count=true&amp;size=large"
              width={120}
              height={30}
              title="GitHub Stars"
            />
          </div>
        </div>
      </header>
    </Layout>
  );
}

export default Home;
