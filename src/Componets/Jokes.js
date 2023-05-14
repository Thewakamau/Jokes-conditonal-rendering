import { useState } from "react"
import React from "react"

const Jokes = (props) => {
	const [isShown, setisShown] = useState(false)
	const toggle = () => {
		setisShown((prevState) => !prevState) // will set true
	}
	return (
		<div>
			{props.setup && <h3>Setup: {props.setup}</h3>}
			{isShown && <p>Punchline: {props.punchline}</p>}

			<button onClick={toggle}>{isShown ? "Hide " : "Show "} Punchline</button>
			<hr />
		</div>
	)
}

export default Jokes
