import { watchStartApp } from './appStart';
import { watchStartThreads } from './threadsStart';
import{ watchFindToken } from './tokenFind';


export default function* rootSaga() {
  return yield [
    watchStartApp(),
    watchStartThreads(),
    watchFindToken(),
  ];
}
