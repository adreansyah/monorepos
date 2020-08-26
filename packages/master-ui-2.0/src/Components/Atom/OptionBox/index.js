import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled, { withTheme, css } from "styled-components";
import { Icon } from "..";
import Select, { components } from "react-select";
import Creatable from "react-select/creatable"
import wrapClassNames from "classnames";
import InputControl from "../InputControl";

const getStatusColor = (bdcolor, bgcolor) => `
    .select__control{
        border: 1px solid ${bdcolor};
        background-color: ${bgcolor};
    }
`;

const OptionBoxControl = styled(InputControl)`
    display: block;
    .error {
        ${props => getStatusColor(props.theme.color.error, "#FFF3F4")}
    }
    .success {
        ${props => getStatusColor(props.theme.color.success, "#EBFFD0")}
    }
    .select__control {
        padding-left: 8px;
        padding-right: 8px;
        box-shadow: none;
        transition: none;
        border-color: ${props => props.theme.color.black30};
        &:hover {
            border-color: ${props => props.theme.color.black30};
        }
        &.select__control--is-focused {
            border-color: ${props => props.theme.color.primary};
            background-color: #ffffff;
        }
        &.select__control--is-focused ~ .select__menu {
            border-color: ${props => props.theme.color.primary};
        }
        &.select__control--menu-is-open {
            border-bottom: none;
            border-radius: 4px 4px 0px 0px;
        }
        &.select__control--is-disabled {
            background-color: ${props => props.theme.color.black20};
            color: ${props => props.theme.color.black40};
        }
    }
    .select__multi-value{
        &__remove:hover{
            background-color: ${props => props.theme.color.black30};
            cursor:pointer;
            color:inherit;
        }
    }

`;

const MenuList = styled.div`

    z-index: ${props => props.theme.zindex.dropdown}
    
    .select__menu {
        border-radius: 0px 0px 4px 4px;
        border: 1px solid ${props => props.theme.color.black30};
        border-top: none;
        box-shadow: none;
        margin-top: 0;
    }
    .select__menu .select__option {
        margin-left: 8px;
        margin-right: 4px;
        padding-left: 10px;
        padding-right: 8px;
        border-radius: 4px;
        width: auto;

        &.select__option--is-focused {
            background-color: ${props => props.theme.color.black20};
        }
        &.select__option--is-selected {
            color: #fff;
            background-color: ${props => props.theme.color.primary};
        }
    }
    .select__menu-list {
        margin-right:4px;
        &::-webkit-scrollbar {
            width: 4px;
        }
        &::-webkit-scrollbar-thumb {
            background-color: #9c9da633;
            border-radius: 4px;
        }
        &::-webkit-scrollbar-thumb:hover {
            background: ${props => props.theme.color.black40};
        }
    }
    
    ${props => props.isFocused && css`
        .select__menu {
            border-color: ${props => props.theme.color.primary} !important;
        }
    `}
`;

const ClearIndicatorWrap = styled.div`
    padding: 8px;
    cursor: pointer;
    &:hover {
        opacity: 0.8;
    }
    i {
        vertical-align: bottom;
    }
`;

const LinSeparator = styled.span`
    align-self: stretch;
    background-color: rgb(204, 204, 204);
    margin-bottom: 8px;
    margin-top: 8px;
    width: 1px;
    box-sizing: border-box;
    display: ${props => (props.show ? "inherit" : "none")};
`;

const customTheme = color => {
    return theme => ({
        ...theme,
        colors: {
            ...theme.colors,
            primary: color.primary,
            danger: color.error
        },
        spacing: {
            ...theme.spacing,
            controlHeight: 40
        }
    });
};
const selectStyles = {
    menuPortal: base => ({ ...base, zIndex: 1000 }),
};


const OptionBox = props => {
    const { id, inlineStyle, className, theme, status, name, inputClassName, isCreatable, ...innerProps } = props;
    const [inputFocused, setinputFocused] = useState(false)

    const handleStatus = () => {
        const getStatus = status && status;
        return wrapClassNames(`select-option-group ${getStatus}`);
    };

    const DropdownIndicator = props => {
        const menuIsOpen = props.selectProps.menuIsOpen;

        useEffect(() => {
            setinputFocused(props.isFocused);
        })

        return (
            <components.DropdownIndicator {...props}>
                <Icon name={menuIsOpen ? "chevron-up" : "chevron-down"} size={"16px"} fillColor={"black50"} />
            </components.DropdownIndicator>
        );
    };

    const ClearIndicator = props => {
        const {
            innerProps: { ref, ...restInnerProps }
        } = props;
        return (
            <>
                <ClearIndicatorWrap {...restInnerProps} ref={ref}>
                    <Icon name={"cancel"} size={"16px"} fillColor={"black50"} />
                </ClearIndicatorWrap>
            </>
        );
    };

    const IndicatorSeparator = ({ innerProps, ...props }) => {
        return <LinSeparator {...innerProps} show={props.hasValue && props.selectProps.isClearable ? (props.isDisabled ? false : true) : false} />;
    };

    const Menu = props => {
        return (
            <MenuList isFocused={inputFocused}>
                <components.Menu {...props}>{props.children}</components.Menu>
            </MenuList>
        );
    };

    const bindClassName = () => {
        const el = document.querySelector(`input[name=${name ? name : 'select__validate-input'}]`);
        if(el) el.setAttribute("class", wrapClassNames(`validate-input ${inputClassName && inputClassName}`));
    }

    const handleName = () => {
        return name ? name : "select__validate-input";
    }

    useEffect(() => {
        bindClassName()
    })

    return (
        <>
            <OptionBoxControl className={className} style={inlineStyle} id={id}>
                {isCreatable ?
                    <Creatable
                        {...innerProps}
                        components={{ DropdownIndicator, ClearIndicator, IndicatorSeparator, Menu }}
                        className={handleStatus()}
                        classNamePrefix="select"
                        theme={customTheme(theme.color)}
                        styles={selectStyles}
                        maxMenuHeight={152}
                        name={handleName()}
                    />
                    :
                    <Select
                        {...innerProps}
                        components={{ DropdownIndicator, ClearIndicator, IndicatorSeparator, Menu }}
                        className={handleStatus()}
                        classNamePrefix="select"
                        theme={customTheme(theme.color)}
                        styles={selectStyles}
                        maxMenuHeight={152}
                        name={handleName()}
                    />
                }
            </OptionBoxControl>
        </>
    );
};

//Default Props
OptionBox.defaultProps = {
    status: "normal"
};

//Props Validation
OptionBox.propTypes = {
    status: PropTypes.oneOf(["normal", "success", "error"]),
    isClearable: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isSearchable: PropTypes.bool,
    isLoading: PropTypes.bool,
    isMulti: PropTypes.bool,
    placeholder: PropTypes.string
};

//Set Display Name
OptionBox.displayName = "OptionBox";
export default withTheme(OptionBox);
