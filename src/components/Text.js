import {Text} from 'react-native';

import styled from 'styled-components';

export default styled(Text)`
  color: ${props => props.theme.text.primaryColor};
`;
