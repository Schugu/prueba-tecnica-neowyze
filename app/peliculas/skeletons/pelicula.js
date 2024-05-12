export default function SkeletonPelicula() {
  return (
    <article className="flex w-10/12 h-48 gap-2 border p-2
    border-solid border-yellow-500 border-opacity-50 bg-yellow-500 
    bg-opacity-15 rounded-sm"
    >
      <div className="w-64 h-44 bg-black rounded-sm"
      ></div>


      <div className="flex flex-col justify-center items-center gap-2 h-44 flex-grow">
        <section className="w-full h-1/6 bg-black rounded-sm"></section>
        <section className="w-full h-1/6 bg-black rounded-sm"></section>
        <section className="w-full h-1/6 bg-black rounded-sm"></section>
      </div>
    </article>



  )
}