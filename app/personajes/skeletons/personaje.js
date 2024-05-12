
export default function SkeletonPersonaje() {
  return (
    <div className="flex flex-col gap-2 items-center w-full p2">
      <article className="border border-solid border-yellow-500 border-opacity-50 bg-yellow-500 bg-opacity-15
    rounded-sm w-60 h-80 p-2 flex flex-col gap-2">
        <section className="w-full h-44 bg-black"></section>

        <section className="flex flex-col gap-2">
          <div className="w-full bg-black h-4"></div>
          <div className="w-full bg-black h-3"></div>
          <div className="w-full bg-black h-3"></div>
          <div className="w-full bg-black h-3"></div>
          <div className="w-full bg-black h-3"></div>
          <div className="w-full bg-black h-3"></div>
          <div className="w-full bg-black h-3"></div>
        </section>
      </article>
    </div>
  )
}
