import React from 'react';
import OverlayScrollbars from 'overlayscrollbars';
import Card from 'react-bootstrap/Card';

export default class Tut2 extends React.Component {
    async componentDidMount(){
        await(10);
        var osInstance = OverlayScrollbars(document.body);
        osInstance.scroll({ top : 0 });
    }

    render() {
        return (
            <div className="text-dark text-wrap" style={{minHeight: '100vh', marginBottom: '200px'}}>
                <h1>How to make a functioning tickbox using the state</h1>
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
                    Next you will want to delete index.css and all references to it. Delete logo.svg and any references to it and get rid of the header section in app.js. Replace this with a h1 placeholder Also make sure to change function app to class app like this.
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
                            <span style={{ color: "#0000ff" }}>import</span> React, {"{"} Component{" "}
                            {"}"} from <span style={{ color: "#a31515" }}>'react'</span>;{"\n"}
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
                Next replace the App.css styling with some basic default styling code shown here.
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
                            *{"{"}box-sizing: <span style={{ color: "#0000ff" }}>border</span>-box;
                            {"\n"}
                            <span style={{ color: "#0000ff" }}>margin</span>: 0;{"\n"}
                            <span style={{ color: "#0000ff" }}>padding</span>: 0;{"\n"}
                            {"}"}
                            {"\n"} {"\n"}body{"{"}
                            {"\n"}
                            {"  "}
                            <span style={{ color: "#0000ff" }}>font-family</span>: Arial, Helvetica,{" "}
                            <span style={{ color: "#0000ff" }}>sans-serif</span>;{"\n"}
                            {"  "}
                            <span style={{ color: "#0000ff" }}>line-height</span>: 1.4;{"\n"}
                            {"}"}
                            {"\n"} {"\n"}a{"{"}
                            {"\n"}
                            {"  "}
                            <span style={{ color: "#0000ff" }}>color</span>: #333 ;{"\n"}
                            {"  "}
                            <span style={{ color: "#0000ff" }}>text-decoration</span>:{" "}
                            <span style={{ color: "#0000ff" }}>none</span>;{"\n"}
                            {"}"}
                            {"\n"}
                        </pre>
                        </div>
                    </Card.Header>
                </Card>
                <p className="mt-4 TutText">
                Next you will want to make a folder in the src folder called components and inside the components folder make a new file called Todos.js.                
                <br/>
                To make it easier for us let’s copy over what’s inside the App.js to the Todos.js and remove the div name and css styling import since we won’t need them.
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
                            <span style={{ color: "#0000ff" }}>import</span> React, {"{"} Component{" "}
                            {"}"} from <span style={{ color: "#a31515" }}>'react'</span>;{"\n"} {"\n"}
                            <span style={{ color: "#0000ff" }}>class</span> Todos{" "}
                            <span style={{ color: "#0000ff" }}>extends</span> Component{"{"}
                            {"\n"}
                            {"  "}render() {"{"}
                            {"\n"}
                            {"  "}
                            <span style={{ color: "#0000ff" }}>return</span> ({"\n"}
                            {"    "}&lt;div&gt;{"\n"}
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
                            <span style={{ color: "#0000ff" }}>default</span> Todos;{"\n"}
                        </pre>
                        </div>
                    </Card.Header>
                </Card>
                <p className="mt-4 TutText">
                    We then want to import our new Todos file into App.js so it can access what’s in it we can do this easily by adding the import Todos line to App.js.                
                    <br/>
                    And replace the h1 tag in App.js with Todos this will mean that everything that is in todos can get accessed by App.js.
                    <br/>
                    Next we want to add the state which is where our item will be stored and what their states will be. We want to put this just below the app class in App.js.
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
                            <span style={{ color: "#0000ff" }}>import</span> React, {"{"} Component{" "}
                            {"}"} from <span style={{ color: "#a31515" }}>'react'</span>;{"\n"}
                            <span style={{ color: "#0000ff" }}>import</span> Todos from{" "}
                            <span style={{ color: "#a31515" }}>'./components/Todos'</span>;{"\n"}
                            <span style={{ color: "#0000ff" }}>import</span>{" "}
                            <span style={{ color: "#a31515" }}>'./App.css'</span>;{"\n"} {"\n"}
                            <span style={{ color: "#0000ff" }}>class</span> App{" "}
                            <span style={{ color: "#0000ff" }}>extends</span> Component{"{"}
                            {"\n"}
                            {"  "}state = {"{"}
                            {"\n"}
                            {"    "}todos: [{"\n"}
                            {"      "}
                            {"{"}
                            {"\n"}
                            {"        "}id: 1,{"\n"}
                            {"        "}title: <span style={{ color: "#a31515" }}>'Make Website'</span>,
                            {"\n"}
                            {"        "}completed: <span style={{ color: "#0000ff" }}>false</span>
                            {"\n"}
                            {"      "}
                            {"}"},{"\n"}
                            {"    "}]{"\n"}
                            {"  "}
                            {"}"}
                            {"\n"}
                        </pre>
                        </div>
                    </Card.Header>
                </Card>
                <p className="mt-4 TutText">
                Now we want to pass our todos in the state down to the Todos component as a state we can do this by entering this code in.                
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
                            render() {"{"}
                            {"\n"}
                            {"  "}
                            <span style={{ color: "#0000ff" }}>return</span> ({"\n"}
                            {"    "}&lt;div className=<span style={{ color: "#a31515" }}>"App"</span>
                            &gt;{"\n"}
                            {"      "}&lt;Todos todos={"{"}
                            <span style={{ color: "#0000ff" }}>this</span>.state.todos{"}"} /&gt;{"\n"}
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
                    Next we want to display our states in our app we can do this by using a render method to return our todos properties inside Todos.js.
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
                            <span style={{ color: "#0000ff" }}>import</span> React, {"{"} Component{" "}
                            {"}"} from <span style={{ color: "#a31515" }}>'react'</span>;{"\n"} {"\n"}
                            <span style={{ color: "#0000ff" }}>class</span> Todos{" "}
                            <span style={{ color: "#0000ff" }}>extends</span> Component{"{"}
                            {"\n"}
                            {"  "}render() {"{"}
                            {"\n"}
                            {"   "}
                            <span style={{ color: "#0000ff" }}>return</span>{" "}
                            <span style={{ color: "#0000ff" }}>this</span>.props.todos.map((todo) =&gt;
                            ({"\n"}
                            {"        "}&lt;h3&gt;{"{"} todo.title {"}"}&lt;
                            <span style={{ border: "1px solid #FF0000" }}>/h3&gt;</span>
                            {"\n"}
                            {"  "}));{"\n"} {"}"}
                            {"\n"}
                            {"}"}
                            {"\n"} {"\n"}
                            <span style={{ color: "#0000ff" }}>export</span>{" "}
                            <span style={{ color: "#0000ff" }}>default</span> Todos;{"\n"}
                        </pre>
                        </div>
                    </Card.Header>
                </Card>
                <p className="mt-4 TutText">
                Next we want to make another file in our components folder called TodoItem.js. If you have the React ES7 extension for visual studio you can enter rce and press tab for the base starter code otherwise you can copy the code here.
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
                            <span style={{ color: "#0000ff" }}>import</span> React, {"{"} Component{" "}
                            {"}"} from <span style={{ color: "#a31515" }}>'react'</span>
                            {"\n"} {"\n"}
                            <span style={{ color: "#0000ff" }}>export</span>{" "}
                            <span style={{ color: "#0000ff" }}>class</span> TodoItem{" "}
                            <span style={{ color: "#0000ff" }}>extends</span> Component {"{"}
                            {"\n"}
                            {"    "}render() {"{"}
                            {"\n"}
                            {"        "}
                            <span style={{ color: "#0000ff" }}>return</span> ({"\n"}
                            {"            "}&lt;div&gt;{"\n"}
                            {"                "}
                            {"\n"}
                            {"            "}&lt;
                            <span style={{ border: "1px solid #FF0000" }}>/div&gt;</span>
                            {"\n"}
                            {"        "}){"\n"}
                            {"    "}
                            {"}"}
                            {"\n"}
                            {"}"}
                            {"\n"} {"\n"}
                            <span style={{ color: "#0000ff" }}>export</span>{" "}
                            <span style={{ color: "#0000ff" }}>default</span> TodoItem{"\n"}
                        </pre>
                        </div>
                    </Card.Header>
                </Card>
                <p className="mt-4 TutText">
                    Add a paragraph tag to this and insert this code.                
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
                            <span style={{ color: "#0000ff" }}>export</span>{" "}
                            <span style={{ color: "#0000ff" }}>class</span> TodoItem{" "}
                            <span style={{ color: "#0000ff" }}>extends</span> Component {"{"}
                            {"\n"}
                            {"    "}render() {"{"}
                            {"\n"}
                            {"        "}
                            <span style={{ color: "#0000ff" }}>return</span> ({"\n"}
                            {"            "}&lt;div&gt;{"\n"}
                            {"                "}&lt;p&gt;{"{"}{" "}
                            <span style={{ color: "#0000ff" }}>this</span>.props.todos.title {"}"}&lt;
                            <span style={{ border: "1px solid #FF0000" }}>/p&gt;</span>
                            {"\n"}
                            {"            "}&lt;
                            <span style={{ border: "1px solid #FF0000" }}>/div&gt;</span>
                            {"\n"}
                            {"        "}){"\n"}
                            {"    "}
                            {"}"}
                            {"\n"}
                        </pre>
                        </div>
                    </Card.Header>
                </Card>
                <p className="mt-4 TutText">
                    This will display the prop title. Now go back to Todos.js and add a key to prevent erros for TodoItem while also removing the todo title that was originally there.                
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
                            <span style={{ color: "#0000ff" }}>class</span> Todos{" "}
                            <span style={{ color: "#0000ff" }}>extends</span> Component{"{"}
                            {"\n"}
                            {"  "}render() {"{"}
                            {"\n"}
                            {"   "}
                            <span style={{ color: "#0000ff" }}>return</span>{" "}
                            <span style={{ color: "#0000ff" }}>this</span>.props.todos.map((todo) =&gt;
                            ({"\n"}
                            {"        "}&lt;TodoItem key={"{"}todo.id{"}"} todo={"{"}todo{"}"} /&gt;
                            {"\n"}
                            {"  "}));{"\n"} {"}"}
                            {"\n"}
                            {"}"}
                            {"\n"} {"\n"}
                            <span style={{ color: "#0000ff" }}>export</span>{" "}
                            <span style={{ color: "#0000ff" }}>default</span> Todos{"\n"}
                        </pre>
                        </div>
                    </Card.Header>
                </Card>
                <p className="mt-4 TutText">
                    Now we need to add proptypes go to Todos.js.
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
                            <span style={{ color: "#0000ff" }}>import</span> React, {"{"} Component{" "}
                            {"}"} from <span style={{ color: "#a31515" }}>'react'</span>;{"\n"}
                            <span style={{ color: "#0000ff" }}>import</span> TodoItem from{" "}
                            <span style={{ color: "#a31515" }}>'./TodoItem'</span>;{"\n"}
                            <span style={{ color: "#0000ff" }}>import</span> PropTypes from{" "}
                            <span style={{ color: "#a31515" }}>'prop-types'</span>;{"\n"} {"\n"}
                            <span style={{ color: "#0000ff" }}>class</span> Todos{" "}
                            <span style={{ color: "#0000ff" }}>extends</span> Component{"{"}
                            {"\n"}
                            {"  "}render() {"{"}
                            {"\n"}
                            {"   "}
                            <span style={{ color: "#0000ff" }}>return</span>{" "}
                            <span style={{ color: "#0000ff" }}>this</span>.props.todos.map((todo) =&gt;
                            ({"\n"}
                            {"        "}&lt;TodoItem key={"{"}todo.id{"}"} todo={"{"}todo{"}"} /&gt;
                            {"\n"}
                            {"  "}));{"\n"} {"}"}
                            {"\n"}
                            {"}"}
                            {"\n"} {"\n"}Todos.PropTypes = {"{"}
                            {"\n"}
                            {"    "}todos: PropTypes.array.isRequired{"\n"}
                            {"}"}
                            {"\n"} {"\n"}
                            <span style={{ color: "#0000ff" }}>export</span>{" "}
                            <span style={{ color: "#0000ff" }}>default</span> Todos;{"\n"}
                        </pre>
                        </div>
                    </Card.Header>
                </Card>
                <p className="mt-4 TutText">
                    We also need to add the same things to TodoItem but instead change the Todos to todo object instead of array.
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
                            TodoItem.PropTypes = {"{"}
                            {"\n"}
                            {"    "}todo: PropTypes.object.isRequired{"\n"}
                            {"}"}
                            {"\n"}
                        </pre>
                        </div>

                    </Card.Header>
                </Card>
                <p className="mt-4 TutText">
                    Now that all of our setup work is done we can add the checkbox and its function. We can do this by using styling.
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
                            <span style={{ color: "#0000ff" }}>export</span>{" "}
                            <span style={{ color: "#0000ff" }}>class</span> TodoItem{" "}
                            <span style={{ color: "#0000ff" }}>extends</span> Component {"{"}
                            {"\n"}
                            {"  "}getStyle = () =&gt; {"{"}
                            {"\n"}
                            {"      "}
                            <span style={{ color: "#0000ff" }}>return</span> {"{"}
                            {"\n"}
                            {"          "}textDecoration: <span style={{ color: "#0000ff" }}>this</span>
                            .props.todo.completed ?{"\n"}
                            {"          "}
                            <span style={{ color: "#a31515" }}>'line-through'</span> :{" "}
                            <span style={{ color: "#a31515" }}>'none'</span>
                            {"\n"}
                            {"      "}
                            {"}"}
                            {"\n"}
                            {"  "}
                            {"}"}
                            {"\n"} {"\n"} {"\n"} {"\n"}
                            {"    "}render() {"{"}
                            {"\n"}
                            {"        "}
                            <span style={{ color: "#0000ff" }}>return</span> ({"\n"}
                            {"            "}&lt;div&gt;{"\n"}
                            {"                "}&lt;p&gt;{"{"}{" "}
                            <span style={{ color: "#0000ff" }}>this</span>.props.todos.title {"}"}&lt;
                            <span style={{ border: "1px solid #FF0000" }}>/p&gt;</span>
                            {"\n"}
                            {"            "}&lt;
                            <span style={{ border: "1px solid #FF0000" }}>/div&gt;</span>
                            {"\n"}
                            {"        "}){"\n"}
                            {"    "}
                            {"}"}
                            {"\n"}
                            {"}"}
                            {"\n"} {"\n"}TodoItem.PropTypes = {"{"}
                            {"\n"}
                            {"    "}todo: PropTypes.object.isRequired{"\n"}
                            {"}"}
                            {"\n"} {"\n"}
                            <span style={{ color: "#0000ff" }}>export</span>{" "}
                            <span style={{ color: "#0000ff" }}>default</span> TodoItem{"\n"}
                        </pre>
                        </div>

                    </Card.Header>
                </Card>
                <p className="mt-4 TutText">
                Now we want to add the checkbox for it in TodoItem.js below the styling section
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
                            render() {"{"}
                            {"\n"}
                            {"        "}
                            <span style={{ color: "#0000ff" }}>return</span> ({"\n"}
                            {"            "}&lt;div style={"{"}
                            <span style={{ color: "#0000ff" }}>this</span>.getStyle(){"}"}&gt;{"\n"}
                            {"                "}&lt;p&gt;{"\n"}
                            {"                  "}&lt;input type=
                            <span style={{ color: "#a31515" }}>"checkbox"</span>/&gt; {"{"}
                            <span style={{ color: "#a31515" }}>' '</span>
                            {"}"}
                            {"\n"}
                            {"                  "}
                            {"{"} <span style={{ color: "#0000ff" }}>this</span>.props.todo.title {"}"}
                            {"\n"}
                            {"                "}&lt;
                            <span style={{ border: "1px solid #FF0000" }}>/p&gt;</span>
                            {"\n"}
                            {"            "}&lt;
                            <span style={{ border: "1px solid #FF0000" }}>/div&gt;</span>
                            {"\n"}
                            {"        "}){"\n"}
                            {"    "}
                            {"}"}
                            {"\n"}
                            {"}"}
                            {"\n"}
                        </pre>
                        </div>

                    </Card.Header>
                </Card>
                <p className="mt-4 TutText">
                    Now we need to do the event behind the checkbox we will call this markComplete and we can add it just after the input type
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
                            markComplete = (e) =&gt; {"{"}
                            {"\n"}
                            {"    "}console.log(<span style={{ color: "#0000ff" }}>this</span>.props)
                            {"\n"}
                            {"}"}
                            {"\n"} {"\n"}
                            {"    "}render() {"{"}
                            {"\n"}
                            {"        "}
                            <span style={{ color: "#0000ff" }}>return</span> ({"\n"}
                            {"            "}&lt;div style={"{"}
                            <span style={{ color: "#0000ff" }}>this</span>.getStyle(){"}"}&gt;{"\n"}
                            {"                "}&lt;p&gt;{"\n"}
                            {"                  "}&lt;input type=
                            <span style={{ color: "#a31515" }}>"checkbox"</span> onChange={"{"}
                            <span style={{ color: "#0000ff" }}>this</span>.markComplete{"}"}/&gt; {"{"}
                            <span style={{ color: "#a31515" }}>' '</span>
                            {"}"}
                            {"\n"}
                            {"                  "}
                            {"{"} <span style={{ color: "#0000ff" }}>this</span>.props.todo.title {"}"}
                            {"\n"}
                            {"                "}&lt;
                            <span style={{ border: "1px solid #FF0000" }}>/p&gt;</span>
                            {"\n"}
                            {"            "}&lt;
                            <span style={{ border: "1px solid #FF0000" }}>/div&gt;</span>
                            {"\n"}
                            {"        "}){"\n"}
                            {"    "}
                            {"}"}
                            {"\n"}
                            {"}"}
                            {"\n"}
                        </pre>
                        </div>

                    </Card.Header>
                </Card>
                <p className="mt-4 TutText">
                    We now need to send markComplete through all of our code from TodoItem.js to Todos.js to App.js using methods inside of our props. We first need to add props to this code.
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
                            &lt;input type=<span style={{ color: "#a31515" }}>"checkbox"</span>{" "}
                            onChange={"{"}
                            <span style={{ color: "#0000ff" }}>this</span>.props.markComplete{"}"}/&gt;{" "}
                            {"{"}
                            <span style={{ color: "#a31515" }}>' '</span>
                            {"}"}
                            {"\n"}
                        </pre>
                        </div>
                    </Card.Header>
                </Card>
                <p className="mt-4 TutText">
                We now need to run markComplete through Todos.js we can do this by adding markComplete to Todos.js like this.
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
                            <span style={{ color: "#0000ff" }}>import</span> React, {"{"} Component{" "}
                            {"}"} from <span style={{ color: "#a31515" }}>'react'</span>;{"\n"}
                            <span style={{ color: "#0000ff" }}>import</span> TodoItem from{" "}
                            <span style={{ color: "#a31515" }}>'./TodoItem'</span>;{"\n"}
                            <span style={{ color: "#0000ff" }}>import</span> PropTypes from{" "}
                            <span style={{ color: "#a31515" }}>'prop-types'</span>;{"\n"} {"\n"}
                            <span style={{ color: "#0000ff" }}>class</span> Todos{" "}
                            <span style={{ color: "#0000ff" }}>extends</span> Component{"{"}
                            {"\n"} {"\n"}
                            {"  "}render() {"{"}
                            {"\n"}
                            {"   "}
                            <span style={{ color: "#0000ff" }}>return</span>{" "}
                            <span style={{ color: "#0000ff" }}>this</span>.props.todos.map((todo) =&gt;
                            ({"\n"}
                            {"        "}&lt;TodoItem key={"{"}todo.id{"}"} todo={"{"}todo{"}"}{" "}
                            markComplete= {"{"}
                            <span style={{ color: "#0000ff" }}>this</span>.props.markComplete{"}"} /&gt;
                            {"\n"}
                            {"  "}));{"\n"} {"}"}
                            {"\n"}
                            {"}"}
                            {"\n"}
                        </pre>
                        </div>

                    </Card.Header>
                </Card>
                <p className="mt-4 TutText">
                    Then we have to run it through app.js which we can do by attaching it to the todos in App.js. We can do this by entering this code.
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
                            {"    "}&lt;div className=<span style={{ color: "#a31515" }}>"App"</span>
                            &gt;{"\n"}
                            {"      "}&lt;Todos todos={"{"}
                            <span style={{ color: "#0000ff" }}>this</span>.state.todos{"}"}{" "}
                            markComplete={"{"}
                            <span style={{ color: "#0000ff" }}>this</span>.markComplete{"}"} /&gt;{"\n"}
                            {"    "}&lt;<span style={{ border: "1px solid #FF0000" }}>/div&gt;</span>
                            {"\n"}
                            {"  "});{"\n"} {"}"}
                            {"\n"}
                            {"}"}
                            {"\n"}
                        </pre>
                        </div>
                    </Card.Header>
                </Card>
                <p className="mt-4 TutText">
                    Now we need to bind the ids to markComplete we can do this by setting up a const for them in TodoItem.js so we only have to reference them by id and title.
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
                            render() {"{"}
                            {"\n"}
                            {"        "}
                            <span style={{ color: "#0000ff" }}>const</span> {"{"} id, title{"  "}
                            {"}"} = <span style={{ color: "#0000ff" }}>this</span>.props.todo;{"\n"}
                            {"        "}
                            <span style={{ color: "#0000ff" }}>return</span> ({"\n"}
                            {"        "}&lt;div style={"{"}
                            <span style={{ color: "#0000ff" }}>this</span>.getStyle(){"}"}&gt;{"\n"}
                            {"         "}&lt;p&gt;{"         "}&lt;inputtype=
                            <span style={{ color: "#a31515" }}>"checkbox"</span>onChange={"{"}
                            <span style={{ color: "#0000ff" }}>this</span>.props.markComplete.bind{" "}
                            {"\n"}
                            {"          "}(<span style={{ color: "#0000ff" }}>this</span>, id){"}"}/&gt;{" "}
                            {"{"}
                            <span style={{ color: "#a31515" }}>' '</span>
                            {"}"}
                            {"\n"}
                            {"          "}
                            {"{"} title {"}"}
                            {"\n"}
                            {"         "}&lt;<span style={{ border: "1px solid #FF0000" }}>/p&gt;</span>
                            {"\n"}
                            {"        "}&lt;
                            <span style={{ border: "1px solid #FF0000" }}>/div&gt;</span>
                            {"\n"}
                            {"        "}){"\n"}
                            {"    "}
                            {"}"}
                            {"\n"}
                            {"}"}
                            {"\n"}
                        </pre>
                        </div>
                    </Card.Header>
                </Card>
                <p className="mt-4 TutText">
                    The final thing we need to add is a state set to the todos depending on a if statement in App.js  this changes the state of the todos if the todos are completed or not. You will want to add this code below the states in App.js.
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
                            markComplete = (id) =&gt; {"{"}
                            {"\n"}
                            {"    "}
                            <span style={{ color: "#0000ff" }}>this</span>.setState( {"{"} todos:{" "}
                            <span style={{ color: "#0000ff" }}>this</span>.state.todos.map(todo =&gt;{" "}
                            {"{"}
                            {"\n"}
                            {"      "}
                            <span style={{ color: "#0000ff" }}>if</span>(todo.id ===id) {"{"}
                            {"\n"}
                            {"        "}todo.completed = !todo.completed{"\n"}
                            {"      "}
                            {"}"}
                            {"\n"}
                            {"      "}
                            <span style={{ color: "#0000ff" }}>return</span> todo;{"\n"}
                            {"    "}
                            {"}"}){"}"});{"\n"}
                            {"  "}
                            {"}"}
                            {"\n"}
                        </pre>
                        </div>
                    </Card.Header>
                </Card>
                <p className="mt-4 TutText">
                    Your React list should underline when you tick it now. Showing that it is done
                </p>
            </div>
        )
    }
}
