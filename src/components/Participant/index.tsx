import { Text, TouchableOpacity, View } from 'react-native';
import { OwnerProps } from './types';
import { styles } from './styles';

export const Participant = ({ name, onRemove }: OwnerProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        {name}
      </Text>

      <TouchableOpacity style={styles.button} onPress={onRemove}>
          <Text style={styles.buttonText}>
            -
          </Text>
        </TouchableOpacity>
    </View>
  )
}
