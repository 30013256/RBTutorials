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
                <h1>Netlify</h1>
                <p className="mt-4 TutText">
                    This is a tutorial on how to get started with Netlify and deploy your "create react app" website on Netlify.
                </p>
                <h2 className="tut-h2-mt">What is Netlify</h2>
                <p className="mt-4 TutText">
                    Netlify is an online hosting service that provides free hosting for small websites, personal projects and hobbys. Netlify 
                    is one of the fastest ways to deploy a website. You can deploy a site to Netlify by uploading the files or with live deployment 
                    to a git repository, they also offer features like password protection and live notifications with paid pakages. 
                </p>
                <h2 className="tut-h2-mt">Sign up</h2>
                <p className="mt-4 TutText">
                    Step one is to login to Netlify, open <a href="https://www.netlify.com/">Netlify</a> if dont allready have an account go ahead and sign
                    up then login. After logging in you should be greeted with the team overview page and box labled "Sites" that you can upload files to.
                </p>
                <h2 className="tut-h2-mt">Build Folder</h2>
                <p className="mt-4 TutText">
                    The next step is get files to upload. If you made your app with "create react app" you can use the build command to get a compressed 
                    build version of your app with only the necessary files in a folder ready for deployment. Open your project in Visual Studio, open 
                    a terminal and enter the following command. 
                </p>
                <Card className="mt-4">
                    <Card.Header>
                        npm run build
                    </Card.Header>
                </Card>
                <h2 className="tut-h2-mt">Deployment</h2>
                <p className="mt-4 TutText">
                    The final step is to deploy your website. Take the build folder that was created with the build command and just drag it into the file upload 
                    box on netlify labled "Sites". Your website will now be live and you see a link to it on the team-overview tab.
                </p>
            </div>
        )
    }
}

