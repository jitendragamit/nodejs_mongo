# test_jiten_node_mongo

Prerequisites : 

1. Download and install node js and Mongodb on your VMs (Cent os, Ubuntu etc..)

2. create directory where you want to install node js 

3. Install node js inside the created directory using below command:

	e.g. npm install

4. Then run node server using below command : 

	e.g. node server.js	
	
5. After successfully run the above command test below url in postman or browser 

	e.g. http://localhost:3002
	
	By default node js run on 3000 port number, but if you have already any other application running on this port 
	then change port number, here I have changed the port 3002 
	
6. Install mongodb on same server and configure it's details in 
	
	config/database.config.js	
	
7. If you change in source file then again restart the node server as per step 4 


REST API details : 

1. Add category : 

Url : http://192.168.206.146:3002/category
Method : POST
Content-Type : application/json
Body input(raw)
e.g : {"category_name":"Electrical", "parent_category_id":0}

2. Add Product mapped to a category or categories.

Url : http://192.168.206.146:3002/product
Method : POST
Content-Type : application/json
Body input(raw) : 

e.g: {"product_name":"Essential Chemistry for Cambridge Lower Secondary Stage 9 Student Book", 
"category_id":"5f3687da51cf9b0a39bed490",
"product_price":2000,
"description" : "The Essential Science for Cambridge Lower Secondary series provides complete curriculum framework coverage for Stages 7-9. It has been written by an experienced author team and provides a seamless link into Cambridge IGCSE"
}

3. update product information

Url : http://192.168.206.146:3002/product/{product_id}
Method : PUT
Content-Type : application/json
Body input(raw) : 

e.g : 
{"product_name":"Essential Chemistry123", 
"category_id":"5f3687da51cf9b0a39bed490",
"product_price":5000,
"description" : "The Essential Science for Cambridge Lower Secondary series provides complete curriculum framework coverage for Stages 7-9. It has been written by an experienced author team and provides a seamless link into Cambridge IGCSE"
}

4. Get all categories with all its child categories mapped to it

Url : http://192.168.206.146:3002/categories_all
Method : GET
Content-Type : application/json



5. Get all products by a category

Url : http://192.168.206.146:3002/product/{category_id}
Method : GET
Content-Type : application/json




	
	
	

	 


