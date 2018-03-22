import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Container, Row, Col } from 'reactstrap';

class Card extends React.Component {
    constructor(props) {
        super(props)
        this.idea=props.idea;
        console.log(this.idea);
    }

    render() {
        return (
        <div className="card">
            <div className="tittleCard">
                <h2>{this.idea.title}</h2>
            </div>
            <div className="contentCard">
                <p>{this.idea.content}</p>
            </div>
        </div>
      )
    }
  }

  class Ideas extends React.Component {
    ideas = [/*{title: "aa",content:"bbb"}*/];
    constructor(){
        super();
    }
    componentWillMount() {
        /*const uri = "";
        fetch(uri)
          .then((response) => {
            return response.json()
          })
          .then((empleados) => {
            this.ideas = empleados;
          })*/
      }

    render() {
        return(
            <div>
                <Container>
                    <Row>
                        <Col>
                            <div className="contentCenter">
                                <h1>¡Desarrolla una idea!</h1>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="contentCenter">
                                {this.ideas.map(i => <Card idea={i}/>)}
                            </div>
                        </Col>
                    </Row>
                    
                </Container>
            </div>

        );
    }
  }

ReactDOM.render(
    <Ideas />,
    document.getElementById('root')
  );