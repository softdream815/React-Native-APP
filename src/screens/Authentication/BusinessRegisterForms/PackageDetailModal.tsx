import React from 'react';
import {StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import {
  Modal,
  Text,
  Container,
  GradientButton,
} from '@app/components/templates';
import {useBusinessPackageDetail} from '@app/hooks/useBusinessPackageDetail';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '@app/contants/colors';
import {CheckBoxCircle} from '@app/assets/svgs/Authentication';

type PackageDetailModalPropsType = {
  visible: boolean;
  packageId: number;
  title: string;
  onPressBuy: () => void;
  onClose: () => void;
};

const PackageDetailModal = ({
  visible,
  packageId,
  title,
  onClose,
  onPressBuy,
}: PackageDetailModalPropsType) => {
  const {packageDetail, loading} = useBusinessPackageDetail(packageId);
  return (
    <Modal
      visible={!!packageDetail?.length && !loading && visible}
      bottomModal
      contentStyle={styles.content}>
      <SafeAreaView>
        <Container
          dir="row"
          justifyContent="space-between"
          pl={20}
          pr={10}
          pb={10}
          alignItems="center"
          style={styles.header}>
          <Text size="lg" color="primary" weight="medium" lineHeight={24}>
            {title}
          </Text>
          <TouchableOpacity onPress={onClose}>
            <Ionicons name="close" size={24} />
          </TouchableOpacity>
        </Container>
        <Container pr={10} pl={10} pt={10} pb={10}>
          {loading && <Text>Loading</Text>}
          {packageDetail?.map(detail => {
            return (
              <Container dir="row" alignItems="center" pt={10} pb={10}>
                <CheckBoxCircle />
                <Text
                  ml={10}
                  key={
                    detail?.attributeID
                  }>{`${detail?.value} ${detail?.attributeName}`}</Text>
              </Container>
            );
          })}
        </Container>
        <Container
          dir="row"
          pt={10}
          pb={10}
          style={styles.footer}
          pl={20}
          pr={20}
          justifyContent="space-between"
          alignItems="center">
          <TouchableOpacity onPress={onClose}>
            <Text color="active" weight="medium">
              Close
            </Text>
          </TouchableOpacity>
          <GradientButton
            title="Buy Now"
            style={{paddingHorizontal: 20}}
            onPress={() => onPressBuy()}
          />
        </Container>
      </SafeAreaView>
    </Modal>
  );
};

export default PackageDetailModal;

const styles = StyleSheet.create({
  content: {
    paddingTop: 20,
    paddingBottom: 10,
    height: 520,
  },
  header: {
    borderBottomWidth: 2,
    borderBottomColor: colors.borderColor,
  },
  footer: {
    borderTopWidth: 2,
    borderTopColor: colors.borderColor,
  },
});
