import React, { useState, useEffect } from "react";
import Style from "./Articles.css";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import artical from "../../Assets/images/artical.png";
import akl from "../../Assets/images/Frame 1993.png";
export default function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(`https://fit-nutrition.vercel.app/food/createFood`)
      .then((response) => response.json())
      .then((data) => setArticles(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <>
      <Navbar />
      <div className="row m-0">
        <div id="img-artical col-6">
          <img src={artical} width={1506} height={200} alt="artical" />
        </div>
        <div className="d-flex col-7 ">
          <Link to={"/"}>
            <i id="arrow-left" className="fa-solid fa-arrow-left"></i>
          </Link>
          <h2 id="text-diet">Recent Articles</h2>
        </div>
      </div>
      <div className="row m-0">
        <div className="card mb-3" width={540}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={akl} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    Last updated 3 mins ago
                  </small>
                </p>
                <i id="bookmark" className="fa-regular fa-bookmark"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3" width={540}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={akl} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    Last updated 3 mins ago
                  </small>
                </p>
                <i id="bookmark" className="fa-regular fa-bookmark"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3" width={540}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={akl} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    Last updated 3 mins ago
                  </small>
                </p>
                <i id="bookmark" className="fa-regular fa-bookmark"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3" width={540}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={akl} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    Last updated 3 mins ago
                  </small>
                </p>
                <i id="bookmark" className="fa-regular fa-bookmark"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3" width={540}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={akl} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    Last updated 3 mins ago
                  </small>
                </p>
                <i id="bookmark" className="fa-regular fa-bookmark"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3" width={540}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={akl} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    Last updated 3 mins ago
                  </small>
                </p>
                <i id="bookmark" className="fa-regular fa-bookmark"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
