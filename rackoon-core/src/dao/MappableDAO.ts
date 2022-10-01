export class MappableDAO {
  public static commonFields = [
    {
      field: "id",
      databaseField: "id",
    },
    {
      field: "name",
      databaseField: "name",
    },
  ];

  public static mapFields(fieldsMap: any[], result: any): any {
    const returnObject = {};

    fieldsMap.forEach((entry) => {
      const field = entry.field;
      const databaseField = entry.databaseField;

      returnObject[field] = result[databaseField];
    });

    return returnObject;
  }
}
