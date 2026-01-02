import { useNavigate } from "react-router-dom"
export default function (){
    
  let navigate = useNavigate();

    return (
        <main className="h-full flex">
            <div className="m-auto p-2 flex flex-col justify-center align-middle gap-y-4"  >
                <h1 className="text-center" >
                    Benvenuto, da qui puoi effettuare una lettura dei tarocchi
                </h1>
                <h2 className="text-center" >
                    clicca qui sotto per iniziare subito
                </h2>
                <button className=" m-auto act-btn w-1/2 font-semibold"
                    onClick={()=>navigate("/tarots")}>Comincia ora</button>
                
            </div>
        </main>
    )
}