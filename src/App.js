import AppRouter from './navigation/AppRouter';
import { AuthProvider } from './shared/UseAuth';
import Datatable from './features/Datatable/Datatable';

function App() {
  return (
    <>
    <AuthProvider>
        <AppRouter />
        {/* <Datatable /> */}
   </AuthProvider>
    </>
   
   
    
  )
}

export default App;
