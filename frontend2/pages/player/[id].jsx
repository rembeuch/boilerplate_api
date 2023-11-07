// pages/player/[id].js
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";

function Player() {
  const router = useRouter();
  const { id } = router.query;
  const [player, setPlayer] = useState(null);

  async function getAPIData() {
    try {
      const response = await fetch(`http://localhost:3000/api/v1/players/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Failed to fetch the player: ", error);
      return null;
    }
  }

  useEffect(() => {
    const fetchCurrentPlayer = async () => {
      try {
        const json = await getAPIData();
        setPlayer(json);
      } catch (error) {
        console.error("Failed to fetch the player: ", error);
      }
    };
    fetchCurrentPlayer();
  }, []);

  if (!player) return <h2>Loading...</h2>;

  return (
    <div>
      <h2>{player.name}</h2>
      <p>{player.wallet_address}</p>
    </div>
  );
}

export default Player;
