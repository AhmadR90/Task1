import React, { useState } from "react";
import {
  FaArrowLeft,
  FaSearch,
  FaBell,
  FaGraduationCap,
  FaHome,
  FaSitemap,
  FaUsers,
  FaPaw,
  FaChevronUp,
  FaChevronDown,
  FaDownload,
} from "react-icons/fa";
import "./CourseDetail.css";

const CourseDetail = () => {
  const [activeTab, setActiveTab] = useState("lessons");
  const [isChapterOpen, setIsChapterOpen] = useState(true);

  return (
    <div className="course-detail-container">
      {/* Header */}
      <header className="header">
        <button className="back-btn">
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

      {/* Course Info */}
      <div className="course-info">
        <p className="course-label">Course</p>
        <h3 className="course-title">The Foundation One</h3>
      </div>

      {/* Tab Navigation */}
      <div className="tabs">
        <button
          className={activeTab === "lessons" ? "active" : ""}
          onClick={() => setActiveTab("lessons")}
        >
          Lessons
        </button>
        <button
          className={activeTab === "overview" ? "active" : ""}
          onClick={() => setActiveTab("overview")}
        >
          Overview
        </button>
        <button
          className={activeTab === "resources" ? "active" : ""}
          onClick={() => setActiveTab("resources")}
        >
          Resources
        </button>
      </div>

      {/* Dynamic Content Section */}
      <div className="content-section">
        {activeTab === "lessons" && (
          <div className="lessons-section">
            <div className="chapter">
              <div className="chapter-header" onClick={() => setIsChapterOpen(!isChapterOpen)}>
                <p className="chapter-title">Chapter One</p>
                <button className="toggle-btn">
                  {isChapterOpen ? <FaChevronUp /> : <FaChevronDown />}
                </button>
              </div>

              {isChapterOpen && (
                <div className="lessons">
                  <div className="lesson-card">
                    <img
                      src="https://s3-alpha-sig.figma.com/img/6757/7960/58262fe844543f02c834e5005d6e4e55?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=rxLDgG6X1sFostmiVkPCeVAuGhGbGARiTNvtfy6u7MsCG7yNdRrtRegPRJ05~wp7gZeIz61C0skg87L5BEfxGLNUG-vIUC14yKs-iaLHsBirtqUquQ~NIXBgnXyXs4eqQXLlG12-XXAJqimFDY85NHMXNr4edfEuLavdXmFryoC2HuUkzzh4CpzV40iQ~r8PumIkln7Hw6RnGDEjsKCWjVqttRorvlvFGSEghPcKL8OTxNBOY7iMmteOMwznFB56EGCmGA~VvLRdmrYhNrciQ1pBZpSu1GTQSwKrc0Pm~Od5tYZlPvCtfLFoABHjuEkBWE7LiuyCCw0lwn11054jMA__"
                      alt="Lesson"
                    />
                    <img src="https://s3-alpha-sig.figma.com/img/6757/7960/58262fe844543f02c834e5005d6e4e55?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=rxLDgG6X1sFostmiVkPCeVAuGhGbGARiTNvtfy6u7MsCG7yNdRrtRegPRJ05~wp7gZeIz61C0skg87L5BEfxGLNUG-vIUC14yKs-iaLHsBirtqUquQ~NIXBgnXyXs4eqQXLlG12-XXAJqimFDY85NHMXNr4edfEuLavdXmFryoC2HuUkzzh4CpzV40iQ~r8PumIkln7Hw6RnGDEjsKCWjVqttRorvlvFGSEghPcKL8OTxNBOY7iMmteOMwznFB56EGCmGA~VvLRdmrYhNrciQ1pBZpSu1GTQSwKrc0Pm~Od5tYZlPvCtfLFoABHjuEkBWE7LiuyCCw0lwn11054jMA__"
                      alt="Lesson"></img>

                    <div className="lesson-info">
                      <p className="lesson-title">Lesson One</p>
                      <span className="lesson-duration">15 Minutes</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === "overview" && (
          <div className="overview-section">
            <p>
              The introduction to personal development forms the basis for your personal growth
              process. In this topic, you will learn the concepts and tools that will help you
              develop a deeper understanding of yourself and become the person you want to be.
            </p>
          </div>
        )}

        {activeTab === "resources" && (
          <div className="resources-section">
            <p>Chapter1.pdf</p>
            <a href="/sample.pdf" download className="download-btn">
              <FaDownload /> Download PDF
            </a>
          </div>
        )}
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

export default CourseDetail;
