import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {loginUser} from '../../actions/authActions';
import TextFieldGroup from '../common/TextFieldGroup';


class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
  componentDidMount(){
        if(this.props.auth.isAuthenticated){
            this.props.history.push('/dashboard');
        }
  }

    componentWillReceiveProps(nextProps) {
        if(nextProps.auth.isAuthenticated){
            this.props.history.push('/dashboard');

        }

        if(nextProps.errors){
            this.setState({errors: nextProps.errors})
        }
    }
    onSubmit(e){
        e.preventDefault();

        const userData = {
          email: this.state.email,
          password: this.state.password
        };
        this.props.loginUser(userData);
    }
    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        const { errors } = this.state;

        return (
            <div className="login">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Giriş Yap</h1>
                            <p className="lead text-center">DevConnector Hesabına giriş yap</p>
                            <form onSubmit={this.onSubmit}>
                                <TextFieldGroup
                                    type="email"
                                    onChange={this.onChange}
                                    placeholder="Mail Adresi"
                                    value={this.state.email}
                                    name="email"
                                    error={errors.email}
                                />
                                <TextFieldGroup
                                    type="password"
                                    onChange={this.onChange}
                                    placeholder="Şifre"
                                    value={this.state.password}
                                    name="password"
                                    error={errors.password}
                                />
                                <input type="submit" className="btn btn-info btn-block mt-4"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth:PropTypes.object.isRequired,
    errors:PropTypes.object.isRequired
};
const mapStateToProps = (state) => ({
   auth: state.auth,
   errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Login);