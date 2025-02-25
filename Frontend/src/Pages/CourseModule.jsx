import React from "react";
import {
  FaArrowLeft,
  FaSearch,
  FaBell,
  FaGraduationCap,
  FaHome,
  FaSitemap,
  FaUsers,
  FaPaw,
} from "react-icons/fa";
import "./CourseModule.css";
import { useNavigate } from "react-router-dom";

const CourseModule = () => {
  const navigate = useNavigate();
  return (
    <div className="course-detail-container">
      {/* Header */}
      <header className="header">
        <button
          onClick={() => {
            navigate("/courses");
          }}
          className="back-btn"
        >
          <FaArrowLeft />
        </button>
        <h2>Course</h2>
        <div className="header-icons">
          <FaSearch />
          <FaBell />
        </div>
      </header>

      {/* Course Banner */}
      <div className="course-banner">
        <img
          src="https://s3-alpha-sig.figma.com/img/4ac8/f8a7/b7c533246248857ef4b4a3615331fa7c?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XaJ~Nc5gj~2KVw63geBNHBAm8delxt6MdCt7318v-nfQzawgrUtOb0MyNfsUwaTiB7SyoIMLDCApBU0q52bEE4sVyaKR8WVY5z6Tz0CQINwWsfFTLRvDFnoFSvTymGhxXNMdPGzLDg-NDusPFTvGgswLBEIgfm-zgA9UqxheNmVaKsOyfJhu5Hk5YNgi7xq1fktjDPYqbiAW8ZM2GyUG7wG2H31Q0VatAQ0HIejG2HxM5pOP-wO4G~bfrpkV9zJCtmhIYwspxwoLWUiPUF7d5zLDHRYW3wRRvnYcTytRvhL9iW5aVNlUWbqEC~o9n6R0pSYkK1lmF~T6HQfOM3p74g__"
          alt="Teacher Banner"
        />
      </div>

      {/* Course Title */}
      <div className="course-info">
        <p className="course-label">Course</p>
        <h3 className="course-title">The Foundation One</h3>
      </div>

      {/* Overview Section */}
      <div className="overview">
        <p>Overview</p>
        <div className="underline"></div>
      </div>

      {/* Course Module Section */}
      <div className="course-module-section">
        <p className="section-title">Course Module</p>
        <div className="course-modules">
          <div
            onClick={() => {
              navigate("/coursedetail");
            }}
            className="module-card"
          >
            <img
              src="https://s3-alpha-sig.figma.com/img/1d8a/1f85/729502dc9ade0908a36d58c94e18887c?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=aN3nLrL4XzfuCVR76-33ORx85UKhCb5OCfQmskVDIqEQhC6PmBeDUNdRh-qNQ8EsEMz58g501R8PfGMfbrPll1hp~SH~RiDbHtU~GsPLWD7ZfoBu3J6f2DjStJXNLV3l~mpR72aHyhbOm026ZBfb6x6fZ4n9H95fsOKbqNoZAsFD4-H15mE2euTH5jCfx7CVFbb~lVeC~twfwsGviy~Ef8yb6Z8ilCWqz~WwxqqlCpZr0NxR4YAH1h-2T80J5pY5OgIOF-403IHLpYbEOMyREjP4SUocGiCHYbFofdPhrRlLUqcvtZ6ddbuom7mwcAbRgzXkTy0SUO-F5hSiKht9Pw__"
              alt="Module"
            />
            <div className="module-info">
              <p className="module-title">Hamail’s Course</p>
              <span className="module-label">📖 LEARNING MODULE</span>
            </div>
          </div>

          <div
            onClick={() => {
              navigate("/coursedetail");
            }}
            className="module-card"
          >
            <img
              src="https://s3-alpha-sig.figma.com/img/1d8a/1f85/729502dc9ade0908a36d58c94e18887c?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=aN3nLrL4XzfuCVR76-33ORx85UKhCb5OCfQmskVDIqEQhC6PmBeDUNdRh-qNQ8EsEMz58g501R8PfGMfbrPll1hp~SH~RiDbHtU~GsPLWD7ZfoBu3J6f2DjStJXNLV3l~mpR72aHyhbOm026ZBfb6x6fZ4n9H95fsOKbqNoZAsFD4-H15mE2euTH5jCfx7CVFbb~lVeC~twfwsGviy~Ef8yb6Z8ilCWqz~WwxqqlCpZr0NxR4YAH1h-2T80J5pY5OgIOF-403IHLpYbEOMyREjP4SUocGiCHYbFofdPhrRlLUqcvtZ6ddbuom7mwcAbRgzXkTy0SUO-F5hSiKht9Pw__"
              alt="Module"
            />
            <div className="module-info">
              <p className="module-title">Fahad’s Course</p>
              <span className="module-label">📖 LEARNING MODULE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        <div className="nav-item">
          <FaHome />
          <p>Dashboard</p>
        </div>
        <div className="nav-item active">
          <FaGraduationCap />
          <p>Programs</p>
        </div>
        <div className="nav-item">
          <FaSitemap />
          <p>Pathways</p>
        </div>
        <div className="nav-item">
          <FaUsers />
          <p>Hubs</p>
        </div>
        <div className="nav-item">
          <FaPaw />
          <p>Community</p>
        </div>
      </nav>
    </div>
  );
};

export default CourseModule;
