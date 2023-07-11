import Link from "next/link";
import Image from "next/image";

export default function PPNavigation() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" href={'/'}>
          <Image alt="Logo for Putters Pride" width={80} height={74} className="d-inline-block align-text-top" src={'https://xgarciadevs.github.io/putters-pride/putterspride.png'} />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" href={'/about'}>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href={'/gallery'}>Gallery</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href={'/private-parties'}>Private Parties</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href={'/birthdays'}>Birthdays</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link disabled" href={'/treetown'}>Treetown 2023</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
};