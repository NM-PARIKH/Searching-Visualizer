import React from "react";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

const LinearCode = () => {
    const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    return(
        <>
            <h1> Code for Linear search </h1>

        

        <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
        {/* <TabContext> */}
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
            {/* <TabList> */}
                <Tab style={{boxShadow:'2px 0px 3px rgb(86, 86, 86)', margin:'10px', fontSize:'15px'}} label="C++" value="1" />
                <Tab style={{boxShadow:'2px 0px 3px rgb(86, 86, 86)', margin:'10px', fontSize:'15px'}} label="JAVA" value="2" />
            </TabList>
            </Box>

            {/* <TabPanel value="1">  */}
            <TabPanel style={{boxShadow:'7px 10px 14px -2px rgb(86, 86, 86)', width:'790px', backgroundColor:'black',borderRadius:'20px', color:'white'}} value="1"> 
                <code>

                    <div style={{marginLeft:'0px'}}> {`#include<bits/stdc++.h>`} </div>
                    <div style={{marginLeft:'0px'}}> {`using namespace std;`} </div>
                    <br/>
                    <div style={{marginLeft:'0px'}}> {`int LinearSearch(int arr[] , int N, int x)`} </div>
                    <div style={{marginLeft:'0px'}}> {`{`} </div>
                    <div style={{marginLeft:'30px'}}> {`int i;`} </div>
                    <div style={{marginLeft:'30px'}}> {`for (i = 0; i < N; i++)`} </div>
                    <div style={{marginLeft:'60px'}}> {`if (arr[i] == x)`} </div>
                    <div style={{marginLeft:'90px'}}> {`return i;`} </div>
                    <div style={{marginLeft:'30px'}}> {`return -1;`} </div>
                    <div style={{marginLeft:'0px'}}> {`}`} </div>
                    <br/>
                    <div style={{marginLeft:'0px'}}> {`int main()`} </div>
                    <div style={{marginLeft:'0px'}}> {`{`} </div>
                    <div style={{marginLeft:'30px'}}> {`int num,int x;`} </div>
                    <div style={{marginLeft:'30px'}}> {`cout << "Enter Total Numbers : ";`} </div>
                    <div style={{marginLeft:'30px'}}> {`cin >> num`} </div>
                    <div style={{marginLeft:'30px'}}> {`cout << "Enter The Number You Want To Search : ";`} </div>
                    <div style={{marginLeft:'30px'}}> {`cin >> x`} </div>
                    <div style={{marginLeft:'30px'}}> {`int arr[num];`} </div>
                    <div style={{marginLeft:'30px'}}> {`for (i = 0; i < num; i++)`} </div>
                    <div style={{marginLeft:'60px'}}> {`cin >> arr[i]`} </div>
                    <div style={{marginLeft:'30px'}}> {`int result = LinearSearch(arr, num , x);`} </div>
                    <div style={{marginLeft:'30px'}}> {`(result == -1) ? cout << "Element is not present in array" : cout << "Element is present at index " << result;`} </div>
                    <div style={{marginLeft:'30px'}}> {`return 0;`} </div>
                    <div style={{marginLeft:'0px'}}> {`}`} </div>
                    <div style={{marginLeft:'0px'}}> {``} </div>
                    <div style={{marginLeft:'0px'}}> {``} </div>

                </code>
            </TabPanel>
            <TabPanel style={{boxShadow:'7px 10px 14px -2px rgb(86, 86, 86)', width:'790px', backgroundColor:'black',borderRadius:'20px', color:'white'}} value="2"> 

                <code>
                    <div style={{marginLeft:'0px'}}> {`import java.util.Scanner;`} </div>
                    <div style={{marginLeft:'0px'}}> {`class Linearsearch`} </div>
                    <div style={{marginLeft:'0px'}}> {`{`} </div>
                    <div style={{marginLeft:'30px'}}> {`public static int LinearSearch(int arr[], int N , int x)`} </div>
                    <div style={{marginLeft:'30px'}}> {`{`} </div>
                    <div style={{marginLeft:'60px'}}> {`for (int i = 0; i < N; i++) {`} </div>
                    <div style={{marginLeft:'90px'}}> {`if (arr[i] == x)`} </div>
                    <div style={{marginLeft:'120px'}}> {`return i;`} </div>
                    <div style={{marginLeft:'60px'}}> {`}`} </div>
                    <div style={{marginLeft:'60px'}}> {`return -1;`} </div>
                    <div style={{marginLeft:'30px'}}> {`}`} </div>
                    <br/>
                    <div style={{marginLeft:'30px'}}> {`public static void main(String args[])`} </div>
                    <div style={{marginLeft:'30px'}}> {`{`} </div>
                    <div style={{marginLeft:'60px'}}> {`Scanner sc = new Scanner(System.in);`} </div>
                    <div style={{marginLeft:'60px'}}> {`System.out.println("Enter Total Number : )`} </div>
                    <div style={{marginLeft:'60px'}}> {`int num = sc.nextInt();`} </div>
                    <div style={{marginLeft:'60px'}}> {`System.out.println("Enter The Number You Want To Search : )`} </div>
                    <div style={{marginLeft:'60px'}}> {`int x = sc.nextInt();`} </div>
                    <div style={{marginLeft:'60px'}}> {`int[] arr = new int[num];`} </div>
                    <div style={{marginLeft:'60px'}}> {`for (i = 0; i < num; i++)`} </div>
                    <div style={{marginLeft:'90px'}}> {`arr[i] = sc.nexInt()`} </div>
                    <div style={{marginLeft:'60px'}}> {`int result = LinearSearch(arr, num , x);`} </div>
                    <div style={{marginLeft:'60px'}}> {`if (result == -1)`} </div>
                    <div style={{marginLeft:'90px'}}> {`System.out.println("Element not present");`} </div>
                    <div style={{marginLeft:'60px'}}> {`else`} </div>
                    <div style={{marginLeft:'90px'}}> {`System.out.println("Element found at index " + result);`} </div>
                    <div style={{marginLeft:'30px'}}> {`}`} </div>
                    <div style={{marginLeft:'0px'}}> {`}`} </div>
                    <div style={{marginLeft:'0px'}}> {``} </div>
                    <div style={{marginLeft:'0px'}}> {``} </div>

                </code>
            
            </TabPanel>
            <TabPanel value="3"></TabPanel>
        </TabContext>
        </Box>
    </>
    )
}

export default LinearCode;

/*
// C++ code to linearly search x in arr[]. If x
// is present then return its location, otherwise
// return -1

#include <iostream>
using namespace std;

int search(int arr[], int N, int x)
{

}

// Driver's code
int main(void)
{
	int arr[] = { 2, 3, 4, 10, 40 };
	int x = 10;
	int N = sizeof(arr) / sizeof(arr[0]);

	// Function call
	int result = search(arr, N, x);
	(result == -1)
		? cout << "Element is not present in array"
		: cout << "Element is present at index " << result;
	return 0;
}
*/

/*
// Java code for linearly searching x in arr[]. If x
// is present then return its location, otherwise
// return -1

class GFG {
	public static int search(int arr[], int x)
	{
		int N = arr.length;
		
		}
		return -1;
	}

	// Driver's code
	public static void main(String args[])
	{
		int arr[] = { 2, 3, 4, 10, 40 };
		int x = 10;

		// Function call
		int result = search(arr, x);
		if (result == -1)
			System.out.print(
				"Element is not present in array");
		else
			System.out.print("Element is present at index "
							+ result);
	}
}
*/