import { rxdb } from '../rxdb';
import { itemSchema } from './items';
import { outfitSchema } from './outfits';

await rxdb.addCollections({
    items: { schema: itemSchema },
    outfits: { schema: outfitSchema },
});

export { itemCollection } from './items';
export { outfitCollection } from './outfits';
export type { Item } from './items';
export type { Outfit } from './outfits';
