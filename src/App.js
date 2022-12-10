import Portfolio from "./Components/Portfolio";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function App() {
  return (
    <div>
      <Portfolio />
    </div>
  );
}

export default App;
