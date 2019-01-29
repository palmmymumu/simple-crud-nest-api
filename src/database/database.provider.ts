import { Sequelize } from 'sequelize-typescript';

import { Book } from '../book/model/book.model';

export const DatabaseProvider = [
  {
    provide: 'db',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: '',
        port: 3306,
        username: '',
        password: '',
        database: '',
      });
      sequelize.addModels([Book]);
      await sequelize.sync();
      return sequelize;
    },
  },
];

