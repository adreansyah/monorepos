import React, { Fragment, useState, useEffect, useReducer, useContext } from 'react'
import { AlertBox, Segment } from '../../Atom'
import styled, { css } from 'styled-components'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'

const getPlacement = placement => {
    switch (placement) {
        case 'top':
            return { top: 0, left: '50%', transform: 'translate(-50%, 0)' }
        case 'topright':
            return { top: 0, right: 0 }
        case 'topleft':
            return { top: 0, left: 0 }
        case 'bottom':
            return { bottom: 0, left: '50%', transform: 'translate(-50%, 0)' }
        case 'bottomright':
            return { bottom: 0, right: 0 }
        case 'bottomleft':
            return { bottom: 0, left: 0 }
        default:
            return { top: 0, right: 0 }
    }
}
const getSpace = (space, placement) => {
    if (typeof space === 'undefined') return
    if (placement.includes('top')) {
        return css`
            margin-bottom: ${space}px;
            &:last-child {
                margin-bottom: 0px;
            }
        `
    } else {
        return css`
            margin-top: ${space}px;
            &:first-child {
                margin-top: 0px;
            }
        `
    }
}
const ToastContainerWrapper = styled(Segment)`
    ${props => getPlacement(props.placement)}
    div {
        ${({ space, placement }) => getSpace(space, placement)}
    }
`
/**
 * Global Alert Store and Reducer
 */
const initialState = {
    message: '',
    alertType: 'warning',
    option: { timeout: 5000, placement: 'topright', space: 10, animate: 'fade' },
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ALERT_SHOW':
            return { ...state, message: action.message, alertType: action.alertType }
        case 'ALERT_OPTION':
            return { ...state, option: action.option }
        default:
            return state
    }
}

/**
 * Global Alert Custom Hooks with Context API
 */
const GlobalAlertContext = React.createContext({})
const Toast = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    /**
     * Set alert message with error type
     * @param {*} message
     */
    const show = (message, type = 'success', option = null) => {
        option !== null && dispatch({ type: 'ALERT_OPTION', option })
        dispatch({ type: 'ALERT_SHOW', message, alertType: type })
    }
    /**
     * Set alert option
     * @param {*} option
     */
    const option = option => {
        dispatch({ type: 'ALERT_OPTION', option })
    }
    return {
        /** render alert */
        component: (
            <GlobalAlertContext.Provider value={state}>
                <ToastContainer />
            </GlobalAlertContext.Provider>
        ),
        show: (msg, type, opt) => show(msg, type, opt),
        success: (msg, opt) => show(msg, 'success', opt),
        warning: (msg, opt) => show(msg, 'warning', opt),
        error: (msg, opt) => show(msg, 'error', opt),
        option: opt => option(opt),
    }
}
/**
 * Global Alert Component
 * @param {*} param
 */
const ToastContainer = ({ message, type, option, timestamp, onClear }) => {
    const alertContext = useContext(GlobalAlertContext)
    const [alertData, setAlertData] = useState([])
    const [pointer, setPointer] = useState(null)
    const [opt, setOpt] = useState({
        timeout: 5000,
        placement: 'topright',
        space: 10,
        animate: 'fade',
    })
    /**
     * Default Option
     */
    /**
     * Use Component
     */
    useEffect(() => {
        let arr = [...alertData]
        if (message) {
            arr.push({ isOpen: true, message, type })
            option && setOpt({ ...option })
            setAlertData([...arr])
            typeof onClear !== 'undefined' && onClear()
        }
    }, [message, type, timestamp, option, onClear])
    /**
     * Effect Using Context
     */
    useEffect(() => {
        let arr = [...alertData]
        if (alertContext.message) {
            alertContext.option && setOpt({ ...alertContext.option })
            arr.push({ isOpen: true, message: alertContext.message, type: alertContext.alertType })
            setAlertData([...arr])
        }
    }, [alertContext])
    /**
     * Toggle or Dismiss Alert
     * @param {*} index
     */
    const toggleAlert = index => {
        let arr = [...alertData]
        arr[index].isOpen = false
        setAlertData([...arr])
        if (!arr.find(key => key.isOpen === true)) {
            setAlertData([])
        }
    }
    /**
     * Effect Closing Stack/Queue
     */
    useEffect(() => {
        if (pointer !== null) {
            let arr = [...alertData]
            arr[pointer].isOpen = false
            setPointer(null)
            setAlertData([...arr])
            if (!arr.find(key => key.isOpen === true)) {
                setAlertData([])
            }
        }
    })
    const { placement, timeout, space, animate, ...rest } = opt
    return createPortal(
        <ToastContainerWrapper
            position={rest.position || 'fixed'}
            zIndex={rest.zIndex || 1070}
            placement={placement || 'topright'}
            space={space}
            {...rest}
        >
            {alertData.length > 0 &&
                alertData.map((list, index) => {
                    return (
                        <Fragment key={index}>
                            <AlertBox
                                key={index}
                                type={list.type || 'success'}
                                isOpen={list.isOpen}
                                toggle={() => toggleAlert(index)}
                                responsive
                                animate={animate}
                                onTimeout={() => setPointer(index)}
                                timeout={timeout}
                            >
                                {list.message}
                            </AlertBox>
                        </Fragment>
                    )
                })}
        </ToastContainerWrapper>,
        document.body,
    )
}

ToastContainer.defaultProps = {
    message: '',
    option: {
        timeout: 5000,
        placement: 'topright',
        space: 10,
        animate: 'fade',
    },
    type: 'success',
}
ToastContainer.propTypes = {
    message: PropTypes.string,
    option: PropTypes.object,
    type: PropTypes.oneOf(['', 'success', 'warning', 'error']),
}

export default Toast
Toast.Container = ToastContainer
export { ToastContainer }
