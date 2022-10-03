import AppRouter from './navigation/AppRouter';
import { AuthProvider } from './shared/UseAuth';

function App() {
  return (
    <>
    <AuthProvider>
        <AppRouter />
   </AuthProvider>
    </>
   
   
    
  )
}

export default App;
