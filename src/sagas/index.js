import { watchHelloWorld } from './helloWorld';


export default function* rootSaga() {
  return yield [
    watchHelloWorld(),
  ];
}
