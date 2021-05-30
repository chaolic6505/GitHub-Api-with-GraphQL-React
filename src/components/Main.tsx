export interface IMain {
	name: string;
}

const Main: React.FC<IMain> = (props) => {
	return (
		<div className="App container mt-5">
			<h1 className="text-primary">
				<i className="bi bi-diagram-2-fill"></i> Repositories
			</h1>
			<p>Hi {props.name}</p>

			{props.children}
		</div>
	);
};

export default Main;
