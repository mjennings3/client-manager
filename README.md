# client-manager
Personal project for client management for a small service business.

This website's intended user is a service-based small business owner.
It is used to manage and keep data regarding the following:
 - customers
 - contracts
 - referrals
 - payments

These data points are stored in a MongoDB database.

~~~ Services ~~~

Customer addresses are stored in the database as well, and
an embedding of Google Streetview allows for quick viewing
of the address.

Email and phone information can be stored, and email/text notifications
can be sent to clients as per a schedule determined by the user. This
functionality is facilitated by mailgen and twilio, respectively.

PDF contracts can be generated using customer information. This will
be facilitated by PDFKit.

Data points:
- customers
  - address
  - contracts
  - payments
  - referrals (using 'referred by')
  - phone
  - email


TO DO:
 - enable DELETE such that the desired item is deleted
 - enable DELETE for just-added items without refresh (no access to client_id yet because not pulling from database, and it's assigned upon entry) (get last id of table?)
 - optimize removeFromClients in App.jsx (binary search?)
