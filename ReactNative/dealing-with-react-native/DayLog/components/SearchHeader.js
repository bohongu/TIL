import React, {useContext} from 'react';
import {
  Pressable,
  StyleSheet,
  TextInput,
  View,
  useWindowDimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SearchContext from '../contexts/SearchContext';

function SearchHeader() {
  const {width} = useWindowDimensions();
  const {keyword, onChangeText} = useContext(SearchContext);

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={[styles.block, {width: width - 32, height: 24}]}>
      <TextInput
        style={styles.input}
        placeholder="검색어를 입력하세요"
        value={keyword}
        onChangeText={onChangeText}
        autoFocus
      />
      <Pressable
        styles={({pressed}) => [styles.button, pressed && {opacity: 0.5}]}
        onPress={() => onChangeText('')}>
        <Icon name="cancel" size={20} color="#9e9e9e" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
  },
  button: {
    marginLeft: 8,
  },
});

export default SearchHeader;
