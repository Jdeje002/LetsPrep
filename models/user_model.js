<<<<<<< HEAD
module.exports = function(sequelize,DataType){
    
    var User = sequelize.define('User',{
=======
module.exports = function(sequelize,Sequelize){
    var UserData = sequelize.define('UserData',{
>>>>>>> 7973b37e73370b8399eb6f87760c29ad3408e15f
        user: {
            type:Sequelize.STRING,
        },
        email: {
            type:Sequelize.STRING,
        },
        calories:{
            type:Sequelize.INTEGER,
            allowNull:true,
            validate:{
                len:[1,30]
            }
        },
        breakfast:{
            type:Sequelize.STRING,
            allowNull:true,
            validate:{
                len:[1,30]
            }
        },
        lunch:{
            type:Sequelize.STRING,
            allowNull:true,
            validate:{
                len:[1,30]
            }
        },
        dinner:{
            type:Sequelize.STRING,
            allowNull:true,
            validate:{
                len:[1,30]
            }
        },
        createdAt: {
            type: 'TIMESTAMP',
            defaultValue: Sequelize.NOW,
            allowNull: false
          },
          updatedAt: {
            type: 'TIMESTAMP',
            defaultValue: Sequelize.NOW,
            allowNull: false
          },
    });
    return UserData;
    
}