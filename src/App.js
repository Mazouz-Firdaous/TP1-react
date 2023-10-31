import "./App.css";
import Calcul from "./component/Calcul";
import Count from "./component/Count";
import Explorer from "./component/Explorer";
import Slides from "./component/Slides";
import Inscription from "./component/Inscription";
import Tpslider from "./component/TPslider";

function App(){
  return(
  <div className="App">
    {/*<Explorer/>*/}
    <br />
    <Count/>
    <br />
    <Tpslider/>
    <br />
    {/*<Inscription/>*/}
  </div>

  );
  
}
export default App;
