const roleMiddleware = (...allowedRoles) => {
  return (req, res, next) => {
    const role = req.user.role;
    const isExsist = allowedRoles.includes(role);
    if(!isExsist){
        return res.status(403).json({
            message:"Role Note Found"
        })
    }
    next();
  }
}
module.exports = roleMiddleware;