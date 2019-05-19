import React, { Component } from "react";
import image from "../imgs/mood.jpg";

let projects = [
  {
    title: "M.O.O.D",
    sub_title: `Built With: React.js, Redux.js, express.js, node.js, postgresSQL`,
    description:
      "Moodbot is an app that helps project managers keep track of team morale during a team’s lifecycle. It provides the manager with the ability to send slack surveys to team members, record responses and display reports. Built with ",
    domain_link: "https://moodbotics.com/",
    photos: image
  },
  {
    title: "M.O.O.D",
    sub_title: "Emotion",
    description:
      "Moodbot is an app that helps project managers keep track of team morale during a team’s lifecycle. It provides the manager with the ability to send slack surveys to team members, record responses and display reports. Built with ",
    domain_link: "https://moodbotics.com/",
    photos: image
  },
  {
    title: "M.O.O.D",
    sub_title: "Emotion",
    description:
      "Moodbot is an app that helps project managers keep track of team morale during a team’s lifecycle. It provides the manager with the ability to send slack surveys to team members, record responses and display reports. Built with ",
    domain_link: "https://moodbotics.com/",
    photos: image
  },
  {
    title: "M.O.O.D",
    sub_title: "Emotion",
    description:
      "Moodbot is an app that helps project managers keep track of team morale during a team’s lifecycle. It provides the manager with the ability to send slack surveys to team members, record responses and display reports. Built with ",
    domain_link: "https://moodbotics.com/",
    photos: image
  },
  {
    title: "M.O.O.D",
    sub_title: "Emotion",
    description:
      "Moodbot is an app that helps project managers keep track of team morale during a team’s lifecycle. It provides the manager with the ability to send slack surveys to team members, record responses and display reports. Built with ",
    domain_link: "https://moodbotics.com/",
    photos: image
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
                  <div className="container-project">
                    <img src={item.photos} alt="not working" />
                    <div className="container-project-absolute">
                      <h3>{item.title}</h3>
                      <h4>{item.sub_title}</h4>
                      <p>{item.description}</p>
                      <button
                        onClick={event => {
                          event.preventDefault();
                          window.open(item.domain_link);
                        }}
                      >
                        Visit Site
                      </button>
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
