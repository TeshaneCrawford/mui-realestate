'use client';

import { Box, Container, styled, Typography } from '@mui/material';
import Image from 'next/image';

import LogoImg from '../../public/logo.png';
import StarsImg from '../../public/Star.png';
import LogosImg from '../../public/logos.png';

const Companies = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      marginBottom: theme.spacing(4),
    },
  }));

  const CustomBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(4),
    },
  }));

  return (
    <Box sx={{ mt: 10 }}>
      <CustomContainer>
        <CustomBox>
          <Image src={LogoImg} alt="logo" width={100} height={100} />
          <Typography
            variant="body2"
            sx={{
              color: '#7D8589',
              fontSize: '16px',
              fontWeight: 'bold',
              mt: 2,
            }}
          >
            More than 45,000 trust Estate
          </Typography>
        </CustomBox>
        <Box>
          <Image src={StarsImg} alt="stars" width={100} height={100} />
          <Typography
            variant="body2"
            sx={{
              color: '#7D8589',
              fontSize: '16px',
              fontWeight: 'bold',
              mt: 2,
            }}
          >
            5-Star Rating (2k+ Reviews)
          </Typography>
        </Box>
      </CustomContainer>
      <Container sx={{ display: 'flex', flexDirection: 'column' }}>
        <Image src={LogosImg} alt="logos" />
      </Container>
    </Box>
  );
};

export default Companies;
