/* eslint-disable import/no-unresolved */
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import { useEffect } from 'react';
import HomepageFeatures from '../components/HomepageFeatures';
import { loadAds } from '../custom-content';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className={styles.tryButton + ' button button--secondary button--lg'}
            href="pathname:///../"
          >
            شروع کد نویسی ⚡
          </Link>
        </div>
        <div dir='rtl' className={styles.description}>
          محیط کد نویسی آزاد و رایگان <strong>تماما تحت وب و بدون نیاز به نصب،</strong> یک زمین بازی که
          <br />
           از فریمورک ها و زبان های  React, Vue, Svelte, Solid,
          Typescript, Python, Go, Ruby, PHP پشتیبانی می کند
          .
        </div>
        <div className={styles.eaHomepage}>
          <div
            className="flat"
            data-ea-publisher="livecodesio"
            data-ea-type="text"
            data-ea-manual="true"
          ></div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  useEffect(() => {
    loadAds();
  }, []);

  return (
    <Layout description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
