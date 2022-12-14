function ArrowUp({ width, height }) {
	return (
		<svg
			width={width}
			height={height}
			viewBox='0 0 19 11'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M18.862 10.0919L9.99927 0.2121C9.74559 -0.0706999 9.25711 -0.0706999 9.00073 0.2121L0.138023 10.0919C-0.191225 10.4603 0.105638 11 0.637293 11H18.3627C18.8944 11 19.1912 10.4603 18.862 10.0919Z'
				fill='black'
			/>
		</svg>
	);
}

ArrowUp.defaultProps = {
	width: 19,
	height: 11,
};

export default ArrowUp;
