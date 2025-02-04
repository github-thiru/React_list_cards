export function Menu() {
  let arr = ["Home", "Products", "About", "Service"];

  let ul = {
    display: "flex",
    justifyContent: "space-evenly",
    // backgroundColor: "gray",
    height: "20px",
    padding:"20px",
    margin:"0px"
  };


  return (
    <>
      <div classname="menucss" style={{height:"20px",backgroundcolor:"gray"}}> 
        <ul style={ul}>
          {arr.map((value, index) => {
            return (
              <li
                key="index"
                style={{
                  listStyleType: "none",
                  textDecoration: "none",
                  height: "20px",
                }}
              >
                <a href="#">{value}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
