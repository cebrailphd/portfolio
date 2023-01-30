var ChessWebAPI = require("chess-web-api");
var chessAPI = new ChessWebAPI();
import { useState, useEffect } from "react";

function Chess() {
  const [player, setPlayer] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const getPlayer = await chessAPI.getPlayer("cebo1903");
      const getPlayerStats = await chessAPI.getPlayerStats("cebo1903");
      setPlayer([
        getPlayer.body.username,
        getPlayerStats.body.chess_rapid.record.win,
      ]);
      console.log(getPlayer.body);
      console.log(getPlayerStats.body);
    };
    fetchData();
  }, []);
  return (
    <>
      <ul>
        <li>username: {player[0]}</li>
        <li>wins: {player[1]}</li>
      </ul>
    </>
  );
}

export default Chess;
