import { Column, Table, Model, DataType } from 'sequelize-typescript'



@Table({
  tableName: 'users',
})

export class User extends Model {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;
    @Column
    username: string;
    @Column
    password: string;
  }
  