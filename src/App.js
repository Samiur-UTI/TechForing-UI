import './App.css';
import NavigationBar from './components/navbar/navbar.component'
import {Container,Row} from 'react-bootstrap'
import Jumbo from './components/jumbotron/jumbotron.component'
import Endorsements from './components/endorsements/endorsements.component'
import Scan from './components/scan/scan.component'
import SampleReport from './components/sample-report/sample-report.component'
function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Container>
        <Jumbo/>
        <Endorsements/>
        <Scan/>
        <SampleReport/>
      </Container>
    </div>
  );
}

export default App;
