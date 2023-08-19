import { Link } from 'react-router-dom';
import '../Header/header.scss';

export const Hero = () => {
  return (
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
  );
};
