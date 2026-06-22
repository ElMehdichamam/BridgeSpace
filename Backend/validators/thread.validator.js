const z = require("zod");

const threadSchema = z.object({
  title: z.string().trim().min(3),
  project: z.string().length(24),
  deadline: z.string().optional()
});

module.exports = threadSchema;