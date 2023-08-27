import Default from './layout/Default';
import Home from './pages/home/Home';
import './App.css';
import Dashboard from './pages/dashboard/Dashboard';
import AddTicket from './pages/newTicket/AddTicket';

export default function App() {
  return (
    <div className="App">
      <Default>
        <Dashboard />
        <AddTicket />
      </Default>
      {/* <Home /> */}
    </div>
  );
}
