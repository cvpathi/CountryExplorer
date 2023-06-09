import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  Text,
  TouchableOpacity,
  useColorScheme,
  Alert,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {colors, fonts} from '@constants';
import {SearchBox, ProgressLoader, Bulletin, EmptyContent} from '@components';
import {
  addToFavourites,
  getCountryInfo,
} from 'redux/actions/CountryDetailsActions';

type ItemProps = {title: String};
type SelectorProps = {CountryDetails: Object};

const Home = () => {
  const {container} = styles;
  const dispatch = useDispatch();
  const isDarkMode = useColorScheme() === 'dark';
  const darkModeStyle = {backgroundColor: isDarkMode ? '#222' : '#fff'};
  const countryInfo = useSelector<SelectorProps, any>(
    state => state.CountryDetails,
  );

  const [searchQuery, setSearchQuery] = useState('');
  const [queryLength, setQueryLength] = useState(
    countryInfo?.countryDetails?.length,
  );

  useEffect(() => {
    setQueryLength(countryInfo?.countryDetails?.length);
  }, [countryInfo, dispatch]);

  useEffect(() => {
    if (queryLength === 1) {
      setSearchQuery('');
    }
  }, [queryLength]);

  const onSearch = () => {
    if (searchQuery.length > 2) {
      dispatch(getCountryInfo(searchQuery));
    } else {
      Alert.alert('Warning', 'Minimum 3 characters need to enter');
    }
  };

  const Item = ({title}: ItemProps) => {
    return (
      <TouchableOpacity
        key={title + Math.random().toString()}
        style={styles.item}
        onPress={() => {
          dispatch(getCountryInfo(title, true));
          setQueryLength(countryInfo?.countryDetails?.length);
        }}>
        <Text style={fonts.fontBlackNormalMedium}>{title}</Text>
      </TouchableOpacity>
    );
  };

  const CountryList = () => {
    return (
      <View style={{width: '100%', flex: 1}}>
        <FlatList
          data={countryInfo?.countryDetails}
          renderItem={({item}) => <Item title={item?.name?.common} />}
          keyExtractor={() => Math.random().toString()}
        />
      </View>
    );
  };

  const addToFavourite = () => {
    const data = countryInfo?.countryDetails[0];
    const country = `${data?.name.common} ${data?.flag}`;
    if (countryInfo?.favourites.includes(country)) {
      Alert.alert('Warning', 'Already added to favourite');
    } else {
      dispatch(addToFavourites(country));
    }
  };

  const renderContent = (queryLength: number) => {
    switch (queryLength) {
      case 0:
        return (
          <ScrollView style={[styles.scrollContainer, darkModeStyle]}>
            <EmptyContent />
          </ScrollView>
        );
      case 1:
        return (
          <ScrollView style={[styles.scrollContainer, darkModeStyle]}>
            {countryInfo?.countryDetails && (
              <Bulletin
                data={countryInfo?.countryDetails}
                addToFavourite={addToFavourite}
              />
            )}
          </ScrollView>
        );

      default:
        return <CountryList />;
    }
  };

  return (
    <View style={[container, darkModeStyle]}>
      <ProgressLoader loaderFlag={countryInfo.loading} />
      <SearchBox
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSearch={onSearch}
      />
      {renderContent(queryLength)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.WHITE,
  },
  scrollContainer: {
    flex: 1,
    marginTop: 2,
    width: '100%',
  },
  item: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginVertical: 3,
    marginHorizontal: 12,
    backgroundColor: colors.LIGHT_BLUE,
  },
});

export default Home;
