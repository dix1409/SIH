import React from 'react';
// import Images from '../config/Images';
import { Button, ScreenContainer, withTheme } from '@draftbit/ui';
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
const REPLACE_SCREEN_NAME = (props) => {
  const [creditcardnumber, setCreditcardnumber] = React.useState(undefined);
  const [expirymonth, setExpirymonth] = React.useState(undefined);
  const [expiryyear, setExpiryyear] = React.useState(undefined);
  const [cvc, setCvc] = React.useState(undefined);
  const { theme } = props;
  return (
    <ScreenContainer hasSafeArea={true} scrollable={true}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingViewEp}
        behavior="position"
        enabled={true}
        keyboardVerticalOffset={44}
      >
        <ScrollView
          contentContainerStyle={styles.scrollView4R}
          showsHorizontalScrollIndicator={false}
          bounces={true}
          showsVerticalScrollIndicator={true}
        >
          <View style={styles.viewFS}>
            <Text
              style={StyleSheet.flatten([
                styles.textKo,
                theme.typography.headline4,
                { color: theme.colors.strong },
              ])}
            >
              Add Card
            </Text>
            <Text
              style={StyleSheet.flatten([
                styles.textVq,
                theme.typography.subtitle1,
                { color: theme.colors.medium },
              ])}
            >
              Enter your credit details.
            </Text>
            {/* <Image
              style={StyleSheet.flatten([
                styles.imageCk,
                {
                  backgroundColor: theme.colors.background,
                  borderColor: theme.colors.divider,
                  borderRadius: theme.borderRadius.global,
                },
              ])}
              resizeMode="contain"
              source={Images.CreditCardImagePlaceholder}
            /> */}
          </View>
          <View
            style={styles.viewMw}
            importantForAccessibility="auto"
            hitSlop={{}}
            pointerEvents="auto"
            accessible={true}
          >
            <View
              importantForAccessibility="auto"
              hitSlop={{}}
              pointerEvents="auto"
              accessible={true}
            >
              <Text
                style={StyleSheet.flatten([
                  styles.textKk,
                  theme.typography.caption,
                  { color: theme.colors.strong },
                ])}
                allowFontScaling={true}
                accessible={true}
                textBreakStrategy="highQuality"
                ellipsizeMode="tail"
              >
                Card Number
              </Text>
              <View
                style={styles.viewDv}
                importantForAccessibility="auto"
                accessible={true}
                pointerEvents="auto"
                hitSlop={{}}
              >
                <TextInput
                  style={StyleSheet.flatten([
                    styles.textInputFa,
                    {
                      backgroundColor: theme.colors.background,
                      borderColor: theme.colors.divider,
                      borderRadius: theme.borderRadius.global,
                      color: theme.colors.strong,
                    },
                  ])}
                  keyboardType="numeric"
                  autoCapitalize="none"
                  allowFontScaling={true}
                  onChangeText={creditcardnumber =>
                    setCreditcardnumber(creditcardnumber)
                  }
                  value={creditcardnumber}
                  placeholderTextColor={theme.colors.medium}
                  placeholder="4242"
                  clearButtonMode="while-editing"
                  enablesReturnKeyAutomatically={true}
                  spellcheck={true}
                  returnKeyType="next"
                  textContentType="creditcardnumber"
                />
              </View>
            </View>
            <View
              style={styles.viewUz}
              hitSlop={{}}
              accessible={true}
              importantForAccessibility="auto"
              pointerEvents="auto"
            >
              <View
                hitSlop={{}}
                pointerEvents="auto"
                importantForAccessibility="auto"
                accessible={true}
              >
                <Text
                  style={StyleSheet.flatten([
                    styles.textGi,
                    theme.typography.caption,
                    { color: theme.colors.strong },
                  ])}
                  allowFontScaling={true}
                  textBreakStrategy="highQuality"
                  ellipsizeMode="tail"
                  accessible={true}
                >
                  Expiry Month
                </Text>
                <View
                  style={styles.viewMy}
                  importantForAccessibility="auto"
                  hitSlop={{}}
                  accessible={true}
                  pointerEvents="auto"
                >
                  <TextInput
                    style={StyleSheet.flatten([
                      styles.textInput49,
                      {
                        color: theme.colors.strong,
                        backgroundColor: theme.colors.background,
                        borderColor: theme.colors.divider,
                        borderRadius: theme.borderRadius.global,
                      },
                    ])}
                    value={expirymonth}
                    onChangeText={expirymonth => setExpirymonth(expirymonth)}
                    spellcheck={true}
                    allowFontScaling={true}
                    keyboardType="numeric"
                    placeholderTextColor={theme.colors.medium}
                    enablesReturnKeyAutomatically={true}
                    placeholder="MM"
                    autoCapitalize="none"
                    returnKeyType="next"
                    textContentType="none"
                    maxLength={2}
                  />
                </View>
              </View>
              <View
                style={styles.viewQT}
                importantForAccessibility="auto"
                pointerEvents="auto"
                accessible={true}
                hitSlop={{}}
              >
                <Text
                  style={StyleSheet.flatten([
                    styles.textJM,
                    theme.typography.caption,
                    { color: theme.colors.strong },
                  ])}
                  accessible={true}
                  ellipsizeMode="tail"
                  textBreakStrategy="highQuality"
                  allowFontScaling={true}
                >
                  Expiry Year
                </Text>
                <View
                  style={styles.viewHp}
                  importantForAccessibility="auto"
                  accessible={true}
                  pointerEvents="auto"
                  hitSlop={{}}
                >
                  <TextInput
                    style={StyleSheet.flatten([
                      styles.textInputUi,
                      {
                        color: theme.colors.strong,
                        backgroundColor: theme.colors.background,
                        borderColor: theme.colors.divider,
                        borderRadius: theme.borderRadius.global,
                      },
                    ])}
                    allowFontScaling={true}
                    autoCapitalize="none"
                    textContentType="none"
                    spellcheck={true}
                    keyboardType="numeric"
                    enablesReturnKeyAutomatically={true}
                    placeholder="YY"
                    value={expiryyear}
                    placeholderTextColor={theme.colors.medium}
                    returnKeyType="next"
                    onChangeText={expiryyear => setExpiryyear(expiryyear)}
                    maxLength={2}
                  />
                </View>
              </View>
              <View
                importantForAccessibility="auto"
                pointerEvents="auto"
                hitSlop={{}}
                accessible={true}
              >
                <Text
                  style={StyleSheet.flatten([
                    styles.textH5,
                    theme.typography.caption,
                    { color: theme.colors.strong },
                  ])}
                  accessible={true}
                  textBreakStrategy="highQuality"
                  allowFontScaling={true}
                  ellipsizeMode="tail"
                >
                  CVC
                </Text>
                <View
                  style={styles.viewBh}
                  accessible={true}
                  importantForAccessibility="auto"
                  pointerEvents="auto"
                  hitSlop={{}}
                >
                  <TextInput
                    style={StyleSheet.flatten([
                      styles.textInputF7,
                      {
                        borderColor: theme.colors.divider,
                        borderRadius: theme.borderRadius.global,
                        color: theme.colors.strong,
                        backgroundColor: theme.colors.background,
                      },
                    ])}
                    keyboardType="numeric"
                    placeholderTextColor={theme.colors.medium}
                    textContentType="none"
                    enablesReturnKeyAutomatically={true}
                    returnKeyType="done"
                    autoCapitalize="none"
                    onChangeText={cvc => setCvc(cvc)}
                    allowFontScaling={true}
                    spellcheck={true}
                    placeholder="CVC"
                    maxLength={3}
                    value={cvc}
                  />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
        <View
          style={styles.viewCe}
          hitSlop={{}}
          importantForAccessibility="auto"
          pointerEvents="auto"
          accessible={true}
        >
          <Button
            style={StyleSheet.flatten([
              styles.buttonNM,
              { borderRadius: theme.borderRadius.global },
            ])}
            type="solid"
            onPress={()=>props.navigation.navigate("Thx")}
          >
            Add to Cart
          </Button>
        </View>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};
const styles = StyleSheet.create({
  textKk: {
    textTransform: 'uppercase',
  },
  textGi: {
    textTransform: 'uppercase',
  },
  textJM: {
    textTransform: 'uppercase',
  },
  textH5: {
    textTransform: 'uppercase',
  },
  scrollView4R: {
    flexGrow: 1,
  },
  buttonNM: {
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
  },
  keyboardAvoidingViewEp: {
    flexGrow: 1,
    justifyContent: 'space-around',
  },
  textKo: {
    marginBottom: 6,
  },
  viewFS: {
    paddingRight: 32,
    paddingLeft: 32,
    paddingTop: 44,
    paddingBottom: 34,
  },
  textInputFa: {
    height: 54,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    paddingLeft: 14,
    paddingRight: 14,
  },
  textInput49: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    paddingLeft: 14,
    paddingRight: 14,
    height: 54,
    maxWidth: 90,
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'left',
  },
  textInputUi: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    paddingLeft: 14,
    paddingRight: 14,
    height: 54,
    maxWidth: 90,
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'left',
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  textInputF7: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'left',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    paddingLeft: 14,
    paddingRight: 14,
    height: 54,
    maxWidth: 90,
  },
  viewDv: {
    paddingTop: 12,
    marginBottom: 12,
    paddingBottom: 12,
  },
  viewMy: {
    paddingBottom: 12,
    paddingTop: 12,
    marginBottom: 12,
  },
  viewHp: {
    paddingBottom: 12,
    paddingTop: 12,
    marginBottom: 12,
  },
  viewQT: {
    marginLeft: 24,
    marginRight: 24,
  },
  viewBh: {
    paddingBottom: 12,
    paddingTop: 12,
    marginBottom: 12,
  },
  viewUz: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 8,
  },
  viewMw: {
    paddingBottom: 14,
    paddingRight: 32,
    paddingLeft: 32,
  },
  viewCe: {
    paddingLeft: 32,
    paddingRight: 32,
    paddingBottom: 34,
    paddingTop: 14,
  },
  textVq: {
    textAlign: 'left',
  },
  imageCk: {
    borderRightWidth: 1,
    marginBottom: 24,
    height: 190,
    width: '100%',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    marginTop: 34,
  },
});
export default withTheme(REPLACE_SCREEN_NAME);