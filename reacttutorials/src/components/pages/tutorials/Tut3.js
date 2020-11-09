import React from 'react';
import OverlayScrollbars from 'overlayscrollbars';
import Card from 'react-bootstrap/Card';

export default class Tut3 extends React.Component {
    async componentDidMount(){
        await(10);
        var osInstance = OverlayScrollbars(document.body);
        osInstance.scroll({ top : 0 });
    }

    render() {
        return (
            <div className="text-dark text-wrap" style={{minHeight: '100vh', marginBottom: '200px'}}>
                <h1>How to make a functioning Weather App</h1>
                <p className="mt-4 TutText">
                First you want to start a new react base app by using npx create-react-app.
                </p>
                <p className="mt-4 TutText">
                    Modify your index.js file to look like this
                </p>
                <Card className="mt-4">
                    <Card.Header>
                    {
                    /* HTML generated using hilite.me */
                    }
                    <div
                    style={{
                        background: "rgba(0,0,0,0)",
                        overflow: "auto",
                        width: "auto",
                        padding: "none"
                    }}
                    >
                    <pre style={{ margin: 0, lineHeight: "125%" }}>
                        <span style={{ color: "#0000ff" }}>import</span> React from{" "}
                        <span style={{ color: "#a31515" }}>'react'</span>;{"\n"}
                        <span style={{ color: "#0000ff" }}>import</span> ReactDOM from{" "}
                        <span style={{ color: "#a31515" }}>'react-dom'</span>;{"\n"}
                        <span style={{ color: "#0000ff" }}>import</span> App from{" "}
                        <span style={{ color: "#a31515" }}>'./App'</span>;{"\n"}
                        <span style={{ color: "#0000ff" }}>import</span> * as serviceWorker from{" "}
                        <span style={{ color: "#a31515" }}>'./serviceWorker'</span>;{"\n"} {"\n"}
                        ReactDOM.render(&lt;App /&gt;,document.getElementById(
                        <span style={{ color: "#a31515" }}>'root'</span>){"\n"});{"\n"} {"\n"}
                        <span style={{ color: "#008000" }}>
                        // If you want your app to work offline and load faster, you can change
                        </span>
                        {"\n"}
                        <span style={{ color: "#008000" }}>
                        // unregister() to register() below. Note this comes with some pitfalls.
                        </span>
                        {"\n"}
                        <span style={{ color: "#008000" }}>
                        // Learn more about service workers: https://bit.ly/CRA-PWA
                        </span>
                        {"\n"}serviceWorker.unregister();{"\n"}
                    </pre>
                    </div>

                    </Card.Header>
                </Card>
                <p className="mt-4 TutText">
                Next you will want to delete index.css and all references to it.
                Delete logo.svg and any references to it and get rid of the header section in app.js
                Replace this with a h1 placeholder. Also make sure to change function app to class app like this.

                </p>
                <Card className="mt-4">
                    <Card.Header>
                        <div
                        style={{
                            background: "rgba(0,0,0,0)",
                            overflow: "auto",
                            width: "auto",
                            padding: "none"
                        }}
                        >
                        <pre style={{ margin: 0, lineHeight: "125%" }}>
                            <span style={{ color: "#0000ff" }}>import</span> React from{" "}
                            <span style={{ color: "#a31515" }}>'react'</span>;{"\n"}
                            <span style={{ color: "#0000ff" }}>import</span>{" "}
                            <span style={{ color: "#a31515" }}>'./App.css'</span>;{"\n"} {"\n"}
                            <span style={{ color: "#0000ff" }}>class</span> App{" "}
                            <span style={{ color: "#0000ff" }}>extends</span> Component{"{"}
                            {"\n"}
                            {"  "}render() {"{"}
                            {"\n"}
                            {"  "}
                            <span style={{ color: "#0000ff" }}>return</span> ({"\n"}
                            {"    "}&lt;div className=<span style={{ color: "#a31515" }}>"App"</span>
                            &gt;{"\n"}
                            {"      "}&lt;h1&gt;&lt;
                            <span style={{ border: "1px solid #FF0000" }}>/h1&gt;</span>
                            {"\n"}
                            {"    "}&lt;<span style={{ border: "1px solid #FF0000" }}>/div&gt;</span>
                            {"\n"}
                            {"  "});{"\n"} {"}"}
                            {"\n"}
                            {"}"}
                            {"\n"} {"\n"}
                            <span style={{ color: "#0000ff" }}>export</span>{" "}
                            <span style={{ color: "#0000ff" }}>default</span> App;{"\n"}
                        </pre>
                        </div>
                    </Card.Header>
                </Card>
                <p className="mt-4 TutText">
                We will not need the App.css file so you can just delete it.
                The first thing we will want to do after this is get your api key from https://openweathermap.org/api. We first need to make an account to get this api key which is as easy as pressing the sign in button then then create an account button then get the api keys from here. Now we need to generate our own Api key called ReactApp by giving it that name and generating it. Then copy it into app.js as a const like this.
                </p>
                <Card className="mt-4">
                    <Card.Header>
                        <div
                        style={{
                            background: "rgba(0,0,0,0)",
                            overflow: "auto",
                            width: "auto",
                            padding: "none"
                        }}
                        >
                        <pre style={{ margin: 0, lineHeight: "125%" }}>
                          <span style={{ color: "#0000ff" }}>import</span> React from{" "}
                          <span style={{ color: "#a31515" }}>'react'</span>;{"\n"}
                          <span style={{ color: "#0000ff" }}>import</span>{" "}
                          <span style={{ color: "#a31515" }}>'./App.css'</span>;{"\n"}
                          <span style={{ color: "#0000ff" }}>const</span> api ={"  "}
                          {"{"} key:{" "}
                          <span style={{ color: "#a31515" }}>"bec827eddeda130d96042852d494a0a8"</span>
                          ,{"\n"}
                          {"}"}
                          {"\n"} {"\n"} {"\n"}
                          <span style={{ color: "#0000ff" }}>function</span> App() {"{"}
                          {"\n"}
                          {"  "}
                          <span style={{ color: "#0000ff" }}>return</span> ({"\n"}
                          {"    "}&lt;div className=<span style={{ color: "#a31515" }}>"App"</span>
                          &gt;{"\n"}
                          {"      "}
                          {"\n"}
                          {"    "}&lt;<span style={{ border: "1px solid #FF0000" }}>/div&gt;</span>
                          {"\n"}
                          {"  "});{"\n"}
                          {"}"}
                          {"\n"} {"\n"}
                          <span style={{ color: "#0000ff" }}>export</span>{" "}
                          <span style={{ color: "#0000ff" }}>default</span> App;{"\n"}
                        </pre>
                      </div>
                    </Card.Header>
                </Card>
                <p className="mt-4 TutText">
                Then we need to put in the base api url which is this
                </p>
                <Card className="mt-4">
                    <Card.Header>
                        <div
                        style={{
                            background: "rgba(0,0,0,0)",
                            overflow: "auto",
                            width: "auto",
                            padding: "none"
                        }}
                        >
                        <pre style={{ margin: 0, lineHeight: "125%" }}>
                            <span style={{ color: "#0000ff" }}>const</span> api ={"  "}
                            {"{"} key:{" "}
                            <span style={{ color: "#a31515" }}>"bec827eddeda130d96042852d494a0a8"</span>
                            ,{"\n"}base:{" "}
                            <span style={{ color: "#a31515" }}>
                            "https://api.openweathermap.org/data/2.5/"
                            </span>
                            {"\n"}
                            {"}"}
                            {"\n"}
                        </pre>
                        </div>
                    </Card.Header>
                </Card>
                <p className="mt-4 TutText">
                    Now you need two images to represent warm and cold temperature. These can be anything you like Once you have these two images, create a new folder in src called assets and put them in that folder.
                    <br/>
                    <br/>
                    Next we need to add a search box to our app we can do this by inserting this code which names the div and setting the input types.
                   
                </p>
                <Card className="mt-4">
                    <Card.Header>
                        <div
                        style={{
                            background: "rgba(0,0,0,0)",
                            overflow: "auto",
                            width: "auto",
                            padding: "none"
                        }}
                        >
                        <pre style={{ margin: 0, lineHeight: "125%" }}>
                            <span style={{ color: "#0000ff" }}>function</span> App() {"{"}
                            {"\n"}
                            {"  "}
                            <span style={{ color: "#0000ff" }}>return</span> ({"\n"}
                            {"    "}&lt;div className=<span style={{ color: "#a31515" }}>"App"</span>
                            &gt;{"\n"}
                            {"      "}&lt;main&gt;{"\n"}
                            {"        "}&lt;div classname=
                            <span style={{ color: "#a31515" }}>"search-box"</span>&gt; {"\n"}
                            {"        "}&lt;input{"\n"}
                            {"         "}type=<span style={{ color: "#a31515" }}>"text"</span>
                            {"\n"}
                            {"         "}className=
                            <span style={{ color: "#a31515" }}>"search-bar"</span>
                            {"\n"}
                            {"         "}placeholder=
                            <span style={{ color: "#a31515" }}>"Search..."</span>
                            {"\n"}
                            {"         "}/&gt;{"\n"}
                            {"        "}&lt;
                            <span style={{ border: "1px solid #FF0000" }}>/div&gt;</span>
                            {"\n"}
                            {"      "}&lt;<span style={{ border: "1px solid #FF0000" }}>/main&gt;</span>
                            {"\n"}
                            {"    "}&lt;<span style={{ border: "1px solid #FF0000" }}>/div&gt;</span>
                            {"\n"}
                            {"  "});{"\n"}
                            {"}"}
                            {"\n"}
                        </pre>
                        </div>
                    </Card.Header>
                </Card>
                <p className="mt-4 TutText">
                Now we need to add some simple code to index.css to style the search box. We also want to use the images in this css code.
                </p>
                <Card className="mt-4">
                    <Card.Header>
                        <div
                        style={{
                            background: "rgba(0,0,0,0)",
                            overflow: "auto",
                            width: "auto",
                            padding: "none"
                        }}
                        >
                        <pre style={{ margin: 0, lineHeight: "125%" }}>
                            {" "}
                            * {"{"}
                            {"\n"}
                            {"  "}margin: 0;{"\n"}
                            {"  "}padding: 0;{"\n"}
                            {"  "}box-sizing: border-box;{"\n"}
                            {"}"}
                            {"\n"} {"\n"}body {"{"}
                            {"\n"}
                            {"  "}font-family: <span style={{ color: "#a31515" }}>'montseratt'</span>,
                            sans-serif;{"\n"}
                            {"}"}
                            {"\n"} {"\n"}.app {"{"}
                            {"\n"}
                            {"  "}background-image: url(
                            <span style={{ color: "#a31515" }}>'./assets/cold.jpg'</span>);{"\n"}
                            {"  "}background-size: cover;{"\n"}
                            {"  "}background-position: bottom;{"\n"}
                            {"  "}transition: 0.4 ease;{"\n"}
                            {"}"}
                            {"\n"} {"\n"}.app.warm {"{"}
                            {"\n"}
                            {"  "}background-image: url(
                            <span style={{ color: "#a31515" }}>'./assets/warm.jpg'</span>);{"\n"}
                            {"}"}
                            {"\n"} {"\n"}main {"{"}
                            {"\n"}
                            {"  "}min-height: 100vh;{"\n"}
                            {"  "}background-image: linear-gradient(to bottom, rgba(0, 0, 0,{"       "}
                            0.2), rgba(0, 0, 0, 0.75));{"\n"}
                            {"  "}padding: 25px;{"\n"} {"\n"}
                            {"}"}
                            {"\n"}
                        </pre>
                        </div>
                    </Card.Header>
                </Card>
                <p className="mt-4 TutText">
                Now we want to add the css for the actual search box to make it look pretty.
                </p>
                <Card className="mt-4">
                    <Card.Header>
                        <div
                        style={{
                            background: "rgba(0,0,0,0)",
                            overflow: "auto",
                            width: "auto",
                            padding: "none"
                        }}
                        >
                        <pre style={{ margin: 0, lineHeight: "125%" }}>
                            {" "}
                            .search-box {"{"}
                            {"\n"}
                            {"  "}width: 100%;{"\n"}
                            {"  "}margin: 0 0 75px;{"\n"}
                            {"}"}
                            {"\n"} {"\n"}.search-box .search-bar {"{"}
                            {"\n"}
                            {"  "}display: block;{"\n"}
                            {"  "}width: 100%;{"\n"}
                            {"  "}padding: 15px;{"\n"} {"\n"}
                            {"  "}appearance: none;{"\n"}
                            {"  "}background: none;{"\n"}
                            {"  "}border: none;{"\n"}
                            {"  "}outline: none;{"\n"} {"\n"}
                            {"  "}background-color: rgba(255, 255, 255, 0.5);{"\n"}
                            {"  "}border-radius: 0px 0px 16px 16px;{"\n"}
                            {"  "}margin-top: -25px;{"\n"} {"\n"}
                            {"  "}box-shadow: 0px 5px rgba(0, 0, 0, 0.2);{"\n"}
                            {"  "}
                            {"\n"}
                            {"  "}color: <span style={{ border: "1px solid #FF0000" }}>#</span>313131;
                            {"\n"}
                            {"  "}font-size: 20px;{"\n"} {"\n"}
                            {"  "}transition: 0.4s ease;{"\n"}
                            {"}"}
                            {"\n"} {"\n"}.search-box .search-bar:focus {"{"}
                            {"\n"}
                            {"  "}background-color: rgba(255, 255, 255, 0.75);{"\n"}
                            {"}"}
                            {"\n"}
                        </pre>
                        </div>;
                    </Card.Header>
                </Card>
                <p className="mt-4 TutText">
                After this we want to go back to our app.js file. We need to make a new div and inside of this we need to make a locationbox. Which will get our location and the date and inside this we will have a date builder.

                </p>
                <Card className="mt-4">
                    <Card.Header>
                        <div
                        style={{
                            background: "rgba(0,0,0,0)",
                            overflow: "auto",
                            width: "auto",
                            padding: "none"
                        }}
                        >
                        <pre style={{ margin: 0, lineHeight: "125%" }}>
                          &lt;div classname=<span style={{ color: "#a31515" }}>"search-box"</span>&gt;{" "}
                          {"\n"}
                          {"        "}&lt;input{"\n"}
                          {"         "}type=<span style={{ color: "#a31515" }}>"text"</span>
                          {"\n"}
                          {"         "}className=
                          <span style={{ color: "#a31515" }}>"search-bar"</span>
                          {"\n"}
                          {"         "}placeholder=
                          <span style={{ color: "#a31515" }}>"Search..."</span>
                          {"\n"}
                          {"         "}/&gt;{"\n"}
                          {"        "}&lt;
                          <span style={{ border: "1px solid #FF0000" }}>/div&gt;</span>
                          {"\n"}
                          {"        "}&lt;div className=
                          <span style={{ color: "#a31515" }}>"location-box"</span>&gt;{"\n"}
                          {"            "}&lt;div className=
                          <span style={{ color: "#a31515" }}>"location"</span>&gt;Tauranga, NZ&lt;
                          <span style={{ border: "1px solid #FF0000" }}>/div&gt;</span>
                          {"\n"}
                          {"            "}&lt;div className=
                          <span style={{ color: "#a31515" }}>"date"</span>&gt;{"{"}dateBuilder(
                          <span style={{ color: "#0000ff" }}>new</span>
                          {"   "}Date()){"}"}&lt;
                          <span style={{ border: "1px solid #FF0000" }}>/div&gt;</span>
                          {"\n"}
                          {"          "}&lt;
                          <span style={{ border: "1px solid #FF0000" }}>/div&gt;</span>
                          {"\n"}
                          {"      "}&lt;<span style={{ border: "1px solid #FF0000" }}>/main&gt;</span>
                          {"\n"}
                          {"    "}&lt;<span style={{ border: "1px solid #FF0000" }}>/div&gt;</span>
                          {"\n"}
                        </pre>
                      </div>
                    </Card.Header>
                </Card>
                <p className="mt-4 TutText">
                Then we need to add underneath the app in the app.js file a const for our datebuilder and we need to make an array for it which includes all the months and days.               
                </p>
                <Card className="mt-4">
                    <Card.Header>
                        <div
                        style={{
                            background: "rgba(0,0,0,0)",
                            overflow: "auto",
                            width: "auto",
                            padding: "none"
                        }}
                        >
                        <pre style={{ margin: 0, lineHeight: "125%" }}>
                          <span style={{ color: "#0000ff" }}>function</span> App() {"{"}
                          {"\n"}
                          {"  "}
                          {"\n"}
                          {"  "}
                          <span style={{ color: "#0000ff" }}>const</span> dateBuilder = (d) =&gt;{" "}
                          {"{"}
                          {"\n"}
                          {"    "}
                          <span style={{ color: "#0000ff" }}>let</span> months = [
                          <span style={{ color: "#a31515" }}>"January"</span>,{" "}
                          <span style={{ color: "#a31515" }}>"February"</span>,{" "}
                          <span style={{ color: "#a31515" }}>"March"</span>, {"\n"}
                          {"    "}
                          <span style={{ color: "#a31515" }}>"April"</span>,{" "}
                          <span style={{ color: "#a31515" }}>"May"</span>,{" "}
                          <span style={{ color: "#a31515" }}>"June"</span>,{" "}
                          <span style={{ color: "#a31515" }}>"July"</span>,{" "}
                          <span style={{ color: "#a31515" }}>"August"</span>,{" "}
                          <span style={{ color: "#a31515" }}>"September"</span>, {"\n"}
                          {"    "}
                          <span style={{ color: "#a31515" }}>"October"</span>,{" "}
                          <span style={{ color: "#a31515" }}>"November"</span>,{" "}
                          <span style={{ color: "#a31515" }}>"December"</span>];{"\n"}
                          {"    "}
                          <span style={{ color: "#0000ff" }}>let</span> days = [
                          <span style={{ color: "#a31515" }}>"Sunday"</span>,{" "}
                          <span style={{ color: "#a31515" }}>"Monday"</span>,{" "}
                          <span style={{ color: "#a31515" }}>"Tuesday"</span>, {"\n"}
                          {"    "}
                          <span style={{ color: "#a31515" }}>"Wednesday"</span>,{" "}
                          <span style={{ color: "#a31515" }}>"Thursday"</span>,{" "}
                          <span style={{ color: "#a31515" }}>"Friday"</span>,{" "}
                          <span style={{ color: "#a31515" }}>"Saturday"</span>];{"\n"}
                          {"}"}
                          {"\n"}
                        </pre>
                      </div>
                    </Card.Header>
                </Card>
                <p className="mt-4 TutText">
                Now we need to be able to return our days and months from the array which we can do by adding a get method and returning these values below our array.
                </p>
                <Card className="mt-4">
                    <Card.Header>
                        <div
                        style={{
                            background: "rgba(0,0,0,0)",
                            overflow: "auto",
                            width: "auto",
                            padding: "none"
                        }}
                        >
                        
                            <pre style={{ margin: 0, lineHeight: "125%" }}>
                                <span style={{ color: "#0000ff" }}>function</span> App() {"{"}
                                {"\n"}
                                {"  "}
                                {"\n"}
                                {"  "}
                                <span style={{ color: "#0000ff" }}>const</span> dateBuilder = (d) =&gt;{" "}
                                {"{"}
                                {"\n"}
                                {"    "}
                                <span style={{ color: "#0000ff" }}>let</span> months = [
                                <span style={{ color: "#a31515" }}>"January"</span>,{" "}
                                <span style={{ color: "#a31515" }}>"February"</span>,{" "}
                                <span style={{ color: "#a31515" }}>"March"</span>, {"\n"}
                                {"    "}
                                <span style={{ color: "#a31515" }}>"April"</span>,{" "}
                                <span style={{ color: "#a31515" }}>"May"</span>,{" "}
                                <span style={{ color: "#a31515" }}>"June"</span>,{" "}
                                <span style={{ color: "#a31515" }}>"July"</span>,{" "}
                                <span style={{ color: "#a31515" }}>"August"</span>,{" "}
                                <span style={{ color: "#a31515" }}>"September"</span>, {"\n"}
                                {"    "}
                                <span style={{ color: "#a31515" }}>"October"</span>,{" "}
                                <span style={{ color: "#a31515" }}>"November"</span>,{" "}
                                <span style={{ color: "#a31515" }}>"December"</span>];{"\n"}
                                {"    "}
                                <span style={{ color: "#0000ff" }}>let</span> days = [
                                <span style={{ color: "#a31515" }}>"Sunday"</span>,{" "}
                                <span style={{ color: "#a31515" }}>"Monday"</span>,{" "}
                                <span style={{ color: "#a31515" }}>"Tuesday"</span>, {"\n"}
                                {"    "}
                                <span style={{ color: "#a31515" }}>"Wednesday"</span>,{" "}
                                <span style={{ color: "#a31515" }}>"Thursday"</span>,{" "}
                                <span style={{ color: "#a31515" }}>"Friday"</span>,{" "}
                                <span style={{ color: "#a31515" }}>"Saturday"</span>];{"\n"} {"\n"}
                                {"    "}
                                <span style={{ color: "#0000ff" }}>let</span> day = days[d.getDay()];{"\n"}
                                {"    "}
                                <span style={{ color: "#0000ff" }}>let</span> date = d.getDate();{"\n"}
                                {"    "}
                                <span style={{ color: "#0000ff" }}>let</span> month = months[d.getMonth()];
                                {"\n"}
                                {"    "}
                                <span style={{ color: "#0000ff" }}>let</span> year = d.getFullYear();{"\n"}{" "}
                                {"\n"}
                                {"    "}
                                <span style={{ color: "#0000ff" }}>return</span>{" "}
                                <span style={{ border: "1px solid #FF0000" }}>`</span>${"{"}day{"}"} ${"{"}
                                date{"}"} ${"{"}month{"}"} ${"{"}year{"}"}
                                <span style={{ border: "1px solid #FF0000" }}>`</span>
                                {"\n"}
                                {"  "}
                                {"}"}
                                {"\n"}
                            </pre>
                            </div>
                    </Card.Header>
                </Card>
                <p className="mt-4 TutText">
                Next we want to create another box underneath our location box called the weather box which will include the temperature and weather type.
                </p>
                <Card className="mt-4">
                    <Card.Header>
                        <div
                        style={{
                            background: "rgba(0,0,0,0)",
                            overflow: "auto",
                            width: "auto",
                            padding: "none"
                        }}
                        >
                        <pre style={{ margin: 0, lineHeight: "125%" }}>
                            &lt;div className=<span style={{ color: "#a31515" }}>"weather-box"</span>
                            &gt;{"\n"}
                            {"            "}&lt;div className=
                            <span style={{ color: "#a31515" }}>"temp"</span>&gt;{"\n"}
                            {"              "}20<span style={{ border: "1px solid #FF0000" }}>°</span>c
                            {"\n"}
                            {"            "}&lt;
                            <span style={{ border: "1px solid #FF0000" }}>/div&gt;</span>
                            {"\n"}
                            {"            "}&lt;div{"   "}className=
                            <span style={{ color: "#a31515" }}>"weather"</span>&gt;{"{"}
                            weather.weather[0].main{"}"}&lt;
                            <span style={{ border: "1px solid #FF0000" }}>/div&gt;</span>
                            {"\n"}
                            {"        "}&lt;
                            <span style={{ border: "1px solid #FF0000" }}>/div&gt;</span>
                            {"\n"}
                        </pre>
                        </div>
                    </Card.Header>
                </Card>
                <p className="mt-4 TutText">
                Now we can style our new boxes by putting this new code into our index.css file.
                </p>
                <Card className="mt-4">
                    <Card.Header>
                        <div
                        style={{
                            background: "rgba(0,0,0,0)",
                            overflow: "auto",
                            width: "auto",
                            padding: "none"
                        }}
                        >
                        <pre style={{ margin: 0, lineHeight: "125%" }}>
                            .location-box .location {"{"}
                            {"\n"}
                            {"  "}color: <span style={{ border: "1px solid #FF0000" }}>#</span>FFF;
                            {"\n"}
                            {"  "}font-size: 32px;{"\n"}
                            {"  "}font-weight: 500;{"\n"}
                            {"  "}text-align: center;{"\n"}
                            {"  "}text-shadow: 3px 3px rgba(50, 50, 70, 0.5);{"\n"}
                            {"}"}
                            {"\n"} {"\n"}.location-box .date {"{"}
                            {"\n"}
                            {"  "}color: <span style={{ border: "1px solid #FF0000" }}>#</span>FFF;
                            {"\n"}
                            {"  "}font-size: 20px;{"\n"}
                            {"  "}font-weight: 300;{"\n"}
                            {"  "}font-style: italic;{"\n"}
                            {"  "}text-align: center;{"\n"}
                            {"  "}text-shadow: 2px 2px rgba(50, 50, 70, 0.5);{"\n"}
                            {"}"}
                            {"\n"} {"\n"}.weather-box {"{"}
                            {"\n"}
                            {"  "}text-align: center;{"\n"}
                            {"}"}
                            {"\n"} {"\n"}.weather-box .temp {"{"}
                            {"\n"}
                            {"  "}position: relative;{"\n"}
                            {"  "}display: inline-block;{"\n"}
                            {"  "}margin: 30px auto;{"\n"}
                            {"  "}background-color: rgba(255, 255, 255, 0.2);{"\n"}
                            {"  "}border-radius: 16px;{"\n"} {"\n"}
                            {"  "}padding: 15px 25px;{"\n"} {"\n"}
                            {"  "}color: <span style={{ border: "1px solid #FF0000" }}>#</span>FFF;
                            {"\n"}
                            {"  "}font-size: 102px;{"\n"}
                            {"  "}font-weight: 900;{"\n"} {"\n"}
                            {"  "}text-shadow: 3px 6px rgba(50, 50, 70, 0.5);{"\n"}
                            {"  "}text-align: center;{"\n"}
                            {"  "}box-shadow: 3px 6px rgba(0, 0, 0, 0.2);{"\n"}
                            {"}"}
                            {"\n"} {"\n"}.weather-box .weather {"{"}
                            {"\n"}
                            {"  "}color: <span style={{ border: "1px solid #FF0000" }}>#</span>FFF;
                            {"\n"}
                            {"  "}font-size: 48px;{"\n"}
                            {"  "}font-weight: 700;{"\n"}
                            {"  "}text-shadow: 3px 3px rgba(50, 50, 70, 0.5);{"\n"}
                            {"}"}
                            {"\n"}
                        </pre>
                        </div>

                    </Card.Header>
                </Card>
                <p className="mt-4 TutText">
                    
                 Now we can go back to our app.js file and add in a const called query that has a useState and we need to put this below the function App.

                </p>
                <Card className="mt-4">
                    <Card.Header>
                        <div
                        style={{
                            background: "rgba(0,0,0,0)",
                            overflow: "auto",
                            width: "auto",
                            padding: "none"
                        }}
                        >
                        
                        <pre style={{ margin: 0, lineHeight: "125%" }}>
                            <span style={{ color: "#0000ff" }}>function</span> App() {"{"}
                            {"\n"}
                            {"  "}
                            <span style={{ color: "#0000ff" }}>const</span> [query, setQuery] =
                            useState(<span style={{ color: "#a31515" }}>''</span>);{"\n"}
                        </pre>
                        </div>

                    </Card.Header>
                </Card>
                <p className="mt-4 TutText">
                We also need to specify useState in our React import
                </p>
                <Card className="mt-4">
                    <Card.Header>
                        <div
                        style={{
                            background: "rgba(0,0,0,0)",
                            overflow: "auto",
                            width: "auto",
                            padding: "none"
                        }}
                        >
                        <pre style={{ margin: 0, lineHeight: "125%" }}>
                            <span style={{ color: "#0000ff" }}>import</span> React, {"{"} useState {"}"}{" "}
                            from <span style={{ color: "#a31515" }}>'react'</span>;{"\n"}
                        </pre>
                        </div>

                    </Card.Header>
                </Card>
                <p className="mt-4 TutText">
                We then need to do another const below the Set query called weather.
                </p>
                <Card className="mt-4">
                    <Card.Header>
                        <div
                        style={{
                            background: "rgba(0,0,0,0)",
                            overflow: "auto",
                            width: "auto",
                            padding: "none"
                        }}
                        >
                        
                        <pre style={{ margin: 0, lineHeight: "125%" }}>
                            <span style={{ color: "#0000ff" }}>const</span> [weather, setWeather] =
                            useState({"{"}
                            {"}"});{"\n"}
                        </pre>
                        </div>

                    </Card.Header>
                </Card>
                <p className="mt-4 TutText">
                Now we need to make the search equal to the event function, which uses the enter key to fetch the api weather depending on your query. The weather our query will return is also in metric, by using a result which will return the weather. We can add this code below the const weather.
                </p>
                <Card className="mt-4">
                    <Card.Header>
                        <div
                        style={{
                            background: "rgba(0,0,0,0)",
                            overflow: "auto",
                            width: "auto",
                            padding: "none"
                        }}
                        >
                        <pre style={{ margin: 0, lineHeight: "125%" }}>
                            <span style={{ color: "#0000ff" }}>const</span> search = evt =&gt; {"{"}
                            {"\n"}
                            {"    "}
                            <span style={{ color: "#0000ff" }}>if</span> (evt.key ==={" "}
                            <span style={{ color: "#a31515" }}>"Enter"</span>) {"{"}
                            {"\n"}
                            {"      "}fetch(<span style={{ border: "1px solid #FF0000" }}>`</span>${"{"}
                            api.base{"}"}weather?q=${"{"}query{"}"}&amp;units=metric&amp;APPID=${"{"}
                            api.key{"}"}
                            <span style={{ border: "1px solid #FF0000" }}>`</span>){"\n"}
                            {"        "}.then(res =&gt; res.json()){"\n"}
                            {"        "}.then(result =&gt; setWeather(result));{"\n"}
                            {"        "}
                            {"}"}
                            {"\n"}
                            {"    "}
                            {"}"}
                            {"\n"}
                        </pre>
                        </div>
                    </Card.Header>
                </Card>
                <p className="mt-4 TutText">
                Now we need to set up our search bar with the search function. We can do this by first getting the input of text we typed in by adding this code.
                </p>
                <Card className="mt-4">
                    <Card.Header>
                        <div
                        style={{
                            background: "rgba(0,0,0,0)",
                            overflow: "auto",
                            width: "auto",
                            padding: "none"
                        }}
                        >
                        <pre style={{ margin: 0, lineHeight: "125%" }}>
                            &lt;input{"\n"}
                            {"         "}type=<span style={{ color: "#a31515" }}>"text"</span>
                            {"\n"}
                            {"         "}className=
                            <span style={{ color: "#a31515" }}>"search-bar"</span>
                            {"\n"}
                            {"         "}placeholder=
                            <span style={{ color: "#a31515" }}>"Search..."</span>
                            {"\n"}
                            {"         "}onChange={"{"}e =&gt; setQuery(e.target.value){"}"}
                            {"\n"}
                            {"         "}/&gt;{"\n"}
                        </pre>
                        </div>

                    </Card.Header>
                </Card>
                <p className="mt-4 TutText">
                Then we need to find and set this value and we need to make it search on key press. We can do this by adding in these two lines of code.
                </p>
                <Card className="mt-4">
                    <Card.Header>
                        <div
                        style={{
                            background: "rgba(0,0,0,0)",
                            overflow: "auto",
                            width: "auto",
                            padding: "none"
                        }}
                        >
                        <pre style={{ margin: 0, lineHeight: "125%" }}>
                            &lt;input{"\n"}
                            {"         "}type=<span style={{ color: "#a31515" }}>"text"</span>
                            {"\n"}
                            {"         "}className=
                            <span style={{ color: "#a31515" }}>"search-bar"</span>
                            {"\n"}
                            {"         "}placeholder=
                            <span style={{ color: "#a31515" }}>"Search..."</span>
                            {"\n"}
                            {"         "}onChange={"{"}e =&gt; setQuery(e.target.value){"}"}
                            {"\n"}
                            {"         "}value={"{"}query{"}"}
                            {"\n"}
                            {"         "}onKeyPress={"{"}search{"}"}
                            {"\n"}
                            {"         "}/&gt;{"\n"}
                        </pre>
                        </div>
                    </Card.Header>
                </Card>
                <p className="mt-4 TutText">
                Another little thing we want to add to app.js is to set the query to an empty string after it has been entered. We can do this by adding these small lines of code to const search. We also want to console log the result so we can see it working in the terminal.
                </p>
                <Card className="mt-4">
                    <Card.Header>
                        <div
                        style={{
                            background: "rgba(0,0,0,0)",
                            overflow: "auto",
                            width: "auto",
                            padding: "none"
                        }}
                        >
                        <pre style={{ margin: 0, lineHeight: "125%" }}>
                          <span style={{ color: "#0000ff" }}>const</span> search = evt =&gt; {"{"}
                          {"\n"}
                          {"    "}
                          <span style={{ color: "#0000ff" }}>if</span> (evt.key ==={" "}
                          <span style={{ color: "#a31515" }}>"Enter"</span>) {"{"}
                          {"\n"}
                          {"      "}fetch(<span style={{ border: "1px solid #FF0000" }}>`</span>${"{"}
                          api.base{"}"}weather?q=${"{"}query{"}"}&amp;units=metric&amp;APPID=${"{"}
                          api.key{"}"}
                          <span style={{ border: "1px solid #FF0000" }}>`</span>){"\n"}
                          {"        "}.then(res =&gt; res.json()){"\n"}
                          {"        "}.then(result =&gt; {"{"}
                          {"\n"}
                          {"          "}setWeather(result);{"\n"}
                          {"          "}setQuery(<span style={{ color: "#a31515" }}>''</span>);{"\n"}
                          {"          "}console.log(result);{"\n"}
                          {"        "}
                          {"}"});{"\n"}
                          {"    "}
                          {"}"}
                          {"\n"}
                          {"  "}
                          {"}"}
                          {"\n"}
                        </pre>
                      </div>
                    </Card.Header>
                </Card>
                <p className="mt-4 TutText">
                Now we need to set all of this information we have got into the location box. Before we do this we need to make a check for having no information. We can do this by modifying our location box code and adding a new div.

                </p>
                <Card className="mt-4">
                    <Card.Header>             
                        <div
                        style={{
                            background: "rgba(0,0,0,0)",
                            overflow: "auto",
                            width: "auto",
                            padding: "none"
                        }}
                        >
                        <pre style={{ margin: 0, lineHeight: "125%" }}>
                            {"{"}(<span style={{ color: "#0000ff" }}>typeof</span> weather.main !={" "}
                            <span style={{ color: "#a31515" }}>"undefined"</span>) ? ({"\n"}
                            {"     "}&lt;div&gt;{"\n"}
                            {"        "}&lt;div className=
                            <span style={{ color: "#a31515" }}>"location-box"</span>&gt;{"\n"}
                            {"          "}&lt;div className=
                            <span style={{ color: "#a31515" }}>"location"</span>&gt;{"{"}weather.name
                            {"}"}, {"{"}weather.sys.country{"}"}&lt;
                            <span style={{ border: "1px solid #FF0000" }}>/div&gt;</span>
                            {"\n"}
                            {"          "}&lt;div className=
                            <span style={{ color: "#a31515" }}>"date"</span>&gt;{"{"}dateBuilder(
                            <span style={{ color: "#0000ff" }}>new</span> Date()){"}"}&lt;
                            <span style={{ border: "1px solid #FF0000" }}>/div&gt;</span>
                            {"\n"}
                            {"        "}&lt;
                            <span style={{ border: "1px solid #FF0000" }}>/div&gt;</span>
                            {"\n"}
                            {"          "}&lt;div className=
                            <span style={{ color: "#a31515" }}>"weather-box"</span>&gt;{"\n"}
                            {"            "}&lt;div className=
                            <span style={{ color: "#a31515" }}>"temp"</span>&gt;{"\n"}
                            {"              "}20<span style={{ border: "1px solid #FF0000" }}>°</span>c
                            {"\n"}
                            {"            "}&lt;
                            <span style={{ border: "1px solid #FF0000" }}>/div&gt;</span>
                            {"\n"}
                            {"          "}&lt;div className=
                            <span style={{ color: "#a31515" }}>"weather"</span>&gt;{"{"}
                            weather.weather[0].main{"}"}&lt;
                            <span style={{ border: "1px solid #FF0000" }}>/div&gt;</span>
                            {"\n"}
                            {"        "}&lt;
                            <span style={{ border: "1px solid #FF0000" }}>/div&gt;</span>
                            {"\n"}
                            {"      "}&lt;<span style={{ border: "1px solid #FF0000" }}>/div&gt;</span>
                            {"\n"}
                            {"        "}) : (<span style={{ color: "#a31515" }}>''</span>){"}"}
                            {"\n"}
                        </pre>
                        </div>
                    </Card.Header>
                </Card>
                <p className="mt-4 TutText">
                Now we need to import all our information into the weather box. We can do this by calling to our weather and location const's. We can do this by adding this code which imports the location name, weather temp, and weather type.
                </p>
                <Card className="mt-4">
                    <Card.Header>             
                        <div
                        style={{
                            background: "rgba(0,0,0,0)",
                            overflow: "auto",
                            width: "auto",
                            padding: "none"
                        }}
                        >
                        <pre style={{ margin: 0, lineHeight: "125%" }}>
                            {"{"}(<span style={{ color: "#0000ff" }}>typeof</span> weather.main !={" "}
                            <span style={{ color: "#a31515" }}>"undefined"</span>) ? ({"\n"}
                            {"        "}&lt;div&gt;{"\n"}
                            {"          "}&lt;div className=
                            <span style={{ color: "#a31515" }}>"location-box"</span>&gt;{"\n"}
                            {"            "}&lt;div className=
                            <span style={{ color: "#a31515" }}>"location"</span>&gt;{"{"}weather.name
                            {"}"}, {"{"}weather.sys.country{"}"}&lt;
                            <span style={{ border: "1px solid #FF0000" }}>/div&gt;</span>
                            {"\n"}
                            {"            "}&lt;div className=
                            <span style={{ color: "#a31515" }}>"date"</span>&gt;{"{"}dateBuilder(
                            <span style={{ color: "#0000ff" }}>new</span> Date()){"}"}&lt;
                            <span style={{ border: "1px solid #FF0000" }}>/div&gt;</span>
                            {"\n"}
                            {"          "}&lt;
                            <span style={{ border: "1px solid #FF0000" }}>/div&gt;</span>
                            {"\n"}
                            {"          "}&lt;div className=
                            <span style={{ color: "#a31515" }}>"weather-box"</span>&gt;{"\n"}
                            {"            "}&lt;div className=
                            <span style={{ color: "#a31515" }}>"temp"</span>&gt;{"\n"}
                            {"              "}
                            {"{"}Math.round(weather.main.temp){"}"}
                            <span style={{ border: "1px solid #FF0000" }}>°</span>c{"\n"}
                            {"            "}&lt;
                            <span style={{ border: "1px solid #FF0000" }}>/div&gt;</span>
                            {"\n"}
                            {"            "}&lt;div className=
                            <span style={{ color: "#a31515" }}>"weather"</span>&gt;{"{"}
                            weather.weather[0].main{"}"}&lt;
                            <span style={{ border: "1px solid #FF0000" }}>/div&gt;</span>
                            {"\n"}
                            {"          "}&lt;
                            <span style={{ border: "1px solid #FF0000" }}>/div&gt;</span>
                            {"\n"}
                            {"        "}&lt;
                            <span style={{ border: "1px solid #FF0000" }}>/div&gt;</span>
                            {"\n"}
                            {"        "}) : (<span style={{ color: "#a31515" }}>''</span>){"}"}
                            {"\n"}
                        </pre>
                        </div>
                    </Card.Header>
                </Card>
                <p className="mt-4 TutText">
                Now we need to make the background change depending on if it’s cold or warm. We can do this by first changing the classname app to check if the weather is undefined.
                </p>
                <Card className="mt-4">
                    <Card.Header>             
                        <div
                        style={{
                            background: "rgba(0,0,0,0)",
                            overflow: "auto",
                            width: "auto",
                            padding: "none"
                        }}
                        >
                        <pre style={{ margin: 0, lineHeight: "125%" }}>
                            <span style={{ color: "#0000ff" }}>return</span> ({"\n"}
                            {"    "}&lt;div className={"{"}(
                            <span style={{ color: "#0000ff" }}>typeof</span> weather.main !={" "}
                            <span style={{ color: "#a31515" }}>"undefined"</span>){"}"}&gt;{"\n"}
                        </pre>
                        </div>
                    </Card.Header>
                </Card>
                <p className="mt-4 TutText">
                Then we need to add a if statement which changes the background based on temperature.
                </p>
                <Card className="mt-4">
                    <Card.Header>             
                        <div
                        style={{
                            background: "rgba(0,0,0,0)",
                            overflow: "auto",
                            width: "auto",
                            padding: "none"
                        }}
                        >
                        <pre style={{ margin: 0, lineHeight: "125%" }}>
                            <span style={{ color: "#0000ff" }}>return</span> ({"\n"}
                            {"    "}&lt;div className={"{"}(
                            <span style={{ color: "#0000ff" }}>typeof</span> weather.main !={" "}
                            <span style={{ color: "#a31515" }}>"undefined"</span>) ? ((weather.main.temp
                            &gt; 17) ? <span style={{ color: "#a31515" }}>'app warm'</span> :{" "}
                            <span style={{ color: "#a31515" }}>'app'</span>) :{" "}
                            <span style={{ color: "#a31515" }}>'app'</span>
                            {"}"}&gt;{"\n"}
                        </pre>
                        </div>
                    </Card.Header>
                </Card>
                <p className="mt-4 TutText">
                We are now done with our weather app. You can search up your favourite cities and see the current weather.
                </p>
            </div>
        )
    }
}
