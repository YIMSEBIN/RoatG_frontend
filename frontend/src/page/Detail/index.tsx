import { Header } from "@components/layout/header";
import "./detail.css";

export const Detail = () => {
  return (
    <>
      <div className="container">
        <Header />
        <aside className="sidebar">
          <ul>
            <li>
              <a href="#">App Info</a>
            </li>
            <li>
              <a href="#">Graph</a>
            </li>
            <li>
              <a href="#">Update History</a>
            </li>
            <li>
              <a href="#">Review Topic</a>
            </li>
            <li>
              <a href="#">Dashboard</a>
            </li>
            <li>
              <a href="#">Filtered Reviews</a>
            </li>
          </ul>
        </aside>
        <main className="content">
          <section className="app-info">
            <div className="app-header">
              <img src="cookie_run_image.png" alt="Cookie Run Icon" />
              <div className="app-details">
                <h2>쿠키런: 오븐브레이크</h2>
                <p>최근 업데이트: 2024.09.10</p>
                <p>PlayStore 평균 별점: 4.1</p>
                <p>총 리뷰 수: 101만개</p>
                <p>다운로드 수: 1,000만+</p>
                <p>PlayStore 어플 순위: '액션' 15위</p>
              </div>
            </div>
            <div className="statistics">
              <div className="customers">
                <h3>Customers</h3>
                <p>New Customers: 34,249</p>
                <p>Repeated: 1420</p>
              </div>
              <div className="featured-product">
                <h3>Featured Product</h3>
                <p>Beats Headphone 2019 - $89.00</p>
              </div>
              <div className="sales-analytics">
                <h3>Sales Analytics</h3>
                <canvas id="salesChart"></canvas>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};
