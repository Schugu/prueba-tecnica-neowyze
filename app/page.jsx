import Image from "next/image";


export default function Home() {
  return (
    <main className="flex flex-col items-center gap-4 p-4 min-h-screen">
      <Image
        width={700}
        height={300}
        src='/star-wars.jpg'
        alt="Portada"
        className="w-2/5"
      ></Image>
      <p className="indent-16 inline-block">
        En una galaxia lejana, en un tiempo de conflictos interminables y héroes
        inesperados, la Fuerza sigue siendo el hilo conductor que une los destinos
        de aquellos que se atreven a desafiar el lado oscuro. En los confines del
        espacio, la lucha entre la Alianza Rebelde y el Imperio Galáctico alcanza
        su punto álgido, mientras los Jedi, guardianes ancestrales de la paz y la
        justicia, se alzan nuevamente para restaurar el equilibrio en la galaxia.
      </p>

      <p className="indent-16 inline-block">
        En medio de este caos galáctico, nuevos héroes surgen para enfrentar su
        propio destino. Desde los rincones más remotos de los planetas periféricos
        hasta las imponentes naves de guerra, la esperanza brilla como una estrella
        en la oscuridad, mientras los corazones valientes se unen en una lucha épica
        por la libertad y la redención.
      </p>

      <p className="indent-16 inline-block">
        En este universo de aventuras sin fin, donde los saberes antiguos se entrelazan
        con la tecnología más avanzada, donde la amistad y el amor desafían al odio y
        la desesperación, cada paso es una elección que puede cambiar el curso de la
        historia. Y así, la saga de Star Wars continúa, una epopeya intergaláctica que
        cautiva la imaginación de generaciones, recordándonos que incluso en los
        momentos más oscuros, la luz siempre encuentra un camino para brillar.
        Que la Fuerza esté contigo, siempre.
      </p>
    </main>
  );
}
