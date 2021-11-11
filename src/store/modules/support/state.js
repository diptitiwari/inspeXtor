const allCiscoSwitches = {
    "sEcho": 1,
    "iTotalRecords": 4,
    "iTotalDisplayRecords": 4,
    "aaData": [
        {
            "ID": "1",
            "Name": "ENG-05-RMU-05",
            "IPAddress": "10.10.0.5",
            "UserID": "root",
            "Password": "pmi2017",
            "Status": "0"
        },
        {
            "ID": "2",
            "Name": "ENG-04-RMU-04",
            "IPAddress": "10.10.0.4",
            "UserID": "root",
            "Password": "pmi2017",
            "Status": "0"
        },
        {
            "ID": "3",
            "Name": "ENG-07-RMU-07",
            "IPAddress": "10.10.0.7",
            "UserID": "root",
            "Password": "pmi2017",
            "Status": "0"
        },
        {
            "ID": "4",
            "Name": "ENG-01-RMU-01",
            "IPAddress": "10.10.0.1",
            "UserID": "root",
            "Password": "pmi2017",
            "Status": "0"
        }
    ]
};

const initState = {
    ciscoSwitches: allCiscoSwitches.aaData
};

export default initState;
