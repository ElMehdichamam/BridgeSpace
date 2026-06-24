const z = require("zod");

const messageValid = z.object({
    content : z.string().trim().min(1),
    sender : z.string().trim().length(24).optional(),
    thread : z.string().trim().length(24)
});

module.exports = messageValid;