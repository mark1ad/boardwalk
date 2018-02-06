import { connect } from 'react-redux';

import BoardDetailsHeader from './BoardDetailsHeader';

const mapStateToProps = (state, props) => {
  return {name: props.name};
}

const ShowBoardDetailsHeader = connect(
  mapStateToProps,
  null
) (BoardDetailsHeader);

export default ShowBoardDetailsHeader;
