const db = require("../lib/db");

const myUserModel = {
  createUserData: async (requestData) => {
    try {
      const query =
        "INSERT INTO user (idx, email, password, username, signup) VALUES (null, ?, ?, ?, now())";
      const values = [
        requestData.email,
        requestData.password,
        requestData.username,
      ];

      const result = await new Promise((resolve, reject) => {
        db.query(query, values, (error, result) => {
          if (error) {
            console.error("Error creating data:", error);
            reject(error);
          } else {
            resolve(result);
          }
        });
      });

      return result;
    } catch (error) {
      console.error("Error creating data:", error);
      throw new Error("Error creating data");
    }
  },
  checkUserData: async (requestData) => {
    try {
      const query = `SELECT * FROM user WHERE email = '${requestData.email}' AND password = '${requestData.password}'`;

      const result = await new Promise((resolve, reject) => {
        db.query(query, (error, result) => {
          if (error) {
            console.error("Error creating data:", error);
            reject(error);
          } else {
            resolve(result);
          }
        });
      });

      if (result.length === 0) {
        return 0;
      } else {
        return result;
      }
    } catch (error) {
      console.error("Error creating data:", error);
      throw new Error("Error creating data");
    }
  },
};

module.exports = myUserModel;
