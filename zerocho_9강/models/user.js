const Sequelize = require('sequelize')

class User extends Sequelize.Model{
    static initiate(sequelize){
        User.init({
            email:{
                type: Sequelize.STRING(40),
                allowNull: true,
                unique: true,
            },
            nick: {
                type: Sequelize.STRING(15),
                allowNull: false,
            },
            password: {
                type: Sequelize.STRING(100),
                allowNull: true,
            },
            provider: {
                type: Sequelize.ENUM('local', 'kakao'),
                allowNull: false,
                defaultValue: 'local'
            },
            snsId: {
                type: Sequelize.STRING(30),
                allowNull: true,
            }
        }, {
            sequelize,
            timestamps: true, // createdAt, updatedAt
            underscored: false, // created_at, updated_at 으로 바뀜 (true면)
            modelName: 'User',
            tableName: 'users',
            paranoid: true, // deletedAt 유저 삭제일 // soft delete임
            charset: 'utf8',
            collate: 'utf8_general_ci'
        })
    }

    static associate(db) {
        db.User.hasMany(db.Post)
        db.User.belongsToMany(db.User, {foreignKey: 'followingId', as: 'Followers', through: 'Follow'}) //팔로워
        db.User.belongsToMany(db.User, {foreignKey: 'followerId', as: 'Following', through: 'Follow'}) // 팔로잉
    }
}

module.exports = User