module.exports = (sequelize, DataType) => {
    const Historicos_no_asistidos = sequelize.define("Historicos_no_asistidos", {
      historico_id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      fecha: {
        type: DataType.DATEONLY,
        allowNull: false,
        unique: true
      },
      cant_enviados: {
        type: DataType.BIGINT,
        allowNull: false,
      },
      cant_no_enviados: {
        type: DataType.BIGINT,
        allowNull: false,
      },
    }, {freezeTableName: true});
  
    Historicos_no_asistidos.associate = (models) => {
      Historicos_no_asistidos.belongsTo(models.Users, {
        foreignKey: {
          name: "user_id",
          allowNull: true,
          defaultValue: 1,
        },
      });
    };
  
    return Historicos_no_asistidos;
  };
  