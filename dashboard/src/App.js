import './App.css';
import AverageRating from './components/AverageRating';
import Reviews from './components/Reviews';
import SentimentAnalysis from './components/SentimentAnalysis';
import Sidebar from './components/Sidebar';
import Visitors from './components/WebsiteVisitors';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Reviews number="1,281"/>
      <AverageRating number="4.6"/>
      <SentimentAnalysis posNumber="960" neuNumber="122" negNumber="32"/>
      <Visitors number="821"/>
    </div>
  );
}

export default App;
