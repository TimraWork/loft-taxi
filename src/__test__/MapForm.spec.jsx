import {mount} from 'enzyme';
import '../setupTests';

import {MapForm} from '../components/MapForm';

describe('MapForm', () => {
  let wrapper;
  it('renders correctly', () => {
    wrapper = mount(<MapForm />);
    // console.log(wrapper.debug({ignoreProps: true}));
    expect(wrapper.find('input[name="from"]')).toHaveLength(1);
    expect(wrapper.find('input[name="to"]')).toHaveLength(1);
    expect(wrapper.find('button#order-button')).toHaveLength(1);
  });
});
