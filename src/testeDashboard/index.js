import React from 'react';
import Pie from '../lib/Pie';

import { Container, OperandoParado, LinhasAtraso, TempoMedio, Row, TempoMedioMotorista, Tabela } from './styles';
import Bar from '../lib/Bar';
import Line from '../lib/Line';
import Radar from '../lib/Radar';
import Table from '../lib/Table';

function Dashboard() {
  
  const dados = {
    labels: ['Operando', 'Parado'], 
    data: [500, 140]
  }
  const dadosBar = {
    labels: ['8001-10', '4051-10', '4051-10', '4051-10', '4051-10', '4051-10', '4051-10', '4051-10', '4051-10', '4051-10'], 
    data: [10, 20, 30, 50, 15, 18, 45, 43, 43, 35],
  }
  const dadosLine = {
    labels: ['8001-10', '4051-10', '4051-10', '4051-10', '4051-10', '4051-10', '4051-10', '4051-10', '4051-10', '4051-10'], 
    data: [10, 20, 20, 20, 20, 20, 20, 20, 20, 20],
  }

  const dadosTabela = {
    header: ["Linha", "Ônibus"],
    body: [
      ["RF693", "4 PARADOS DE 10 ÔNIBUS"],
      ["RF693", "10 PARADOS DE 30 ÔNIBUS"],
      ["RF693", "TODOS OS 10 ÔNIBUS CIRCULANDO"],
    ]
  }
  
  return (
    <Container>
      <Row>
        <LinhasAtraso>
          <Bar dados={dadosBar} titulo="Linhas com maior atraso"/>
        </LinhasAtraso>
        <OperandoParado>
          <Pie dados={dados} titulo="Ônibus operando x Ônibus parado"/>
        </OperandoParado>
        <TempoMedio>
          <Line dados={dadosLine} titulo="Tempo médio de viagem por periodo"/>
        </TempoMedio>
      </Row>
      <Row>
        <TempoMedioMotorista>
          <Radar dados={dadosBar} titulo="Tempo médio de vigem por motorista"/>
        </TempoMedioMotorista>
        <Tabela>        
          <Table dados={dadosTabela}/>
        </Tabela>
      </Row>
    </Container>
  ) 
}

export default Dashboard;