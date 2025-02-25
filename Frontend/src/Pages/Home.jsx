import React from "react";
import { FaTasks, FaPhone, FaCalendarAlt, FaHome, FaGraduationCap, FaSitemap, FaUsers, FaPaw } from "react-icons/fa";
import "./Home.css";
import Image1 from "../assets/Image 1.jpeg"
import { useNavigate } from "react-router-dom";

const programs = [
  {
    name: "Meet Our Teacher",
    image:"https://s3-alpha-sig.figma.com/img/4ac8/f8a7/b7c533246248857ef4b4a3615331fa7c?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XaJ~Nc5gj~2KVw63geBNHBAm8delxt6MdCt7318v-nfQzawgrUtOb0MyNfsUwaTiB7SyoIMLDCApBU0q52bEE4sVyaKR8WVY5z6Tz0CQINwWsfFTLRvDFnoFSvTymGhxXNMdPGzLDg-NDusPFTvGgswLBEIgfm-zgA9UqxheNmVaKsOyfJhu5Hk5YNgi7xq1fktjDPYqbiAW8ZM2GyUG7wG2H31Q0VatAQ0HIejG2HxM5pOP-wO4G~bfrpkV9zJCtmhIYwspxwoLWUiPUF7d5zLDHRYW3wRRvnYcTytRvhL9iW5aVNlUWbqEC~o9n6R0pSYkK1lmF~T6HQfOM3p74g__", // Replace with actual image URL
  },
  {
    name: "Online Learning",
    image: "https://s3-alpha-sig.figma.com/img/04e9/e420/64beaa69678b898d658d0c53e0f7b540?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SKHo-ANgscOQjb7d6BvH7PT0VC0fTdJfSDpZtMVSdc~CtOR7EkKKzfGqdFIK1a37zww8fCMMD3l9sCxq8xrqzcEROGZj4dXZHxvBhKrQ~coUNxPlmoVZN2Fs6xJJQzbzpMu54qnBT37i3iT4pVH7KuuETPGY1gz5LpHnMiVosuqU73Br4wJTE1OMRtsWp93J67lVQHSkHRAomQ91l2cO-Yumk2W5nBr13g6923N~K0tGcK~ctC-f8kTlOv6c8klDW~WdUV-9GOA5qU2ndP9AfT1ZGSOeQW1yWI~2pvP5nySaLWT6UL5MPbUpOdfnaaGG6EUctvSEw4keV7FWgxjXpg__",
  },
  {
    name: "Tech Course",
    image: "https://s3-alpha-sig.figma.com/img/f86f/feab/caa6e9021725e0bbc04091fd04285547?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=TtX4lRetFtnjK-~cruyPY2fNotm3ajTwBaIVZus88f5VI9L-1xAIcV~7oL160thD60SR~OoVilOlNnrcwlcevVPF94glHALKMG-P1pa43sfj17D7f6Amk7SUP8hNhl4NSP~Rca3icEJ2WUH0kn5~wYVZX8Er9DmLfQa8xCB5IxGTuZ57DNUycDJslGFbeLtkoHp3hu1-~gtZ3dCkWNTceHwxW13zoa4K9xbaAeZ74AJIGIxyYpiLI0wgmcxwoFjfJ2LxlBw2Dx-1Hzwa8SQK6Wsq4xfDbCvWgRiHG0K2FveJeARZKfu5jkDgv3n6amUucEO4oFOL4DynKjCJUgF6YA__",
  },
  {
    name: "Streaming Class",
    image: "https://s3-alpha-sig.figma.com/img/c117/0c07/97f4818fa8e97f3614b1a3bf9b435414?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jcNpg1JN2VspEVRf-1QeQN0rwQoE7KNk6pJnPqOq6gu3JKiHjrKufLhJBYaLp15vnVtjW4HjE4j15AgpoK64Xotj6NaKeE5YchgPu5ueZjE7VIzOHvmz47wvQsG1RdxbFlum0HERbihwbUmB9YWSOUpTj1In2~mM9yhAS2v6fSEk3fN1CfuLfWReOWn3DG-Bhfa~g16wEITcwm1gOFM53eG~9Cev6-66iginCXjaTP3adOHzMp0lfiI3T6VlDfrZHypYPBY-QQ-~ygeQJypEKjdpKi0QVcDK1wUbQLh8t9-TPXVj9n7ErrZ4yp8NkaQQTanPchLDoB84xMYqnBELrA__",
  },
];

const newPrograms = [
  {
    name: "Creative Thinking",
    image: "https://s3-alpha-sig.figma.com/img/0677/485d/369f279e1d9da0e1b6e3794bdcd43617?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=t6AOdjQov0TCshUw6NFzmpVSi0LTAb0J84X-bqftPet7Iq0u8BMFXmM5nZkeDr71ycfQsXRTADJ7rGtLhZjsnYmNXmxW1EuEXQKvA-02Jsq0HJR~HMZBhQUsJmWQ7itZCHixHXFhAG8QV4Pklpx5Cy1wK68Utd3EUuChfSFvOD0HST1IgVl8IwQFBjDQyDUgi2SLTOyvRmrgznPSUoXNKICmA7xMG4YXBQ3MCT6JmXPbgnoEVELqsL-cSSUvq7koaPCs0N163ENTadd1Wf3ybesVKwExEfUTpX1M30r4bM1~lELTEgbOW1YLx8qR4fK~dtge2taG0hjvMSJ9mp3F0A__",
  },
  {
    name: "Group Study",
    image: "https://s3-alpha-sig.figma.com/img/a2c9/f925/4bb9f776222ca5cf1ecd08b3c46ca59b?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=RtQePUpMRujcImDM~~BSWEky8vyms1VXKvOMX-9Tp7gR2QShlA-RcWM~DM3K1tIACZeRydEUWy~JgX-FpbfeyeleUs7JmtvaJJ9birRlIlvoYsIohv6FB1EtHZS2olvL3GXbfpVKZ0dmZMXhtQYE5RKsTf5PzGnfhmvC2mWQtEcUPSoXBEkgQ9RXyS4TZiS-MKQz7bq1Ch4DqIMSVX~qA2WwI74JfbGO6LndmCHFeUkAwDtsSGXYSfWaTk8RxUPjT8YUmy3q-5-lGnZ68CLz5p-fSNaSswEVSZgB4j~DJmsmwIRlU7nnn~QcQefmTp~U~kSdbgSjtxF7IdYS5Z5U9Q__",
  },
];

const Home = () => {
  const navigate=useNavigate();

  return (
    <div className="dashboard">
      <header className="header">
        <div className="profile-icon">👤</div>
        <div className="header-icons">
          <span>🔍</span>
          <span>🔔</span>
        </div>
      </header>

      <section className="welcome-section">
        <h2>Welcome, Wasi!</h2>
        <p>
          Success doesn’t wait for anyone. You either take control or stay stuck where you are.
          The weak hesitate, the strong take action—time to rise above the rest.
        </p>
        <div className="buttons">
          <button className="task-btn">My Tasks</button>
          <button className="bookmark-btn">Bookmark</button>
        </div>
      </section>

      <section className="lesson-section">
        <h4>Last Lesson</h4>
        <p>Lesson One - 1 Minute</p>
        <button className="continue-btn">Continue Video ➤</button>
      </section>

      {/* Programs Section */}
      <section className="programs">
        <div className="section-header">
          <h3>Programs</h3>
          <button onClick={()=>{navigate("/courses")}} className="all-programs-btn">All Programs</button>
        </div>
        <div onClick={()=>{navigate("/courseModule")}} className="programs-grid">
          {programs.map((program, index) => (
            <div key={index} className="course-card">
              <img src={program.image} alt={program.name} className="course-image" />
              <p>{program.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* New Programs Section */}
      <section className="new-programs">
        <h3>New Programs</h3>
        <div className="programs-grid">
          {newPrograms.map((program, index) => (
            <div key={index} className="course-card">
              <img src={program.image} alt={program.name} className="course-image" />
              <p>{program.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Locked Features */}
      <section className="locked-sections">
        <div className="locked-card ">
          <FaTasks className="lock-icon"/>
          <p>Tasks - Available Soon</p>
        </div>
        <div className="locked-card">
          <FaPhone className="lock-icon"/>
          <p>1-1 Calls - Available Soon</p>
        </div>
        <div className="locked-card">
          <FaCalendarAlt className="lock-icon"/>
          <p>Life Events - Available Soon</p>
        </div>
      </section>

      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        <div className="nav-item active">
          <FaHome />
          <p>Dashboard</p>
        </div>
        <div className="nav-item">
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

export default Home;
