module.exports = (sequelize, DataTypes) => {
  const PatientLog = sequelize.define(
    'covid_patient_logs',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
      },
      patient_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      prev_status: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      new_status: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      date_created: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      tableName: 'covid_patient_logs',
      timestamps: false,
    }
  );

  PatientLog.associate = (models) => {
    PatientLog.Patient = PatientLog.belongsTo(models.Patient, {
      as: 'patient',
      foreignKey: 'patient_id',
    });
  };

  return PatientLog;
};
