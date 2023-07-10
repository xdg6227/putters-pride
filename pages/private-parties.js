import styles from '@/styles/Parties.module.css';
import PPHeader from '@/public/javascript/header';

import Link from 'next/link';

export default function PrivateParties() {
  return (
    <>
      <PPHeader title="Private Parties" />
      <main className={`${styles.main}`}>
        <div className={styles.home}>
          <h1>Private Parties</h1>
          <p>Here at Putters Pride, we welcome all Birthday Parties, Corporate Events, Camps, Church Groups, Family Reunions, Local School & Non-Profit Fundraisers and everything in between.</p>
        </div>

        <h3>Can I bring my own food and drinks?</h3>
        <p>Yes you can! Any food or beverages are welcomed in our outdoor party area. Alcohol is prohibited, no exceptions.</p>

        <h3>Can grandma come to the party?</h3>
        <p>If you have an elderly relative or close friend who would like to come and enjoy the party or parents who do not want to participate in playing, they are welcome to come without any charge.</p>

        <h3>Is there a party deposit?</h3>
        <p>We do not require a deposit for your parties.</p>

        <h3>What if I am looking to raise funds for a good cause?</h3>
        <p>If you are a local school or organization, we can gladly partner with you to create a fundraiser! Raise money while people are playing miniature golf.</p>

        <h5>For details on group rates & availability on having your party, give a call to <Link href="tel:303-985-3860">(303) 985-3860</Link> or email us at <Link href={'mailto:info@putterspride.com'}>info@putterspride.com</Link>.</h5>
      </main>
    </>
  )
};