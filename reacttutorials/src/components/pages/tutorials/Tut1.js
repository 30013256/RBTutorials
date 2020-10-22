import React from 'react';
import OverlayScrollbars from 'overlayscrollbars';
import Card from 'react-bootstrap/Card';

export default class Tut1 extends React.Component {
    
    async componentDidMount(){
        await(10);
        var osInstance = OverlayScrollbars(document.body);
        osInstance.scroll({ top : 0 });
    }

    render() {
        return (
            <div className="text-dark text-wrap" style={{minHeight: '100vh', marginBottom: '200px'}}>
                <h1>Getting Started</h1>
                <p className="mt-4 TutText">
                    This is an introdution on what react is and how to get started using it.
                </p>
                <h2 className="tut-h2-mt">Getting Started: Introduction</h2>
                <h3 className="mt-5">What Is React?</h3>
                <p className="mt-4 TutText">
                    React JS is an open source Javascript library which is used for building user interfaces and their components. React is 
                    mainly maintained by facebook but is also maintained by a community of other companies and individual developers. 
                    Finally React JS is used to make many popular websites like Facebook, Instagram, Reddit, Airbnb and Netflix.
                </p>
                <h3 className="mt-5">Why Use React?</h3>
                <p className="mt-4 TutText">
                    React JS is very popular at the moment which means it has a large community to help you learn through tutorials or mentoring, 
                    React JS is also very scalable, this is due to how modular it is. Which means you can reuse the same modules in different 
                    programs. The community has also made components with these modules that you can freely use. React is also very well liked 
                    by developers, with some statistics saying that react is loved by 67% of developers.  
                </p>
                <h2 className="tut-h2-mt">Getting Started: Reqirements</h2>
                <h3 className="mt-5">Node.js</h3>
                <p className="mt-4 TutText">
                    You will need to have Nodejs installed, if you do not have it installed you can download it here:
                    <a href="https://nodejs.org/">nodejs.org</a>. If you allready have it installed you need to check that your node
                    version is 8.1 or higher and your npm version is 5.2 or higher, you can this by running the following commands in
                    your terminal.
                </p>
                <Card className="mt-4">
                    <Card.Header>
                        node -v
                        <br/>
                        npm -v
                    </Card.Header>
                </Card>
                <h3 className="mt-5">Skills</h3>
                <p className="mt-4 TutText">
                    These skills are not completly necessary but it's highly recomended you have at least some knoledge of them:  
                    HTML, CSS, JS and JSX. Some other usefull skills when makeing react websites are: GIT, NODE, NPM/YARN, React Redux and React Router.
                </p>
                <h2 className="tut-h2-mt">Getting Started: Create React App</h2>
                <h3 className="mt-5">Setting Up An Application</h3>
                <p className="mt-4 TutText">
                    Using "Create React App" allows you to quickly setup a React application, you can use the following commands in an empty 
                    folder to set it up and get a live server. <i>Note running create react app may take some time this is normal.</i>
                </p>
                <Card className="mt-4">
                    <Card.Header>
                        npx create-react-app myreactapp
                        <br/>
                        cd myreactapp
                        <br/>
                        npm start
                    </Card.Header>
                </Card>
                <h3 className="mt-5">Create React App Commands</h3>
                <p className="mt-4 TutText">
                    There are a couple Create React App commands, the two main ones you need to know are:
                </p>
                <Card className="mt-4">
                    <Card.Header>
                        npm start
                        <br/>
                        npm run build
                    </Card.Header>
                </Card>
                <p className="mt-4 TutText">
                    You can use npm start to open a live server at <a href="localhost:3000/">localhost:3000</a> and npm run build 
                    to create a build folder in your project ready to deploy.
                </p>
            </div>
        )
    }
}

