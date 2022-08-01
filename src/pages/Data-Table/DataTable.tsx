import React, { FC } from "react";
import { Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import './DataTable.scss';

const DataTable: FC = () => {
  const [count, setCount] = React.useState();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(25);

  const handleChangePage = (event: any, newPage: any) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value));
    setPage(0);
  };
  return (
    <div>
      <TableContainer className="table_container">
        <Table stickyHeader aria-label="sticky table">
          <TableHead className="data_tbl_head_row">
            <TableRow style={{ background: "none" }}>
              <TableCell>Data ID</TableCell>
              <TableCell>Data Name</TableCell>
              <TableCell> Email ID</TableCell>
              <TableCell>Contact Number</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="data_tbl_body_row">
            <TableRow style={{ background: "none" }}>
              <TableCell>
                hbfhfbif
              </TableCell>
              <TableCell>
                hbfhfbif
              </TableCell>
              <TableCell>
                hbfhfbif
              </TableCell>
              <TableCell>
                hbfhfbif
              </TableCell>
              <TableCell>
                hbfhfbif
              </TableCell>
              <TableCell>
                hbfhfbif
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        className="table_pagination"
        rowsPerPageOptions={[25, 50, 100]}
        component="div"
        count={count}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

    </div>
  );
};

export default DataTable;
