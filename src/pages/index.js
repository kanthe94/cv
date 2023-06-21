import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Technical Writer',
    imageUrl: 'img/writer.png',
    description: (
      <>
        Prepared user manuals, maintained knowledge bases, documented software products, created videos, wrote FAQs, and proofread content. Well-versed in using various tools such as Google Docs, Snagit, Camtasia, Amazon Polly, and Git.
      </>
    ),
  },
  // {
  //   title: 'Software Engineer',
  //   imageUrl: 'img/engineer.png',
  //   description: (
  //     <>
  //       Worked closely over 4 years with companies such as TechMahindra, Vyom Labs, Clover Infotech, as well as clients ICICI Lombard and Wipro in insurance domain.
  //     </>
  //   ),
  // },
  {
    title: 'Classroom Trainer',
    imageUrl: 'img/trainer.png',
    description: (
      <>
        Training students for their board preparation and teaching them subjects like Maths and Science. Taught in coaching centres, gave online and in-person tutoring too.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/about')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        <div class="intro">
        <p class="intro__subtitle">Here are some of the roles that I have played in my career</p>
        </div>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
