import React, { useState } from "react";
import PropTypes from "prop-types";
import styled, { withTheme } from "styled-components";
import { default as StyledDatePicker } from "react-datepicker";
import ClassNames from "classnames";
import { format, getMonth, getYear } from "date-fns";
import Icon from "../Icon";
import InputControl from "../InputControl";
import TextfieldControl from "../Textfield/TextfieldControl";
import range from "lodash/range";
import Segment from '../Segment';

const DatePickerControl = styled(InputControl)`
    .react-datepicker__day--today {
        color: ${props => props.theme.color.primary};

        &:hover {
            color: ${props => props.theme.color.primary};
        }
    }
    .react-datepicker__day--selected,
    .react-datepicker__month--selected,
    .react-datepicker__year-text--selected,
    .react-datepicker__day--in-selecting-range {
        border-radius: 50%;
        background-color: ${props => props.theme.color.primary};
        color: #FFFFFF;
        cursor: pointer;
        &:hover {
            background-color: ${props => props.theme.color.primary};
            color: #FFFFFF;
        }
    }

    .month-picker {
        .react-datepicker__month-container {
            min-width: 274px;
        }
        .react-datepicker__month-wrapper {
            display: flex;
            justify-content: space-between;
            padding: 0 20px;
        }
        .react-datepicker__month-text {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            width: 38px;
            height: 38px;
            margin: 2px;
        }
        .react-datepicker__day-names {
            display: none;
        }
        .react-datepicker__month--selected {
            border-radius: 50%;
            background: $primary;
            color: white;
        }
    }

    .year-picker {
        .react-datepicker__year--container {
            width: 274px;
        }
        .react-datepicker__year-wrapper {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            padding: 0 20px;
            width: 274px;
        }
        .react-datepicker__year .react-datepicker__year-text {
            display: inline-flex;
            width: 64px;
            margin: 2px;
            height: 64px;
            justify-content: center;
            align-items: center;
        }
        .react-datepicker__header.react-datepicker-year-header {
            height: 55px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 16px;
            color: black;
            font-weight: 500;
            padding-top: 20px;
        }
        .react-datepicker__navigation {
            top: 24px;
        }
        .react-datepicker__navigation--previous {
            left: 24px;
        }
        .react-datepicker__navigation--next {
            right: 24px;
        }
        .react-datepicker__navigation.react-datepicker__navigation--previous {     
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h24v24H0z'%3E%3C/path%3E%3Cpath fill='black' d='M16.4 5.27L9.67 12l6.73 6.73a1 1 0 010 1.42 1 1 0 01-1.42 0L7.64 12.8a1.13 1.13 0 010-1.6L15 3.85a1 1 0 011.42 0 1 1 0 01-.02 1.42z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
            background-repeat: no-repeat;
            width: 24px;
            height: 34px;
            border: 0;
        }
        .react-datepicker__navigation.react-datepicker__navigation--next {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h24v24H0z'%3E%3C/path%3E%3Cpath fill='black' d='M7.6 18.73L14.33 12 7.6 5.27a1 1 0 010-1.42 1 1 0 011.4 0l7.34 7.35a1.13 1.13 0 010 1.6L9 20.15a1 1 0 01-1.42 0 1 1 0 01.02-1.42z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
            background-repeat: no-repeat;
            width: 24px;
            height: 34px;
            border: 0;
        }
    }
`

const HeaderContainer = styled.div`
    position: ${props => (props.ps ? props.ps : "relative")};
    padding: 20px 16px 8px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const DateTitle = styled.h1`
    font-size: 16px;
    color: black;
    font-weight: 500;
`;

const Left = styled.div`
    display: flex;
    flex-shrink: 1;
    align-items: center;
    margin-right: 8px;
    margin-left: 0px;
`;

const Right = styled(Left)`
    margin-right: 0px;
    margin-left: 8px;
`;

const DatePicker = props => {
    const { disabled, status, className, left, right, inputClassName, onChange, monthYear, startYearRange, ...innerProps } = props;
    const isMonthPicker = props.showMonthYearPicker;
    const isYearPicker = props.showYearPicker;
    const [dateValue, setDateValue] = useState()
    const years = range(startYearRange, getYear(new Date()) + 1, 1);
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    const getValue = (val) => {
        setDateValue(val)
    }

    const handleStatus = () => {
        if (disabled) {
            return "disabled";
        } else {
            return status;
        }
    };

    const handleOnChange = (data) => {
        onChange(data)
        getValue(data)
    }

    return (
        <DatePickerControl>
            {isYearPicker ? <TextfieldControl className={handleStatus()}>
                {left && <Left tabIndex="-1">{left}</Left>}
                <StyledDatePicker
                    disabledKeyboardNavigation
                    className={ClassNames("input-field", className)}
                    dateFormat="iii, dd MMM yyyy"
                    disabled={disabled}
                    popperModifiers={
                        left && {
                            offset: {
                                enabled: true,
                                offset: "-32px, 0"
                            }
                        }
                    }
                    onChange={(data) => handleOnChange(data)}
                    {...innerProps}
                />
                {right && <Right tabIndex="-1">{right}</Right>}

                {inputClassName && <input type="hidden" className={ClassNames(inputClassName)} value={dateValue ? dateValue : ""} />}
            </TextfieldControl> : <TextfieldControl className={handleStatus()}>
                    {left && <Left tabIndex="-1">{left}</Left>}
                    <StyledDatePicker
                        renderCustomHeader={({ date, changeYear, changeMonth, decreaseMonth, increaseMonth, prevMonthButtonDisabled, nextMonthButtonDisabled, decreaseYear, increaseYear, prevYearButtonDisabled, nextYearButtonDisabled }) => (
                            <HeaderContainer
                                style={{ alignItems: startYearRange ? 'flex-start' : 'center' }}
                                monthYear={monthYear}>
                                <button onClick={(isMonthPicker || isYearPicker) ? decreaseYear : decreaseMonth} disabled={(isMonthPicker || isYearPicker) ? prevYearButtonDisabled : prevMonthButtonDisabled} type={'button'} style={{ cursor: 'pointer' }}>
                                    <Icon name="chevron-left" size={24} fillColor={"black"} />
                                </button>
                                <Segment>
                                    {startYearRange ? (<Segment pt={4}>
                                        <select
                                            value={months[getMonth(date)]}
                                            onChange={({ target: { value } }) =>
                                                changeMonth(months.indexOf(value))
                                            }
                                        >
                                            {months.map(option => (
                                                <option key={option} value={option}>
                                                    {option}
                                                </option>
                                            ))}
                                        </select>
                                        <select
                                            value={getYear(date)}
                                            onChange={({ target: { value } }) => changeYear(value)}
                                        >
                                            {years.map(option => (
                                                <option key={option} value={option}>
                                                    {option}
                                                </option>
                                            ))}
                                        </select>
                                    </Segment>) : <DateTitle>{isYearPicker ? `${startPeriod} - ${endPeriod}` : (isMonthPicker ? format(date, "yyyy") : format(date, "MMMM yyyy"))}</DateTitle>}
                                </Segment>
                                <button onClick={(isMonthPicker || isYearPicker) ? increaseYear : increaseMonth} disabled={(isMonthPicker || isYearPicker) ? nextYearButtonDisabled : nextMonthButtonDisabled} type={'button'} style={{ cursor: 'pointer' }}>
                                    <Icon name="chevron-right" size={24} fillColor={"black"} />
                                </button>
                            </HeaderContainer>
                        )}
                        disabledKeyboardNavigation
                        className={ClassNames("input-field", className)}
                        dateFormat="iii, dd MMM yyyy"
                        disabled={disabled}
                        popperModifiers={
                            left && {
                                offset: {
                                    enabled: true,
                                    offset: "-32px, 0"
                                }
                            }
                        }
                        onChange={(data) => handleOnChange(data)}
                        {...innerProps}
                    />
                    {right && <Right tabIndex="-1">{right}</Right>}

                    {inputClassName && <input type="hidden" className={ClassNames(inputClassName)} value={dateValue ? dateValue : ""} />}
                </TextfieldControl>}
        </DatePickerControl>
    );
};

DatePicker.propType = {
    placeholderText: PropTypes.string
};

TextfieldControl.propTypes = {
    model: PropTypes.oneOf(["default", "line"]),
    status: PropTypes.oneOf(["normal", "success", "error", "autofill"])
};

DatePicker.displayName = "DatePicker";
export default withTheme(DatePicker);
