const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
const HeadlineSchema = new Schema({
    // `title` is required and of type String
    title: {
        type: String,
        required: true
    },
    pub_date: {
        type: Date,
        required: true
    },
    // `link` is required and of type String
    link: {
        type: String,
        required: true
    },

    date_added: { 
        type: Date, 
        default: Date.now 
    }
});

// This creates our model from the above schema, using mongoose's model method
const Headline = mongoose.model("Headline", HeadlineSchema);

// Export the Headline model
module.exports = Headline;
