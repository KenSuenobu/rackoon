export class MappableDAO {
  public static commonFields = ["id", "name"];

  private static fromSnakeCase(str: string): string {
    return str
      .split(/\.?(?=[A-Z])/)
      .join("_")
      .toLowerCase();
  }

  public static mapFields(fieldsMap: any[], result: any): any {
    const returnObject = {};

    fieldsMap.forEach((entry) => {
      const field = entry;
      const databaseField = MappableDAO.fromSnakeCase(entry);

      returnObject[field] = result[databaseField];
    });

    return returnObject;
  }
}
