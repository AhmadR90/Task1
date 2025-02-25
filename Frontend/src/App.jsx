import { useState } from "react";
import { BrowserRouter as Router ,Route, Routes,  } from "react-router-dom";
import "./App.css";
import SignupForm from "./components/SignUp";
import SignIn from "./components/SignIn";
import Forgot from "./components/Forgot";
import OTPVerification from "./components/Otp";
import SetPassword from "./components/SetPassword";
import PricingComponent from "./components/Pricing";
import Home from "./Pages/Home";
import Courses from "./Pages/Courses";
import CourseModule from "./Pages/CourseModule";
import CourseDetail from "./Pages/CourseDetail";
import Hubs from "./Pages/Hub";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn/>  }/>
          <Route path="/signup" element={<SignupForm/>  }/>
          <Route path="/forgot-password" element={<Forgot/>  }/>
          <Route path="/varification" element={<OTPVerification/>  }/>
          <Route path="/set-Password" element={<SetPassword/>  }/>
          <Route path="/pricing" element={<PricingComponent/>  }/>
          <Route path="/Home" element={<Home/>  }/>
          <Route path="/courses" element={<Courses/>  }/>
          <Route path="/courseModule" element={<CourseModule/>  }/>
          <Route path="/coursedetail" element={<CourseDetail/>  }/>
        </Routes>
      </Router>

     
    </>
  );
}

export default App;
