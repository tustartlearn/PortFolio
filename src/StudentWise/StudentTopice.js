
import { Box, Typography, Grid } from '@mui/material'
import test from '../LmtIcon.png'
import TopicTable from './TopiceData'; 
import CombinedView from './TopiceBar';
export default function Chart() {
	return (
		<Box
			sx={{
				width: '90%',
				margin: 'auto', // Center horizontally
				boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
				border: '2px solid #fff',
				borderRadius: '10px',
				padding: '1.5rem', // Add padding for content
				backgroundColor: '#f9f9f9',
			}}
		>
			{/* Image Section */}
			<Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
				<img src={test} alt="description" width="40px" style={{ marginRight: '10px' }} />
				<Typography sx={{ fontWeight: '600', fontSize: '1rem' }}>LOVEMYTEST</Typography>
			</Box>

			{/* Details Section */}
			<Box sx={{ marginBottom: '1rem' }}>
				<Grid container spacing={2}>
					{/* First Row */}
					<Grid item xs={6} md={6} lg={3}>
						<Typography sx={{ fontSize: '0.9rem', fontWeight: '600' }}>
							Test: Half Yearly Exam
						</Typography>
					</Grid>
					<Grid item xs={6} md={6} lg={3}>            <Typography sx={{ fontSize: '0.9rem', fontWeight: '600' }}>
						Date: 11 Nov 2024
					</Typography>
					</Grid>

					{/* Second Row */}
					<Grid item xs={6} md={6} lg={3}>            <Typography sx={{ fontSize: '0.9rem', fontWeight: '600' }}>
						Time: 9AM
					</Typography>
					</Grid>
					<Grid item xs={6} md={6} lg={3}>            <Typography sx={{ fontSize: '0.9rem', fontWeight: '600' }}>
						Duration: 2Hrs
					</Typography>
					</Grid>

					{/* Third Row */}
					<Grid item xs={6} md={6} lg={3}>            <Typography sx={{ fontSize: '0.9rem', fontWeight: '600' }}>
						Teacher : Anil Gupta
					</Typography>
					</Grid>
					<Grid item xs={6} md={6} lg={3}>            <Typography sx={{ fontSize: '0.9rem', fontWeight: '600' }}>
						Class: IV            </Typography>
					</Grid>

					{/* Fourth Row */}
					<Grid item xs={6} md={6} lg={3}>            <Typography sx={{ fontSize: '0.9rem', fontWeight: '600' }}>
						Subject: Mathematics
					</Typography>
					</Grid>
					<Grid item xs={6} md={6} lg={3}>            <Typography sx={{ fontSize: '0.9rem', fontWeight: '600' }}>
						Max Mark: 80
					</Typography>
					</Grid>
				</Grid>
			</Box>

			<hr />
			<Typography variant="h4" color="
#11b55c" fontWeight={530} marginTop={2}>TopiceWise Analysis</Typography>
			<Typography variant="h5" color="initial" marginTop={2} fontWeight={500}>Test:	JEE Maths-Practice Test 2</Typography>
			<Box sx={{ display: 'flex', justifyContent: 'space-around', gap: 2, mt: 4 }}>
				{/* Score Section */}
				<Box
					sx={{
						border: '2px solid #1bc6aa',
						borderRadius: '10px',
						padding: '16px',
						display: 'flex',
						alignItems: 'center',
						gap: '16px',
						justifyContent: 'space-between',
						minWidth: '250px'
					}}
				>
					<Typography variant="h6" color='#27cfab'>
						Score: <span style={{ color: '#1bc6aa' }}>165</span> out of <span style={{ color: '#8a2b2b' }}>200</span>
					</Typography>
					<Typography variant="h6" sx={{ color: '#ff9800' }}>65.1%</Typography>
				</Box>

				{/* Time Taken Section */}
				<Box
					sx={{
						border: '3px solid #1bc6aa',
						borderRadius: '8px',
						padding: '16px',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						minWidth: '200px'
					}}
				>
					<Typography variant="h6" color='
#168884'>
						Time Taken: <span style={{
							color: '#168884' }}>50 Mins</span>
        </Typography>
				</Box>

				{/* Marks Info Section */}
				<Box
					sx={{
						border: '3px solid #1bc6aa',
						borderRadius: '8px',
						padding: '16px',
						minWidth: '200px',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'flex-start',
					}}
				>
					<Typography variant="body1" color='
#168884'>Marks per question: <span style={{ color: '#1bc6aa' }}>4</span></Typography>
					<Typography variant="body1" color='
#168884'>Negative Marks/question: <span style={{ color: '#8a2b2b' }}>1</span></Typography>
				</Box>
			</Box>  
			<br /> 
			<br /> 
			<br /> 
			<br />			 
			<hr/>  
			<Box sx={{marginTop:'30px'}}>
			<TopicTable /> 
			</Box> 
			<Box sx={{marginTop:'20PX'}}> 
				<CombinedView /> 
				</Box> 
		</Box> 
	);
}

