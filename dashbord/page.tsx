import Navbar from "../app/components/Navbar"
import { GiBoxUnpacking } from "react-icons/gi";
const Dashbord = () => {
  return (
 <div>
    <Navbar />  
    <h1 className='capitalize text-2xl font-bold pt-5 text-center'>wellcome to central lab coordinat dashbord</h1>   
    <div className="grid grid-cols-2 gap-8">
        <div><GiBoxUnpacking /></div>
        <div> </div>
         <div></div>
          <div> </div>
    </div>
 </div>
  )
}
export default Dashbord