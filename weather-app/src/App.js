import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TempratureAndDetails from './components/TempratureAndDetails';

function App() {
  return (
    <div className='mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400 rounded-lg'>
      <TopButtons/>
      <Inputs/>
      <TimeAndLocation/>
      <TempratureAndDetails/>
    </div>
  );
}

export default App;
