import logo from './logo.svg';
import './App.css';
import React from "react";
import {ListGroup} from 'react-bootstrap';
import {Container, Button, ButtonGroup} from '@material-ui/core'
import FormatSize from '@material-ui/icons/FormatSize';
import FaceIcon from '@material-ui/icons/Face';

const FIFAWorldBestXI = props => {
  const goalKeeperM = ['Gianluigi Donnarumma (AC Milan/Paris Saint-Germain, Italy)'];
  const goalKeeperW = ['Christiane Endler (Paris Saint-Germain/Olympique Lyonnais)'];
  const goalKeeperMens = goalKeeperM.map(keeper => <ListGroup.Item key={keeper}>{keeper}</ListGroup.Item>)
  const goalKeeperWomens = goalKeeperW.map(keeper => <ListGroup.Item key={keeper}>{keeper}</ListGroup.Item>)
  const defendersMens = ['David Alaba (FC Bayern Munich/Real Madrid, Austria)', ' Leonardo Bonucci (Juventus FC, Italy)', ' Ruben Dias (Manchester City FC, Portugal)'];
  const defendersWomens = ['Millie Bright (Chelsea FC Women)', ' Lucy Bronze (Manchester City WFC)', ' Magdalena Eriksson (Chelsea FC Women)', ' Wendie Renard (Olympique Lyonnais)'];
  const midfieldersMens = ['Kevin De Bruyne (Manchester City FC, Belgium)', ' Jorginho (Chelsea FC, Italy)', ' NGolo Kante (Chelsea FC, France)'];
  const midfieldersWomens = ['Estefanía Banini (Levante UD/Atlético de Madrid Femenino)', ' Barbara Bonansea (Juventus FC Women)', ' Carli Lloyd (NJ/NY Gotham FC)'];
  const forwardsMens = ['Erling Haaland (Borussia Dortmund, Norway)', ' Robert Lewandowski (FC Bayern Munich, Poland)', ' Lionel Messi (FC Barcelona/Paris Saint-Germain, Argentina)', ' Cristiano Ronaldo (Juventus FC/Manchester United FC, Portugal)'];
  const forwardsWomens = ['Marta (Orlando Pride), Vivianne Miedema (Arsenal WFC) and Alex Morgan (Tottenham Hotspur FC Women/Orlando Pride/San Diego Wave FC)'];
  return(
      <div>
        {props.test ? <ListGroup>{goalKeeperMens}</ListGroup>: <ListGroup>{goalKeeperWomens}</ListGroup>}
        {props.test ? <ListGroup>{defendersMens}</ListGroup>: <ListGroup>{defendersWomens}</ListGroup>}
        {props.test ? <ListGroup>{midfieldersMens}</ListGroup>: <ListGroup>{midfieldersWomens}</ListGroup>}
        {props.test ? <ListGroup>{forwardsMens}</ListGroup>: <ListGroup>{forwardsWomens}</ListGroup>}
      </div>
  )
}

class WorldBestPlayers extends React.Component{
  state={
    title: 'The 2021 Men’s FIFA FIFPRO '
  }
  switchSex(){
    this.setState({showPlayers : !this.state.showPlayers})
  }
  render(){
    const changeTitle = () => this.setState({title: ' The 2021 Women’s FIFA FIFPRO'})
    return(
        <main className="boxx">
          <Container fixed maxWidth="xl" className="container">
            <h1>{this.state.title}</h1>
            <FIFAWorldBestXI test={this.state.showPlayers}/>
            <ButtonGroup color="primary" aria-label="outlined secondary button group">
            <Button startIcon={<FaceIcon />} onClick={() => this.switchSex()}>Zmień płeć drużyny</Button>
            <Button startIcon={<FormatSize />} onClick={changeTitle}>Zmień tytuł</Button>
            </ButtonGroup>
          </Container>
        </main>
    )
  }
}

function App() {
  return (
      <div className="App">
        <WorldBestPlayers/>
      </div>
  );
}

export default App;
