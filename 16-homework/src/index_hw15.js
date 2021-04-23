function* createIdGenerator() {
  for (let index = 1; index < Infinity; index++) {
      yield index;
  }
}
const idGenerator = createIdGenerator();
export {idGenerator};
