import React from "react";

/**
 * Welcome component renders a welcome message, nothing else!
 * @method Welcome
 */
const Welcome = () => {
  return (
    <div>
      <div className="welcome">
        <h1>Welcome!</h1>
        <p>
          The main Star Wars film series is a trilogy of trilogies; as it neared
          completion, it began to be referred to as the "Skywalker Saga".<br/><br/>

          It was released beginning with the original trilogy (Episodes IV, V
          and VI, 1977–1983), followed by the prequel trilogy (Episodes I, II
          and III, 1999–2005) and the sequel trilogy (Episodes VII, VIII and IX,
          2015–2019).<br/><br/>

          The first film released, Star Wars (1977), is the
          fourth film chronologically and was later subtitled Episode IV – A New
          Hope. The saga begins chronologically with Star Wars: Episode I – The
          Phantom Menace (1999) and concludes with Episode IX – The Rise of
          Skywalker (2019).
          <br/><br/>
        </p>
        <p>
            <ul>
                <li>1. Main series</li>
                <li>Star Wars: Episode I - The Phantom
          Menace (1999) </li>
                <li>Episode II - Attack of the Clones (2002)</li>
                <li>Star
          Wars: Episode III - Revenge of the Sith (2005)</li>
                <li>Episode IV - A New Hope (1977)</li>
                <li>Episode V - The
          Empire Strikes Back (1980)</li>
                <li>Episode VI - Return of the Jedi
          (1983)</li>
                <li>Episode VIII - The Last Jedi (2017)</li>
            </ul>
        </p>
      </div>
    </div>
  );
};

export default Welcome;
