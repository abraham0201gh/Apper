import React from 'react';
import { Container, Row, Col } from 'reactstrap';
// import { Card, CardImg, CardText, CardBody, CardLink, CardTitle, CardSubtitle } from 'reactstrap';
import { Jumbotron } from 'reactstrap';
import { Card, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText, CardLink } from 'reactstrap';
import "./style.css";


export default class HomePage extends React.Component {
  render() {
    return (
      <Container className="main-container">
        {/* <Row>
          <Col>.col</Col>
        </Row> */}
        <Row className="main-row">

          <Col className="col-left">
            {/* <Card>
                <CardBody>
                    <CardTitle>John</CardTitle>
                    -----------<CardSubtitle>Card subtitle</CardSubtitle>
                </CardBody>
                    <img width="100%" src="https://via.placeholder.com/150" alt="Card image cap" />
                <CardBody>
                    <CardText> Trees.  Trees. Trees.  Trees. Trees. Trees.  </CardText>
                    <CardLink href="#" className="Link" >Portfolio</CardLink>
                    <CardLink href="#" className="Link">GitHub</CardLink>
                </CardBody>
            </Card>           */}

              <Jumbotron>
                <p className="display-3">Hello!</p>
                <img width="100%" src="https://via.placeholder.com/150" alt="Member Image" />
                {/* <p className="lead1">Trees.  Trees. Trees. Trees. Trees.  Trees. </p> */}
                <hr className="my-2" />
                <p className="lead1">Forests.  Forests.  Forests. Forests. Forests.  Froests.  Forests. Forests.  Forests.</p>
                <p className="lead2">
                <CardLink href="#" className="Link" >Portfolio</CardLink>
                <CardLink href="#" className="Link">GitHub</CardLink>
                {/* <Button color="primary">Learn More</Button> */}
                </p>
            </Jumbotron>
          </Col>

          <Col className="col-center">
            <Card>
                <CardHeader>App Name: Yellowstone Geysers  </CardHeader>
                <CardBody>
                    <CardTitle>Developer: John </CardTitle>
                    <CardText>About the App:   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</CardText>
                    <Button>View</Button>
                    <div img width="100%" src="https://via.placeholder.com/150" alt="Member Image" id="CardImage"></div>
                    </CardBody>
                <CardFooter></CardFooter>
            </Card>

            <Card>
                <CardHeader tag="h5">Featured APP: Yosemite Waterfalls</CardHeader>
                    <CardBody>
                    <CardTitle>Developer: Sam</CardTitle>
                    <CardText>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</CardText>
                    <Button>View</Button>
                    </CardBody>
                    <CardFooter></CardFooter>
            </Card>

            <Card>
                <CardHeader>App Name: Denali  </CardHeader>
                 <CardBody>
                    <CardTitle>Developer: William</CardTitle>
                    <CardText>About the App:  Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</CardText>
                    <Button>View</Button>
                    </CardBody>
                <CardFooter></CardFooter>
            </Card>
          </Col>

          <Col className="col-right">
            <Card body outline color="primary" Col className="rightCard1">
                <CardTitle>Blog Post</CardTitle>
                <CardText>Comments.</CardText>
            </Card>
            <Card body outline color="success" className="rightCard2">
                <CardTitle>Blog Post</CardTitle>
                <CardText>More Details.</CardText>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}




{/* <Footer className="text-muted"></Footer> */}
          {/* <Button color="secondary">Button</Button> */}
          {/* <Button color="secondary">Button</Button> */}



          {/* <Col className="col-right">/Col>
        </Row> */}
        {/* <Row>
          <Col xs="3">.col-3</Col>
          <Col xs="auto">.col-auto - variable width content</Col>
          <Col xs="3">.col-3</Col>
        </Row> */}
        {/* <Row>
          <Col xs="6">.col-6</Col>
          <Col xs="6">.col-6</Col>
        </Row>
        <Row>
          <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
          <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
          <Col sm="4">.col-sm-4</Col>
        </Row>
        <Row>
          <Col sm={{ size: 6, order: 2, offset: 1 }}>.col-sm-6 .order-sm-2 .offset-sm-1</Col>
        </Row>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>.col-sm-12 .col-md-6 .offset-md-3</Col>
        </Row>
        <Row>
          <Col sm={{ size: 'auto', offset: 1 }}>.col-sm-auto .offset-sm-1</Col>
          <Col sm={{ size: 'auto', offset: 1 }}>.col-sm-auto .offset-sm-1</Col>
        </Row> */}
      {/* </Container> */}
    {/* );
  }
} */}

{/* 

// src="https://via.placeholder.com/150"



// https://reactstrap.github.io/components/layout/

// import React from 'react';
// import { Container, Row, Col } from 'reactstrap';
 */}

{/* 
// export default class Example extends React.Component {
//   render() {
//     return (
//       <Container>
//         <Row>
//           <Col>.col</Col>
//         </Row>
//         <Row>
//           <Col>.col</Col>
//           <Col>.col</Col>
//           <Col>.col</Col>
//           <Col>.col</Col>
//         </Row>
//         <Row>
//           <Col xs="3">.col-3</Col>
//           <Col xs="auto">.col-auto - variable width content</Col>
//           <Col xs="3">.col-3</Col>
//         </Row>
//         <Row>
//           <Col xs="6">.col-6</Col>
//           <Col xs="6">.col-6</Col>
//         </Row>
//         <Row>
//           <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
//           <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
//           <Col sm="4">.col-sm-4</Col>
//         </Row>
//         <Row>
//           <Col sm={{ size: 6, order: 2, offset: 1 }}>.col-sm-6 .order-sm-2 .offset-sm-1</Col>
//         </Row>
//         <Row>
//           <Col sm="12" md={{ size: 6, offset: 3 }}>.col-sm-12 .col-md-6 .offset-md-3</Col>
//         </Row>
//         <Row>
//           <Col sm={{ size: 'auto', offset: 1 }}>.col-sm-auto .offset-sm-1</Col>
//           <Col sm={{ size: 'auto', offset: 1 }}>.col-sm-auto .offset-sm-1</Col>
//         </Row>
//       </Container>
//     );
//   }
// }

 */}
{/* 

// Container.propTypes = {
//     fluid:  PropTypes.bool
//     // applies .container-fluid class
//   }

//   Row.propTypes = {
//     noGutters: PropTypes.bool,
//     // see https://reactstrap.github.io/components/form Form Grid with Form Row
//     form: PropTypes.bool
//   }


//   const stringOrNumberProp = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
//   const columnProps = PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.number,
//     PropTypes.bool,
//     PropTypes.shape({
//       size: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string]),
//       // example size values:
//       // 12 || "12" => col-12 or col-`width`-12
//       // auto => col-auto or col-`width`-auto
//       // true => col or col-`width`
//       order: stringOrNumberProp,
//       offset: stringOrNumberProp
//     })
//   ]);

//   Col.propTypes = {
//     xs: columnProps,
//     sm: columnProps,
//     md: columnProps,
//     lg: columnProps,
//     xl: columnProps,
//     // override the predefined width (the ones above) with your own custom widths.
//     // see https://github.com/reactstrap/reactstrap/issues/297#issuecomment-273556116
//     widths: PropTypes.array,
//   } */}