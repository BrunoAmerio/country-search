import _ from 'lodash';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

function Pagination({ items, pageSize, currentPage, onPageChange }) {
	const [pages, setPages] = useState([]);
	const pageCount = Math.ceil(items / pageSize);

	useEffect(() => {
		if (currentPage > 3 && currentPage < pageCount - 2) {
			setPages([
				..._.range(currentPage - 1, currentPage - 3).reverse(),
				currentPage,
				..._.range(currentPage + 1, currentPage + 3),
			]);
		} else if (currentPage <= 5) {
			setPages(_.range(1, pageCount >= 5 ? 6 : pageCount + 1));
		}
	}, [currentPage, items]);

	if (pageCount <= 1) return null;

	return (
		<ButtonsContainer>
			{pages.map(page => {
				if (page === currentPage) {
					return <CurrentButton key={page}>{page}</CurrentButton>;
				}
				return (
					<Button key={page} onClick={() => onPageChange(page)} type='button'>
						{page}
					</Button>
				);
			})}
		</ButtonsContainer>
	);
}

const CurrentButton = styled.button`
	border: none;
	border-radius: 4px;
	padding: 5px 10px;
	background-color: rgb(59, 149, 252);
	color: white;
	cursor: pointer;
`;

const ButtonsContainer = styled.div`
	display: flex;
	gap: 5px;
	justify-content: center;
`;

const Button = styled.button`
	border: none;
	border-radius: 4px;
	padding: 5px 10px;
	cursor: pointer;

	&:hover {
		background-color: rgb(179, 179, 179);
	}
`;

export default Pagination;
