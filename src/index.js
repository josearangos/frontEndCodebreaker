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
                <p>{this.idea.description}</p>
            </div>
        </div>
      )
    }
}

class Newidea extends React.Component {
    uri="http://127.0.0.1:8000/api/v1/idea/";
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
    ideas = [{title: "educación",description:"app para compartir ejercicios de fisica resultos"},
     {title: "agrotech",description:"drones para fumigar cultivos"},
      {title: "tursitapp",description:"App para contratar guías turisticos"}  
     ]
    constructor(){
        super();
    }
    componentDidMount() {
        const uri = "http://127.0.0.1:8000/api/v1/idea/";
        fetch(uri)
          .then(response => {                            
              console.log(response)
              return response.json();
          })
          .then(res => {
            this.ideas = res;          
            console.log(this.ideas);
            this.forceUpdate();
        })
        
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