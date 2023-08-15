import Card from "./Card"

export default function Monedas({datos,pesos,showResult}) {
      const monedasName = [
        "Dolar oficial",
        "Dolar Blue",
        "Euro Oficial",
        "Euro Blue"
      ];
      const datoMonedas = datos.slice(0,7)
    return (
    <div className="row">
      {datoMonedas.map((moneda,index) => (
        moneda.casa.nombre!="Bitcoin"?        
        <div key={index} className="col-md-4 p-4 " >
          <Card  titulo={moneda.casa.nombre} pesos={pesos} showResult={showResult} moneda={moneda.casa} />
          </div>:""
          ))}
    </div>
  )
      }
