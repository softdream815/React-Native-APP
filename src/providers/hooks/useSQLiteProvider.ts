import {useState} from 'react';
import SQLite, {SQLError} from 'react-native-sqlite-storage';

export function useSQLiteDatabase() {
  // const [isConnected, setConnected] = useState<boolean>(false);
  // const [error, setError] = useState<SQLError>();

  SQLite.enablePromise(false);

  const successcb = () => {
    // setConnected(true);
  };

  const errorcb = (err: SQLError) => {
    // setError(err);
  };

  const SQLiteHandler = SQLite.openDatabase(
    {name: 'ezyfinddb'},
    successcb,
    errorcb,
  );

  return {
    SQLiteHandler,
    // isConnected,
    // error,
  };
}
