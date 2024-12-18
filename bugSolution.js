```javascript
// Correct use of $inc operator
db.collection('myCollection').updateOne({ _id: ObjectId('...') }, { $inc: { field: 1 } });
// Or to decrement
db.collection('myCollection').updateOne({ _id: ObjectId('...') }, { $inc: { field: -1 } });
```