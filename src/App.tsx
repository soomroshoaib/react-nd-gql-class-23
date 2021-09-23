
import './App.css';
import Misscontainer from './Components/Mission';
import  MissionInfo  from "./MissionInfo/MissionInfo";
import PropType from "prop-types"

function App() {
  return (
    <div>
      <Misscontainer />
      <MissionInfo data={{
        __typename: undefined,
        launches: undefined
      }}   />

    </div>
  );
}

export default App;
