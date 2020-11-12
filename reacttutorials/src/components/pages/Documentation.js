import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import OverlayScrollbars from 'overlayscrollbars';


export class Documentation extends Component {

    async componentDidMount(){
        await(10);
        var osInstance = OverlayScrollbars(document.body);
        osInstance.scroll({ top : 0 });
    }

    render() {
        return (
            <div style={{padding: '15px'}}>
                <Container className="text-dark" style={{maxWidth: '1400px', minHeight: '100vh', padding: '0px'}}>
                    <Row>   
                        <Col md="auto" style={{ marginTop: '200px', marginBottom: '200px' }}>               
                            <h1>Documentation</h1>
                            <h2 className="tut-h2-mt">What is this project</h2>
                            <p className="mt-4 TutText">
                                This project is a react tutorial website designed to help people learn the basics of react,
                                get started making a couple basic apps and also as a learning experience for our team.
                            </p>
                            <h2 className="tut-h2-mt">Who was this project for</h2>
                            <p className="mt-4 TutText">
                                This project was for Bruce Tuhakaraina and its target audience, junior web developers looking 
                                to learn a Javascript framework.
                            </p>
                            <h2 className="tut-h2-mt">What problem/issue did this project solve</h2>
                            <p className="mt-4 TutText">
                                This project was designed to help developers and our team learn React. It solved the problem 
                                of these developers and our team not knowing React.
                            </p>
                            <h2 className="tut-h2-mt">Who was involed in this project and what were there roles</h2>
                            <p className="mt-4 TutText">
                                The team members involved in this project were Jacques Rockell and Stephen Burgess. Both of us 
                                were involved in learning react online so we had prior knowledge to start making the website and 
                                tutorials. Jacques main role was to create the website and styling of the website and Stephen’s 
                                main role was to create the tutorials to add the website. 
                            </p>
                            <h2 className="tut-h2-mt">Resources reqired to complete this project</h2>
                            <p className="mt-4 TutText">
                            The resources we used to complete this project. Visual Studio Code, Adobe XD, Netlify, Github and Many tutorial videos (not all listed):<br/>
                            <a href="https://www.youtube.com/watch?v=MRIMT0xPXFI">https://www.youtube.com/watch?v=MRIMT0xPXFI</a><br/>
                            <a href="https://www.youtube.com/watch?v=sBws8MSXN7A">https://www.youtube.com/watch?v=sBws8MSXN7A</a><br/> 
                            <a href="https://www.youtube.com/watch?v=hdI2bqOjy3c">https://www.youtube.com/watch?v=hdI2bqOjy3c</a><br/>
                            <a href="https://www.linkedin.com/learning/learning-react-js-5/installing-react-developer-tools-for-firefox?u=56197641">https://www.linkedin.com/learning/learning-react-js-5/installing-react-developer-tools-for-firefox?u=56197641</a><br/>
                            <a href="https://www.youtube.com/watch?v=tOK9l5uP06U">https://www.youtube.com/watch?v=tOK9l5uP06U</a><br/> 
                            <a href="https://www.youtube.com/watch?v=DLX62G4lc44">https://www.youtube.com/watch?v=DLX62G4lc44</a><br/>
                            <a href="https://www.youtube.com/watch?v=bqSSLr8A8PU">https://www.youtube.com/watch?v=bqSSLr8A8PU</a><br/>
                            <a href="https://www.youtube.com/watch?v=93p3LxR9xfM">https://www.youtube.com/watch?v=93p3LxR9xfM</a><br/>

                            </p>
                            <h2 className="tut-h2-mt">Tasks and milestones completed in this project</h2>
                            <p className="mt-4 TutText">
                                The main milestones we completed in this project.
                                <br/> - Team members have learnt React.
                                <br/> - Team member have made some demo and test websites
                                <br/> - React tutorial website planned.
                                <br/> - React tutorial website Created.
                                <br/> - React tutorial website Tested and updated if needed. 
                                <br/> - React Tutorials planned.
                                <br/> - React Tutorials created.
                                <br/> - Tutorials added to the website.
                            </p>
                            <h2 className="tut-h2-mt">Tasks and milestones not completed in this project</h2>
                            <p className="mt-4 TutText">
                                The Milestones that have not yet been completed.
                                <br/> - Feedback on tutorials collected.
                                <br/> - Tutorials updated based on feedback.
                            </p>
                            <h2 className="tut-h2-mt">Github repository</h2>
                            <p className="mt-4 TutText">
                                Link to the github repository for this project.
                                <br/><a href="https://github.com/30013256/RBTutorials">github.com/30013256/RBTutorials</a>
                            </p>
                            <h2 className="tut-h2-mt">Screen shots of project in action</h2>
                            <p className="mt-4 TutText">
                                This website is the project in action.
                            </p>
                            <h2 className="tut-h2-mt">What went well with this project</h2>
                            <p className="mt-4 TutText">
                                The learning process went well, our team learnt react fast and other skills needed to create 
                                react websites like React Router and React Bootstrap.
                            </p>
                            <h2 className="tut-h2-mt">What did not go well with this project</h2>
                            <p className="mt-4 TutText">
                                We did not complete as many tutorials as we wanted for our website and it took longer than we 
                                thought it would to create our tutorials. We also took longer than we wanted to, to complete 
                                our project.
                            </p>
                        </Col>
                    </Row>
                </Container> 
            </div>
        )
    }
}

export default Documentation
