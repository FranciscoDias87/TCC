import React, { useState } from 'react';
import clsx from 'clsx';
import { v4 as uuid } from 'uuid';
import moment from 'moment'
import {
  Box,
  Card,
  CardHeader,
  Chip,
  Divider,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip
} from '@material-ui/core';
import PerfectScollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import 'react-perfect-scrollbar/dist/css/styles.css';

const data = [
  {
    id: uuid(),
    ref: 'L489079',
    amount: 30.5,
    customer: {
      name: 'Francisco Dias'
    },
    createdAt: 1612663853274,
    status: 'pending',
  },
  {
    id: uuid(),
    ref: 'L489078',
    amount: 25.1,
    customer: {
      name: 'Shyelle Linhares'
    },
    createdAt: 1612663853274,
    status: 'delivered'
  }

];


const useStyles = makeStyles(() => ({
  root: {},
  actions: {
    justifyContent: 'flex-end'
  }
}));

const ValoresCaixasId = ({ className, ...rest }) => {
  const classes = useStyles();
  const [orders] = useState(data);

  //console.log(Date.now()) => busca data atual em milissegundos


  return (
    <Card
      className={clsx(classes.root, className)}
    >
      <CardHeader title='Total dos Caixas' />
      <Divider />
      <PerfectScollbar >
        <Box minWidth={600}>
          <Table>
            <TableHead >
              <TableRow>
                <TableCell sortDirection='desc'>
                  <Tooltip
                    enterDelay={300}
                    title='Data'
                  >
                    <TableSortLabel
                      active
                      direction='desc'
                    >
                      Data
                  </TableSortLabel>
                  </Tooltip>
                </TableCell>

                <TableCell>
                  Matricula
                </TableCell>
                <TableCell>
                  Nome
                </TableCell>
                <TableCell>
                  Valor
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <TableRow
                  hover
                  key={order.id}
                >
                  <TableCell>
                    {moment(order.createdAt).format('DD/MM/YYYY')}
                  </TableCell>
                  <TableCell>
                    {order.ref}
                  </TableCell>
                  <TableCell>
                    {order.customer.name}
                  </TableCell>
                  <TableCell>
                    <Chip
                      color='primary'
                      label={`${'R$ '}${order.amount.toFixed(2)}`}
                      size='small'
                    />

                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScollbar>

    </Card>
  );
}
ValoresCaixasId.propsTypes = {
  className: PropTypes.string
}

export default ValoresCaixasId;