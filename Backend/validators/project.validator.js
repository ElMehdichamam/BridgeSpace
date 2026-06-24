const z = require("zod");

const projectSchema = z.object({
    name : z.string().trim().min(5),
    description : z.string().trim(),
    organization : z.string().trim().length(24),
    admin : z.string().trim().length(24).optional(),
    member : z.array(z.string().length(24)).optional(),
    status : z.enum(["active", "on-hold", "completed"]),
    deadline : z.string()
});

module.exports = projectSchema;