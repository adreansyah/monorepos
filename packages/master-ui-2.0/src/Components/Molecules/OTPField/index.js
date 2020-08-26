import React, { Component } from 'react';
import { Textfield } from '../../Atom';

class index extends Component {
    render() {
        const { Action, mobile } = this.props;
        console.log(Action.props.otp);
        const disabled = (Action.props.otp.color.error === true) ? true : false;
        const mobileVer = (mobile === true) ? 'otp-mobile' : '';
        return (
            <form name="OTP" className={`row otp-row ${mobileVer} u-pb-16`}>
                <div disabled className="col otp__field-container">
                    <Textfield
                        styles="input input-control otp__field"
                        type="text"
                        setRef={Action.otp0}
                        name="otp0"
                        placeholder=''
                        value={Action.state.otp[0].text}
                        maxlength='1'
                        autoComplete={false} disabled={disabled} readonly={disabled} required={false}
                        change={(event) => Action.handleChangeOtp(event, 0)}
                    />
                </div>
                <div className="col otp__field-container">
                    <Textfield
                        styles="input input-control otp__field"
                        type="text"
                        setRef={Action.otp1}
                        name="otp1"
                        placeholder=''
                        value={Action.state.otp[1].text}
                        maxlength='1'
                        autoComplete={false} disabled={disabled} readonly={disabled} required={false}
                        change={(event) => Action.handleChangeOtp(event, 1)}
                    />
                </div>
                <div className="col otp__field-container">
                    <Textfield
                        styles="input input-control otp__field"
                        type="text"
                        setRef={Action.otp2}
                        name="otp2"
                        placeholder=''
                        value={Action.state.otp[2].text}
                        maxlength='1'
                        autoComplete={false} disabled={disabled} readonly={disabled} required={false}
                        change={(event) => Action.handleChangeOtp(event, 2)}
                    />
                </div>
                <div className="col otp__field-container">
                    <Textfield
                        styles="input input-control otp__field"
                        type="text"
                        name="otp3"
                        setRef={Action.otp3}
                        placeholder=''
                        value={Action.state.otp[3].text}
                        maxlength='1'
                        autoComplete={false} disabled={disabled} readonly={disabled} required={false}
                        change={(event) => Action.handleChangeOtp(event, 3)}
                    />
                </div>
            </form>

        );
    }
}

export default index;
