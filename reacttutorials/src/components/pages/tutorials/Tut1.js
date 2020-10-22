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
            <div className="text-dark" style={{minHeight: '100vh'}}>
                <h1>Getting Started</h1>
                <p className="mt-5 TutText">
                    This is an introdution on what react is and how to get started using it.
                </p>
                <h2 className="mt-5">Getting Started: Introduction</h2>
                <h3 className="mt-5">What Is React?</h3>
                <p className="mt-5 TutText">
                    React JS is an open source Javascript library which is used for building user interfaces and their components. React is 
                    mainly maintained by facebook but is also maintained by a community of other companies and individual developers. 
                    Finally React JS is used to make many popular websites like Facebook, Instagram, Reddit, Airbnb and Netflix.
                </p>
                <h3 className="mt-5">Why Use React?</h3>
                <p className="mt-5 TutText">
                    React JS is very popular at the moment which means it has a large community to help you learn through tutorials or mentoring, 
                    React JS is also very scalable, this is due to how modular it is. Which means you can reuse the same modules in different 
                    programs. The community has also made components with these modules that you can freely use. React is also very well liked 
                    by developers, with some statistics saying that react is loved by 67% of developers.  
                </p>

                <Card className="mt-5">
                    <Card.Header>
                        npx create-react-app
                    </Card.Header>
                </Card>
                <pre>
                    
                </pre>
            </div>
        )
    }
}

