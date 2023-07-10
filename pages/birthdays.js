import styles from '@/styles/Parties.module.css';
import PPHeader from '@/public/javascript/header';

export default function Birthdays() {
  return (
    <>
      <PPHeader title="Birthdays" />
      <main className={`${styles.main}`}>
        <div className={styles.home}>
          <h1>Birthdays</h1>
          <p>This information was not provided yet, please visit our location on the black table for more information or ask an employee.</p>
        </div>
      </main>
    </>
  )
};