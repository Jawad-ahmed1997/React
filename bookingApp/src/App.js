import logo from './logo.svg';
import './App.css';
import BookingForm from './components/BookingForm'
import BookinngHistory from './components/BookinngHistory'
import {GlobalProvider} from './context/store'


function App() {
  return (
   
   <GlobalProvider>
<div className="form-main d-flex justify-content-around align-items-center flex-column">
   <BookingForm/>
   <BookinngHistory/>
</div>
   </GlobalProvider>
    );
}

export default App;
