import Prod from "../products.js";
import "../App.css";

function List() {

let Proo=[]
    for( let i=0;i<Prod.length;i++){
            if(Prod[i].id%2===0){
                Proo.push(Prod[i])
                console.log(Proo)
            }
    }
  return (
    <>
      <h1>Card Lists</h1>

<div className="cardcontainer">
  {Proo.map((value,index) => (
    <div key={value.id} className="carditems">
      <div className="card">
       
        <img src={value.image} alt="Product" /><span>{value.id}</span>
      </div>

      <div className="cardname">
        <h1>{value.title}</h1>
        <p>{value.description}</p>
        <h3>{value.category}</h3>
        <strong>Rating{value.rating.rate}</strong>
      </div>
    </div>
  ))}
</div>

    </>
  );
}

export default List;
