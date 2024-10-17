import { Header } from "@components/layout/header";
import "./main.css";
import { GoSearch } from "react-icons/go";
import { Link } from "react-router-dom";
import { RouterPath } from "@src/routes/path";

export default function MainPage() {
  return (
    <div className="App">
      <Header />
      <main>
        <h1>Reviewest of all the games</h1>
        <p className="description">
          Google Play Store에 등록된 어플리케이션의 현황을 빠르고 간편하게 확인할 수 있습니다.
          <br />
          업데이트 분석에는 리뷰, 별점, 업데이트 내역 등이 반영됩니다.
        </p>
        <div className="search-container">
          <input type="text" placeholder="Search APP you want" />
          <button>
            <Link to={RouterPath.appInfo}>
              <GoSearch />
            </Link>
          </button>
        </div>
        <div className="features">
          <div className="feature">
            <img src="https://via.placeholder.com/50" alt="Feature 1" />
            <div className="feature-text">업데이트 흐름에 따른 별점 변화</div>
          </div>
          <div className="feature">
            <img src="https://via.placeholder.com/50" alt="Feature 2" />
            <div className="feature-text">리뷰에 등장하는 긍정/부정 감정의 빈도수</div>
          </div>
          <div className="feature">
            <img src="https://via.placeholder.com/50" alt="Feature 3" />
            <div className="feature-text">리뷰에 등장하는 키워드의 분석</div>
          </div>
          <div className="feature">
            <img src="https://via.placeholder.com/50" alt="Feature 4" />
            <div className="feature-text">어플리케이션 이용자들의 감성 분석</div>
          </div>
        </div>
      </main>
    </div>
  );
}
