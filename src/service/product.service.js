const AWS = require("aws-sdk");

const aws_region = process.env.AWS_REGION;
const access_id = process.env.AWS_ACCESS_KEY;
const secret_key = process.env.AWS_SECRET_KEY;

const dynamoDB = new AWS.DynamoDB.DocumentClient({
  region: aws_region,
  accessKeyId: access_id,
  secretAccessKey: secret_key,
});

module.exports.fetchCategories = () => {
  const params = {
    TableName: "product_categories",
  };
  return new Promise((resolve, reject) => {
    dynamoDB.scan(params, function (err, data) {
      if (err) {
        reject(err);
      } else {
        const categories = {
          totalCategories: data.Count,
          categories: data.Items,
        };
        resolve(categories);
      }
    });
  });
};

module.exports.newProduct = (product) => {
  const params = {
    TableName: "products",
    Item: product,
  };
  return new Promise((resolve, reject) => {
    dynamoDB.put(params, function (err) {
      if (err) {
        console.log("Error", err);
        reject(err);
      } else {
        const message = "product added successfully";
        resolve(message);
      }
    });
  });
};

module.exports.getCategoryProduct = async (categoryId) => {
  const params = {
    TableName: "products",
    FilterExpression : "#categoeryId = :categoeryId",
    ExpressionAttributeNames: { "#categoeryId": "categoeryId" },
    ExpressionAttributeValues: {
        ':categoeryId': parseInt(categoryId)
    },
  } 

  return new Promise((resolve, reject) => {
    dynamoDB.scan(params, function (err, data) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};
