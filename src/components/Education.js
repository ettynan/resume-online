import React from 'react';

const Education = () => {
  return (
    <section>
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <h2 className="section-title">Education</h2>
          </div>
          <div className="card-back">
            <ul className="education-list">
              {/* Master of Science in Software Engineering - Outer Card */}
              <li className="outer-card">
                <p><strong>Master of Science in Software Engineering</strong>, California State University, Fullerton, CA</p>
                <p>Expected graduation: May 2026.</p>
                <ul className="project-list">
                  <li><strong>Topics of study include:</strong> Software Design and Architecture, Agile Software Development, Software Project Management, Software Testing and Quality Assurance, Cloud Computing, and DevOps.</li>
                  <li><strong>Insertion Sort Android App Project:</strong> Developed an Android app implementing the Insertion Sort algorithm with a custom GUI, error handling, and user-friendly design, using Agile/Scrum and XP methodologies.</li>
                  <li><strong>Roblox Game App Project:</strong> Led Scrum ceremonies and backlog management for team project, coordinating design & implementation of game mechanics in Roblox Studio to meet user stories and goals.</li>
                </ul>
              </li>

              {/* Graduate Certificate, Computer Science - Outer Card */}
              <li className="outer-card">
                <p><strong>Graduate Certificate, Computer Science</strong>, Northeastern University, Boston, MA & Seattle, WA</p>
                <p>CCIS Graduate Scholarship recipient.</p>
                <ul className="project-list">
                  <li><strong>Food Inspection Report Web App:</strong> Designed web app to help users find inspection results for restaurants in Boston. Technologies: Front-end HTML, CSS, JavaScript; Back-end JDBC, Java, Pandas, MySQL. Reduced time to gather information by 50%.</li>
                  <li><strong>Doctor Locating App:</strong> Developed a doctor-locating web app for users to find doctors on their insurance plan. Technologies: Angular, HTML, CSS. Uses Google API for location services.</li>
                  <li><strong>SharkHack 2019 Winner:</strong> Best Social Good Hack for an Othello game in Python and Processing. The game scans the board for legal moves and selects the first legal one.</li>
                </ul>
              </li>

              {/* MBA, focus in Supply Chain Management - Outer Card */}
              <li className="outer-card">
                <p><strong>MBA, focus in Supply Chain Management</strong>, Portland State University, Portland, OR</p>
                <p>Study abroad—Supply Chain Management and Marketing in China.</p>
                <ul className="project-list">
                  <li><strong>Capstone Project Consulting with the Council for Responsible Sport:</strong> Developed a product launch plan for an online central hub targeting race and athletic directors.</li>
                  <li><strong>Coursework Included:</strong> Forecasting, demand & resource planning, statistical & financial analysis, strategy, scheduling, and statistics.</li>
                </ul>
              </li>

              {/* BS Chemical Engineering - Outer Card */}
              <li className="outer-card">
                <p><strong>BS Chemical Engineering</strong>, Arizona State University, Tempe, AZ</p>
                <ul className="project-list">
                  <li><strong>Coursework Included:</strong> Engineering analysis of chemical processes, materials, energy balance methods, and heat transfer.</li>
                  <li><strong>Capstone Project:</strong> Designed a solution for the Salton Sea’s increasing salinity through water treatment and leaching prevention.</li>
                  <li><strong>Math Work:</strong> Calculus, Differential Equations, Linear Algebra, Statistics, Probability.</li>
                  <li><strong>Technologies:</strong> Aspen, C++, Matlab/Simulink.</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

