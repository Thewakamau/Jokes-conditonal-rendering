import React from "react"
import Jokes from "./Componets/Jokes"

const App = () => {
	return (
		<div>
			<Jokes punchline='It’s hard to explain puns to kleptomaniacs because they always take things literally.' />
			<Jokes
				setup='I got my daughter a fridge for her birthday.'
				punchline="I can't wait to see her face light up when she opens it."
				isPun={false}
			/>
			<Jokes
				setup='How did the hacker escape the police?'
				punchline='He just ransomware!'
				isPun={true}
			/>
			<Jokes
				setup="Why don't pirates travel on mountain roads?"
				punchline='Scurvy.'
				isPun={true}
			/>
			<Jokes
				setup='Why do bees stay in the hive in the winter?'
				punchline='Swarm.'
				isPun={true}
			/>
			<Jokes
				setup="What's the best thing about Switzerland?"
				punchline="I don't know, but the flag is a big plus!"
				isPun={false}
			/>
		</div>
	)
}

export default App
