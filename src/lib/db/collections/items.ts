import { collectionOptions, useDbClient } from '@tanstack/react-db';
import { rxdbCollectionOptions } from '@tanstack/rxdb-db-collection';
import { rxdb } from '../rxdb';

export interface Item {
    id: string;
    name: string;
    category: string;
    color: string;
    imageUrl: string;
    createdAt: string;
}

export const itemSchema = {
    title: 'item',
    version: 0,
    type: 'object',
    primaryKey: 'id',
    properties: {
        id: { type: 'string', maxLength: 100 },
        name: { type: 'string' },
        category: { type: 'string' },
        color: { type: 'string' },
        imageUrl: { type: 'string' },
        createdAt: { type: 'string' },
    },
    required: ['id', 'name', 'category', 'color', 'imageUrl', 'createdAt'],
};

export const itemCollection = collectionOptions(
    rxdbCollectionOptions<Item>({
        rxCollection: rxdb.items,
        id: 'items',
        startSync: true,
    })
);

export const useItemCollection = () => useDbClient().collection(itemCollection)
