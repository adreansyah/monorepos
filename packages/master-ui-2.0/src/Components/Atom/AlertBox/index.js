import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';
import { ButtonLink, Icon } from '../index';
import Text from '../Text';
import Segment from '../Segment';

const AlertType = {
    success: css`
        border-color: ${props => props.theme.color.success};
        background-color: #ebffd0;
        color: ${props => props.theme.color.green50};
    `,
    warning: css`
        border-color: ${props => props.theme.color.warning};
        background-color: ${props => props.theme.color.orange10};
        color: ${props => props.theme.color.warning};
    `,
    error: css`
        border-color: ${props => props.theme.color.error};
        background-color: ${props => props.theme.color.red10};
        color: ${props => props.theme.color.error};
    `,
}

const Info = styled(Text)`
    ${props => props.type && AlertType[props.type]};
    font-size: 12px;
    line-height: 14px;
`

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`
const fadeOut = keyframes`
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      display: none;
    }
`

const fadeInSlide = keyframes`
    from {
      opacity: 0;
      -webkit-transform: translate(0, 50%);
      transform: translate(0, 50%);
    }
    to {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
`
const fadeOutSlide = keyframes`
    from {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
    to {
      opacity: 0;
      -webkit-transform: translate(0, 30%);
      transform: translate(0, 30%);
    }
`

const handleAnimate = (props, animate) => {
    switch (animate) {
        case 'slide':
            return props ? fadeInSlide : fadeOutSlide
        case 'fade':
            return props ? fadeIn : fadeOut
        default:
            return props ? fadeIn : fadeOut
    }
}

const handleTimeout = (duration, onCss) => {
    if (duration) {
        if (onCss) {
            return duration + 10 + 'ms'
        } else {
            return duration
        }
    } else {
        if (onCss) {
            return 310 + 'ms'
        } else {
            return 300
        }
    }
}

const blockClick = css`
    pointer-events: none;
`

const Wrapper = styled(Segment)`
    display: ${props => (props.responsive ? 'flex' : 'inline-flex')};
    z-index: ${props => props.theme.zindex.fixed}
    padding: 16px;
    border-radius: ${props => props.theme.border.radius};
    border: 1px solid ${props => props.theme.color.black30};
    justify-content: left;
    align-items: center;
    ${props =>
        props.animate &&
        css`
            animation: ${props => handleAnimate(props.isOpen, props.animate)}
                ${props => handleTimeout(props.duration, true)} ease-in-out;
        `}
    ${props => props.type && AlertType[props.type]};
    ${props => !props.isOpen && blockClick}
    > i + ${Info} {
        margin-left: 8px;
    }
`

const AlertBox = props => {
    const { children, toggle, isOpen, duration, animate, timeout, onTimeout, ...innerProps } = props
    const [isHide, setIsHide] = useState(false)

    let iconName = ''
    let iconFillColor = ''
    switch (props.type) {
        case 'success':
            iconName = 'information'
            iconFillColor = 'green50'
            break
        case 'warning':
            iconName = 'timer'
            iconFillColor = 'orange30'
            break
        case 'error':
            iconName = 'attention'
            iconFillColor = 'red30'
            break
        default:
            break
    }

    useEffect(() => {
        if (!isOpen) {
            const timer = setTimeout(
                () => {
                    setIsHide(true)
                },
                !animate ? 0 : handleTimeout(duration),
            )
            return () => clearTimeout(timer)
        }
        else {
            setIsHide(false)
        }
    }, [isOpen])

    useEffect(() => {
        if (typeof timeout !== 'undefined' && typeof onTimeout !== 'undefined') {
            const timer = setTimeout(() => {
                onTimeout()
            }, timeout)
            return () => clearTimeout(timer)
        }
    }, [timeout])

    if (isHide) return null
    return (
        <Wrapper {...innerProps} isOpen={isOpen} duration={duration} animate={animate}>
            {iconName.length > 0 ? (
                <Icon name={iconName} size="small" fillColor={iconFillColor} />
            ) : null}
            <Info>{children}</Info>

            {toggle ? (
                <ButtonLink onClick={toggle} ml={props.responsive ? 'auto' : 16}>
                    <Icon name="cancel" size="small" fillColor={iconFillColor} />
                </ButtonLink>
            ) : null}
        </Wrapper>
    )
}

//Default Props
AlertBox.defaultProps = {
    type: 'success',
    isOpen: true,
    animate: 'fade',
    duration: 300,
}

//Props Validation
AlertBox.propTypes = {
    type: PropTypes.oneOf(['success', 'warning', 'error']),
    animate: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['fade', 'slide'])]),
}

//set display name
AlertBox.displaName = 'AlertBox'

export default AlertBox
