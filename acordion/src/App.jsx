import React, { useState } from "react";
import data from "./assets/data";
import Question from "./Question";
import "./assets/app.css";

function App() {
  const [qusestions, setQuestion] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>question and answer obut loogin</h3>
        <section className="info">
          {qusestions.map((question) => {
           return <Question key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
