import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Om Os',
  description: 'SDM Chiptuning',
}

export default function Omos() {
  return (
    <div className="bg-neutral-900 py-20 w-full">
      <div className="max-w-screen-xl px-4 mx-auto">
        <div className="text-white text-4xl font-bold">Om Os</div>
        <hr className="opacity-10 py-2" />
        <img
          className="h-auto py-10 max-w-full rounded"
          width="560"
          src="/landingimg.png"
          alt=""
        />
        <div className="text-white text-lg/7 py-6">
          Vi er en nyopstartet virksomhed, der blev grundlagt den{" "}
          <b>1. oktober 2024</b>. Bag SDM Chiptuning er jeg, Lennart en
          passioneret bilentusiast og specialist i chiptuning, som arbejder
          dedikeret på at levere den bedste ydeevne til dig og din bil.
          <br /> Hos <b>SDM Chiptuning</b> tilbyder vi professionel optimering
          af bilers motorstyring, så du kan få mere ud af din bil – både i form
          af øget ydeevne, bedre brændstoføkonomi og en endnu mere
          tilfredsstillende køreoplevelse. <br />
          Udover chiptuning tilbyder vi også andre relaterede ydelser, der
          sikrer, at din bil præsterer optimalt. Som en enkeltmandsvirksomhed
          kan jeg garantere personlig service, høj kvalitet og en professionel
          tilgang. Din bil er i sikre hænder hos <b>SDM Chiptuning</b>, hvor vi
          altid sætter dine ønsker og behov i fokus.
        </div>
        <div className="text-white text-lg/7 py-3 ">
          Tak fordi du overvejer <b>SDM Chiptuning</b> – jeg ser frem til at
          hjælpe dig med at få det maksimale ud af din bil!
        </div>

        <div className="flex flex-col items-center">

          <div className="text-white py-2 text-2xl font-bold pt-20 text-center">
          Tøv ikke med og kontakte os...
          </div>

          <button className="bg-white hover:opacity-30 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          <a href="/kontaktos">Kontakt os idag!</a>
          </button>
          </div>

      </div>
    </div>
  );
}
