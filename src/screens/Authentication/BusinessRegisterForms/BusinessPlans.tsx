import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {useBusinessPackageList} from '@app/hooks/useBusinessPackageList';
import {MstPackageListDtoType} from '@app/generated/graphql-types';
import {
  Container,
  BottomPicker,
  CheckBox,
  Text,
  Card,
  GradientButton,
} from '@app/components/templates';
import Header from '@app/screens/Authentication/Header';
import {BackgroundCircle} from '@app/assets/svgs/Authentication';
import {RegisterPlans} from '@app/navigation/AuthStack';
import colors from '@app/contants/colors';
import CompareModal from './CompareModal';
import PackageDetailModal from './PackageDetailModal';
import { useNavigation } from '@react-navigation/native';

const DURATION = [
  {label: '1 Month', value: 1},
  {label: '3 Months', value: 3},
  {label: '6 Months', value: 6},
  {label: '12 Months', value: 12},
];

const DurationOff = {
  1: 0,
  3: 5,
  6: 10,
  12: 15,
};

type PackageListItemType = {
  index: number;
  item: MstPackageListDtoType;
};

type PackageDurationTypes = 1 | 3 | 6 | 12 | null;

const BusinessPlans = () => {
  const [duration, setDuration] = useState<PackageDurationTypes>(null);
  const [toCompareItems, setCompareItems] = useState<MstPackageListDtoType[]>(
    [],
  );
  const [selectedItem, setSelectedItem] =
    useState<MstPackageListDtoType | null>();
  const [visibleCompare, setVisibleCompare] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const {loading, packages} = useBusinessPackageList();
  const navigation = useNavigation();

  const toggleCompareItem = (packageItem: MstPackageListDtoType) => {
    // eslint-disable-next-line prettier/prettier
    const _index = toCompareItems.findIndex(p => p.packageID === packageItem.packageID);
    if (_index > -1) {
      setCompareItems(prev => {
        return prev.filter(p => p.packageID !== packageItem.packageID);
      });
    } else {
      setCompareItems(prev => {
        return [...prev, packageItem];
      });
    }
  };

  const onCloseDetailModal = () => {
    setShowDetail(false);
    setSelectedItem(null);
  };

  const onSubmit = (p = null) => {
    const _package = p ?? selectedItem;
    if (duration === null || _package === null) {
      if (duration === null) {
        Alert.alert('Please select a duration!');
      }
      return;
    }
    setShowDetail(false);
    navigation.navigate('Register', {
      isBusiness: true,
      duration: duration,
      plan: _package?.packageID,
    });
  };

  const _renderItem = ({item}: PackageListItemType) => {
    // Render Empty view to sort flat list
    if (Object.keys(item).length === 0) {
      return <View style={{flex: 1, marginLeft: 25, marginRight: 25}} />;
    }
    return (
      <Card key={item.packageID} justifyContent="center" alignItems="center">
        <View style={styles.saleContainer}>
          <Text color="active" weight="bold" size="md" lineHeight={24}>
            {DurationOff[duration || 1]} %
          </Text>
          <Text color="primary">off</Text>
        </View>
        <Text color="primary" weight="semibold" mt={10}>
          {item.packageName}
        </Text>
        <CheckBox
          title="Compare"
          checked={
            toCompareItems.findIndex(p => p.packageID === item.packageID) > -1
          }
          onPress={() => toggleCompareItem(item)}
          titleMl={10}
          titleMt={0}
        />
        <GradientButton
          title="View Details"
          style={{paddingHorizontal: 20}}
          onPress={() => {
            setSelectedItem(item);
            setShowDetail(true);
          }}
        />
      </Card>
    );
  };

  return (
    <Container flex={1} backgroundColor="#ffffff">
      <View style={{position: 'absolute', top: 0, right: 0}}>
        <BackgroundCircle />
      </View>
      <SafeAreaView>
        <Header title="Business Registration" />
      </SafeAreaView>
      <Container backgroundColor="transparent" pl={10} pr={20}>
        <FlatList
          data={packages.length % 2 ? [...packages, {}] : packages}
          renderItem={_renderItem}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          numColumns={2}
          ListHeaderComponent={
            <BottomPicker
              key="duration"
              placeholder="Select Duration (eg. Week, Month, Year)"
              data={DURATION}
              onChange={(value, _) => setDuration(value)}
              style={{
                borderColor: colors.borderColor,
                borderWidth: 2,
                borderRadius: 10,
                paddingHorizontal: 5,
                fontSize: 14,
              }}
            />
          }
          ListFooterComponent={() => {
            return loading ? (
              <ActivityIndicator size="large" color="#000" />
            ) : null;
          }}
        />
      </Container>
      {toCompareItems.length > 1 && (
        <Container
          justifyContent="center"
          alignItems="center"
          style={styles.compareButtonContainer}>
          <GradientButton
            title="Compare"
            onPress={() => setVisibleCompare(true)}
            ml={20}
            mr={20}
            style={{width: 250}}
          />
        </Container>
      )}
      <CompareModal
        visible={visibleCompare}
        onBuy={onSubmit}
        pacakges={toCompareItems}
        onClose={() => setVisibleCompare(false)}
      />
      {selectedItem && (
        <PackageDetailModal
          visible={showDetail}
          packageId={selectedItem?.packageID || 0}
          title={selectedItem?.packageName}
          onClose={onCloseDetailModal}
          onPressBuy={onSubmit}
        />
      )}
    </Container>
  );
};

export default BusinessPlans;

const styles = StyleSheet.create({
  saleContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.activeBackgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  compareButtonContainer: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
  },
});
