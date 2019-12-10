/**
 * Generate .d.ts. content for the given table
 * @param {TableRegistry} tableRegistry
 * @param {Table} table
 * @return {string}
 */
export function tableToDefinition(tableRegistry, table) {
  return `declare interface ${table.name} {
      ${fields(table)}
      _referenceKeys: ${digReferenceKeys(table, 2).concat("never").join("|")};    
    }
   `;

  function digReferenceKeys(table, depth, prefix = "") {
    return getReferenceFields(table)
      .reduce((prev, refField) => {
        prev.push(...queryKeys(tableRegistry, refField.reference, depth, prefix + refField.element + "."));
        return prev;
      }, []);
  }

  function getReferenceFields(table) {
    return table.allFields.filter(field => field.internal_type === "reference");
  }

  /**
   *
   * @param {TableRegistry} tableRegistry
   * @param {string} tableName
   * @param depth
   * @param prefix
   */
  function queryKeys(tableRegistry, tableName, depth, prefix) {
    if (depth === 0) {
      return [];
    }
    const table = tableRegistry.getTableByName(tableName);
    if (table === undefined) {
      console.error("Skipping reference fields for " + tableName);
      return [];
    }
    const result = table.allFields.map(field => `"${prefix}${field.element}"`);
    result.push(...digReferenceKeys(table, depth - 1, prefix));
    return result;
  }

}


/**
 *
 * @param {Table} table
 */
function fields(table) {
  return table.allFields.map(field => `${field.element}: ${optionalType(field)} GlideElement<${table.name}, ${getType(field)}>;`).join("\n");
}

function optionalType(field) {
  return field.internal_type === "reference" ? `internal.GlideElements<${field.reference}> &` : "";
}

const supportedTypes = new Set(["boolean", "glide_date_time", "reference", "glide_date", "currency", "choice", "price"]);

/**
 *
 * @param {Field} field
 * @return {string}
 */
function getType(field) {
  const internalType = field.internal_type;
  if (supportedTypes.has(internalType)) {
    let strOut = "glideElementType.g_" + internalType;
    if (internalType === "reference") {
      strOut += "<" + field.reference + ">";
    } else if (internalType === "choice") {
      // TODO implement choice list
      strOut += "<string>";
    }
    return strOut;
  } else {
    return "glideElementType.defaultType";
  }
}


export function buildTableIndex(tableHierarchy) {
  return "declare type TableIndex = {\n" +
    tableHierarchy.map(table => table.name + ": " + table.name + ";").join("\n") +
    "\n}\n" +
    "\n" +
    "declare type TableName = keyof TableIndex;"
}