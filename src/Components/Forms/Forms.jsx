import './style.css'

export function Forms() {
  return (
    <>
      <fieldset>
        <form>
          <h2>Informações pessoais</h2>
          <div className="line"></div>

          <div className="group-wrapper">
            <div className="wrapper">
              <label htmlFor="">Name</label>
              <input type="text" />
            </div>

            <div className="wrapper">
              <label htmlFor="">Sobrenome</label>
              <input type="text" />
            </div>
          </div>

          <label htmlFor="">Email <small>(digite um email válido)</small></label>
          <input type="email" />

          <label htmlFor="">Senha <small>(mínimo de 6 caracteres)</small></label>
          <input type="password" />

          <h2>Informações do mentor</h2>
          <div className="line"></div>

          <label htmlFor="">Nome do seu mentor <small>(só o primeiro nome)</small></label>
          <input type="password" />

          <h2>Seus horários disponíveis</h2>
          <div className="line"></div>

          <h3>Primeira mentoria</h3>

          <div className="group-wrapper">
            <div className="wrapper">
              <label htmlFor="">Data<small>(DD/MM/AAAA)</small></label>
              <input type="password" />
            </div>
            <div className="col">
              <div className="wrapper">
                <label htmlFor="">Das</label>
                <input type="text" />
              </div>
              <div className="wrapper">
                <label htmlFor="">Até</label>
                <input type="text" />
              </div>
            </div>
          </div>

          <h3>Segunda mentoria</h3>

          <div className="group-wrapper">
            <div className="wrapper">
              <label htmlFor="">Data<small>(DD/MM/AAAA)</small></label>
              <input type="password" />
            </div>
            <div className="col">
              <div className="wrapper">
                <label htmlFor="">Das</label>
                <input type="text" />
              </div>
              <div className="wrapper">
                <label htmlFor="">Até</label>
                <input type="text" />
              </div>
            </div>
          </div>



        </form>
      </fieldset>
    </>
  );
}