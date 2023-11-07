import React from 'react'
import Link from 'next/link';


const PlayersList = (props) => {
    return (
        <div>
          <h1>These players are from the API</h1>
          {props.players.map((player) => {
            return (
              <div key={player.id}>
                <Link href="/player/[id]" as={`/player/${player.id}`}>
                  Voir le player #{player.id}
                </Link>
                <h2>{player.name}</h2>
                <p>{player.wallet_address}</p>
              </div>
            );
          })}
        </div>
      );
}

export default PlayersList