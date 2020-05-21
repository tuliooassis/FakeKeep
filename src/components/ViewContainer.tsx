import { Dimensions, SafeAreaView } from 'react-native';

import styled from 'styled-components';

const ViewContainer = styled(SafeAreaView)`
    height: ${Dimensions.get('window').height}px
    background-color: ${(props) => props.theme.primaryColor}
`;

export default ViewContainer;
