const db = require("../lib/db");

const myModel = {
  createBoardData: async (requestData) => {
    try {
      const query =
        "INSERT INTO board (idx, writer, password, title, content, date, del_yn) VALUES (null, ?, ?, ?, ?, now(), 'N')";
      const values = [
        requestData.writer,
        requestData.password,
        requestData.title,
        requestData.content,
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

  selectBoardData: async () => {
    try {
      const query = "SELECT * FROM board";

      const result = await new Promise((resolve, reject) => {
        db.query(query, (error, result) => {
          if (error) {
            console.error("Error selecting data:", error);
            reject(error);
          } else {
            resolve(result);
          }
        });
      });

      return result;
    } catch (error) {
      console.error("Error selecting data:", error);
      throw new Error("Error selecting data");
    }
  },
};

module.exports = myModel;
