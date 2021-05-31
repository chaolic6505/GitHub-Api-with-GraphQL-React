interface INavButtons {
	start: string;
	end: string;
	next: boolean;
	previous: boolean;
	onPage: (order: string, position: string) => void;
}

export const NavButtons: React.FC<INavButtons> = ({
	start,
	end,
	next,
	previous,
	onPage,
}) => {
	//console.log(previous);
	return (
		<div className="d-flex justify-content-center my-2">
			<button
				disabled={next}
				className="btn mx-1 btn-sm btn-primary bi bi-arrow-left"
				onClick={() => onPage('last', 'before: "' + start + '"')}
			></button>

			<button
				disabled={!next}
				className="btn mx-1 btn-sm btn-primary bi bi-arrow-right"
				onClick={() => onPage('first', 'after: "' + end + '"')}
			></button>
		</div>
	);
};

export default NavButtons;
