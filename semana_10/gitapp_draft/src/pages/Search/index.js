import { useState } from "react";

import { Link } from "react-router-dom";

import {
	Typography,
	Container,
	Grid,
	Card,
	CardContent,
	Button,
	TextField,
} from "@mui/material";

const Search = () => {
	const [username, setUsername] = useState("");

	function handleInput(e) {
		setUsername(e.target.value);
	}

	return (
		<Container maxWidth="sm" sx={{ marginTop: 20 }}>
			<Card>
				<CardContent>
					<Grid container spacing={3}>
						<Grid item xs={12}>
							<Typography variant="h1" textAlign="center">
								GitApp
							</Typography>
						</Grid>
						<Grid item xs={8}>
							<TextField
								onChange={handleInput}
								label="@username..."
								size="small"
								fullWidth
							/>
						</Grid>
						<Grid item xs={4}>
							<Link to={`/search/${username}`}>
								<Button
									variant="contained"
									color="primary"
									fullWidth
								>
									Buscar
								</Button>
							</Link>
						</Grid>
					</Grid>
				</CardContent>
			</Card>
		</Container>
	);
};

export default Search;
