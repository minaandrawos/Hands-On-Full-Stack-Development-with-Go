import React from 'react';

function CreditCardInformation(props) {
    if (!props.show) {
        return null;
    }
    return (
        <div>
            {props.seperator ? <hr /> : null}
            <h5 className="mb-4">Payment Info</h5>
            <div className="form-row">
                <div className="col-lg-6 form-group">
                    <label htmlFor="cc-num">Card Number:</label>
                    <input className="form-control" id="cc-num" type="text" />
                </div>
                <div className="col-lg form-group">
                    <label htmlFor="zip">Zip Code:</label>
                    <input className="form-control" id="zip" type="text" />
                </div>

                <div className="col-lg form-group">
                    <label htmlFor="cvv">CVV:</label>
                    <input className="form-control" id="cvv" type="text" />
                </div>
            </div>
            <div className="form-row">
                <label className="col-lg-12">Expiration Date:</label>
                <div className="form-group col-lg-8">
                    <select className="custom-select form-control" id="exp-month">
                        <option value="1">1 - January</option>
                        <option value="2">2 - February</option>
                        <option value="3">3 - March</option>
                        <option value="4">4 - April</option>
                        <option value="5">5 - May</option>
                        <option value="6">6 - June</option>
                        <option value="7">7 - July</option>
                        <option value="8">8 - August</option>
                        <option value="9">9 - September</option>
                        <option value="10">10 - October</option>
                        <option value="11">11 - November</option>
                        <option value="12">12 - December</option>
                    </select>
                </div>
                <div className="form-group col-lg">
                    <select className="custom-select form-control" id="exp-year">
                        <option value="2016">2016</option>
                        <option value="2017">2017</option>
                        <option value="2018">2018</option>
                        <option value="2019">2019</option>
                        <option value="2020">2020</option>
                    </select>
                </div>
            </div>
            <hr className="mb-4" />
            <button type="submit" className="btn btn-success btn-large">{props.btnName}</button>
        </div>);
}

function SignInButton(props) {
    if (!props.show) {
        return <div />
    }
    return <div className="form-row text-center">
        <div className="col-12 mt-2">
            <button type="submit" className="btn btn-success btn-large">Sign In</button>
        </div>
        <div className="col-12 mt-2">
            <button type="submit" className="btn btn-link text-info" onClick={props.handleNewUser}> New User? Register</button>
        </div>
    </div>;
}

export class SignInModalWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showSignInButtons: true,
            showRegistrationForm: false
        };
        this.handleNewUser = this.handleNewUser.bind(this);
    }

    handleNewUser() {
        this.setState({
            showSignInButtons: false,
            showRegistrationForm: true
        });
    }

    render() {
        return (
            <div className="modal fade" id="register" tabIndex="-1" role="dialog" aria-labelledby="Register Form" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header bg-success text-white">
                            <h5 className="modal-title" id="exampleModalLabel">Sign in</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <h5 className="mb-4">Basic Info</h5>
                                <div className="form-group">
                                    <label htmlFor="email">Email:</label>
                                    <input type="email" className="form-control" id="email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="pass">Password:</label>
                                    <input type="password" className="form-control" id="pass" />
                                </div>
                                <SignInButton show={this.state.showSignInButtons} handleNewUser={this.handleNewUser} />
                                <CreditCardInformation show={this.state.showRegistrationForm} seperator={true} btnName="Register" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export class BuyModalWindow extends React.Component {
    render() {
        return (
            <div className="modal fade" id="buy" tabIndex="-1" role="dialog" aria-labelledby="Register Form" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header bg-success text-white">
                            <h5 className="modal-title">Buy Item</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <CreditCardInformation seperator={false} show={true} btnName="Buy" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
} 