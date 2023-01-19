import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Reducing Downtime and Improving Performance with TheBugging",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        TheBugging allows developers to quickly identify and fix production
        bugs, reducing downtime and improving overall application performance.
      </>
    ),
  },
  {
    title: "Efficient Bug Resolution: TheBugging's Error Logging Capabilities",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        The platform's error logging capabilities provide detailed information
        about the source and nature of the bugs, making it easier for developers
        to pinpoint and resolve the issues.
      </>
    ),
  },
  {
    title:
      "Boosting Productivity with TheBugging's Production Bug Fixing Platform",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        By using TheBugging, developers can reduce the time and effort required
        to fix bugs in a production environment, ultimately increasing
        productivity and efficiency.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
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

export default function HomepageFeatures(): JSX.Element {
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
