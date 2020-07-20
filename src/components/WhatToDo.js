import React from 'react';
import '../styles/Webpage.sass';
import Main from '../components/Main';
import Card from '../components/Card';

const WhatToDo = () => {

    const renderCards = () => {
        const petitions = [
            { name: "Justice For George Floyd", url: "https://www.amnesty.org/en/get-involved/take-action/george-floyd-police-violence-usa/" },
            { name: "Justice For Breonna Taylor", url: "https://www.change.org/p/andy-beshear-justice-for-breonna-taylor?source_location=topic_page" },
            { name: "Justice For Ahmaud Arbery", url: "https://www.runwithmaud.com/#petition" },
            { name: "Color Of Change", url: "https://act.colorofchange.org/sign/heroesactpetition-congress" },
            { name: "Hands Up Act", url: "https://www.change.org/p/us-senate-hands-up-act" },
            { name: "Justice For Tony McDade", url: "https://actionnetwork.org/letters/demand-justice-for-tony-mcdade?source=direct_link&" },
            { name: "Cut Ties With The FOP", url: "https://act.colorofchange.org/sign/cut-ties-fop" }
        ]
        const organizations = [
            { name: "George Floyd Memorial Fund", url: "https://ca.gofundme.com/f/georgefloyd" },
            { name: "Campaign Zero", url: "https://www.joincampaignzero.org/" },
            { name: "Innocence Project", url: "https://www.innocenceproject.org/" },
            { name: "Justice For Breonna", url: "https://justiceforbreonna.org/" },
            { name: "Black Visions Collective", url: "https://www.blackvisionsmn.org/" },
            { name: "Reclaim The Block", url: "https://www.reclaimtheblock.org/" },
            { name: "National Bail Out", url: "https://www.nationalbailout.org/" }
        ]

        return (
            <div className="section-wrapper">
                <Card heading="Organizations to donate to">
                    <ul className="section-list">
                        {organizations.map((organization, index) => <li key={index} className="list-item"><a href={organization.url} target="_blank" rel="noopener noreferrer">{organization.name}</a></li>)}
                    </ul>
                </Card>

                <Card heading="Petitions to sign">
                    <ul className="section-list">
                        {petitions.map((petition, index) => <li key={index} className="list-item"><a href={petition.url} target="_blank" rel="noopener noreferrer">{petition.name}</a></li>)}
                    </ul>
                </Card> 

                <Card heading="Text or call">
                    <li className="list-item" id="textorcall">Text "JUSTICE" to 668366</li>
                    <li className="list-item" id="textorcall">Text "FLOYD" to 55156</li>
                    <li className="list-item" className="contact-heading">Get in contact with officials:</li>
                    <div className="contact">
                        <li className="list-item" id="textorcall">Minneapolis District Attorney</li>
                        <li className="list-item" id="textorcall">Mike Freeman</li>
                        <li className="list-item" id="textorcall">(612)-348-5550</li>
                        <li className="list-item" id="textorcall">citizeninfo@hennepin.us</li>
                    </div>
                </Card>

                <Card heading="Register to vote">
                    <h1>Yo</h1>
                </Card>

                <Card heading="Educate yourself">
                    <h1>Yo</h1>
                </Card>
            </div>
        )
    }

    return (
        <Main>
            <div className="WhatToDo">
                <div className="wrapper">
                    <h1 className="main-heading">What To Do</h1>
                    <div className="information-body">
                        <p className="information-text">Here's a list of ways you can help right now:</p>

                        {renderCards()}

                    </div>
                </div>
            </div>
        </Main>
    )
}

export default WhatToDo;