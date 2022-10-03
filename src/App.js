import AppRouter from './navigation/AppRouter';
import { AuthProvider } from './shared/UseAuth';

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
