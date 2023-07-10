import Image from "next/image";
import Link from "next/link";

import styles from '@/styles/Gallery.module.css';

export default function PPGallery() {
  let imageWidth = 300;
  let imageHeight = 100;

  return (
    <>
      <div class="container text-center">
        <div class="row">
          <div class="col">
            <Link href={'/media/gallery/one.jpg'} className="fancylight popup-btn" data-fancybox-group="light">
              <Image className="img-fluid" alt="one" width={imageWidth} height={imageHeight} src={'/media/gallery/one.jpg'} />
            </Link>
          </div>
          <div class="col">
            <Link href={'/media/gallery/two.jpg'} className="fancylight popup-btn" data-fancybox-group="light">
              <Image className="img-fluid" alt="one" width={imageWidth} height={imageHeight} src={'/media/gallery/two.jpg'} />
            </Link>
          </div>
          <div class="col">
            <Link href={'/media/gallery/three.jpg'} className="fancylight popup-btn" data-fancybox-group="light">
              <Image className="img-fluid" alt="one" width={imageWidth} height={imageHeight} src={'/media/gallery/three.jpg'} />
            </Link>
          </div>
          <div class="col">
            <Link href={'/media/gallery/four.jpg'} className="fancylight popup-btn" data-fancybox-group="light">
              <Image className="img-fluid" alt="one" width={imageWidth} height={imageHeight} src={'/media/gallery/four.jpg'} />
            </Link>
          </div>
        </div>
      </div><br />

      <div class="container text-center">
        <div class="row">
          <div class="col">
            <Link href={'/media/gallery/five.jpg'} className="fancylight popup-btn" data-fancybox-group="light">
              <Image className="img-fluid" alt="one" width={imageWidth} height={imageHeight} src={'/media/gallery/five.jpg'} />
            </Link>
          </div>
          <div class="col">
            <Link href={'/media/gallery/six.jpg'} className="fancylight popup-btn" data-fancybox-group="light">
              <Image className="img-fluid" alt="one" width={imageWidth} height={imageHeight} src={'/media/gallery/six.jpg'} />
            </Link>
          </div>
          <div class="col">
            <Link href={'/media/gallery/seven.jpg'} className="fancylight popup-btn" data-fancybox-group="light">
              <Image className="img-fluid" alt="one" width={imageWidth} height={imageHeight} src={'/media/gallery/seven.jpg'} />
            </Link>
          </div>
          <div class="col">
            <Link href={'/media/gallery/eight.jpg'} className="fancylight popup-btn" data-fancybox-group="light">
              <Image className="img-fluid" alt="one" width={imageWidth} height={imageHeight} src={'/media/gallery/eight.jpg'} />
            </Link>
          </div>
        </div>
      </div><br />

      <div class="container text-center">
        <div class="row">
          <div class="col">
            <Link href={'/media/gallery/nine.jpg'} className="fancylight popup-btn" data-fancybox-group="light">
              <Image className="img-fluid" alt="one" width={imageWidth} height={imageHeight} src={'/media/gallery/nine.jpg'} />
            </Link>
          </div>
          <div class="col">
            <Link href={'/media/gallery/ten.jpg'} className="fancylight popup-btn" data-fancybox-group="light">
              <Image className="img-fluid" alt="one" width={imageWidth} height={imageHeight} src={'/media/gallery/ten.jpg'} />
            </Link>
          </div>
          <div class="col">
            <Link href={'/media/gallery/eleven.jpg'} className="fancylight popup-btn" data-fancybox-group="light">
              <Image className="img-fluid" alt="one" width={imageWidth} height={imageHeight} src={'/media/gallery/eleven.jpg'} />
            </Link>
          </div>
          <div class="col">
            <Link href={'/media/gallery/twelve.jpg'} className="fancylight popup-btn" data-fancybox-group="light">
              <Image className="img-fluid" alt="one" width={imageWidth} height={imageHeight} src={'/media/gallery/twelve.jpg'} />
            </Link>
          </div>
        </div>
      </div><br />

      <div class="container text-center">
        <div class="row">
          <div class="col">
            <Link href={'/media/gallery/thirteen.jpg'} className="fancylight popup-btn" data-fancybox-group="light">
              <Image className="img-fluid" alt="one" width={imageWidth} height={imageHeight} src={'/media/gallery/thirteen.jpg'} />
            </Link>
          </div>
          <div class="col">
            <Link href={'/media/gallery/fourteen.jpg'} className="fancylight popup-btn" data-fancybox-group="light">
              <Image className="img-fluid" alt="one" width={imageWidth} height={imageHeight} src={'/media/gallery/fourteen.jpg'} />
            </Link>
          </div>
          <div class="col">
            <Link href={'/media/gallery/fiveteen.jpg'} className="fancylight popup-btn" data-fancybox-group="light">
              <Image className="img-fluid" alt="one" width={imageWidth} height={imageHeight} src={'/media/gallery/fiveteen.jpg'} />
            </Link>
          </div>
          <div class="col">
            <Link href={'/media/gallery/sixteen.jpg'} className="fancylight popup-btn" data-fancybox-group="light">
              <Image className="img-fluid" alt="one" width={imageWidth} height={imageHeight} src={'/media/gallery/sixteen.jpg'} />
            </Link>
          </div>
        </div>
      </div><br />

      <div class="container text-center">
        <div class="row">
          <div class="col">
            <Link href={'/media/gallery/seventeen.jpg'} className="fancylight popup-btn" data-fancybox-group="light">
              <Image className="img-fluid" alt="one" width={imageWidth} height={imageHeight} src={'/media/gallery/seventeen.jpg'} />
            </Link>
          </div>
          <div class="col">
            <Link href={'/media/gallery/eighteen.jpg'} className="fancylight popup-btn" data-fancybox-group="light">
              <Image className="img-fluid" alt="one" width={imageWidth} height={imageHeight} src={'/media/gallery/eighteen.jpg'} />
            </Link>
          </div>
          <div class="col">
            <Link href={'/media/gallery/nineteen.jpg'} className="fancylight popup-btn" data-fancybox-group="light">
              <Image className="img-fluid" alt="one" width={imageWidth} height={imageHeight} src={'/media/gallery/nineteen.jpg'} />
            </Link>
          </div>
          <div class="col">
            <Link href={'/media/gallery/twenty.jpg'} className="fancylight popup-btn" data-fancybox-group="light">
              <Image className="img-fluid" alt="one" width={imageWidth} height={imageHeight} src={'/media/gallery/twenty.jpg'} />
            </Link>
          </div>
        </div>
      </div><br />
    </>
  )
};