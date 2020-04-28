import * as React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector, connect} from 'react-redux';

// actions
import {getData} from '../../../frontend-core/actions/data.action';

// selectors
import {dataSelector} from '../../../frontend-core/selectors/data.selector';

// components
import Button from '../../components/button/button';

interface Data {
  id: number;
  unique: string;
  name: string;
}

const MainPage = props => {
  const {data} = props;
  const dispatch = useDispatch();
  // const data = useSelector(dataSelector);

  React.useEffect(() => {
    props.getData();
  }, []);

  return (
    <section>
      <h1>MainPage 111</h1>
      <Link to="/admin">admin2</Link>
      <ul>
        {data.length &&
          data.map((dataItem: Data) => (
            <li key={dataItem.unique}>{dataItem.name}</li>
          ))}
      </ul>
    </section>
  );
};

const mapStateToProps = state => {
  return {
    data: dataSelector(state),
  };
};

const mapDispatchToProps = {
  getData,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainPage);
