import { Column, Table, Model , DataType} from 'sequelize-typescript'



@Table({
  tableName: 'request',
})

export class Request extends Model {
  @Column({type: DataType.INTEGER, autoIncrement: true, primaryKey: true})
  id: number;

  @Column
  query: string;

  }
  