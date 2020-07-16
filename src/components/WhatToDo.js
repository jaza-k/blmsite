import React from 'react';
import '../styles/Webpage.sass';
import Main from '../components/Main';

const WhatToDo = () => (
    <Main>
        <div className="WhatToDo">
            <div className="wrapper">
                <h1 className="main-heading">What To Do</h1>
                <div className="information-body">
                    <p className="information-text">Here's a list of ways you can help right now:</p>

                    <div className="section-wrapper">
                        <div className="section-box">
                            <h3 className="section-heading">Organizations to donate to</h3>
                            <ul className="section-list">
                                <li className="list-item"><a href="https://ca.gofundme.com/f/georgefloyd" target="_blank" rel=" noopener noreferrer">George Floyd Memorial Fund</a></li>
                                <li className="list-item"><a href="https://www.joincampaignzero.org/" target="_blank" rel="noopener noreferrer">Campaign Zero</a></li>
                                <li className="list-item"><a href="https://www.innocenceproject.org/" target="_blank" rel="noopener noreferrer">Innocence Project</a></li>
                                <li className="list-item"><a href="https://justiceforbreonna.org/" target="_blank" rel="noopener noreferrer">Justice For Breonna</a></li>
                                <li className="list-item"><a href="https://www.blackvisionsmn.org/" target="_blank" rel="noopener noreferrer">Black Visions Collective</a></li>
                                <li className="list-item"><a href="https://www.reclaimtheblock.org/" target="_blank" rel="noopener noreferrer">Reclaim The Block</a></li>
                                <li className="list-item"><a href="https://www.nationalbailout.org/" target="_blank" rel="noopener noreferrer">National Bail Out</a></li>
                            </ul>
                        </div>

                        <div className="section-box">
                            <h3 className="section-heading">Petitions to sign</h3>
                            <ul className="section-list">
                                <li className="list-item">Justice For George Floyd</li>
                                <li className="list-item">Colors Of Change</li>
                                <li className="list-item">Justice For Ahmaud Arbery</li>
                                <li className="list-item">Colors Of Change</li>
                                <li className="list-item">Justice For Ahmaud Arbery</li>
                                <li className="list-item">Colors Of Change</li>
                                <li className="list-item">Justice For Ahmaud Arbery</li>
                            </ul>
                        </div>

                        <div className="section-box">
                            <h3 className="section-heading">Text or call</h3>
                            <ul className="section-list">
                                <li className="list-item">Text "JUSTICE" to 668366</li>
                                <li className="list-item">Text "FLOYD" to 55156</li>
                                <li className="list-item">Get in contact with the District Attorney & Minneapolis Mayor.</li>
                                <li className="list-item">Text "FLOYD" to 55156</li>
                                <li className="list-item">Get in contact with the District Attorney & Minneapolis Mayor.</li>
                                <li className="list-item">Text "FLOYD" to 55156</li>
                                <li className="list-item">Get in contact with the District Attorney & Minneapolis Mayor.</li>
                            </ul>
                        </div>

                        <div className="section-box">
                            <h3 className="section-heading">Register to vote</h3>
                            <ul className="section-list">
                                <li className="list-item">Text "JUSTICE" to 668366</li>
                                <li className="list-item">Text "FLOYD" to 55156</li>
                                <li className="list-item">Get in contact with the District Attorney & Minneapolis Mayor.</li>
                                <li className="list-item">Text "FLOYD" to 55156</li>
                                <li className="list-item">Get in contact with the District Attorney & Minneapolis Mayor.</li>
                                <li className="list-item">Text "FLOYD" to 55156</li>
                                <li className="list-item">Get in contact with the District Attorney & Minneapolis Mayor.</li>
                            </ul>
                        </div>

                        <div className="section-box">
                            <h3 className="section-heading">Text or call</h3>
                            <ul className="section-list">
                                <li className="list-item">Text "JUSTICE" to 668366</li>
                                <li className="list-item">Text "FLOYD" to 55156</li>
                                <li className="list-item">Get in contact with the District Attorney & Minneapolis Mayor.</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </Main>
);

export default WhatToDo;