import './styles/Footer.css'

function Footer () {
  return (
    <footer>
    <section className="informacoesadicionais">
      <img src="logo-gatopoles.png" alt="Logo Gatópoles" className='logoFooter'/>
    <p className="descricao">Sediada em São Paulo (SP), A Gatópoles Adoção de Gatinhos é uma ONG que resgata, trata e encaminha para adoção responsável gatos retirados das mais variádas situações de risco. </p>
    <div>
      <nav className='redesSociais'>
        <a href="#"><img src="facebook-icon.png" alt="Logo Facebook" /></a>
        <a href="#"><img src="instagram-icon.png" alt="Logo Instagram" /></a>
      </nav>
    </div>
    </section>
    <p className='copyRight'>Copyright © 2019 - GATÓPOLES - TODOS OS DIREITOS RESERVADOS</p>
  </footer>
  )
  
}

export default Footer