import styles from '@/styles/Home.module.css';
import PPHeader from '@/public/javascript/header';

import Image from 'next/image';

export default function Home() {
  return (
    <>
      <PPHeader title="Home" />
      <main className={`${styles.main}`}>

        <div className={styles.home}>
          <div id="carouselImages" class="carousel slide carousel-fade" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <Image className='d-block w-100' alt='Carousel item' width={400} height={500} src={'/media/dragon_slide.jpg'} />
              </div>
              <div class="carousel-item">
                <Image className='d-block w-100' alt='Carousel item' width={400} height={500} src={'/media/mountain_course.jpg'} />
              </div>
              <div class="carousel-item">
                <Image className='d-block w-100' alt='Carousel item' width={400} height={500} src={'/media/patio.jpg'} />
              </div>
              <div class="carousel-item">
                <Image className='d-block w-100' alt='Carousel item' width={400} height={500} src={'/media/town.jpg'} />
              </div>
            </div>
          </div><br />

          <h1>Welcome to Putters Pride</h1>
          <p>54 holes of miniature golfing, and much much more!</p>
        </div>

        <div class="container text-center">
          <div class="row">
            <div class="col">
              <Image alt='Windmill Feature' width={300} height={200} src={'/media/windmill.jpg'} /><br />
              <h3>54 Holes of Adventure</h3>
              <p>3 immaculately landscaped 18-hole miniature golf courses = 54 holes of adventure! Dragons, windmills, ponds and more make each mini golf hole challenging and fun for all ages.</p>
            </div>
            <div class="col">
              <Image alt='Windmill Feature' width={300} height={200} src={'/media/clowns.jpg'} /><br />
              <h3>Host your Own Event</h3>
              <p>Birthday Parties, Special Occasions, Family Reunions, Corporate Events, you name it - and we can host it!</p>
            </div>
            <div class="col">
              <Image alt='Windmill Feature' width={300} height={200} src={'/media/clubs.jpg'} /><br />
              <h3>Birthday Celebrations</h3>
              <p>Sign up for our Birthday Club and receive special offers in addition to a free round of golf on your birthday!</p>
            </div>
            <div class="col">
              <Image alt='Windmill Feature' width={300} height={200} src={'/media/treetown.jpg'} /><br />
              <h3>The New North Pole</h3>
              <p>Every year from Black Friday to Christmas Eve, Putter's Pride becomes Denver's own North Pole! Pick out your family tree, visit Santa's Workshop, pet a live reindeer, and more!</p>
            </div>
          </div>
        </div>
        
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col col-md-9 col-lg-7 col-xl-5">

                <div className="card">
                  <div className="card-body">
                    <blockquote className="blockquote blockquote-custom bg-white px-3 pt-4">
                      <p className="mb-0 mt-2 font-italic">
                        "We had our daughter's birthday at Putter's Pride and it was fantastic! Everything was set when we arrived - even the bounce house and everyone had a great time. My son wants his party there next year!"
                      </p>
                      <footer className="blockquote-footer pt-4 mt-4 border-top">
                        Lakewood Resident,
                        <cite title="Source Title"> Marcia B.</cite>
                      </footer>
                    </blockquote>
                  </div>
                </div>

              </div>
            </div>
          </div>
      </main>
    </>
  )
};