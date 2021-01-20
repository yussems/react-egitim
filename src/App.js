import logo from "./logo.svg";
import "./App.css";
import Faruk from "./componenets/Greet";
import Welcome from "./componenets/Welcome";
import Hello from "./componenets/Hello";
import Message from "./componenets/Message";
import Counter from "./componenets/Counter";
import FunctionClick from "./componenets/function";
import Clickfunc from "./componenets/classClick";
import EventBind from "./componenets/eventBind";
import ParentComponent from "./componenets/ParentComponent";
import UserGreeting from "./componenets/UserGreeting";
import NameList from "./componenets/Listtry";
import StyleSheet from "./componenets/Stylesheets";
import Inline from "./componenets/inline";
import "./appStyles.css";
import styles from "./appStyles.module.css";
import Form from "./componenets/form";
import Lifecycle from "./componenets/Lifecycle";
import FragmentDemo from "./componenets/fragment";
import Table from "./componenets/Table";
import ParentComp from "./componenets/ParentComp";
import RefsDemo from "./componenets/RefsDemo";
import PortalDemo from "./componenets/PortalDemo";
import Hero from "./componenets/Hero";
import ErorBoundry from "./componenets/ErorBoundry";
import ClickCounter from "./componenets/ClickCounter";

function App() {
  return (
    <div className="App">


    
      
      {/*<FragmentDemo/>*/}
      {/*
      <ClickCounter/>
      <ErorBoundry>
        <Hero heroName='wonderWoman'/>
      </ErorBoundry>

      <ErorBoundry>
        <Hero heroName='SuperMan'/>
      </ErorBoundry>

      <ErorBoundry> 
        <Hero heroName='Joker'/>
      </ErorBoundry>
      <PortalDemo/>
      <RefsDemo/>
      <ParentComp/>
      <Table/>
      <Lifecycle/>
      <Form/>
       <h1 className='error'>eror</h1>
      <h1 className={styles.sucess}>başarı</h1>
      <StyleSheet primary={false}/>
      <Inline/>
      <NameList/>
      <UserGreeting/>
      <ParentComponent />
      <Clickfunc/>
      <FunctionClick/>
      <EventBind/>
      
      <Faruk name='Bruce' heroName="Batman">
        <p> this is children probs</p>
      </Faruk>

      <Faruk name="Clark" heroName="Superman">
      <button> Action</button>
      </Faruk>
      
      

      <Welcome name='Bruce' heroName="Batman"/>

      <Welcome name="Clark" heroName="Superman"/>
      <Faruk name='Diana' heroName="Wonder Woman"/>
      <Welcome name='Diana' heroName="Wonder Woman"/>
      <Counter/>
      <Message/>
      
        */}

      {/*<Hello/>*/}
    </div>
  );
}

export default App;
