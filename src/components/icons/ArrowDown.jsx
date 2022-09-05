import React from 'react';

function ArrowDown() {
	return (
		<svg
			width='19'
			height='11'
			viewBox='0 0 19 11'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M18.3627 0H0.637293C0.105638 0 -0.191225 0.539655 0.138023 0.908072L9.00073 10.7879C9.25441 11.0707 9.74289 11.0707 9.99927 10.7879L18.862 0.908072C19.1912 0.539655 18.8944 0 18.3627 0Z'
				fill='black'
			/>
		</svg>
	);
}

ArrowDown.defaultProps = {
	height: 11,
	width: 19,
};

export default ArrowDown;
