import { Container, Row, Col } from "react-bootstrap";
import NavBar from "./NavBar";
import { FaGithub } from "react-icons/fa";

export default function About() {
  return (
    <div className="body w-100 vh-100">
      <NavBar />
      <Container className="homeText">
        <Row>
          <Col>
            <h1>About Task Tracker</h1>
          </Col>
        </Row>
      </Container>
      <Container className="aboutText">
        <Row>
          <Col>
            <p>
              <a
                href="https://github.com/courtneytruong"
                target="_blank"
                className="custom-link"
              >
                <FaGithub style={{ marginRight: "3px", marginBottom: "3px" }} />
                Courtney Truong
              </a>
            </p>
            <br />
            <p>
              Task Tracker is a Reactjs app built as a capstone project for the
              React Workshop taught by Code:You. It is a to-do list app and is
              my first real front-end focused project in general, not only my
              first real React project. I have previously only built back-end
              focused applications and have only gone through the Software
              Development course with Code:You which was focused on C# and .Net.
            </p>
            <br />
            <p>
              <strong>Features List:</strong>
              <br />
              - CRUD functionality. Users Add, View, Edit and Delete tasks.
              <br />
              - Toggle between complete and incomplete status for individual
              tasks.
              <br />
              - Persistant Data with Local Storage.
              <br />
              - Priority levels. Users can mark tasks as low, medium, or high
              priority.
              <br />
              - Filter by priority.
              <br />
              - Deadline. Users are able to add deadlines to tasks and overdue
              tasks are highlighted with an orange background. Users can not
              choose a date in the past as a deadline.
              <br />
              - Responsive Design.
              <br />
            </p>
            <br />
            <p>
              <strong>Libraries and Npm Packages Used:</strong>
              <br />
              - Reactjs
              <br />
              - React Bootstrap
              <br />
              - React Icons
              <br />
              - React-router-dom
              <br />
              - Yup
              <br />
              - Vite
              <br />
            </p>
            <br />
            <p>
              <strong>Areas for improvement:</strong>
              <br />
              - I would like to add some more features to the app such as a
              search function to allow the user to search for tasks by keyword.
              <br />
              - I would also like to add categories to the task items so that
              Users can assign a category to a task and then allow them to
              filter tasks by that category and/or priority as well.
              <br />
              - The code could use some refactoring.
              <br />
              - The styling could use some work mostly small details like making
              the padding in the filter component match the looks of the add
              task form. I could also hide the add task form and allow it to
              only be shown when clicking an add task button.
              <br />
            </p>
            <br />
            <p>
              <strong>Known issues:</strong>
              <br />
              - The app likes to give a "Each child in a list should have a
              unique "key" prop." warning once after adding a second task in the
              app. After adding more tasks the warning doesnt pop up again. I
              think this has something to do with using Date.now as the id. I
              think I can remedy this buy using a package like UUID. However
              this does not impede use and functionality of the app.
              <br />
            </p>
            <br />
            <p>
              <strong>
                Challenges that I overcame while building this project:
              </strong>
              <br />
              - The Deadline function was tricky. At first I was running into an
              issue that when I would enter a date using the date select it
              would be shown in my task as a very user unfriendly format and
              would show up as a day off from what i selected. This was due to
              timezone issues between my computer clock and browser. I had to
              write a function to format the date to show only the date and
              write it in MM/DD/YYYY format and also parse to the date to local
              timezone.
              <br />
              - Validation was also tricky. At first I was using react-hook-form
              to help with validating my add new task and edit task forms,
              however, i ran into a problem where react-hook-form will use its
              own controller and over ride the controllers that i had already
              written into my code. So I changed to use Yup for validation
              instead since it worked better with my code.
              <br />
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
