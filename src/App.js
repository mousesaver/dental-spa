import { BrowserRouter, Routes, Route} from "react-router-dom"

import Contact from "./compoents/pages/Contact"
import Home from "./compoents/pages/Home"
import Services from "./compoents/pages/Services"
import Header from "./compoents/partials/Header"
import serviceDetails from "./data/serviceDetails"
import Service from "./compoents/pages/Service"
export default function App() {

  let services = [
    "Deep Cleaning",
    "Filling",
    "Gum Massage",
    "Root Canal",
    "Oral Mud Bath",
  ]
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/services" element={<Services services={serviceDetails}/>}/>
        <Route path="/services/:id" element={<Service services = {serviceDetails} />} />
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </BrowserRouter>
  )
} 


