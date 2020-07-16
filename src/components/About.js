import React from 'react';
import '../styles/Webpage.sass';
import Main from '../components/Main';

const About = () => (
    <Main>
        <div className="About">
            <div className="wrapper">
                <h1 className="main-heading">About</h1>
                <div class="information-body">
                    <p className="information-text">Racial injustice has existed for centuries, and is unfortunately still a prominent issue around the world today.</p>
                    <p className="information-text">Following the death of George Floyd, millions of people around the globe have participated in protests and demonstrations against racism and police violence.</p>
                    <p className="information-text">This website was created as a means of spreading awareness around this fight for racial equality. The <a href="/whattodo" style={{textDecoration: 'underline', color: '#341F2C'}}>What To Do</a> page contains various resources and ways you can help in supporting this cause.</p>
                </div>
            </div>
        </div>
    </Main>
);
  
export default About;