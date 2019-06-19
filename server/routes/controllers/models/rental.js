const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const rentalSchema = new Schema({
    lastLogin: { type: Date, default: Date.now },
    createdAt: { type: Date, default: Date.now },
    rating: Number,

    category: String,
    rentalname: { type: String, required: true, max: [128, 'Too long, max is 128 characters.']},
    age: Number,
    height: Number,
    bust: { type: String, required: true },
    weight: { type: String, required: true },
    image: { type: String, required: true },
    image2: { type: String, required: true },
    gallery: { type: String, required: true },
    gallery2: { type: String, required: true },
    gallery3: { type: String, required: true },
    gallery4: { type: String, required: true },
    gallery5: { type: String, required: true },
    video: { type: String },
    province: {type: String, required: true, lowercase: true },
    nearStation: {type: String, required: true, lowercase: true },
    hourlyPrice: Number,
    description: { type: String, required: true, lowercase: true },
    headlinedescription1: { type: String, required: true, lowercase: true },
    headlinedescription2: { type: String, required: true, lowercase: true },
    shared: Boolean,

    businesshour_enabled_sun: { type: Boolean, default: true },
    businesshour_startTime_sun: { hour: {type: Number, default: 10}, minute: {type: Number, default: 0}, second: {type: Number, default: 0} },
    businesshour_endTime_sun: { hour: {type: Number, default: 19}, minute: {type: Number, default: 0}, second: {type: Number, default: 0} },
    businesshour_enabled_mon: { type: Boolean, default: true },
    businesshour_startTime_mon: { hour: {type: Number, default: 10}, minute: {type: Number, default: 0}, second: {type: Number, default: 0} },
    businesshour_endTime_mon: { hour: {type: Number, default: 19}, minute: {type: Number, default: 0}, second: {type: Number, default: 0} },
    businesshour_enabled_tue: { type: Boolean, default: true },
    businesshour_startTime_tue: { hour: {type: Number, default: 10}, minute: {type: Number, default: 0}, second: {type: Number, default: 0} },
    businesshour_endTime_tue: { hour: {type: Number, default: 19}, minute: {type: Number, default: 0}, second: {type: Number, default: 0} },
    businesshour_enabled_wed: { type: Boolean, default: true },
    businesshour_startTime_wed: { hour: {type: Number, default: 10}, minute: {type: Number, default: 0}, second: {type: Number, default: 0} },
    businesshour_endTime_wed: { hour: {type: Number, default: 19}, minute: {type: Number, default: 0}, second: {type: Number, default: 0} },
    businesshour_enabled_thu: { type: Boolean, default: true },
    businesshour_startTime_thu: { hour: {type: Number, default: 10}, minute: {type: Number, default: 0}, second: {type: Number, default: 0} },
    businesshour_endTime_thu: { hour: {type: Number, default: 19}, minute: {type: Number, default: 0}, second: {type: Number, default: 0} },
    businesshour_enabled_fri: { type: Boolean, default: true },
    businesshour_startTime_fri: { hour: {type: Number, default: 10}, minute: {type: Number, default: 0}, second: {type: Number, default: 0} },
    businesshour_endTime_fri: { hour: {type: Number, default: 19}, minute: {type: Number, default: 0}, second: {type: Number, default: 0} },
    businesshour_enabled_sat: { type: Boolean, default: true },
    businesshour_startTime_sat: { hour: {type: Number, default: 10}, minute: {type: Number, default: 0}, second: {type: Number, default: 0} },
    businesshour_endTime_sat: { hour: {type: Number, default: 19}, minute: {type: Number, default: 0}, second: {type: Number, default: 0} },

    user: { type: Schema.Types.ObjectId, ref: "User" },
    bookings: [{ type: Schema.Types.ObjectId, ref: "Booking"}]
    
});

module.exports = mongoose.model('Rental', rentalSchema);
