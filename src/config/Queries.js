import { gql } from '@apollo/client';

const GET_COUNTRIES = gql`
	query {
		countries {
			code
			name
			capital
			emoji
			currency
			native
			continent {
				name
			}
			languages {
				name
			}
		}
	}
`;

export default GET_COUNTRIES;
