import Navbar from "@/app/components/Navbar"

export default function page() {
  return (
    <div className="flex flex-col gap-5 justify-center">
      <Navbar />
      <h1 className='capitalize text-2xl font-bold pt-3 text-center text-pink-900'>Expred items</h1>
    <div>
    <div className='mx-10 grid grid-cols-3 gap-3 overflow-y-auto  border-2 border-sky-600 p-5'>
          {[1,2,3,4,5,6,7].map((p)=>(
            <li className="bg-black text-white rounded-md p-2 hover:scale-105 cursor-pointer">hellow Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Rem placeat at iure et fuga hic! Vero atque laudantium architecto
               voluptatibus, delectus mollitia cum quibusdam? Quasi perspiciatis deleniti et aperiam vero.</li>
          ))}
    </div>
    </div>
    </div>
  )
}
