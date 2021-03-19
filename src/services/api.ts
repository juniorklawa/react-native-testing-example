// const listHUE = [
//   { id: 1, name: 'mocked api - item 1' },
//   { id: 2, name: 'mocked api - item 2' },
// ];

export default {
  getList: async (): Promise<any> => {
    return new Promise<any>((resolve) => {
      setTimeout(() => {
        return resolve([]);
      }, 2000);
    });
  },
};
