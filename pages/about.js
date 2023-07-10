import styles from '@/styles/About.module.css';
import PPHeader from '@/public/javascript/header';

export default function About() {
  return (
    <>
      <PPHeader title="About" />
      <main className={`${styles.main}`}>
        <h3>Putters Pride is a locally owned business</h3>
        <p>Opened since 1996 we have created a great place for your family and friends to gather. We offer entertaining fun for everyone with individual and group rounds of 18-hole miniature golf. Stop in for great golf fun at our memorable atmosphere. Give your family & friends a party that they will never forget. Putters Pride is great for every age and groups of any size.</p>

        <h3>Minuature Golf? Mini Golf? Putt Putt Golf?</h3>
        <p>Whatever you call it, we call it fun! Conveniently located in Lakewood just off of Kiping & Hampden, Putter's Pride has long been a Colorado favorite for summer entertainment in Lakewood and Denver. The average round takes approx. 45 minutes - depending on how fast you play and how busy the course is.</p><br /><br />

        <div class="container text-center">
          <div class="row">
            <div class="col">
              <h3>We are open EVERY SINGLE DAY!</h3>
              <p>Sunday - Thursday: 10am to 10pm</p>
              <p>Friday & Saturday: 10am to 11pm</p>
            </div>
            <div class="col">
              <h3>How much for my family to play?</h3>
              <div class="container text-center">
                <div class="row">
                  <div class="col">
                    <p><b>1 Round (18 Holes)</b></p>
                    <ul>
                      <li>Adults: $8.50 per Golfer</li>
                      <li>Kids under 12 & Seniors over 60: $7.00</li>
                    </ul>
                  </div>
                  <div class="col">
                    <p><b>AYCP (54 Holes)</b></p>
                    <ul>
                      <li>Everybody: $10.00 per Golfer</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <h3>Our Location</h3>
              <p>To get directions you could search for "3604 S Kipling St, Denver, CO 80235" into any map or use the Google Maps extension below.</p>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12287.809206354781!2d-105.11420150000001!3d39.650788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b81e64c1419fb%3A0xec087cbeadf750ba!2sPutter&#39;s%20Pride!5e0!3m2!1sen!2sus!4v1689031745580!5m2!1sen!2sus" width="400" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>            </div>
          </div>
        </div>
      </main>
    </>
  )
};