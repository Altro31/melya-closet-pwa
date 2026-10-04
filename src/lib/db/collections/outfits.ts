import { collectionOptions, useDbClient, useLiveQuery } from '@tanstack/react-db';
import { rxdbCollectionOptions } from '@tanstack/rxdb-db-collection';
import { rxdb } from '../rxdb';

export interface Outfit {
    id: string;
    name: string;
    itemIds: string[];
    createdAt: string;
}

export const outfitSchema = {
    title: 'outfit',
    version: 0,
    type: 'object',
    primaryKey: 'id',
    properties: {
        id: { type: 'string', maxLength: 100 },
        name: { type: 'string' },
        itemIds: { type: 'array', items: { type: 'string' } },
        createdAt: { type: 'string' },
    },
    required: ['id', 'name', 'itemIds', 'createdAt'],
};

export const outfitCollection = collectionOptions(
    rxdbCollectionOptions<Outfit>({
        rxCollection: rxdb.outfits,
        id: 'outfits',
        startSync: true,
    })
);

export const useOutfitCollection = () => useDbClient().collection(outfitCollection)
