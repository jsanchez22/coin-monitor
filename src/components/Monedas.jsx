import Card from "./Card"

export default function Monedas({datos,pesos,showResult}) {
      const monedasName = [
        "Dolar oficial",
        "Dolar Blue",
        "Euro Oficial",
        "Euro Blue"
      ];
      
    return (
    <div className="row">
      {Object.keys(datos).map((moneda,index) => (
        moneda!="last_update"?        
        <div key={moneda} className="col-md-4 p-4 " >
          <Card  titulo={monedasName[index]} pesos={pesos} showResult={showResult} moneda={datos[moneda]} />
          </div>:""
          ))}
    </div>
  )
      }
