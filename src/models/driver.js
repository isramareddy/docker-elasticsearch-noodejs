const mongoose = require('mongoose');
const mongoosastic = require('mongoosastic');

const { Schema } = mongoose;


const driverSchema = new Schema({
    full_name: {
        type: String,
        default: '',
       // es_indexed:true
    },
    email: {
        type: String,
        default: ''
    },
    phone: {
        type: String,
        default: ''
    }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

driverSchema.plugin(mongoosastic, {
    hosts: [
        'localhost:9200',
    ]
});

const Driver = mongoose.model('Driver', driverSchema);


module.exports = Driver;
