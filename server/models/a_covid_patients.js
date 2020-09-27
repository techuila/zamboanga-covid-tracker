module.exports = (sequelize, DataTypes) => {
  const Patient = sequelize.define(
    'covid_patients',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
      },
      barangay: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      gender: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      travel_history: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      status: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      is_in_zamboanga: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      date_updated: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      date_created: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      tableName: 'covid_patients',
      timestamps: false,
    }
  );

  Patient.associate = (models) => {
    Patient.PatientLogs = Patient.hasMany(models.PatientLog, {
      as: 'patient_log',
      foreignKey: 'patient_id',
    });
  };

  return Patient;
};
