import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import OverlayScrollbars from 'overlayscrollbars';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    async componentDidMount(){
        await(10);
        var osInstance = OverlayScrollbars(document.body);
        osInstance.scroll({ top : 0 });
    }

    render() {
        return (
            <div style={{padding: '15px'}}>            
                <Container className=" text-dark" style={{maxWidth: '1400px', minHeight: '100vh', padding: '0px'}}>          
                    <Row style={{marginTop: '140px' }}>
                        <Col style={{ marginBottom: '200px' }}>
                            <h1>Demo Websites</h1>
                            <h2 className="tut-h2-mt">Movie Api App</h2>
                            <p className="mt-4 TutText">
                                Link:  
                                <a href="https://unruffled-villani-8d6398.netlify.app/">unruffled-villani-8d6398.netlify.app</a>
                                <br/>
                                Github:
                                <a href="https://github.com/30013256/ReactTestMovieSite">github.com/30013256/ReactTestMovieSite</a>
                                <br/>
                                This website was made as a test site for react bootstrap, react router and general react utilisation.
                            </p>

                            
                            <h2 className="tut-h2-mt">Todo List App</h2>
                            <p className="mt-4 TutText">
                                Link:  
                                <a href="https://unruffled-almeida-d123b1.netlify.app/">unruffled-almeida-d123b1.netlify.app</a>
                                <br/>
                                Github:
                                <a href="https://github.com/30013256/ReactTodolist">github.com/30013256/ReactTodolist</a>
                                <br/>
                                This website was made to test basic react funtions.
                            </p>
                            
                            <h2 className="tut-h2-mt">Wether App</h2>
                            <p className="mt-4 TutText">
                                Link:  
                                <a href="https://elastic-hugle-ea03d7.netlify.app/">elastic-hugle-ea03d7.netlify.app</a>
                                <br/>
                                Github:
                                <a href="https://github.com/30017128/WeatherApp1">github.com/30017128/WeatherApp1</a>
                                <br/>
                                The react weatherapp uses an api fetched from a website to get the weather it does this by the user entering the location into the search box which will set the const query once the enter key is pressed it will use the search event which fetches the location weather from the api and makes the result the setWeather const. This then get’s displayed in the location box as weather.name and weather.sys.country. The location box also gets and displays the current date from a date builder which gets the day month and year. The last box is the weather box which displays the weather temp and type from the weather const. We also have a if statement which changes the background depending on if the weather is above or below 17c.
                            </p>
                        </Col> 
                    </Row>
                </Container>          
            </div>
        )
    }
}

