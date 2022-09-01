import styled from 'styled-components';

function Footer() {
	return (
		<Container>
			<p>
				This project was developed for the Software Engineer challenge in
				<a href='https://www.kimche.co/' rel='noreferrer' target='_blank'>
					{' '}
					Kimche{' '}
				</a>
				by{' '}
				<a
					href='https://www.linkedin.com/in/bruno-amerio/'
					rel='noreferrer'
					target='_blank'
				>
					{' '}
					Bruno Amerio{' '}
				</a>
				.<br />
				You can see this proyect repo
				<a
					href='https://github.com/BrunoAmerio/kimche-challenge'
					rel='noreferrer'
					target='_blank'
				>
					{' '}
					here{' '}
				</a>
			</p>
		</Container>
	);
}

const Container = styled.footer`
	text-align: center;
	width: 90vw;
	margin: auto;
	margin-top: 10vh;
`;

export default Footer;
