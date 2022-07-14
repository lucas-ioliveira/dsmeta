import logo from '../../assets/img/logo.svg'

import './styles.css'

function header() {
    return (
        <header>
		<div className="dsmeta-logo-container">
			
			<img src={logo} alt="DSMeta"/>
			
            <h1>DSMeta</h1>
			
            <p>Desenvolvido por 
				<a href="https://www.linkedin.com/in/lucas-oliveira-8014a5232/"> Lucas Oliveira</a> 
				com auxilílio<a href="https://www.instagram.com/devsuperior.ig/"> @devsuperior.ig</a>
			</p>
		</div>
	</header>
    )


}

export default header
