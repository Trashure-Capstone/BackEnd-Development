const userService = require("../services/userService");

class UserController {
  async getUserById(req, res) {
    const userId = req.params.id;

    try {
      const user = await userService.getUserById(userId);

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      return res.status(200).json({
        error: false,
        message: 'User found',
        data: user,
      });
    } catch (error) {
      return res.status(500).json({ 
        error: true,
        message: error.message });
    }
  }
  async updateUser(req, res) {
    const userId = req.params.id;

    try {
      const user = await userService.updateUser(userId, req.body);
      console.log(user);
      if (!user) {
        return res.status(404).json({ 
          error: true,
          message: "User not found" });
      }

      return res.status(200).json({ 
        error: false,
        message: "User found",
        data: user
        });
    } catch (error) {
      return res.status(500).json({ 
        error: true,
        message: error.message });
    }
  }
}

module.exports = new UserController();
