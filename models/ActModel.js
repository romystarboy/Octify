import mongoose from 'mongoose';

const ActSchema = mongoose.Schema({
    Nomdefamilledelenfant: {
        type: String,
        required: true,
        unique: true
    },
    Prenomdelenfant: {
        type: String,
        required: true,
        unique: true
    },
    Le: {
        type: String,
        default: "Cameroon"
    },
    Estnéà: {
        type: String,
        default: "Cameroon"
    },
    Nomdefamilledelenfant: {
        type: String,

    },
    Prenomdelenfant: {
        type: String,
        required: true,
    },
    DeSexe: {
        type: Boolean,
        default: false
    },
    De: {
        type: Boolean,
        default: false
    },
    Néà: {
        type: String,
        required: true,
        unique: true
    },
    Le: {
        type: String,
        required: true,
        unique: true
    },
    Domiciliéà: {
        type: String,
        default: "Cameroon"
    },
    Profession: {
        type: String,
        default: "Cameroon"
    },
    Etde: {
        type: String,

    },
    Néà: {
        type: String,
        required: true,
    },
    Le: {
        type: Boolean,
        default: false
    },
    Domiciliéà: {
        type: Boolean,
        default: false
    },
    Profession: {
        type: String,
        required: true,
        unique: true
    },
    Dresséle: {
        type: String,
        default: "Cameroon"
    },
    Surladeclarationnde: {
        type: String,
        default: "Cameroon"
    },
    Parnous: {
        type: String,

    },
    Delétatcivilde: {
        type: String,
        required: true,
    },
    Assistéde: {
        type: Boolean,
        default: false
    },
}, {
    timestamps: true
});


export default mongoose.model('Act', ActSchema);