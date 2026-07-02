const z = require("zod");

const registerSchema = z.object({
    email:z.string().trim().toLowerCase().min(3).max(255).email("Invalid Email Format"),
    password:z.string().trim().min(8,"Password Must Be At least 8 caracters"),
    role:z.enum(["admin", "dev", "finance", "sales", "support", "member"]),
    department:z.string().trim().min(3),
    organization:z.string().trim().min(3),
    username:z.string().trim().min(3)
});

const logInSchema = z.object({
    email:z.string().trim().min(3).max(255).email("Invalid Email Format"),
    password:z.string().trim().min(8,"Password Must be At Least 8 caracters")
});

module.exports = {registerSchema,logInSchema}
