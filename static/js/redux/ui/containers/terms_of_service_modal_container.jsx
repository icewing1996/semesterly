import { connect } from 'react-redux';
import TermsOfServiceModal from '../terms_of_service_modal';
import { triggerTermsOfServiceModal } from '../../actions/modal_actions';
import { acceptTOS } from '../../actions/user_actions';
import { getIsUserInfoIncomplete } from '../../reducers/root_reducer';

const mapStateToProps = state => ({
  isVisible: state.termsOfServiceModal.isVisible &&
    !(!state.userInfo.overrideShow && getIsUserInfoIncomplete(state)) &&
    !state.userInfo.isVisible,
  userInfo: state.userInfo.data,
  isUserInfoIncomplete: getIsUserInfoIncomplete(state),
});

const TermsOfServiceModalContainer = connect(
    mapStateToProps,
  {
    triggerTermsOfServiceModal,
    acceptTOS,
  },
)(TermsOfServiceModal);

export default TermsOfServiceModalContainer;