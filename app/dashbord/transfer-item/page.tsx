

export default function page() {
  return (
    <div className="flex flex-col gap-5 justify-center">
      <h1 className='capitalize text-2xl font-bold pt-3 text-center text-pink-900'>Expred items</h1>
    <div className='ml-40'>
    <h1  className='capitalize text-2xl font-bold pt-3 text-center text-pink-900'>items</h1>
    <div className='h-[300px] overflow-y-auto flex flex-col gap-3 border-2 border-sky-600 p-4'>
          {[1,2,3,4,5,6,7].map((p)=>(
            <li>hellow Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Rem placeat at iure et fuga hic! Vero atque laudantium architecto
               voluptatibus, delectus mollitia cum quibusdam? Quasi perspiciatis deleniti et aperiam vero.</li>
          ))}
    </div>
    </div>
    </div>
  )
}
