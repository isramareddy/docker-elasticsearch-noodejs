import mongoose from 'mongoose';
import ES from 'mongoosastic';

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
        default: '',
    }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

driverSchema.plugin(ES, {
    hosts: [
        'localhost:9200',
    ]
});

export { driverSchema };
export default mongoose.model('Driver', driverSchema);


