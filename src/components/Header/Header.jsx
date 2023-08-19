import { Link } from 'react-router-dom';
import './header.scss';

export const Header = () => {
  return (
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
            <Link to='/login' class="header-top-link" id="header-top-link2">
              Kirish
            </Link>
            <button class="open-menu"></button>
          </div>
        </div>
      </div>
      <div class="header-bottom">
        <div class="container">
          <div class="header-bottom-inner">
            <div class="header-bottom-content">
              <h1 class="header-title">
                Kasblarni <span>onlayn</span> o‘rganing
              </h1>
              <p class="header-text">
                O‘zingizga qulay vaqtda, joyda va uslubda zamonaviy kasblarni
                o‘rganing.
              </p>
              <Link to="/courses" class="header-bottom-link">
                Kurslarni ko‘rish
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
