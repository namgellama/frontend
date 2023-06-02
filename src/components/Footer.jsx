import { Typography } from '@mui/material';
import styled from '@emotion/styled';

const StyledFooter = styled('footer')({
	textAlign: 'center',
	background: '#fff',
	padding: '1rem 0',
	marginTop: '2rem',
});

const Footer = () => {
	return (
		<StyledFooter>
			<Typography variant="p" fontSize="1.2rem" letterSpacing={1}>
				Copyright &copy; 2023, GreenCity
			</Typography>
			<Typography fontSize=".8rem" color="gray" mt={1} letterSpacing={1}>
				Developed by Namgel Lama
			</Typography>
		</StyledFooter>
	);
};

export default Footer;
