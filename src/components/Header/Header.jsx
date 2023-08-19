import { Link } from 'react-router-dom';
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
        <div class="header-bottom">
          <div class="container">
            <div class="header-bottom-inner">
              <div class="header-bottom-content">
                <h1 class="header-title">
                  <div className="header-bottom__title-table">
                    <div className="header-bottom__job">Kasblarni</div>
                    <div className="text">
                      <span className="burad-t t1">
                        "Najot Ta'lim" <span>da</span>
                      </span>
                      <span className="burad-t t2">mutaxassislardan</span>
                      <span className="burad-t t3">onlayn</span>
                      <span className="burad-t t4">istalgan nuqtadan</span>
                    </div>
                  </div>
                  o‘rganing
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
