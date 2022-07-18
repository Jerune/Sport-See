import {StoreContext} from "./providers/StoreProvider"
import { useContext, useEffect } from 'react';
import {getUserData} from "./services/dataManager"

function App() {

  const [store] = useContext(StoreContext);
  useEffect(()=>{
    const refreshData = async()=>{
      await getUserData();
    }
    refreshData();
    
  }, []);
  return (
    <div>
        <p>
          {store.user.userInfos.firstName}
        </p>
    </div>
  );
}

export default App;
