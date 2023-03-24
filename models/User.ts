import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { text, password } from "@keystone-6/core/fields";

export const User = list({
  access: allowAll,
  fields: {
    name: text({
      validation: { isRequired: true, }
    }),
    email: text({
      validation: { isRequired: true, },
      isIndexed: 'unique',
    }),
    password: password(),
  },
});