export default function home() {
  return (
    <div className="bg-neutral-900 py-20 w-full">
      <div className="max-w-screen px-4 mx-auto">
        <div className="text-4xl font-bold">Hurtigt, nemt og billigt!</div>
        <hr className="opacity-10 py-2" />
        <img
          className="h-auto py-10 max-w-full rounded"
          width="560"
          src="/landingimg.png"
          alt=""
        />
        <div className="text-lg/7 py-6">
          Velkommen til <b>SDM Chiptuning</b>, hvor passion for biler møder mere
          end 1 års erfaring inden for professionel chip tuning. <br />
          Vi er specialister i at optimere ydeevne, brændstoføkonomi og
          køreglæde for alle typer biler.
        </div>
        <div className="text-lg/7 py-3 ">
          Med markedets nyeste teknologi og et skarpt fokus på kvalitet,
          skræddersyer vi løsninger til din bil, der sikrer pålidelighed og
          maksimal performance – altid med respekt for både bilens mekanik og
          gældende lovgivning.
          <div className=" justify-center">
            <div className="text-2xl font-bold pt-20 text-center">
              Kontakt os allerede idag!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
