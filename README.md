To run the Bamazon app, the user must download the files and open the seeds.sql file in MySQL. To do this, open MySQL Workbench and select “File”. 

![readme1](https://user-images.githubusercontent.com/28159154/29804426-53ce98e8-8c37-11e7-946b-c4d95b3ca463.jpg)

Under the “File” tab, select “Open SQL Script”

![readme2](https://user-images.githubusercontent.com/28159154/29804427-53cf62dc-8c37-11e7-9f94-c2669d912eb0.jpg)
 
Once the prompt menu opens, select the seeds.sql file. 

![readme3](https://user-images.githubusercontent.com/28159154/29804428-53d1d86e-8c37-11e7-9e57-2f2d069005fb.jpg)

Click "Open".

![readme4](https://user-images.githubusercontent.com/28159154/29804429-53e3373a-8c37-11e7-96ce-cbc55530df3e.jpg)

MySQL should open the file and display the text shown below. Click the lightning bolt to run the file and create the database and table. 

![readme5](https://user-images.githubusercontent.com/28159154/29804430-53e59dc2-8c37-11e7-86ea-a5ecb801861b.jpg)

Open the terminal and navigate to the directory where Bamazon’s app.js, seeds.sql, and package.json are stored. 

![readme6](https://user-images.githubusercontent.com/28159154/29804431-53e903cc-8c37-11e7-820c-3731354f46ec.jpg) 

To download the required packages, type in “npm install” and hit enter.

![readme7](https://user-images.githubusercontent.com/28159154/29804418-53b2129a-8c37-11e7-8418-8f044c88c7bf.jpg)

After typing enter, the terminal should look like this. 

![readme8](https://user-images.githubusercontent.com/28159154/29804419-53b25732-8c37-11e7-93c3-24a8848ca654.jpg)

After installing the packages, type “node app” in the terminal to run the Bamazon app.

![readme10](https://user-images.githubusercontent.com/28159154/29804420-53b61f8e-8c37-11e7-9510-f3812740c401.jpg)
 
A table of products will appear, which includes item prices and available quantities. The user will be prompted to choose an item from the list by using the arrow keys to navigate and enter key to select. 

![readme11](https://user-images.githubusercontent.com/28159154/29804421-53b6a83c-8c37-11e7-95c5-ba176f5031fb.jpg)

Once the user selects an item, a prompt will appear and ask for the desired quantity (default is 1).
 
![readme12](https://user-images.githubusercontent.com/28159154/29804422-53b7f99e-8c37-11e7-964e-1af08903f6af.jpg)

If the user enters a quantity that is less than the number of items remaining, the purchase will go through and the user will return to the main app prompt to select another item for purchase. 

![readme13](https://user-images.githubusercontent.com/28159154/29804423-53cb697a-8c37-11e7-9ef4-586506138695.jpg)

If the user enters a quantity that is greater than the number of items remaining, the purchase will not go through and the user will return to the main app prompt to select an item for purchase.

![readme14](https://user-images.githubusercontent.com/28159154/29804424-53cca038-8c37-11e7-8b2b-5d1a81ab5bf5.jpg)
 
If the user enters an invalid character, a message will appear prompting the user to enter a valid number. 

![readme15](https://user-images.githubusercontent.com/28159154/29804425-53cd4178-8c37-11e7-8e6e-211e7054c1d8.jpg)


