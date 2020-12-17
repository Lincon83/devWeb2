// Concentrador de todos os componetes

// import HelloWorld from './componentes/HelloWorld';
import MyJumbotron from './componentes/MyJumbotron'
import api from './services/api'
import Table from 'react-bootstrap/Table'
import { useState } from 'react';

// import {Button} from './componentes/MyJumbotron'

const App = () => {

  let [alunos, setAlunos] = useState([]);

  api.get('/aluno').then(result => {
    setAlunos(result.data.dados);
    console.log(alunos);
    
  })
  return (
    <div>
      <MyJumbotron />
      <Table striped bordered hover size>
  <thead>
    <tr>
      <th>id</th>
      <th>Nome</th>
      <th>Email</th>
      <th>Criacao</th>
    </tr>
  </thead>
  <tbody>
   {alunos.map(aluno => {
     return (
       <tr>
        <td>{aluno._id</td>
        <td>{aluno.nome</td>
        <td>{aluno.email</td>
        <td>{aluno.data_criacao</td>
       </tr>
      );
     })}
    </tbody>
   </Table>
  </div>
 );
}

export default App;
