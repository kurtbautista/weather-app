import { memo } from "react";
import PropTypes from "prop-types";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const propTypes = {
  header: PropTypes.array,
  data: PropTypes.array,
};

const defaultProps = {
  header: [],
  data: [],
};

const SimpleTable = ({ header, data }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {header.map((item, index) => (
              <TableCell key={index} {...item.headerProps}>
                {item.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row, index) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {header.map((item, index) => (
                <TableCell
                  key={index}
                  component="th"
                  scope="row"
                  {...item.dataProps}
                  sx={{ display: { sx: "none" } }}
                  // {...row[item.name]?.dataProps}
                  // sx={row[item.name]?.dataProps?.sx}
                >
                  {row[item.name]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

SimpleTable.propTypes = propTypes;
SimpleTable.defaultProps = defaultProps;

export default memo(SimpleTable);
