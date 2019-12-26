import React from 'react';
import TodoItmes from "./components/TodoItmes";
import Greet from "./components/Greet";
import Welcome from "./components/Class";
import Jsx from "./components/jsx";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import EventBind from "./components/EventBind";
import './App.css';
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import StyleSheet from "./components/Stylesheets";
import Form from "./components/Form";
import LifeCycle from "./components/LifeCycle";
import Fragmentdemo from "./components/fragmentdemo";
import Table from "./components/table";
import PureComp from "./components/PureCompenent";
import Refsdemo from "./components/refsdemo";
import Regularcomponent from "./components/regularcomponent";
import ForwardRefParentInput from "./components/ForwardRefParentInput";
import {Errorhandling} from "./components/Errorhandling";

import  {HoverComponents} from "./components/HoverComponents"
import {RenderCounter} from "./components/RenderCounter";
import HttpRequest from "./components/HttpRequest";
import {PostForm} from "./components/PostForm";

function App() {
  return (
      <div>
          {/*<ParentComponent />*/}
          {/*<Refsdemo />*/}
          {/*<Regularcomponent />*/}
          {/*<ForwardRefParentInput />*/}
          {/*<UserGreeting />*/}
          {/*<NameList />*/}
          {/*<Form />*/}
          {/*<LifeCycle />*/}
          {/*<Fragmentdemo />*/}
          {/*<Table />*/}
          {/*<PureComp />*/}
          {/*<StyleSheet primary={true} />*/}
        {/*<Greet  name="Bruce">*/}
        {/*<p1> this is children </p1>*/}
        {/*</Greet>*/}
        {/*<Welcome />*/}
        {/*<Counter />*/}
        {/*<Jsx />*/}
        {/*<Message name="nikhil"/>*/}
        {/*<FunctionClick />*/}
        {/*<EventBind />*/}
        {/*<Errorhandling name="hero"/>*/}
        {/*<HoverComponents/>*/}
        {/*<RenderCounter render={(count,Handler) => <HoverComponents count={count} Handler={Handler} /> } />*/}
        {/*<RenderCounter render={(count,Handler) => <HoverComponents count={count} Handler={Handler} /> } />*/}
        {/*<HttpRequest/>*/}
        <PostForm />
      </div>
  );
}

export default App;
