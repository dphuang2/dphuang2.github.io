---
layout: post
title: "Hack Illinois 2016 - Room Occupancy Counter - Intel Award"
date: 2016-2-21
description: 
image: http://i.imgur.com/JDOW1we.jpg
---
# *Automated Room Occupancy Counter*

This is a github repository for Hack Illinois 2016. <br>
The site for this project is live at <a href="http://resumepipe.web.engr.illinois.edu"> resumepipe.web.engr.illinois.edu </a>. The code can be seen [here](https://github.com/dphuang2/RoomCounter-HackIllinois2016).

Total time spent: **18** Hours

## **Goal**
  The goal of this project is to provide an automated occupancy count of a building or room that can be accessed wirelessly through a website.

## **Real World Application**
  The principle idea is to be able to detect and track the number of people entering and leaving a room in a given building (for now, the building of choice is ECEB). This tracker device would be placed in all rooms in the building. The number of people present in each given room would be sent to a website and displayed for everyone to see. The website will eventually include floor maps for the building with the number of people within the room. For the future, all buildings on the University of Illinois campus would be included on the website, giving a bigger scope for the student. This would allow students to have a live feed for any available study rooms in the buildings of their choice. Something similar is present for EWS stations but those are very limited. <br>
  If this device was installed in each room of every building on campus, the data of the device could be used to visualize the occupancy patterns of buildings on campus...down to a single room. Architects could use this data to improve the efficiency and designs of their buildings, Now that is awesome!

## **Materials Used**
<ol>
  <li> Intel Edison Board </li>
  <li> Grove Base Shield v2 </li>
  <li> Flex Sensor </li>
  <li> Touch Sensor </li>
  <li> LEDs for Debugging </li>
  <li> Website with cPanel </li>
  We used PhP, jQuery, and MySQL
</ol>

## **How it Works**
  It uses the flex sensor and touch sensor to signal an HTTP request to the server. The flex sensor would be placed at the hinge of the door and the touch sensor would be placed on the inside handle of the door. Using this simple if statement we determine whether or not a person leaves or enters the room:

{% highlight C %}

  if(flexSensor > 300){
    if(touchSensorisActive){
      currentOccupancy += -1;
    } else {
      currentOccupancy += 1;
    }
  }
{% endhighlight %}

  The website then refreshes on user input to display the updated value of occupancies.

## **Problems Encountered During Development (It was a frustrating hack)**
  Everything...jk. But really...we were not familiar with the Edison board and Grove Base Shield v2 so that slowed us down at the beginning of development. After we got basic functionalities like shining an LED using a touch sensor to work, we moved on to sending a POST request to the website that we made. Implementing the POST request was by far the most difficult part of the project because we were not familiar with HTTP requests using Arduino software. We spent 11 hours getting the Edison board to send an HTTP request to our database that would update the occupancy of the respective building/room. Some underlying issues turned out to be stating "Content-Type: " of POST request, figuring out the process of Arduino HTTP requests, and debugging the website POST .php file. After we got the HTTP requests to work, moving forward was much easier as the last things to do were to hook up the sensors, code them accordingly, and make the refresh button function. One issue that we ran into in the last portion of the development was finding out that two touch sensor readings in the same void loop() broke the Arduino code.

## **Images**
  <a href="http://imgur.com/YgVllPd"><img src="http://i.imgur.com/YgVllPd.jpg" title="source: imgur.com" /></a>
  <a href="http://imgur.com/dCIWA6T"><img src="http://i.imgur.com/dCIWA6T.jpg" title="source: imgur.com" /></a>
  <a href="http://imgur.com/PxmV1sv"><img src="http://i.imgur.com/PxmV1sv.jpg" title="source: imgur.com" /></a>
  <a href="http://imgur.com/jfXnzhs"><img src="http://i.imgur.com/jfXnzhs.gif" title="source: imgur.com" /></a>

## **Future Development**
<ol>
    <li> Interactive map </li>
    <li> Motion Sensors for more data reading to determine change of occupancy </li>
    <li> Compensating for inaccurate readings </li>
    Example: Someone inside a room opens the door for someone outside the room should increase occupancy but the current code will decrease the occupancy count.
</ol>

## **Authors**
<ul>
    <li> Harsh Modhera (hmodhe2) </li>
    <li> Daniel Zhang (dzhang54) </li>
    <li> Dylan Huang (dphuang2) </li>
</ul>
