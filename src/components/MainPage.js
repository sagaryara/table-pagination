import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Table from "./Table";
import { headerOptions } from "../constants/columns";
import mockData from "../constants/mockData.json";

const styles = {
  contentSection: {
    border: "1px solid #dddddd",
    textAlign: "left",
    padding: 8
  },
  headerSection: {
    border: "1px solid #dddddd",
    textAlign: "left",
    padding: 8
  }
};

const getData = () => mockData;

const MainPage = ({ classes }) => {
  const generateRow = (row) => {
    return (
      <tr>
        {headerOptions.map((field) => (
          <td key={field.Header} className={classes.contentSection}>
            {row[field.accessor]}
          </td>
        ))}
      </tr>
    );
  };

  const header = (
    <tr>
      {headerOptions.map((header) => (
        <th key={header.Header} className={classes.headerSection}>
          {header.Header}
        </th>
      ))}
    </tr>
  );

  return (
    <div>
      <Table
        renderRow={(row) => generateRow(row)}
        entries={getData()}
        header={header}
        placeholder="Search by name, email, country"
        textfilterOptions={["first_name", "last_name", "email", "country"]}
        pageLimit={10}
      />
    </div>
  );
};

export default withStyles(styles)(MainPage);
