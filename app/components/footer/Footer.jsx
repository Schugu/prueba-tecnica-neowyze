import Link from "next/link"

export default function Footer() {
  return (
    <section className="w-full p-4 border-t-2 border-yellow-500 flex
    items-center justify-center">
      <p tabIndex={1000} className="inline-block text-center">Página creada por: <Link href='https://github.com/Schugu' className="text-yellow-500 
        hover:border-b hover:border-yellow-600"
        >Leandro Daniel Schugurensky</Link></p>
    </section>
  )
}
