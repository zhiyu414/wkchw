import React from 'react';
import { Center, Pressable, Actionsheet, useDisclose } from 'native-base';
import Icon from 'react-native-vector-icons/Fontisto';
import ActionScreen from '../screens/ActionScreen';

export default (props) => {
  const { isOpen, onOpen, onClose } = useDisclose();
  const { zoomRatio, site } = props;

  return (
    <>
      <Pressable onPress={onOpen}>
        <Center bg="#EDA101" borderRadius={60} p={5 * zoomRatio} borderWidth={2 * zoomRatio} borderColor="#ECEF23">
          <Icon name={"bicycle"} size={30 * zoomRatio} color="#000" />
        </Center>
      </Pressable>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <ActionScreen onClose={onClose} site={site} />
      </Actionsheet>
    </>
  );
}
