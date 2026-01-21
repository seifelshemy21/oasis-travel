import './App.css'
import Header from './components/Header'
import GoldenStandard from './components/GoldenStandard'
import Journeys from './components/Journeys'
function App() {


  return (
    <main className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar">
      <Header />
      <GoldenStandard />
      <Journeys />
    </main>
  )
}

export default App
