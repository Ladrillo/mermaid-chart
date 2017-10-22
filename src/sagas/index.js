import { watchStartApp } from './main'


export default function* rootSaga() {
  return yield [
    watchStartApp(),
  ];
}
