import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@/App.css";
import Home from "@/pages/Home";
import About from "@/pages/About";
import ISOCertification from "@/pages/ISOCertification";
import Training from "@/pages/Training";
import Franchise from "@/pages/Franchise";
import Testimonials from "@/pages/Testimonials";
import Resources from "@/pages/Resources";
import Gallery from "@/pages/Gallery";
import Contact from "@/pages/Contact";
import Verify from "@/pages/Verify";
import AdminLogin from "@/pages/admin/AdminLogin";
import AdminDashboard from "@/pages/admin/AdminDashboard";
import BlogPost from "@/pages/BlogPost";
import CourseDetails from "@/pages/CourseDetails";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/iso-certification" element={<ISOCertification />} />
          <Route path="/training" element={<Training />} />
          <Route path="/training/:courseId" element={<CourseDetails />} />
          <Route path="/franchise" element={<Franchise />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/blog/:postId" element={<BlogPost />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-right" />
    </div>
  );
}

export default App;