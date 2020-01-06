import { connect } from 'react-redux';

import { LoginComponent } from './login';
import { loginRequestStartedAction } from './actions/loginRequestStarted';

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    performLogin: () => dispatch(loginRequestStartedAction())
  };
};

export const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent);
