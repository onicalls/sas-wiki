import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Experiencia Semi Vanilla',
    Svg: require('@site/static/img/sas_logo.png').default,
    description: (
      <>
        Juega en un server lleno de nuevos objetos, mundos y mecánicas sin la necesidad de instalar mods.
      </>
    ),
  },
  {
    title: 'Experiencia RPG',
    Svg: require('@site/static/img/sas_logo.png').default,
    description: (
      <>
        Aprende habilidades que te permitirán desbloquear crafteos únicos para progresar en tu aventura.
      </>
    ),
  },
  {
    title: 'Sistema de Towny',
    Svg: require('@site/static/img/sas_logo.png').default,
    description: (
      <>
        Plugin perfecto para proteger tus construcciones y crear tu propio pueblo. Juega en comunidad con el resto de jugadores.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Svg} className={styles.featureSvg} alt="" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
