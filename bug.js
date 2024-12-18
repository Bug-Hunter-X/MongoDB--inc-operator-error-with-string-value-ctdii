```javascript
// Incorrect use of $inc operator in MongoDB update
db.collection('myCollection').updateOne({ _id: ObjectId('...') }, { $inc: { field: 'value' } });
```