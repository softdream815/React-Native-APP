import React, {useEffect, useState, useCallback} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {
  GoogleSignin,
  ConfigureParams,
} from '@react-native-google-signin/google-signin';
import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';
import {getBrand} from 'react-native-device-info';
import {useUserInfo} from '@app/hooks/useUserInfo';
import {useGuestLogin} from '@app/hooks/useGuestLogin';
import {set_user_info} from '@app/redux/actions/actions';
import {UserType} from '@app/types';
import {useGetMstVersions} from '@app/hooks/useGetMstVersions';
import {useSQLiteDatabase} from '@app/providers/hooks/useSQLiteProvider';
import {useGetAllCities} from '@app/hooks/useGetAllCities';
import {useGetAllSuburbs} from '@app/hooks/useGetAllSuburbs';
import {useGetAllProvinces} from '@app/hooks/useGetAllProvinces';
import {decode} from 'base-64';

const CREATE_VERSIONS_TABLE = `CREATE TABLE IF NOT EXISTS versions (
  id INTEGER PRIMARY KEY,
  version REAL,
  type TEXT
)`;

const CREATE_CITIES_TABLE = `CREATE TABLE IF NOT EXISTS cities (
  id INTEGER PRIMARY KEY,
  cityId INTEGER,
  cityName TEXT,
  provinceId INTEGER
)`;

const CREATE_PROVINCES_TABLE = `CREATE TABLE IF NOT EXISTS provinces (
  id INTEGER PRIMARY KEY,
  provinceId INTEGER,
  provinceName TEXT,
  countryId INTEGER
)`;

const CREATE_SUBURBS_TABLE = `CREATE TABLE IF NOT EXISTS suburbs (
  id INTEGER PRIMARY KEY,
  suburbId INTEGER,
  suburbName TEXT,
  cityId INTEGER
)`;

const SplashScreen = ({navigation, setUser}: any) => {
  const [token, setToken] = useState<string>('');
  const [isGuest, setGuest] = useState<boolean>(true);
  const [isInitialized, setInitialized] = useState<boolean>(false);
  const [isCheckedAuth, setCheckedAuth] = useState<boolean>(false);
  const [isCheckedSQLite, setCheckedSQLite] = useState<boolean>(true);

  // Check authenticatin and restore it

  const {fetchUser} = useUserInfo(token);
  const {guestLogin} = useGuestLogin();
  const {getMstVersions} = useGetMstVersions(token);
  const {SQLiteHandler} = useSQLiteDatabase();
  const {getCities} = useGetAllCities(token);
  const {getProvinces} = useGetAllProvinces(token);
  const {getSuburbs} = useGetAllSuburbs(token);

  // Push notificaiton permission
  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
    return enabled;
  };

  const init = useCallback(async () => {
    const googleSigninConfiguration: ConfigureParams = {
      scopes: ['https://www.googleapis.com/auth/user.birthday.read'],
      webClientId:
        '232834789917-0i6u709vc27u2bo5idli0hgv1v9jhcp9.apps.googleusercontent.com',
      offlineAccess: true, // if you want to access Google API on behalf
      hostedDomain: '',
    };
    GoogleSignin.configure(googleSigninConfiguration);

    const deviceBrand: string = getBrand();

    if (deviceBrand === 'HUAWEI') {
      setInitialized(true);
    } else {
    // } else if (await requestUserPermission()) {
      console.log('Permission iOS!');
      // const fcmToken = await messaging().getToken();
      // console.log(fcmToken);
      // if (fcmToken) {
      //   AsyncStorage.setItem('fcm_token', fcmToken);
      // } else {
      //   console.log('fcm_token', fcmToken);
      // }
      messaging().onNotificationOpenedApp(remoteMessage => {
        console.log(
          'Notification caused app to open from background state:',
          remoteMessage.notification,
        );
      });
      messaging()
        .getInitialNotification()
        .then(remoteMessage => {
          if (remoteMessage) {
            console.log(
              'Notification caused app to open from quit state:',
              remoteMessage.notification,
            );
          }
        });
      console.log('initialized');
      setInitialized(true);
    }
  }, []);

  const getCheckAuthentication = useCallback(async () => {
    const _token = await AsyncStorage.getItem('token');
    const userString = await AsyncStorage.getItem('userInfo');
    if (_token && userString) {
      const decodedString = decode(_token.split('.')[1]);
      const decodedObject = JSON.parse(decodedString);
      const role =
        decodedObject[
          'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
        ];
      const companyId = decodedObject.companyId;
      const jti = decodedObject.jti;
      const user = JSON.parse(userString);
      const userId = decodedObject.Id;
      console.log(`TOKEN: ${_token}`)
      setToken(_token);
      setUser({
        ...user,
        isLoggedIn: true,
        isGuest: false,
        role,
        companyId,
        jti,
        id: parseInt(userId, 10),
      });
      setGuest(false);
    } else {
      const {data} = await guestLogin();
      const guestToken = data?.guestLogin?.result?.value ?? '';
      const decodedString = decode(guestToken.split('.')[1]);
      const decodedObject = JSON.parse(decodedString);
      const role =
        decodedObject[
          'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
        ];
      const companyId = decodedObject.companyId;
      const userId = decodedObject.Id;
      const jti = decodedObject.jti;
      setToken(guestToken);
      setGuest(true);
      setUser({
        token: data?.guestLogin?.result?.value,
        isLoggedIn: true,
        isGuest: true,
        role,
        companyId,
        jti,
        id: parseInt(userId, 10),
      });
      setCheckedAuth(true);
    }
  }, [guestLogin, setUser]);

  useEffect(() => {
    init();
    getCheckAuthentication();
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log(remoteMessage);
    });
    return unsubscribe;
  }, [init, getCheckAuthentication]);

  // const checkSQLite = useCallback(async () => {
  //   const {data: versions} = await getMstVersions();
  //   const {data: cities} = await getCities();
  //   const {data: provinces} = await getProvinces();
  //   const {data: suburbs} = await getSuburbs();
  //   if (!SQLiteHandler) {
  //     return;
  //   }
  //   const SQLite = SQLiteHandler;
  //   let versionsTable: any;
  //   try {
  //     versionsTable = await SQLite.executeSql('select * from versions');
  //   } catch (e) {
  //     if (e.code === 0) {
  //       console.log('Version table does not exist: creating table....');
  //       await SQLite.executeSql(CREATE_VERSIONS_TABLE);
  //       console.log('Version table created. inserting data');
  //       versions?.mstVersions?.data?.map(v => {
  //         const query = `INSERT INTO versions (version, type) VALUES (${v?.versionNumber}, '${v?.versionType}')`;
  //         SQLite.executeSql(query);
  //         return query;
  //       });
  //       console.log('inserting data to versions done!');
  //       console.log('Create Tables...');
  //       await SQLite.executeSql(CREATE_CITIES_TABLE);
  //       await SQLite.executeSql(CREATE_PROVINCES_TABLE);
  //       await SQLite.executeSql(CREATE_SUBURBS_TABLE);

  //       console.log('Create tables done. inserting data....');
  //       provinces?.getProvince?.result?.map(p => {
  //         const query = `INSERT INTO provinces (provinceId,provinceName,countryId) VALUES (${p?.provinceId}, "${p?.provinceName}", ${p?.countryId})`;
  //         SQLite.executeSql(query);
  //         return query;
  //       });
  //       cities?.getCity?.result?.map(c => {
  //         const query = `INSERT INTO cities (cityId,cityName,provinceId) VALUES (${c?.cityId}, "${c?.cityName}", ${c?.provinceId})`;
  //         SQLite.executeSql(query);
  //         return query;
  //       });
  //       suburbs?.getSuburb?.result?.map(s => {
  //         const query = `INSERT INTO suburbs (suburbId,suburbName,cityId) VALUES (${s?.suburbId}, "${s?.suburbName}", ${s?.cityId})`;
  //         SQLite.executeSql(query);

  //         return query;
  //       });
  //     } else {
  //       console.log('SQL ERROR:', e);
  //     }
  //   }
  //   if (versionsTable && versions?.mstVersions?.data) {
  //     await Promise.all(
  //       versions?.mstVersions?.data?.map(async v => {
  //         let query = `SELECT * FROM versions WHERE type = '${v?.versionType}'`;
  //         const result = await SQLite.executeSql(query);
  //         if (result && result.length > 0) {
  //           const item = result[0].rows.item(0);
  //           if (item.version === v?.versionNumber) {
  //             console.log('Matched!');
  //           } else {
  //             query = `UPDATE versions SET version = ${v?.versionNumber} WHERE type='${item.type}'`;
  //             await SQLite.executeSql(query);
  //             if (v?.versionType === 'Province') {
  //               await SQLite.executeSql(CREATE_PROVINCES_TABLE);
  //               await SQLite.executeSql('DELETE FROM provinces;');
  //               const queries = provinces?.getProvince?.result?.map(p => {
  //                 return `INSERT INTO provinces (provinceId,provinceName,countryId) VALUES (${p?.provinceId}, '${p?.provinceName}', ${p?.countryId})`;
  //               });
  //               const queryString = queries?.join(';');
  //               if (queryString) {
  //                 await SQLite.executeSql(queryString);
  //               }
  //             } else if (v?.versionType === 'City') {
  //               await SQLite.executeSql(CREATE_CITIES_TABLE);
  //               await SQLite.executeSql('DELETE FROM cities;');
  //               const queries = cities?.getCity?.result?.map(c => {
  //                 return `INSERT INTO cities (cityId,cityName,provinceId) VALUES (${c?.cityId}, '${c?.cityName}', ${c?.provinceId})`;
  //               });

  //               const queryString = queries?.join(';');
  //               if (queryString) {
  //                 await SQLite.executeSql(queryString);
  //               }
  //             } else if (v?.versionType === 'Suburb') {
  //               await SQLite.executeSql(CREATE_SUBURBS_TABLE);
  //               await SQLite.executeSql('DELETE FROM suburbs;');
  //               const queries = suburbs?.getSuburb?.result?.map(s => {
  //                 return `INSERT INTO suburbs (suburbId,suburbName,cityId) VALUES (${s?.suburbId}, '${s?.suburbName}', ${s?.cityId})`;
  //               });

  //               const queryString = queries?.join(';');
  //               if (queryString) {
  //                 await SQLite.executeSql(queryString);
  //               }
  //             } else if (v?.versionType === 'Category') {
  //             }
  //           }
  //         } else {
  //         }
  //       }),
  //     );
  //   }

  //   if (
  //     versionsTable &&
  //     versionsTable.length > 0 &&
  //     versionsTable[0].rows.length === 0
  //   ) {
  //     versions?.mstVersions?.data?.map(v => {
  //       const query = `INSERT INTO versions (version, type) VALUES (${v?.versionNumber}, '${v?.versionType}')`;
  //       SQLite.executeSql(query);
  //       return query;
  //     });
  //   }

  //   setCheckedSQLite(true);
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [SQLiteHandler]);

  useEffect(() => {
    if (token && !isGuest) {
      fetchUser().then(({data}) => {
        const decodedString = decode(token.split('.')[1]);
        const decodedObject = JSON.parse(decodedString);
        const role =
          decodedObject[
            'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
          ];
        const companyId = decodedObject.companyId;
        const jti = decodedObject.jti;
        setUser({
          ...data?.getUser?.result,
          isLoggedIn: true,
          isGuest: false,
          id: parseInt(decodedObject.Id, 10),
          role,
          companyId,
          jti,
        });
        setCheckedAuth(true);
      });
    }
  }, [token, isGuest, fetchUser, setUser]);

  // useEffect(() => {
  //   if (token) {
  //     checkSQLite();
  //   }
  // }, [token, checkSQLite]);

  useEffect(() => {
    const redirect = async () => {
      const isDoneIntro = await AsyncStorage.getItem('isDoneIntro');
      if (isDoneIntro === 'true') {
        navigation.reset({
          index: 0,
          routes: [{name: 'MainDrawer'}],
        });
      } else {
        navigation.reset({
          index: 0,
          routes: [{name: 'Intro'}],
        });
      }
    };

    console.log(isInitialized, isCheckedAuth, isCheckedSQLite);
    if (isCheckedAuth && isInitialized && isCheckedSQLite) {
      redirect();
    }
  }, [isInitialized, isCheckedAuth, isCheckedSQLite, navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('@app/assets/images/logos/2.gif')}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

const mapDispatchToProps = {
  setUser: (user: Partial<UserType>) => set_user_info(user),
};

export default connect(null, mapDispatchToProps)(SplashScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 350,
    height: 200,
  },
});
