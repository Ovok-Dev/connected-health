import { colors } from '@/ui';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface VitalSignsDetailsCardProps {
  readonly name: string;
  readonly distance: string;
  readonly altitude: string;
  readonly tours: string;
}

export const VitalSignsDetailsCard: React.FunctionComponent<
  VitalSignsDetailsCardProps
> = ({ name, altitude, tours }) => {
  return (
    <View style={[styles.mainContainer]}>
      <View style={styles.contentContainer}>
        <View style={styles.dataContainer}>
          <View style={styles.iconBoxName}>
            <Text style={[styles.name, styles.iconOpacityUser]}>{name}</Text>
          </View>

          <View style={styles.threeIcons}>
            {/* <View style={styles.iconBox}>
              <Text style={[styles.measureText, styles.iconOpacityNonUser]}>
                {distance}
              </Text>
            </View> */}

            <View style={[styles.iconBox, styles.middleBox]}>
              <Text style={[styles.measureText, styles.iconOpacityNonUser]}>
                {altitude}
              </Text>
            </View>

            <View style={[styles.iconBox, styles.middleBox]}>
              <Text style={[styles.measureText, styles.iconOpacityNonUser]}>
                {tours}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 15,
  },
  mainContainerAlternate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingVertical: 12,

    marginRight: 10,
    marginLeft: 10,
    borderRadius: 15,
  },

  contentContainer: {
    flex: 1,
  },

  name: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
  },

  dataContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
  },
  iconBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBoxName: { flex: 2 },
  middleBox: {
    justifyContent: 'center',
  },
  superSetContainer: { backgroundColor: 'green' },

  threeIcons: { flex: 5, flexDirection: 'row' },
  rightBox: {
    justifyContent: 'flex-end',
  },
  iconOpacityNonUser: {
    opacity: 0.6,
    color: colors.black,
  },
  iconOpacityUser: {
    opacity: 0.9,
    color: '#8D79F6',
  },
  measureText: {
    fontWeight: '600',
    fontSize: 15,
  },
});
