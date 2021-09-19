import React from 'react'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { Average } from '../../common/types';

interface Props {
    averages:Average[]
}

export const Dashboard:React.FC<Props> = ({averages}:Props) => {
    return (
        <TableContainer component={Paper}  style={{ marginTop: '40px' }} >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Average</TableCell>
              <TableCell>Product</TableCell>
              <TableCell>Country</TableCell>
              <TableCell>Start Date</TableCell>
              <TableCell>End Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              {averages.map((average,i)=>(
                  <TableRow hover key={i}>
                 <TableCell component="th" scope="row">
                    {average.average}
                  </TableCell>
                  <TableCell>{average.product}</TableCell>
                  <TableCell>{average.country}</TableCell> 
                   <TableCell> {average.start}</TableCell>
                   <TableCell> {average.end}</TableCell>
                 
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
}
