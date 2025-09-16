import AsyncValidator from "async-validator";
import { interopImportCJSDefault } from "node-cjs-interop";

import cn from "./cn";

export default (rules) => {
  const Schema = interopImportCJSDefault(AsyncValidator);
  const validator = new Schema(rules);
  validator.messages(cn);

  return (data) => {
    let result = null;
    function handleErrors(error, fields) {
      const validResult = Object.keys(fields).reduce((acc, key) => {
        const itemErr = fields[key]
          .map(({ message }) => message)
          ?.filter((v) => !!v)
          ?.join(", ");
        if (itemErr) acc[key] = itemErr;
        return acc;
      }, {});
      if (
        !(
          validResult === null ||
          validResult === undefined ||
          validResult === "" ||
          (Array.isArray(validResult) && validResult?.length <= 0) ||
          (typeof validResult === "object" &&
            Object.keys(validResult)?.length <= 0)
        )
      ) {
        result = validResult;
      }
    }
    validator.validate(data, { suppressWarning: true }, handleErrors);
    return result;
  };
};
