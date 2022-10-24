import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_easy.svg').default,
    description: <>Get all your lecture notes here.</>,
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/focus.svg').default,
    description: (
      <>
        Focus on <code>understanding</code> the concept.
      </>
    ),
  },
  {
    title: 'Achieve Excellence',
    Svg: require('@site/static/img/undraw_doctors.svg').default,
    description: <>Improve your grades.</>,
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
