import { Platform } from 'react-native';

const styles = {
    Container: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 22 : null
    }
}

export default styles;