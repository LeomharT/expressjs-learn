import type { Optional } from 'sequelize';
import * as Sequelize from 'sequelize';
import { DataTypes, Model } from 'sequelize';

export interface UserAttributes {
	id: number;
	email: string;
	name: string;
	password: string;
	telephone: string;
	introduction: string;
	country: string;
	provinceCode: string;
	cityCode: string;
	address: string;
	contactNumber: string;
	avatar: string;
}

export type UserPk = 'id';
export type UserId = User[UserPk];
export type UserOptionalAttributes =
	| 'id'
	| 'email'
	| 'name'
	| 'telephone'
	| 'introduction'
	| 'country'
	| 'provinceCode'
	| 'cityCode'
	| 'address'
	| 'contactNumber'
	| 'avatar';
export type UserCreationAttributes = Optional<
	UserAttributes,
	UserOptionalAttributes
>;

export class User
	extends Model<UserAttributes, UserCreationAttributes>
	implements UserAttributes
{
	id!: number;
	email!: string;
	name!: string;
	password!: string;
	telephone!: string;
	introduction!: string;
	country!: string;
	provinceCode!: string;
	cityCode!: string;
	address!: string;
	contactNumber!: string;
	avatar!: string;

	static initModel(sequelize: Sequelize.Sequelize): typeof User {
		return User.init(
			{
				id: {
					autoIncrement: true,
					type: DataTypes.INTEGER,
					allowNull: false,
					primaryKey: true,
					comment: 'User Id Primary Key',
				},
				email: {
					type: DataTypes.STRING(255),
					allowNull: false,
					defaultValue: '',
					comment: 'User Email',
				},
				name: {
					type: DataTypes.STRING(255),
					allowNull: false,
					defaultValue: '',
					comment: 'User Name',
				},
				password: {
					type: DataTypes.STRING(255),
					allowNull: false,
					comment: 'User Password',
				},
				telephone: {
					type: DataTypes.STRING(11),
					allowNull: false,
					defaultValue: '',
					comment: 'User Telephone',
				},
				introduction: {
					type: DataTypes.STRING(255),
					allowNull: false,
					defaultValue: '',
					comment: 'User Introduction',
				},
				country: {
					type: DataTypes.STRING(20),
					allowNull: false,
					defaultValue: '',
					comment: 'User Country',
				},
				provinceCode: {
					type: DataTypes.STRING(20),
					allowNull: false,
					defaultValue: '',
					comment: 'User Province Code',
				},
				cityCode: {
					type: DataTypes.STRING(20),
					allowNull: false,
					defaultValue: '',
					comment: 'User City Code',
				},
				address: {
					type: DataTypes.STRING(255),
					allowNull: false,
					defaultValue: '',
					comment: 'User Address',
				},
				contactNumber: {
					type: DataTypes.STRING(11),
					allowNull: false,
					defaultValue: '',
					comment: 'User Contact Number',
				},
				avatar: {
					type: DataTypes.STRING(255),
					allowNull: false,
					defaultValue: '',
					comment: 'User Avatar URL',
				},
			},
			{
				sequelize,
				tableName: 'user',
				timestamps: false,
				indexes: [
					{
						name: 'PRIMARY',
						unique: true,
						using: 'BTREE',
						fields: [{ name: 'id' }],
					},
					{
						name: 'id',
						unique: true,
						using: 'BTREE',
						fields: [{ name: 'id' }],
					},
				],
			}
		);
	}
}
