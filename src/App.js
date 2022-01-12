import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {TextareaAutosize} from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    margin: theme.spacing(3),
    textAlign: 'left',
    alignItems: 'start',
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.text.disabled,
}));

export default function ColumnsGrid() {
    return (
        <Box sx={{ flexGrow: 3 }}>
            <Grid container spacing={5} columns={16}>
                <Grid item xs={3}>
                    <Item>Item #</Item>
                </Grid>
                <Grid item xs={3}>
                    <Item>Name</Item>
                </Grid>
                <Grid item xs={3}>
                    <Item>Qty</Item>
                </Grid>
                <Grid item xs={3}>
                    <Item>ADD/UPDATE</Item>
                </Grid>
            </Grid>
            <TextareaAutosize
                maxRows={30}
                aria-label="maximum height"
                placeholder="Maximum 4 rows"
                defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua."
                style={{ width: 960, height: 500 }}
            />
        </Box>
    );
}

