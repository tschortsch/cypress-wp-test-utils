import { getBlockByName, selectBlockByClientId } from '../shared/helper';

export const selectBlockByName = (name, index) => {
  getBlockByName(name, index).then((block) => {
    selectBlockByClientId(block.clientId);
  });
};
