import Header from '../components/header/Header_v2.jsx'
import Footer from '../components/footer/Footer_v2.jsx'
import CalendarioSection from '../components/Calendario/CalendarioSection.jsx'

export default function CalendarioPage() {
  return (
    <main style={{ paddingTop: '68px' }}>
      <Header />
      <CalendarioSection />
      <Footer />
    </main>
  )
}
