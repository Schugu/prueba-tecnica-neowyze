export default function SkeletonPeliculas() {
  const arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  return (
    <>
      {
        arr.map((x, index) => (
          <article
            key={index}
            className="flex gap-2 justify-start h-32 border border-solid
             border-yellow-500 border-opacity-50 bg-yellow-500 bg-opacity-15 
             rounded-sm p-2"
          >
            <div className="w-40 bg-black"></div>
            <div className="w-80 flex flex-col gap-2">
              <section className="bg-black w-full h-2/6"></section>
              <section className="bg-black w-full h-2/6"></section>
              <section className="w-full h-2/6 flex justify-end">
                <div className="w-2/6 bg-black"></div>
              </section>
            </div>
          </article>
        ))
      }
    </>
  )
}