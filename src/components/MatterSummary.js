import React, { useState, useEffect } from 'react'
import { Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import matterService from '../services/matters'
const MatterSummary = () => {
  const [matters, setMatters] = useState([])
  useEffect(() => {
    matterService
    .getAll()
    .then(response => {
      setMatters(response.data)
    })
  }, []) 
      
        return (
            <Paper>
              <Table size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    <TableCell>Dessert (100g serving)</TableCell>
                    <TableCell align="right">Calories</TableCell>
                    <TableCell align="right">Fat&nbsp;(g)</TableCell>
                    <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                    <TableCell align="right">Protein&nbsp;(g)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {matters.map(row => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.calories}</TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
                      <TableCell align="right">{row.carbs}</TableCell>
                      <TableCell align="right">{row.protein}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
        );
}

export default MatterSummary