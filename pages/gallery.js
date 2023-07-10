import styles from '@/styles/Home.module.css';
import PPHeader from '@/public/javascript/header';
import PPGallery from '@/public/javascript/gallery';

export default function Gallery() {
  return (
    <>
      <PPHeader title="Gallery" />
      <main className={styles.main}>
        <div className={styles.home}>
          <h1>Gallery</h1>
          <p>Take a peek of everything we have and even some of our best memories!</p>
        </div>

        <PPGallery />
      </main>
    </>
  )
};