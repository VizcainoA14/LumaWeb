import { PrismaClient } from '@prisma/client';
import { join } from 'path';

// Workaround to find the db file in production
const filePath = join(process.cwd(), 'prisma/DATA.db');
const config = {
  datasources: {
    db: {
      url: 'file:' + filePath,
    },
  },
};

let prisma;
if (process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient(config);
} else {
    if (!global.cachedPrisma) {
        global.cachedPrisma = new PrismaClient(config);
    }
    prisma = global.cachedPrisma;
}
const data = prisma;

export default data
