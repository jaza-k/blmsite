import React from 'react';
import '../styles/Webpage.sass';
import Main from '../components/Main';

const Sources = () => {

    const renderSites = () => {
        const websites = [
            { name: "BLM - Canada - All Black Lives Matter", url: "https://blacklivesmatter.ca/" },
            { name: "What We Believe - Black Lives Matter", url: "https://blacklivesmatter.com/what-we-believe/" },
            { name: "Black Lives Matter: From Hashtag to Movement", url: "https://www.adl.org/education/educator-resources/lesson-plans/black-lives-matter-from-hashtag-to-movement" },
            { name: "Statistics and Data - Black Lives Matter: Policing and Incarceration", url: "https://libguides.princeton.edu/c.php?g=598338&p=4142165" },
            { name: "Black Lives Matter - international activist movement", url: "https://www.britannica.com/topic/Black-Lives-Matter" },
        ]
        return (
            <ul className="site-list">
                {websites.map((site, index) => <li key={index} className="list-item" id="site"><a href={site.url} target="_blank" rel="noopener noreferrer">{site.name}</a></li>)}
            </ul>
        )
    }

    return (
        <Main>
            <div className="Sources">
                <div className="wrapper">
                    <h1 className="main-heading">Sources</h1>
                    <div className="information-body">
                        <p className="information-text">Check out these websites for further information:</p>
                        {renderSites()}
                    </div>
                </div>
            </div>
        </Main>
    )
}

export default Sources;