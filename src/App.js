import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/Header/Header";



function App() {

    const {onToggleButton, tg} = useTelegram();

    useEffect(()=> {
      tg.ready();
    }, [])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<ProductList />}/>
        <Route path={'form'} element={<Form />}/>
      </Routes>
    </div>
  );
}

export default App;
