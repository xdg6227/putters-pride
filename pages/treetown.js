import styles from '@/styles/Parties.module.css';
import PPHeader from '@/public/javascript/header';

export default function Treetown() {
  return (
    <>
      <PPHeader title="Treetown" />
      <main className={`${styles.main}`}>
        <div className={styles.home}>
          <h1>Treetown 2023</h1>
          <p>Welcome to Treetown 2023 here at Putters Pride! This page will be updated in late November when it is closer to Christmas. Have a jolly good summer :)</p>
        </div>
      </main>
    </>
  )
};