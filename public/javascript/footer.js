import Link from "next/link";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faFoursquare, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBuilding, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function PPFooter() {
  return (
    <footer class="text-center text-lg-start bg-light text-muted">
      <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div class="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <Link href={'https://foursquare.com/puttersprideco'} className="me-4 text-reset"><FontAwesomeIcon icon={faFoursquare} /></Link>
          <Link href={'https://www.facebook.com/putterspride'} className="me-4 text-reset"><FontAwesomeIcon icon={faFacebook} /></Link>
          <Link href={'http://twitter.com/PuttersPrideCO'} className="me-4 text-reset"><FontAwesomeIcon icon={faTwitter} /></Link>
        </div>
      </section>

      <section class="">
        <div class="container text-center text-md-start mt-5">
          <div class="row mt-3">
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-4"><Image alt="Logo for Putters Pride" width={100} height={94} className="d-inline-block align-text-top" src={'/putterspride.png'} /></h6>
              <p>54 holes of miniature golfing, and much much more!</p>
            </div>

            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-4">Popular</h6>
              <p><Link href={'/about'}>About</Link></p>
              <p><Link href={'/gallery'}>Gallery</Link></p>
              <p><Link href={'/private-parties'}>Private Parties</Link></p>
            </div>

            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-4">Useful</h6>
              <p><Link href={'/birthdays'}>Birthdays</Link></p>
              <p><Link href={'/treetown'}>Treetown</Link></p>
            </div>

            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
              <p><FontAwesomeIcon icon={faBuilding} /> 3604 S Kipling St, Denver, CO 80235</p>
              <p><FontAwesomeIcon icon={faEnvelope} /> info@putterspride.com</p>
              <p><FontAwesomeIcon icon={faPhone} /> (303) 985-3860</p>
            </div>
          </div>
        </div>
      </section>

      <div class="text-center p-4">
        © 1996 - 2023 | <Link href={'https://putterspride.com'}>Putters Pride</Link>
      </div>
    </footer>
  )
}