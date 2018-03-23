import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Container, Row, Col } from 'reactstrap';

class Card extends React.Component {
    constructor(props) {
        super(props)
        this.idea=props.idea;
        console.log("iiiiiiiiiii");
        console.log(this.idea);
        console.log("iiiiiiiii");
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

  class Ideas extends React.Component {
    ideas = [/*{title: "aa",description:"bbb"}*/];
    constructor(){
        super();
    }
    componentWillMount() {
        const uri = "http://127.0.0.1:8000/api/v1/idea";
        fetch(uri)
          .then(response => {                            
              console.log(response)
              return response.json();
          })
          .then(empleados => {
            this.ideas = empleados;          
            console.log(this.ideas);

          })
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