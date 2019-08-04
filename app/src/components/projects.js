import React, { Component } from "react";
import moodImage from "../imgs/mood.jpg";
import lineImage from "../imgs/one-line-logo.svg";
import notesImage from "../imgs/note.jpg";

let projects = [
  {
    id: 0,
    title: "M.O.O.D",
    sub_title: `React.js, Redux.js, express.js, node.js, postgresSQL`,
    description:
      "Moodbot is an app that helps project managers keep track of team morale during a team’s lifecycle. It provides the manager with the ability to send slack surveys to team members, record responses and display reports.",
    domain_link: "https://moodbotics.com/",
    gitrepo: "https://github.com/Lambda-School-Labs/labs10-sentiment",
    photos: moodImage
  },
  {
    id: 1,
    title: "One Line A Day",
    sub_title: `LESS, React.js, Redux.js, express.js, node.js, postgresSQL`,
    description:
      "One Line a Day is a personal journal allowing the user to create, view and edit a single entry per day in a span of ten years.",
    domain_link: "https://www.one-line-a-day.com/",
    gitrepo: "https://github.com/gittc100/One_Line_A_Day_Thomas_Front_End",
    photos: lineImage
  },
  {
    id: 2,
    title: "Community Notes",
    sub_title: `CSS, React.js, Redux.js`,
    description:
      "Community Notes is a collective message board allowing users to post and view notes.",
    domain_link: "https://www.community-notes.com/",
    gitrepo: "https://github.com/gittc100/front-end-project-week",
    photos: notesImage
  }
];
class Projects extends Component {
  render() {
    return (
      <div className="container-main-projects">
        <section id="projects">
          <div className="container-main">
            <h2>PROJECTS</h2>
            <div className="container-projects">
              {projects.map(item => {
                return (
                  <div key={item.id} className="container-project">
                    <img src={item.photos} alt="not working" />
                    <div className="container-project-absolute">
                      <h3>{item.title}</h3>
                      <div className="tap-here"><p>TAP</p></div>
                      <h4>Stack:<br/>{item.sub_title}</h4>
                      <p>{item.description}</p>
                      <div>
                        <button
                          onClick={event => {
                            event.preventDefault();
                            window.open(item.domain_link);
                          }}
                        >
                          Site
                        </button>
                        <button
                          onClick={event => {
                            event.preventDefault();
                            window.open(item.gitrepo);
                          }}
                        >
                          Repo
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Projects;
