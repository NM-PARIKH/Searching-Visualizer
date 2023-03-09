import React from "react";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

const BinaryCode = () => {
    const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    return(
        <>
            <h1> Code for Binary search </h1>

        

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
                    <div style={{marginLeft:'0px'}}> {`int binarySearch(int arr[], int l, int r, int x)`} </div>
                    <div style={{marginLeft:'0px'}}> {`{`} </div>
                    <div style={{marginLeft:'30px'}}> {`if (r >= l) {`} </div>
                    <div style={{marginLeft:'60px'}}> {`int mid = l + (r - l) / 2;`} </div>
                    <div style={{marginLeft:'60px'}}> {`if (arr[mid] == x)`} </div>
                    <div style={{marginLeft:'90px'}}> {`return mid;`} </div>
                    <div style={{marginLeft:'60px'}}> {`if (arr[mid] > x)`} </div>
                    <div style={{marginLeft:'90px'}}> {`return binarySearch(arr, l, mid - 1, x);`} </div>
                    <div style={{marginLeft:'60px'}}> {`return binarySearch(arr, mid + 1, r, x);`} </div>
                    <div style={{marginLeft:'30px'}}> {`}`} </div>
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
                    <div style={{marginLeft:'30px'}}> {`int result = binarySearch(arr, 0, num - 1, x);`} </div>
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
                    <div style={{marginLeft:'0px'}}> {`class Binarysearch`} </div>
                    <div style={{marginLeft:'0px'}}> {`{`} </div>
                    <div style={{marginLeft:'30px'}}> {`int binarySearch(int arr[], int l, int r, int x)`} </div>
                    <div style={{marginLeft:'30px'}}> {`{`} </div>
                    <div style={{marginLeft:'60px'}}> {`if (r >= l) {`} </div>
                    <div style={{marginLeft:'90px'}}> {`int mid = l + (r - l) / 2;`} </div>
                    <div style={{marginLeft:'90px'}}> {`if (arr[mid] == x)`} </div>
                    <div style={{marginLeft:'120px'}}> {`return mid;`} </div>
                    <div style={{marginLeft:'90px'}}> {`if (arr[mid] > x)`} </div>
                    <div style={{marginLeft:'120px'}}> {`return binarySearch(arr, l, mid - 1, x);`} </div>
                    <div style={{marginLeft:'90px'}}> {`return binarySearch(arr, mid + 1, r, x);`} </div>
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
                    <div style={{marginLeft:'60px'}}> {`BinarySearch ob = new BinarySearch();`} </div>
                    <div style={{marginLeft:'60px'}}> {`int result = ob.binarySearch(arr, 0, num - 1, x);`} </div>
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

export default BinaryCode;

