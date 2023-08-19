import { Link } from 'react-router-dom';
import { Hero } from '../Hero/Hero';
import './header.scss';

export const Header = () => {
  return (
    <>
      <header class="site-header">
        <div class="header-top">
          <div class="container">
            <div class="header-top-inner">
              <Link to="/" class="logo"></Link>
              <nav class="nav">
                <ul class="nav-list">
                  <li class="nav-item">
                    <Link to="/courses" class="nav-link">
                      Kurslar
                    </Link>
                  </li>
                </ul>
              </nav>
              <Link to="/login" class="header-top-link" id="header-top-link2">
                Kirish
              </Link>
              <button class="open-menu"></button>
            </div>
          </div>
        </div>
        <Hero />
      </header>
      <div class="nav-mobile">
        <ul class="nav-list">
          <li class="nav-item">
            <a href="./courses.html" class="nav-link">
              Kurslar
            </a>
          </li>
          <li class="nav-item">
            <a href="./blog.html" class="nav-link">
              Blog
            </a>
          </li>
          <li class="header-top-mode" id="header-top-mode"></li>
          <li class="menu-close"></li>
        </ul>
      </div>
    </>
  );
};
