import "./style.css";
import Mensagem from "../../components/ComponentesDashBoard/Mensagem";
import Leads from "../../components/ComponentesDashBoard/Leads";
import Atendimentos from "../../components/ComponentesDashBoard/Atendimentos";
import Avaliacoes from "../../components/ComponentesDashBoard/Avaliacoes";
import Ativo from "../../components/ComponentesDashBoard/Ativo";
import Departamento from "../../components/ComponentesDashBoard/Departamento";
import AtendentesOnline from "../../components/ComponentesDashBoard/AtendentesOnline";
import AtendimentosAtivos from "../../components/ComponentesDashBoard/AtendimentosAtivos";
import AtendimentosPendentes from "../../components/ComponentesDashBoard/AtendimentosPendentes";
import BotsOnline from "../../components/ComponentesDashBoard/BotsOnline";
import AtendimentosAtivosProgress from "../../components/ComponentesDashBoard/AtendimentosAtivosProgress";


export default function DashBoard() {
  return (
    <div className="col">

        <div className="Header" style={{ display: "flex" }}>
          <h1 className="Title">DashBoard</h1>
          <p className="Date">
            11/08/2024 ~ 16/08/2024
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-calendar-date"
              viewBox="0 0 16 16"
            >
              <path d="M6.445 11.688V6.354h-.633A13 13 0 0 0 4.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23" />
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
            </svg>
          </p>
        </div>
        <hr></hr>
        <div className="Content">
          <p className="DashBoardNovidades">Novidades</p>

          <div className="GraficosSecundarios">
          <AtendentesOnline/>
          <AtendimentosAtivos/>
          <AtendimentosPendentes/>
          <BotsOnline/>
          </div>
<br></br>

          <div className="GraficosPrimarios">
            <Ativo />
            <Departamento />
          </div>
          <br></br>
          <div className="GraficosSecundarios">
            <Leads/>
            <Mensagem />
            <Atendimentos/>
            <Avaliacoes />
          </div>
<br></br>
          <div className="GraficosPrimarios">
          <AtendimentosAtivosProgress/>
          <AtendimentosAtivosProgress/>
          </div>
          
          <div className="GraficosPrimarios">
          <AtendimentosAtivosProgress/>
          <AtendimentosAtivosProgress/>
          </div>
       

        </div>
      </div>
  );
}
