Bar Chart
Imagine a webpage that displays the current number of customers in a queue.

It updates every second, and keeps a history of the past 40 values, as an "animated" bar-chart, where the current number of customers is displayed at the very right, and every second the values "scrolls" to the left, as in this animation:



(Note: The animation is a bit faster than one pr. second, and also restarts - your version shouldn't restart, but keep going indefinetely.) 

Fake data
Since you don't have access to actual queue-data, you are going to have to fake it. You can use this function anywhere in your code, to get the current number of customers in the queue:



And then, when you need to add the current number of customers to the bar-chart, just call the function, like this:



Requirements
The number of customers is an integer between 0 and 32. 

There must always be shown 40 “measurements”, with the rightmost being the current.

A new measurement must be read every second, give or take a couple hundred milliseconds.

The design, color, size, and layout is entirely up to you. Please don’t use orange bars. Make sure that your design is consistent, and that there is always room enough for the largest value!

Use plain HTML and CSS for the output - no SVG, Canvas or other drawing systems. No frameworks or plugins allowed!

Optional extras
Make the bars scroll smoothly to the left, rather than jumping on every new measurement.

Make the bars have different designs - older can be different from newer (e.g. the older values to the left could be gradually more greyed out) - large values can show different than small (e.g. a bar with 31 customers can be red, where as a bar with 1 customer can be green).

Add a hover feature, that tells the user the exact size of each bar.

Planning
Think separation of concerns so much that you almost build two different programs - the data-part, that handles an array of queue-sizes, with adding new data every second, and scrolling the values. And the visual part, that displays those data on the screen.

Remember to separate calculations and display.

I recommend building the visual part first, to begin with the end. Then add the data part, and see that the result is working.

This is just a recommendation, your proces may differ.

Visual part
Start by creating the bars, as they should look in their final form.
Find out how to modify the height of a single bar - use the inspector first, then try to do it with JavaScript. Remember, don't use random values before you seen it work with non-random.
In JavaScript create an array with 40 values - just enter 40 numbers between 0 and 32, don't bother with loops or Math.random yet.
Create a function to read that array, and modify the height of each bar.
Make sure it uses the correct values, and does it in the right order. Try to manually modify the array a bit, and verify that you can see the changes.
Data part
Make sure that you have an array of 40 values - either created manually, or by the program.
Make a function to add a new value to that array, and scroll the remaining values, so that there is still only 40 values in total.
Test as much as possible in the console - call the function manually, and check if the array still looks correct.
Combining the parts
When you have different functions to modify the array and display the array, it is time to combine them in the program.

Start by testing in the console. Call the data-function manually (you have already verified that it modifies the array correctly). Then call the visual-function manually (you have already verified that it displays the array correctly). Repeat calling the data-function and the visual-function, and you should see your bars "scroll".
Then automate the calling - make yet another function to call both functions, and have it be repeated once a second.