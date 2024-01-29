import * as React from 'react';
import Pagination from '@mui/material/Pagination';

export default function BasicPagination(props) {
  const { totalCount } = props.pagination
  const limit = 10

  return (
    <>
      <Pagination count={Math.ceil(totalCount / limit)} color="secondary" onChange={(event, page) => {props.onChange({offset: (page - 1) * limit})}} />
    </>
  );
}