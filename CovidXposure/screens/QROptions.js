import { StyleSheet, View } from "react-native";
import React from "react";
import {
  Heading,
  Text,
  VStack,
  Center,
  NativeBaseProvider,
  Button,
  Input,
  Divider,
  HStack,
  Alert,
  Switch,
  Box,
  Image,
  ScrollView,
} from "native-base";
import { useState } from "react";

const QROptions = () => {
  const [codeIndex, setCodeIndex] = useState(0);
  const codes = [
    "https://www.investopedia.com/thmb/na7Q1b971nlXOy76f-4F_Rxgt2k=/660x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/qr-code-bc94057f452f4806af70fd34540f72ad.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZCTrGBhblq5Ad652kvOPiMidTGD2PiTarJ8LQAfHLkYXyRWFw0FYOGGHDUKgsYh0c65E&usqp=CAU",
    "https://barcode-labels.com/wp-content/uploads/QRtoarticle_1.jpg",
  ];
  return (
    <NativeBaseProvider>
      <ScrollView _contentContainerStyle={{}}>
        <Center flex={1} px="3">
          <VStack
            w="100%"
            space={2.5}
            px="2"
            mt="8"
            alignItems="center"
            justifyContent="center"
          >
            <Image
              source={{
                uri: codes[codeIndex],
              }}
              alt="Alternate Text"
              size="2xl"
              key={codeIndex}
            />
            <Divider my="2" />
            <Heading textAlign="center" mb="10">
              QR code information options
            </Heading>
            <View styles={styles.alert}>
              <Alert w="90%" status="info" colorScheme="info">
                <VStack space={2} flexShrink={1} w="100%">
                  <HStack
                    flexShrink={1}
                    space={2}
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <HStack flexShrink={1} space={2} alignItems="center">
                      <Alert.Icon />
                      <Text
                        fontSize="sm"
                        fontWeight="medium"
                        color="coolGray.800"
                      >
                        Select what information you would like to share when
                        your QR code is scanned
                      </Text>
                    </HStack>
                  </HStack>
                </VStack>
              </Alert>
            </View>
            <View style={styles.infoContainer}>
              <Text bold fontSize="lg" textAlign="center">
                Date of birth
              </Text>
              <Switch
                size="lg"
                onChange={() => {
                  setCodeIndex((codeIndex + 1) % 3);
                }}
              />
            </View>
            <View style={styles.infoContainer}>
              <Text bold fontSize="lg" textAlign="center">
                Vaccination status
              </Text>
              <Switch
                size="lg"
                onChange={() => {
                  setCodeIndex((codeIndex + 1) % 3);
                }}
              />
            </View>
            <View style={styles.infoContainer}>
              <Text bold fontSize="lg" textAlign="center">
                Vaccination details
              </Text>
              <Switch
                size="lg"
                onChange={() => {
                  setCodeIndex((codeIndex + 1) % 3);
                }}
              />
            </View>
          </VStack>
        </Center>
      </ScrollView>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    padding: 10,
  },

  alert: {
    paddingRight: 10,
  },

  container: {
    backgroundColor: "pink",
  },
});

export default QROptions;
