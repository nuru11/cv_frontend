// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './styles/helper.css';
// import './styles/index.css';
// import './styles/mediaQueries.css';
// import App from './App';
// import List from "./screens/list"
// import ListDetail from "./screens/listDetail"
// import Footer from "./Components/Footer";
// import Home from "./screens/home";
// import UploadPdf from "./screens/uploadpdf"
// import ImageUploader from './screens/imageUploader';
// import TestpdfGen from "./screens/testpdfGen"
// import InputDesigntest from "./screens/inputsDesigntest"
// import { createBrowserRouter, RouterProvider} from "react-router-dom"


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home />,
//     errorElement: <div>404 Not Found</div>
//   },
//   {
//     path: "/a",
//     element: <App />,
//     errorElement: <div>404 Not Found</div>
//   },
//   {
//     path: "/list",
//     element: <List />,
//     errorElement: <div>404 Not Found</div>
//   },
//   {
//     path: "/list/:listid",
//     element: <ListDetail />
    
//   },
//   {
//     path: "/uploadpdf",
//     element: <UploadPdf />
//   },
//   {
//     path: "/imageuploader",
//     element: <ImageUploader />
    
//   },
//   {
//     path: '/testpdfgen',
//     element: <TestpdfGen />,
//     errorElement: <div>404 Not Found</div>
//   },
//   {
//     path: '/inputdesign',
//     element: <InputDesigntest />,
//     errorElement: <div>404 Not Found</div>
//   },
// ])
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//     {/* <App /> */}
//     <Footer />
     
//   </React.StrictMode>
// );


////////////////////////////////////////////////////////////////////////////

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './styles/helper.css';
// import './styles/index.css';
// import './styles/mediaQueries.css';
// import App from './App';
// import List from "./screens/list";
// import ListDetail from "./screens/listDetail";
// import Footer from "./screens/footer";
// // import Header from "./screens/header"; // Import the Header
// import Home from "./screens/home";
// import UploadPdf from "./screens/uploadpdf";
// import ImageUploader from './screens/imageUploader';
// import TestpdfGen from "./screens/testpdfGen";
// import InputDesigntest from "./screens/inputsDesigntest";
// import TestpdfDesign from "./screens/testPdfdesign"
// import Setting from "./screens/setting"
// import Testpage from "./screens/test"
// import SignUp from "./screens/auth/signup"
// import Login from "./screens/auth/login"
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import AgeCal from "./screens/ageCal"

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home />,
//     errorElement: <div>404 Not Found</div>
//   },
//   {
//     path: "/a",
//     element: <App />,
//     errorElement: <div>404 Not Found</div>
//   },
//   {
//     path: "/list",
//     element: <List />,
//     errorElement: <div>404 Not Found</div>
//   },
//   {
//     path: "/list/:listid",
//     element: <ListDetail />
//   },
//   {
//     path: "/uploadpdf",
//     element: <UploadPdf />
//   },
//   {
//     path: "/imageuploader",
//     element: <ImageUploader />
//   },
//   {
//     path: '/testpdfgen',
//     element: <TestpdfGen />,
//     errorElement: <div>404 Not Found</div>
//   },
//   {
//     path: '/inputdesign',
//     element: <InputDesigntest />,
//     errorElement: <div>404 Not Found</div>
//   },
//   {
//     path: '/age',
//     element: <AgeCal />,
//     errorElement: <div>404 Not Found</div>
//   },
//   {
//     path: '/pdf',
//     element: <TestpdfDesign />,
//     errorElement: <div>404 Not Found</div>
//   },

//   {
//     path: '/setting',
//     element: <Setting />,
//     errorElement: <div>404 Not Found</div>
//   },
//   {
//     path: '/test',
//     element: <Testpage />,
//     errorElement: <div>404 Not Found</div>
//   },

//   {
//     path: '/signup',
//     element: <SignUp />,
//     errorElement: <div>404 Not Found</div>
//   },
//   {
//     path: '/Login',
//     element: <Login />,
//     errorElement: <div>404 Not Found</div>
//   },
// ]);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     {/* <Header />  */}
//     <RouterProvider router={router} />
//     <Footer /> {/* Render the Footer */}
//   </React.StrictMode>
// );



/////////////////////////////////////////////////////////////


import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/helper.css';
import './styles/index.css';
import './styles/mediaQueries.css';
import App from './App';
import List from "./screens/list";
import ListDetail from "./screens/listDetail";
import Footer from "./screens/footer";
import Home from "./screens/home";
import UploadPdf from "./screens/uploadpdf";
import ImageUploader from './screens/imageUploader';
import TestpdfGen from "./screens/testpdfGen";
import InputDesigntest from "./screens/inputsDesigntest";
import TestpdfDesign from "./screens/testPdfdesign";
import Setting from "./screens/setting";
import Testpage from "./screens/test";
import SignUp from "./screens/auth/signup";
import Login from "./screens/auth/login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AgeCal from "./screens/ageCal";
import ProtectedRoute from './screens/auth/ProtectedRoute'; // Import the ProtectedRoute


import TestMysql from "./screens/testmysql";

const router = createBrowserRouter([
  {
    path: '/',
    element: <ProtectedRoute element={<Home />} adminOnly={true} />,
    // element: <Home />,
    errorElement: <div>404 Not Found</div>
  },
  // {
  //   path: "/a",
  //   element: <ProtectedRoute element={<App />} adminOnly={true} />,
  //   errorElement: <div>404 Not Found</div>
  // },
  {
    path: "/list",
    element: <ProtectedRoute element={<List />} adminOnly={true} />, // Protect this route
    // element: <List />,
    errorElement: <div>404 Not Found</div>
  },
  {
    path: "/list/:listid",
    // element: <ProtectedRoute element={<ListDetail />} /> // Protect this route
    element: <ListDetail />
  },
  {
    path: "/uploadpdf",
    element: <ProtectedRoute element={<UploadPdf />} adminOnly={true} /> // Protect this route
  },
  {
    path: "/imageuploader",
    element: <ProtectedRoute element={<ImageUploader />} adminOnly={true} /> // Protect this route
  },
  {
    path: '/testpdfgen',
    element: <ProtectedRoute element={<TestpdfGen />} />,
    errorElement: <div>404 Not Found</div>
  },
  {
    path: '/inputdesign',
    element: <ProtectedRoute element={<InputDesigntest />} />,
    errorElement: <div>404 Not Found</div>
  },
  {
    path: '/age',
    element: <ProtectedRoute element={<AgeCal />} />,
    errorElement: <div>404 Not Found</div>
  },
  {
    path: '/pdf',
    element: <ProtectedRoute element={<TestpdfDesign />} />,
    errorElement: <div>404 Not Found</div>
  },
  {
    path: '/setting',
    element: <ProtectedRoute element={<Setting />} adminOnly={true} />,
    errorElement: <div>404 Not Found</div>
  },
  {
    path: '/test',
    element: <ProtectedRoute element={<Testpage />} />,
    errorElement: <div>404 Not Found</div>
  },
  {
    path: '/signup',
    // element: <ProtectedRoute element={<SignUp />} adminOnly={true} />, // Protect signup for admin only
    element: <SignUp />,
    errorElement: <div>404 Not Found</div>
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <div>404 Not Found</div>
  },
  // {
  //   path: '/testmysql',
  //   element: <TestMysql />,
  //   errorElement: <div>404 Not Found</div>
  // }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Footer /> {/* Render the Footer */}
  </React.StrictMode>
);