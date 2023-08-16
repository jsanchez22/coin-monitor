import Card from "./Card";

export default function Monedas({ datos, pesos, showResult }) {

  const datoMonedas = datos.slice(0, 7);
  return (
    <div className="row">
      {datoMonedas.map((moneda, index) =>
        moneda.casa.nombre != "Bitcoin" ? (
          <div key={index} className="col-md-4 p-1">
            <Card 
              titulo={moneda.casa.nombre}
              pesos={pesos}
              showResult={showResult}
              moneda={moneda.casa}
            />
          </div>
        ) : (
          ""
        )
      )}
    </div>
  );
}
