
 import { useEffect } from "react";
 import LoginPage from "./components/LoginPage";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import { useState } from "react";
import UIConfigPOC from "./components/UIConfigPOC";
import Dashboard from "./pages/Dashboard";
import ArcNavigationPage from "./pages/ArcNavigationPage";
import DeviceDetailsPOC from "./components/DeviceDetailsPOC";
import CoverFlowNavigation from "./components/CoverFlowNavigation";
import BubbleNavigation from "./components/BubbleNavigation";
import LoanCharts from "./components/LoanCharts";
// export default function App() {
//   const [page, setPage] = useState("dashboard");

//   return (
//     <ThemeProvider>
//        <>
//       <div className="fixed top-4 right-4 z-[9999] flex gap-2 flex-wrap">

//         <button
//           onClick={() => setPage("dashboard")}
//           className="
//             bg-blue-600
//             text-white
//             px-4
//             py-2
//             rounded-full
//           "
//         >
//           Dashboard
//         </button>

//         <button
//           onClick={() => setPage("arc")}
//           className="
//             bg-red-600
//             text-white
//             px-4
//             py-2
//             rounded-full
//           "
//         >
//           Arc Navigation
//         </button>

//         <button
//           onClick={() => setPage("carousel")}
//           className="
//             bg-green-600
//             text-white
//             px-4
//             py-2
//             rounded-full
//           "
//         >
//           Carousel Navigation
//         </button>

//         <button
//           onClick={() => setPage("bubble")}
//           className="
//             bg-purple-600
//             text-white
//             px-4
//             py-2
//             rounded-full
//           "
//         >
//           Portals Navigation
//         </button>
//   <ThemeToggle />
//       </div>

//       {page === "dashboard" && <Dashboard />}

//       {page === "arc" && <ArcNavigationPage />}

//       {page === "carousel" && (
//         <CoverFlowNavigation />
//       )}

//       {page === "bubble" && (
//         <BubbleNavigation />
//       )}
//     </>
  
//     </ThemeProvider>
   
//   );

// }


// UI Config POC ===========
// function App() {
// return <UIConfigPOC />;
// }
// export default App;

//Device detail POC ===========
// function App() {
// return <DeviceDetailsPOC />;
// }
// export default App;

// Biometric POC ===========
// function App() {
// return <LoginPage />;
// }
// export default App;

//Biometric POC ===========
// function App() {
// return <LoginPage />;
// }
// export default App;

//Loanchart POC ===========
function App() {
return <LoanCharts />;
}
export default App;