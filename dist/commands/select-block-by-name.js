import { getBlockByName, selectBlockByClientId } from '../shared/helper';
/**
 * Selects a block by its name.
 *
 * @param {string} name Name of the block to select. (eg. 'core/paragraph')
 * @param {number} [index] The index of the block if multiple blocks were found with the given name.
 */
export const selectBlockByName = (name, index) => {
    getBlockByName(name, index).then((block) => {
        selectBlockByClientId(block.clientId);
    });
};
