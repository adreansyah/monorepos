import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import wrapClassName from "classnames";

const setBorderRadius = border => css`
    border-radius: ${border};
    -moz-border-radius: ${border};
    -webkit-border-radius: ${border};
`;
const ResponsiveTag = styled.div`
    display: block;
    width: 100%;
    overflow-x: auto;
    ${props => (props.round === true ? setBorderRadius("4px") : setBorderRadius(props.round))}

    &.shadow {
        box-shadow: 0 1px 4px 0 rgba(112, 114, 125, 0.4);
    }
    table {
        width: 100%;
    }
    &::-webkit-scrollbar {
        height: 8px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #dddddd;
        border-radius: 10px;
    }
    &::-webkit-scrollbar-track {
        background-color: #e6e6e659;
    }
`;

const TableControl = styled.table`
    background-color: #ffffff;
    ${props => (props.round === true ? setBorderRadius("4px") : setBorderRadius(props.round))}
    border-collapse: separate;

    &.shadow {
        box-shadow: 0 1px 4px 0 rgba(112, 114, 125, 0.4);
    }
    thead th {
        background-color: #ffffff;
        color: #70727d;
    }
    tbody {
        tr {
            background-color: #f8fbfc;

            &:nth-child(2n) {
                background-color: #ffffff;
            }
        }
    }
    th:first-of-type {
        ${props => (props.round === true ? setBorderRadius("4px 0 0 0") : setBorderRadius(`${props.round} 0 0 0`))}
    }
    th:last-of-type {
        ${props => (props.round === true ? setBorderRadius("0 4px 0 0") : setBorderRadius(`0 ${props.round} 0 0`))}
    }
    tr:last-of-type td:first-of-type {
        ${props => (props.round === true ? setBorderRadius("0 0 0 4px") : setBorderRadius(`0 0 0 ${props.round}`))}
    }
    tr:last-of-type td:last-of-type {
        ${props => (props.round === true ? setBorderRadius("0 0 4px 0") : setBorderRadius(`0 0 ${props.round} 0`))}
    }
    td:first-of-type,
    th:first-of-type {
        border-left: medium none;
    }
    th,
    td {
        padding: 14px 24px;
        font-size: 12px;
        vertical-align: middle;

        &[rowspan] {
            vertical-align: middle;
        }
    }
`;

const Table = props => {
    const { responsive, round, className, boxShadow, ...innerProps } = props;

    const tableClsssName = wrapClassName(!responsive && boxShadow ? "shadow" : false, className);
    const table = <TableControl {...innerProps} className={tableClsssName} round={round} />;

    if (responsive) {
        const responsiveClassName = wrapClassName(responsive !== true && `table-responsive-${responsive}`, boxShadow && "shadow");

        return (
            <ResponsiveTag className={responsiveClassName} round={round}>
                {table}
            </ResponsiveTag>
        );
    }
    return table;
};

//Set default value props
Table.defaultProps = {
    round: "0px",
}

//Props Validation
Table.propTypes = {
    boxShadow: PropTypes.bool,
    responsive: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    round: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
};

//Set Display Name
Table.displayName = "Table";

export default Table;
