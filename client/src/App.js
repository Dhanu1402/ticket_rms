import Default from './layout/Default';
import Home from './pages/home/Home';
import './App.css';
import Dashboard from './pages/dashboard/Dashboard';
import AddTicket from './pages/newTicket/AddTicket';
import TicketList from './pages/ticketList/TicketList';

export default function App() {
  return (
    <div className="App">
      <Default>
        <Dashboard />
        <AddTicket />
        <TicketList />
      </Default>
      {/* <Home /> */}
    </div>
  );
}
