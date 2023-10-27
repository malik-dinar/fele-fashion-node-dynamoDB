# Fele Fashions Product Listing API

This is a REST API for the "Fele Fashions" product listing application, which allows you to list product categories, retrieve products by category, and add new products.

## API Endpoints

### 1. List Product Categories

URL: /api/product/categories
Method: GET
Headers:
`x-api-key: abcd-efgh-ijlk-1234`
`content-type: application/json`
Response:
```json
{
"totalCategories": 4,
"categories": [
{
"categoryId": 1,
"categoryName": "Footwear"
},
{
"categoryId": 2,
"categoryName": "T-Shirts"
},
{
"categoryId": 3,
"categoryName": "Jackets"
},
{
"categoryId": 4,
"categoryName": "Jeans"
}
]
}
```
### 2. List Products by Category

URL: /api/product/list?categoryId=1
Method: GET
Headers:
`x-api-key: abcd-efgh-ijlk-1234`
`content-type: application/json`
Response:
```json
{
"categoryId": 1,
"categoryName": "Footwear",
"products": [
{
"productId": 11,
"productName": "Jack and Jones Leather boots",
"price": 4999,
"productImage": "https://m.media-amazon.com/images/I/71ZLToAJrYL.AC_UY1000.jpg",
"brand": "Jack and Jones"
},
{
"productId": 12,
"productName": "Nike Air Jordans",
"price": 8999,
"productImage": "https://static.nike.com/a/images/f_auto,cs_srgb/w_1920,c_limit/89c121fc-3d07-4de0-aef6-bcc9c2764a2c/air-jordan-1-2022-lost-and-found-chicago-the-inspiration-behind-the-design.jpg",
"brand": "Nike"
}
]
}
```
### 3. Add New Product

URL: /api/product/save
Method: POST
Headers:
`x-api-key: abcd-efgh-ijlk-1234`
`content-type: application/json`
Request Body:
```json
{
"productName": "Jack and Jones Leather boots",
"price": 4999,
"productImage": "https://m.media-amazon.com/images/I/71ZLToAJrYL._AC_UY1000_.jpg",
"brand": "Jack and Jones",
"categoryId": 1
}
```
Response:
```json
{
"message": "Product saved successfully"
}
```

## Usage

Clone this repository.
Install the required dependencies.
Run the Node.js application on your AWS EC2 instance.
Access the API using the provided endpoints.
## AWS EC2 Instance

You can access the hosted backend service on your AWS EC2 instance at [Instance-IP-Address].

---
