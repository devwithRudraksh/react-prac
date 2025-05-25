// boilerplate code

import React from "react"; //hooks,stateless can be derived from here
import '../components/UnorderedList';
import UnorderedList from "../components/UnorderedList";
import Title from "../components/Title";
function About(){

    return (<div><Title name= "this is it"/>
        <UnorderedList /> <Title name= "this is not it"/> </div>
        
    );
}

export default About