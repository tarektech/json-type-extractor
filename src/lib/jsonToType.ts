/**
 * JSON to TypeScript Type Converter
 * Converts JSON objects into TypeScript type definitions
 */

export interface ConversionResult {
  success: boolean;
  typeDefinition?: string;
  error?: string;
}

interface TypeInfo {
  type: string;
  isOptional: boolean;
}

/**
 * Main function to convert JSON string to TypeScript type
 */
export function convertJsonToType(
  jsonString: string,
  typeName: string = 'RootType'
): ConversionResult {
  try {
    // Parse JSON
    const parsedJson = JSON.parse(jsonString);

    // Generate type definition
    const typeDefinition = generateTypeDefinition(parsedJson, typeName, 0);

    return {
      success: true,
      typeDefinition,
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to parse JSON',
    };
  }
}

/**
 * Format JSON string with proper indentation
 */
export function formatJson(jsonString: string): string {
  try {
    const parsed = JSON.parse(jsonString);
    return JSON.stringify(parsed, null, 2);
  } catch (error) {
    throw new Error('Invalid JSON format');
  }
}

/**
 * Generate TypeScript type definition from parsed JSON
 */
function generateTypeDefinition(
  value: any,
  typeName: string,
  depth: number
): string {
  const indent = '  '.repeat(depth);
  const innerIndent = '  '.repeat(depth + 1);

  if (value === null) {
    return `type ${typeName} = null;`;
  }

  if (Array.isArray(value)) {
    if (value.length === 0) {
      return `type ${typeName} = any[];`;
    }

    // Analyze all array elements to determine union type
    const elementTypes = new Set<string>();
    let hasObjects = false;
    const objectProperties = new Map<string, Set<string>>();

    value.forEach((item) => {
      const itemType = inferType(item);
      if (itemType === 'object' && item !== null) {
        hasObjects = true;
        // Collect all properties from all objects
        Object.keys(item).forEach((key) => {
          if (!objectProperties.has(key)) {
            objectProperties.set(key, new Set());
          }
          objectProperties.get(key)!.add(inferType(item[key]));
        });
      } else {
        elementTypes.add(itemType);
      }
    });

    // If we have objects, generate an interface for them
    if (hasObjects && objectProperties.size > 0) {
      const interfaceName = `${typeName}Item`;
      let objectInterface = `interface ${interfaceName} {\n`;

      objectProperties.forEach((types, key) => {
        const isOptional = value.some(
          (item) => typeof item === 'object' && item !== null && !(key in item)
        );
        const typeUnion = Array.from(types).join(' | ');
        objectInterface += `${innerIndent}${key}${
          isOptional ? '?' : ''
        }: ${typeUnion};\n`;
      });

      objectInterface += `${indent}}\n\n`;
      objectInterface += `type ${typeName} = ${interfaceName}[];`;
      return objectInterface;
    }

    // For primitive arrays
    const unionType =
      elementTypes.size > 0 ? Array.from(elementTypes).join(' | ') : 'any';
    return `type ${typeName} = (${unionType})[];`;
  }

  if (typeof value === 'object') {
    const entries = Object.entries(value);

    if (entries.length === 0) {
      return `type ${typeName} = Record<string, never>;`;
    }

    let result = `interface ${typeName} {\n`;

    entries.forEach(([key, val]) => {
      const typeInfo = getDetailedType(val);
      const safeKey = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(key) ? key : `"${key}"`;
      result += `${innerIndent}${safeKey}${typeInfo.isOptional ? '?' : ''}: ${
        typeInfo.type
      };\n`;
    });

    result += `${indent}}`;
    return result;
  }

  // Primitive types
  const primitiveType = inferType(value);
  return `type ${typeName} = ${primitiveType};`;
}

/**
 * Get detailed type information including whether it's optional
 */
function getDetailedType(value: any): TypeInfo {
  if (value === null || value === undefined) {
    return { type: 'null', isOptional: false };
  }

  if (Array.isArray(value)) {
    if (value.length === 0) {
      return { type: 'any[]', isOptional: false };
    }

    // Check if all elements are of the same type
    const elementTypes = new Set(value.map((item) => inferType(item)));

    if (elementTypes.size === 1 && !elementTypes.has('object')) {
      const singleType = Array.from(elementTypes)[0];
      return { type: `${singleType}[]`, isOptional: false };
    }

    // For arrays with objects, create inline type
    if (elementTypes.has('object')) {
      const firstObject = value.find(
        (item) => typeof item === 'object' && item !== null
      );
      if (firstObject) {
        const objectType = generateInlineObjectType(firstObject, 1);
        return { type: `${objectType}[]`, isOptional: false };
      }
    }

    // Mixed array types
    const unionType = Array.from(elementTypes).join(' | ');
    return { type: `(${unionType})[]`, isOptional: false };
  }

  if (typeof value === 'object') {
    return {
      type: generateInlineObjectType(value, 1),
      isOptional: false,
    };
  }

  return { type: inferType(value), isOptional: false };
}

/**
 * Generate inline object type for nested objects
 */
function generateInlineObjectType(obj: any, depth: number): string {
  const indent = '  '.repeat(depth);
  const innerIndent = '  '.repeat(depth + 1);

  const entries = Object.entries(obj);

  if (entries.length === 0) {
    return 'Record<string, never>';
  }

  let result = '{\n';

  entries.forEach(([key, val]) => {
    const typeInfo = getDetailedType(val);
    const safeKey = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(key) ? key : `"${key}"`;
    result += `${innerIndent}${safeKey}${typeInfo.isOptional ? '?' : ''}: ${
      typeInfo.type
    };\n`;
  });

  result += `${indent}}`;
  return result;
}

/**
 * Infer TypeScript type from JavaScript value
 */
function inferType(value: any): string {
  if (value === null) return 'null';
  if (value === undefined) return 'undefined';

  const type = typeof value;

  switch (type) {
    case 'string':
      return 'string';
    case 'number':
      return 'number';
    case 'boolean':
      return 'boolean';
    case 'object':
      if (Array.isArray(value)) {
        return 'array';
      }
      return 'object';
    default:
      return 'any';
  }
}
