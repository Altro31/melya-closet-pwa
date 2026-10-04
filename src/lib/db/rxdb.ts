import { createRxDatabase } from 'rxdb/plugins/core';
import { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';
import { addRxPlugin } from 'rxdb/plugins/core';
import { RxDBDevModePlugin } from 'rxdb/plugins/dev-mode';
import dexieCloud from 'dexie-cloud-addon';

addRxPlugin(RxDBDevModePlugin);

const cloudUrl = import.meta.env.DEXIE_CLOUD_URL;

const storage = getRxStorageDexie({
    addons: [dexieCloud],
    async onCreate(dexieDatabase) {
        dexieDatabase.version(1).stores({
            items: '@id',
            outfits: '@id',
        });
        if (cloudUrl) {
            dexieDatabase.cloud.configure({
                databaseUrl: cloudUrl,
                tryUseServiceWorker: true,
            });
        }
    },
});

export const rxdb = await createRxDatabase({
    name: 'melya-closet',
    storage,
    ignoreDuplicate: true,
});
