  import { useEffect,useState } from 'react'
  import './App.css'
  import { Hero } from './Components/Hero/Hero'
  import './Components/Navbar/Navbar'
  import { Navbar } from './Components/Navbar/Navbar'
  import { Products } from './Components/Products/Products'
  import AOS from "aos";
  import "aos/dist/aos.css";
  import { TopProducts } from './Components/TopProducts/TopProducts'
  import { Banner } from './Components/Banner/Banner'
  import { CalltoAction } from './Components/CalltoAction/CalltoAction'
  import { Testimonial } from './Components/Testimonial/Testimonial'
  import { Footer } from './Components/Footer/Footer'
  import { Routes, Route } from "react-router-dom";
  import {Login} from "./Components/Modules/Login"
  import { Signup } from './Components/Modules/Signup'
  // import { TopRatedProducts } from '../Pages/TopProducts/TopRatedProducts'
  import { MenProducts } from '../Pages/Men/MenProducts'
  import { WomenProducts } from '../Pages/Women/WomenProducts'
  import { KidsProducts } from '../Pages/Kids/KidsProducts'
  // import { KidsWear } from '../Pages/KidsWear/KidsWear'
  // import { MensWear } from '../Pages/Men/MenProducts'
  import womenBanner from "./assets/AllProducts/images/WomenBanner.png"
  import menBanner from "./assets/AllProducts/images/MenBanner.png"
  import kidsBanner from "./assets/AllProducts/images/KidsBanner.png"
  import {AllProducts} from "../Pages/All/AllProducts"
  // import {AllProducts} from "./assets/AllProducts/AllProducts"
  import {CartProvider} from "./context/CartContext"
  import  ProductDetails from '../Pages/ProductDetails/ProductDetails'
  // import { Breadcrumb } from './Components/BreadCrumb/Breadcrumb'
  // import { useLocation } from "react-router-dom";
  import {AddtoCart} from "../Pages/AddtoCart/AddtoCart"
import AdminDashboard from './Components/AdminDashboard'
import AdminLogin from './Components/AdminLogin'
import PrivateRoute from './Components/PrivateRoute'
import axios from "axios";
import AdminRegister from './Components/AdminRegistrer'


  

  function App() {
    const [adminExists, setAdminExists] = useState(false);

    useEffect(()=>{
      AOS.init({
          offset: 100,
          duration: 800,
          easing: "ease-in-sine",
          delay: 100
      });
      AOS.refresh();
  },[]);

  
    useEffect(() => {
      axios.get("/api/auth/check-admin").then((res) => setAdminExists(res.data.exists));
    }, []);


    // const PrivateRoute = ({ children }) => {
    //   const token = localStorage.getItem("token");
    //   const isAdmin = localStorage.getItem("isAdmin") === "true";
    //   return token && isAdmin ? children : <Navigate to="/admin-login" />;
    // };

  
    return (
      <>
      <CartProvider>
  <Navbar></Navbar>
        <Routes>
      <Route path='/' element={
        <>
        {/* <Navbar/> */}
        {/* <CheckIt/> */}
        <Hero/>
        <Products/>
        <TopProducts/>
        <Banner/>
        <CalltoAction/>
        <Products/>
        <Testimonial/>
        
        </>

  }></Route>

      <Route path="/WomenProducts" element={<WomenProducts BannerImg={womenBanner} category="womenProducts"/>}></Route>
      <Route path="/MenProducts" element={<MenProducts BannerImg={menBanner} category="menProducts"/>}></Route>
      <Route path="/KidsProducts" element={<KidsProducts BannerImg={kidsBanner} category="kidsProducts"/>}></Route>
      <Route path="/AllProducts" element={<AllProducts/>}></Route>
      <Route path="/AddtoCart" element={<AddtoCart/>}></Route>

      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/admin-register" element={<AdminRegister />} />
      <Route path="/admin" element={<PrivateRoute><AdminDashboard /></PrivateRoute>} />


      <Route path="/ProductDetails/:productId" element={<ProductDetails/>} />
      {/* <Route path="/ProductDetails/:productId" element={<Add/>} /> */}


        
  <Route path="/login" element={<Login/>}/>
  <Route path="/Signup" element={<Signup/>}/>
  <Route path="/Admin" element={<AdminDashboard/>}/>
  </Routes>  

    
      <Footer></Footer>
      </CartProvider>
      </>
    )
  }

  export default App
