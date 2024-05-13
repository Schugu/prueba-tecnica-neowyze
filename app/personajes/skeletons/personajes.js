export default function SkeletonPersonajes() {
  const arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  return (

    arr.map((x, index) => (
      <div
        key={index}
        className="w-44 h-72 flex flex-col items-center justify-start gap-5 p-2
      border border-solid border-yellow-500 border-opacity-50 bg-yellow-500 bg-opacity-15
      rounded-sm
      "
      >
        <section className="bg-black w-full h-28"></section>

        <section className="w-full h-48 flex flex-col gap-2">
          <article className="w-full bg-black h-1/4"></article>
          <article className="w-full bg-black h-1/4"></article>
          <article className="w-full bg-black h-1/4"></article>
          <article className="w-full bg-black h-1/4"></article>
        </section>
      </div>
    ))
  )
}
