import React from "react";

export function ChangeGreeting({ changeGreeting }) {
	return (
		<div>
			<h4>Change Greeting</h4>
			<form
				onSubmit={(event) => {
					// This function just calls the transferTokens callback with the
					// form's data.
					event.preventDefault();

					const formData = new FormData(event.target);
					const greeting = formData.get("greeting");

					if (greeting) {
						console.log(greeting);
						changeGreeting(greeting);
					}
				}}
			>
				<div className="form-group">
					<label>new Greeting</label>
					<input className="form-control" type="text" name="greeting" required />
				</div>
			</form>
		</div>
	);
}
