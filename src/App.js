import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import React,{ useState} from 'react'
import ContentForm from './Components/ContentForm';
function App() {
  const [data, setdata] = useState()

  return (
    <div>
      <Header changedata={datas=>setdata(datas)}/>
      <Sidebar />
      <ContentForm Parse={data}/>
      </div>
  );
}

export default App;
