import React from "react";
import { Table } from "../../../Components/Atom";
import mdx from "./Table.mdx";

export default {
    title: "Atom/Table",
    component: Table,
    parameters: {
        docs: {
            page: mdx
        }
    }
};

export const Basic = () => {
    return (
        <Table boxShadow>
            <thead>
                <tr>
                    <th>Head 1</th>
                    <th>Head 2</th>
                    <th>Head 3</th>
                    <th>Head 4</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>test 1</td>
                    <td>test 2</td>
                    <td>test 3</td>
                    <td>test 4</td>
                </tr>
                <tr>
                    <td>test 1</td>
                    <td>test 2</td>
                    <td>test 3</td>
                    <td>test 4</td>
                </tr>
            </tbody>
        </Table>
    );
};

export const Responsive = () => {
  return (
      <Table responsive boxShadow>
          <thead>
              <tr>
                  <th>Head 1</th>
                  <th>Head 2</th>
                  <th>Head 3</th>
                  <th>Head 4</th>
                  <th>Head 5</th>
                  <th>Head 6</th>
                  <th>Head 7</th>
                  <th>Head 8</th>
                  <th>Head 9</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>test 1</td>
                  <td>test 2</td>
                  <td>test 3</td>
                  <td>test 4</td>
                  <td>test 5</td>
                  <td>test 6</td>
                  <td>test 7</td>
                  <td>test 8</td>
                  <td>test 9</td>
              </tr>
              <tr>
                  <td>test 1</td>
                  <td>test 2</td>
                  <td>test 3</td>
                  <td>test 4</td>
                  <td>test 5</td>
                  <td>test 6</td>
                  <td>test 7</td>
                  <td>test 8</td>
                  <td>test 9</td>
              </tr>
              <tr>
                  <td>test 1</td>
                  <td>test 2</td>
                  <td>test 3</td>
                  <td>test 4</td>
                  <td>test 5</td>
                  <td>test 6</td>
                  <td>test 7</td>
                  <td>test 8</td>
                  <td>test 9</td>
              </tr>
              <tr>
                  <td>test 1</td>
                  <td>test 2</td>
                  <td>test 3</td>
                  <td>test 4</td>
                  <td>test 5</td>
                  <td>test 6</td>
                  <td>test 7</td>
                  <td>test 8</td>
                  <td>test 9</td>
              </tr>
          </tbody>
      </Table>
  );
};

export const RoundedTable = () => {
  return (
      <Table boxShadow round>
          <thead>
              <tr>
                  <th>Head 1</th>
                  <th>Head 2</th>
                  <th>Head 3</th>
                  <th>Head 4</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>test 1</td>
                  <td>test 2</td>
                  <td>test 3</td>
                  <td>test 4</td>
              </tr>
              <tr>
                  <td>test 1</td>
                  <td>test 2</td>
                  <td>test 3</td>
                  <td>test 4</td>
              </tr>
          </tbody>
      </Table>
  );
};

export const WithoutShadow = () => {
  return (
      <Table>
          <thead>
              <tr>
                  <th>Head 1</th>
                  <th>Head 2</th>
                  <th>Head 3</th>
                  <th>Head 4</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>test 1</td>
                  <td>test 2</td>
                  <td>test 3</td>
                  <td>test 4</td>
              </tr>
              <tr>
                  <td>test 1</td>
                  <td>test 2</td>
                  <td>test 3</td>
                  <td>test 4</td>
              </tr>
          </tbody>
      </Table>
  );
};