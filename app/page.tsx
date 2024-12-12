import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Forside',
  description: 'SDM Chiptuning',
}

export default function home() {
  return (
    <div className="bg-neutral-900 py-20 w-full">
      <div className="max-w-screen-xl px-4 mx-auto">
        <div className="text-4xl font-bold text-white">Hurtigt, nemt og billigt!</div>
        <hr className="opacity-10 py-2" />
        <img
          className="h-auto py-10 max-w-full rounded"
          width="560"
          src="/landingimg.png"
          alt=""
        />
        <div className="text-lg/7 py-6 text-white">
          Velkommen til <b>SDM Chiptuning</b>, hvor passion for biler møder mere
          end 1 års erfaring inden for professionel chip tuning. <br />
          Vi er specialister i at optimere ydeevne, brændstoføkonomi og
          køreglæde for alle typer biler.
        </div>
        <div className="text-lg/7 py-3 text-white">
          Med markedets nyeste teknologi og et skarpt fokus på kvalitet,
          skræddersyer vi løsninger til din bil, der sikrer pålidelighed og
          maksimal performance – altid med respekt for både bilens mekanik og
          gældende lovgivning.

            


          <div className="flex flex-col items-center">

          <div className="py-2 text-2xl font-bold pt-20 text-center">
              Tøv ikke med og kontakte os...
            </div>

            <button className="bg-white hover:opacity-30 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              <a href="/kontaktos">Kontakt os idag!</a>
            </button>
          </div>

            
        </div>
      </div>
    </div>
  );
}
