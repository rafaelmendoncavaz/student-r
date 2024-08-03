function App() {

  const date = new Date()

  function getMonth() {
    switch (date.getMonth()) {
      case 0:
        return 'Janeiro'
      case 1:
        return 'Fevereiro'
      case 2:
        return 'Março'
      case 3:
        return 'Abril'
      case 4:
        return 'Maio'
      case 5:
        return 'Junho'
      case 6:
        return 'Julho'
      case 7:
        return 'Agosto'
      case 8:
        return 'Setembro'
      case 9:
        return 'Outubro'
      case 10:
        return 'Novembro'
      case 11:
        return 'Dezembro'
      default:
        return 'Mês inválido'
    }
  }

  return (
    <>
      <div>
        <header>
          <div className="max-w-5xl px-3 mx-auto mt-[100px] flex justify-center gap-20">
            <div>
              <img src="https://www.kenzie.com.br/_next/image?url=%2Fimages%2Flogo.png&w=256&q=75" alt="Kenzie Academy Brasil" />
            </div>
            <div>
              <h1 className="font-bold text-lg">
                Kenzie Academy Brasil - Curso de Programação Online
              </h1>
              <p>
                R. Barão do Cerro Azul, 952 - Terreo 01 - Centro
              </p>
              <p>
                São José dos Pinhais - PR, 83005-430
              </p>
              <p>
                CNPJ 35.224.825/0001-74
              </p>
              <p>
                contato@kenzie.com.br
              </p>
            </div>
          </div>
        </header>
        <main className="font-serif my-[100px] text-lg">
          <div className="max-w-5xl mx-auto px-3">
            <h1 className="text-center text-2xl font-extrabold">
              Atestado de Matrícula
            </h1>
            <p className="text-justify my-14">
              A Escola de Programação Kenzie Academy Brasil, através deste, declara para os devidos fins de comprovação, direito e efeitos, que o(a) aluno(a) <span className="font-extrabold">RAFAEL MENDONÇA VAZ</span> encontra-se regularmente matriculado(a) no curso <span className="font-extrabold">Programação Fullstack</span>, atualmente no módulo <span className="font-extrabold">06 - Fundamentos de BackEnd com Node.js</span>, totalizando até o presente momento <span className="font-extrabold">899 horas</span>.
            </p>
          </div>
          <div className="max-w-5xl mx-auto px-3 flex items-center justify-between">
            <p>
              Daniel Kriger <br /> <span className="italic font-semibold">CEO, Co-fundador Kenzie Academy Brasil</span>
            </p>
            <p className="">
              São José dos Pinhais, {date.getDate().toLocaleString()} de {getMonth()} de {date.getFullYear()}
            </p>
          </div>
          <div className="max-w-5xl mx-auto px-3 text-right my-10">
            Código de autenticação: {crypto.randomUUID()}{Date.now()}
            <p>
              Gerado às {date.toLocaleTimeString()} <br />
              Acesse https://www.kenzie.com.br/ para autenticar
            </p>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
