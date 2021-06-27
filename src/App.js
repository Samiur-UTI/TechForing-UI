import './App.css';
import NavigationBar from './components/navbar/navbar.component'
import {Container} from 'react-bootstrap'
import Jumbo from './components/jumbotron/jumbotron.component'
import Endorsements from './components/endorsements/endorsements.component'
import Scan from './components/scan/scan.component'
import SampleReport from './components/sample-report/sample-report.component'
import TestInfo from './components/test-info/test-info.component'
import Features from './components/features/features.component'
import Testimonials from './components/testmonials/testimonials.component'
import Pricing from './components/pricing/pricing.component';
function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Container>
        <Jumbo/>
        <Endorsements/>
        <Scan/>
        <SampleReport/>
        <TestInfo/>
        <Endorsements/>
        <Features/>
        <Testimonials/>
        <Pricing/>
      </Container>
    </div>
  );
}

export default App;
