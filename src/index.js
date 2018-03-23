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

class Newidea extends React.Component {
    uri="";
    constructor() {
        super()
    }

    render() {
        return (
        <div className="contentCenter">
            <Container>
                <Row>
                    <Col>
                    <h2>Muestranos tu idea</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <form action={this.uri} method="POST">
                        <input type="text" name="title" placeholder="Ingrese el titulo" />
                        <input type="text" name="description" placeholder="Descripcion" />
                        <input type="submit" />
                    </form>
                    </Col>
                </Row>
            </Container>
        </div>
      )
    }
}

class Ideas extends React.Component {
    ideas = [{title: "aa",content:"bbb"},
     {title: "aa",content:"bbb"},
      {title: "aa",content:"bbb"}, 
      {title: "aa",content:"bbb"},
      {title: "aa",content:"bbb"},
      {title: "aa",content:"bbb"}, 
      {title: "aa",content:"bbb"}];
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
                <div className="fatherForm">
                    <Newidea />
                </div>
                <Container>
                    <Row>
                        <Col>
                            <div className="contentCenter">
                                <h1>¡Desarrolla una idea!</h1>
                            </div>
                        </Col>
                    </Row>
                    {this.ideas.map(i => 
                    <Row>
                        <Col>
                        <div className="contentCenter">
                            <Card idea={i}/>
                        </div>
                        </Col>
                    </Row>
                    )}
                </Container>
            </div>

        );
    }
}

ReactDOM.render(
    <Ideas />,
    document.getElementById('root')
  );