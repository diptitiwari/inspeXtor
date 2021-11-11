export const faq = [
         {
           title: "How to Log in?",
           value:
             "You can Log in to INSPEXTOR by following the steps:Open any Web-Browser to start.Type INSPEXTOR IP in the search Bar.Ex: http://192.168.1.31/inspextor/index.phpEnter the following default Admin username/password."
         },
         {
           title: "How to reset password?",
           value:
             "To reset password click forgot password and type you email to get password reset sent to your email."
         },
         {
           title:
             "How to view the total consumption of all devices based on cluster (KWH, Temperature Opccupancy)?",
           value:
             "To view kWh, temperature and occupancy select the type of chart from the dropdown menu then select time span."
         },
         {
           title: "How to View Event Timeline?",
           value:
             "•	Select system or cluster to chart •	Select parameter to view •	Select the time span"
         },
         {
           title: "Where can I check Alerts notifications?",
           value: 'To restore system policy click "yes" Button'
         },
         {
           title: "How to view port destination?",
           value:
             "To view port destination Hover over the port to see where the fixture is placed according the pull schedule displayed below"
         },
         {
           title: "How to view power consumed by cisco switch or port ?",
           value: "•	select the switch desired . Hover over port desired."
         },
         {
           title: "How to setup up an alert?",
           value:
             "•	Click the “Alert Definition” menu from the dashboard left panel.•	Inside the Alert Definition window, click the “Add new alert” button, A new pop up window will open up, where you can select device, alert severity, parameter type, alert condition, alert condition value, alert description, users to be notified."
         },
         {
           title:
             "How to configure SMTP (Simple Mail Transfer Protocol) settings?",
           value:
             "You can configure SMTP settings by following the steps:•	Click the “Alert Definition” menu from the dashboard left panel.•	Click the “SMTP Configure” button.•	In the new SMTP Configuration pop up window, enter the server information such as SMTP server details, SMTP server port number•	After providing the server information, user need to authenticate “from email address and password” by clicking the “Test Connection” button.•	User can also enable Email Alert Notification."
         },
         {
           title: "How to assign/ edit/ delete fixture to a cluster?",
           value:
             "a)	To assign fixtures to cluster Enter Name of cluster in the textbox then click “Enter”.b)	To add fixtures to a cluster. Drag and drop fixture to desired cluster.c)	To Rename cluster click on kjjs  against cluster name .d)	To Rename Fixture click on          against fixture name.e)	To delete Cluster click on        against cluster name.f)	To delete fixture click on       against fixture name. NOTE: any fixture deleted off cluster will go to unsigned cluster until its reassigned again."
         },
         {
           title: "How to create / Edit or delete policy?",
           value:
             'To create policy click on policy menu from menu bar then fill up the form and click "save".To edit policy click on policy from left tree view menu then edit params and click "save".To delete policy  click on policy from left tree view menu then click "Remove".Note: removing policy from inspeXtor does not mean its removed from policies in the Fixtures.'
         },
         {
           title: "How to create, delete or modify Scenes attached to fixtures?",
           value:
             "a)	To add scene events from a wall switch to a cluster fill the scene form and click “save” button.b)	To remove scene event click on associated cluster then click on event from the right of the screen and click “remove” button."
         },
         {
           title: "How to Merge/ delete policy(s) to a cluster?",
           value:
             "a)	To link policy with cluster click on cluster from the left tree menu then click on policy(s) from the right then click “link ” button How to remove linked policy(s) from  a cluster?b)	To remove linked policy from cluster click policy you want to remove and click OK after confirmation message NOTE:  you can’t remove any active policy until it expires.  "
         },
         {
           title:
             "How to set map picture for cluster? How to control Fixtures in the cluster or individually ?",
           value:
             "a)	   To select image map click “Select map” to upload image the click “save” button.b)	To assign location to fixture drag and drop fixture to location desired then click “save”.c)	   To control cluster click on buttons below image. To control individual fixtures right click on fixture then click command desired."
         },
         {
           title: "How to Upload Pull Schedule?",
           value:
            "•	Click button to upload pull schedule only excel format accepted from Commissioning tab under  Maintenance"
         },
         {
           title: "How to restore system policy to default",
           value: 'To restore system policy click "yes" Button'
         }
];

export const tFields = [{
  key: 'Name',
  label: 'Name',
  sortable: true,
},
  {
    key: "IPAddress",
    label: 'IP Address',
    sortable: true,
  },
  {
    key: 'UserID',
    label: 'Username',
    sortable: true
  },
  {
    key: 'Status',
    label: 'Active Status',
    sortable: true
  },
  {
    key: 'action',
  },
];

export const tPages = [
  1,
  2,
  5,
  10,
  20,
  30,
  40,
  50
];
