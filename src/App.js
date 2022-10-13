import "./App.css";
import Player from "./components/Player.js";

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <h1>Five stars who will play their last World Cup in Qatar</h1>
        <Player
          name="Lionel Messix`"
          club="Argentina"
          age="35"
          text="The Argentine 'crack' will face the most important challenge of his career in Qatar: winning the World Cup. The striker won everything with FC Barcelona and has seven Ballon d'Or awards. In addition, with the 'albiceleste' he won the Olympic gold medal in 2008 and was crowned champion of the Copa América 2021 and the Finalíssima 2022. His best participation in a World Cup was in Brazil 2014, when he reached the final and lost to Germany. This year, Messi wants to lead his national team to a third World Cup title, after those won in 1978 and 1986."
          img="Messi"
        />
        <Player
          name="Cristino Ronaldo"
          club="Portugal"
          age="37"
          text="Cristiano Ronaldo 37 years old After a poor start to the season, in which he has barely scored one goal for Manchester United, the Portuguese striker will be looking to improve his level before Qatar 2022. Ronaldo has five Ballon d'Ors and has won five Champions League titles. With his national team, he was crowned champion of Euro 2016 and the 2019 Nations League. His best performance in a World Cup was in Germany 2006, where he finished fourth. His goal in Qatar will be to lead Portugal to the first World Cup title in its history."
          img="Ronaldo"
        />
        <Player
          name="Robert Lewandowski"
          club="Poland"
          age="34"
          text="The Polish player is one of the best strikers of the last decade. He had a triumphant spell at Bayern Munich, where he won the Champions League and won two FIFA Player of the Year awards. This summer he joined Barcelona and has 12 goals in 10 games. Lewandowski is the captain of Poland and his best performance with his national team was in 2016, when he reached the quarterfinals of the European Championship. In Qatar, the striker is aiming for a historic performance and a place, at least, among the top eight."
          img="Lewandowski"
        />
         <Player
          name="Luis Suarez"
          club="Uruguay"
          age="35"
          text="The 'Pistolero' had trouble finding a club this past summer. With no possibilities in Europe, the striker returned to the team that formed him: Nacional of Uruguay. His objective has been to get more minutes to arrive in the best way to Qatar and in 11 games he has scored four goals. With his national team, Suarez was crowned champion of the 2011 Copa America and placed fourth in the 2010 World Cup in South Africa. Uruguay has started a new cycle under Diego Alonso and the 'charrúas' are dreaming of winning their third world title in Qatar."
          img="Suarez"
        />
         <Player
          name="Manuel Neuer"
          club="Germany"
          age="36"
          text="The German goalkeeper, considered one of the best in history, seeks to bid farewell to the World Cups with an important performance. The goalkeeper was vital for his national team's title in Brazil 2014 and was chosen as the best goalkeeper of the tournament. However, the story was quite the opposite in Russia 2018, where Germany finished last in their group. In Qatar 2022, Neuer will be the captain of the 'Bavarians' and will seek to win the second World Cup title in his personal account and the fifth for the German national team."
          img="Neuer"
        />
      </div>
    </div>
  );
}

export default App;
