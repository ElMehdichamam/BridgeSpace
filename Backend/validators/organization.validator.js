const z = require("zod");

const organizationSchema = z.object({
  name: z.string().trim().min(3),
  departments: z.array(z.string()).optional()
});

module.exports = organizationSchema;