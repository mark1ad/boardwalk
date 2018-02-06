import { connect } from 'react-redux';

import BoardDetailsContainer from './BoardDetailsContainer';

const mapStateToProps = (state, props) => {
  const boardName = props.match.params['name'];
  return {name: boardName};
}

const ShowCreateBoardContainer = connect(
  mapStateToProps,
  null
) (BoardDetailsContainer);

export default ShowCreateBoardContainer;
