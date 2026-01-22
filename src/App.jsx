import './App.css'
import Header from './components/Header'
import GoldenStandard from './components/GoldenStandard'
import Journeys from './components/Journeys'
import Description from './components/Description'
import Extraordinary from './components/Extraordinary'
function App() {


  return (
    <main className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar">
      <Header />
      <GoldenStandard />
      <Journeys />
      <Description />
      <Extraordinary />
    </main>
  )
}

export default App
