import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {MstPackageListDtoType} from '@app/generated/graphql-types';
import {useBusinessPackageDetail} from '@app/hooks/useBusinessPackageDetail';
import {Text, Modal} from '@app/components/templates';
// import Modal from 'react-native-modal';
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
} from 'react-native-table-component';
import colors from '@app/contants/colors';
import Ionicon from 'react-native-vector-icons/Ionicons';

type CompareModalPropsType = {
  onBuy: (p: MstPackageListDtoType) => void;
  pacakges: MstPackageListDtoType[];
  visible: boolean;
  onClose: () => void;
};

const CompareModal = ({
  onBuy,
  pacakges,
  visible,
  onClose,
}: CompareModalPropsType) => {
  const {packageDetail, loading} = useBusinessPackageDetail(null);
  const tableHead = ['Category', ...pacakges.map(p => p.packageName)];
  const tableTitleFields = [
    {title: 'Time Delay', value: 'Time Delay', ext: 'Hrs Time Delay'},
    {title: 'Category', value: 'Category', ext: 'Category'},
    {title: 'Users', value: 'Users', ext: 'Users'},
    {title: 'Requests', value: 'Requests', ext: 'Requests'},
    {title: 'Specials', value: 'Special', ext: 'Specials'},
    {title: 'E-Flyers', value: 'E-Flyers', ext: 'E-Flyers'},
    {title: 'Sales Lead', value: 'Sales Lead', ext: 'Sales Lead'},
    {title: 'Keywords', value: 'Keywords', ext: 'Keywords'},
    {title: 'CRM', value: 'CRM', ext: 'CRM'},
    {
      title: 'Integration',
      value: 'PayFast Integration',
      ext: 'PayFast Integration',
    },
  ];

  const vData = pacakges.map(p => {
    const details = packageDetail?.filter(pd => pd?.packageID === p.packageID);
    const _data = tableTitleFields.map(({value, ext}) => {
      const detail = details?.find(d => d?.attributeName === value);
      return `${detail?.value} ${ext}`;
    });
    return _data;
  });

  const hData: any[] = tableTitleFields.map((_, index) => {
    return vData.map(vd => vd[index]);
  });
  const tableTitle = tableTitleFields.map(ttf => ttf.title);
  tableTitle.push('');
  hData.push(
    pacakges.map(p => (
      <TouchableOpacity style={styles.buyButton} onPress={() => onBuy(p)}>
        <Text align="center" color="active" weight="medium" lineHeight={24}>
          Buy Now
        </Text>
        <Ionicon name="chevron-forward" size={20} color={colors.text.active} />
      </TouchableOpacity>
    )),
  );
  return (
    <Modal
      visible={visible}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      bottomModal>
      <SafeAreaView>
        <ScrollView horizontal bounces={false}>
          <Table borderStyle={styles.tableBorderStyle}>
            <Row
              data={tableHead}
              style={styles.head}
              widthArr={[150, ...pacakges.map(() => 200)]}
              textStyle={styles.headText}
            />
            <TableWrapper style={styles.wrapper}>
              <Col
                data={tableTitle}
                style={styles.title}
                heightArr={[40]}
                textStyle={styles.headText}
              />
              <Rows
                data={hData}
                flexArr={pacakges.map(() => 1)}
                widthArr={pacakges.map(() => 200)}
                style={styles.row}
                textStyle={styles.text}
              />
            </TableWrapper>
          </Table>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};

export default CompareModal;

const styles = StyleSheet.create({
  bottomView: {
    justifyContent: 'flex-end',
    margin: 0,
    flex: 1,
  },
  tableBorderStyle: {
    borderWidth: 1,
    borderColor: colors.borderColor,
  },
  head: {
    height: 50,
  },
  headText: {
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
  },
  wrapper: {
    flexDirection: 'row',
  },
  title: {
    width: 150,
  },
  row: {
    height: 40,
  },
  text: {
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    color: colors.text.label,
  },
  buyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
