import React from 'react';
import '../styles/Webpage.sass';
import '../styles/Actions.sass';
import Main from './Main';
import Card from './Card';

const Actions = () => {

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
        const contacts = {
            contact0: {
                "id": "Minneapolis District Attorney",
                "name": "Mike Freeman",
                "number": "(612)-348-5550",
                "email": "citizeninfo@hennepin.us"
            },
            contact1: {
                "id": "Minneapolis Mayor",
                "name": "Jacob Frey",
                "number": "(612)-673-2100",
                "email": ""
            },
            contact2: {
                "id": "Louisville Mayor",
                "name": "Greg Fischer",
                "number": "(502)-574-2003",
                "email": ""
            }
        }
        const voting = [
            { topic: "General voting information", url: "https://www.usa.gov/voting" },
            { topic: "How to vote", url: "https://www.usa.gov/how-to-vote" },
            { topic: "Register to vote", url: "https://vote.gov/" },
            { topic: "Online voter registration", url: "https://ballotpedia.org/Online_voter_registration" },
            { topic: "Youth voting", url: "https://www.rockthevote.org/" }
        ]
        const education = [
            { topic: "Black Lives Matter explained", url: "https://www.youtube.com/watch?v=YG8GjlLbbvs"},
            { topic: "Books to read", url: "https://www.harpersbazaararabia.com/featured-news/books-on-racism-understanding-black-lives-matter-movement"},
            { topic: "Movies", url: "https://womenlovetech.com/10-movies-and-shows-you-can-watch-to-support-the-black-lives-matter-movement/"},
            { topic: "Podcasts", url: "https://www.redandblack.com/culture/6-podcasts-about-the-black-lives-matter-movement/article_ee63981c-ab6b-11ea-aff0-6bcc5da0108f.html"},
            { topic: "Documentaries", url: "https://www.cosmopolitan.com/uk/reports/a32751489/black-lives-matter-documentaries/"}
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
                    <ul className="section-list">
                        <li className="list-item">Text "JUSTICE" to 668366</li>
                        <li className="list-item">Text "FLOYD" to 55156</li>
                    </ul>

                    <h5 className="contact-heading">Get in contact with officials:</h5>
                    {Object.keys(contacts).map(function(key, index) {
                        return(
                            <div className="contact">
                                <li key={index}>{contacts[key].id}</li>
                                <li key={index}>{contacts[key].name}</li>
                                <li key={index}>{contacts[key].number}</li>
                                <li key={index}>{contacts[key].email}</li>
                            </div>
                        )
                    })}
                </Card>

                <Card heading="Register to vote">
                    <h5 className="voting-heading">Voting is an opportunity for change, and it's a chance to stand up for issues you care about.</h5>
                    <p className="voting-info">Here are some useful links (U.S. only):</p>
                    <ul className="section-list" id="voting-list">
                        {voting.map((topic, index) => <li key={index} className="list-item"><a href={topic.url} target="_blank" rel="noopener noreferrer">{topic.topic}</a></li>)}
                    </ul>
                </Card>

                <Card heading="Educate yourself">
                    <ul className="section-list" id="voting-list">
                        {education.map((topic, index) => <li key={index} className="list-item"><a href={topic.url} target="_blank" rel="noopener noreferrer">{topic.topic}</a></li>)}
                    </ul>
                </Card>
            </div>
        )
    }

    return (
        <Main>
            <div className="Actions">
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

export default Actions;